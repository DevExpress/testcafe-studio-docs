var gulp                 = require('gulp');
var git                  = require('gulp-git');
var globby               = require('globby');
var rename               = require('gulp-rename');
var del                  = require('del');
var fs                   = require('fs');
var opn                  = require('opn');
var connect              = require('connect');
var spawn                = require('cross-spawn');
var serveStatic          = require('serve-static');
var Promise              = require('pinkie');
var markdownlint         = require('markdownlint');
var prompt               = require('gulp-prompt');
var runSequence          = require('run-sequence');
var yaml                 = require('js-yaml');

var websiteServer = null;

//Documentation
gulp.task('generate-docs-readme', function () {
    function generateItem (name, url, level) {
        return ' '.repeat(level * 2) + '* [' + name + '](' + url.replace('/documentation', '') + ')\n';
    }

    function generateDirectory (tocItems, level) {
        var res = '';

        tocItems.forEach(function (item) {
            res += generateItem(item.name ? item.name : item.url, item.url, level);

            if (item.content)
                res += generateDirectory(item.content, level + 1);
        });

        return res;
    }

    function generateReadme (toc) {
        var tocList = generateDirectory(toc, 0);

        return '# Documentation\n\n> This is a development version of the documentation. ' +
               'The functionality described here may not be included in the current release version. ' +
               'Unreleased functionality may change or be dropped before the next release. ' +
               'Documentation for the release version is available at the [TestCafe Studio website](https://testcafe.devexpress.com/).\n\n' +
               tocList;
    }

    var toc    = yaml.safeLoad(fs.readFileSync('website/nav/nav-menu.yml', 'utf8'));
    var readme = generateReadme(toc);

    fs.writeFileSync('documentation/README.md', readme);
});

gulp.task('lint-docs', function () {
    function lintFiles (files, config) {
        return new Promise(function (resolve, reject) {
            markdownlint({ files: files, config: config }, function (err, result) {
                var lintErr = err || result && result.toString();

                if (lintErr)
                    reject(lintErr);
                else
                    resolve();
            });
        });
    }

    var lintDocs = globby([
        'documentation/**/*.md'
    ]).then(function (files) {
        return lintFiles(files, require('./.md-lint/docs.json'));
    });

    var lintReadme = lintFiles('README.md', require('./.md-lint/readme.json'));

    return Promise.all([lintDocs, lintReadme]);
});

gulp.task('clean-website', function () {
    return del('site');
});

gulp.task('put-in-assets', ['clean-website'], function () {
    return gulp
        .src('website/**/*')
        .pipe(gulp.dest('site/src'));
});

gulp.task('put-in-articles', ['clean-website'], function () {
    return gulp
        .src(['documentation/**/*'])
        .pipe(gulp.dest('site/src'));
});

gulp.task('put-in-images', ['clean-website'], function () {
    return gulp
        .src(['images/**/*'])
        .pipe(gulp.dest('site/src/images'));
});

gulp.task('put-in-navigation', ['clean-website'], function () {
    return gulp
        .src('website/nav/**/*')
        .pipe(gulp.dest('site/src/_data'));
});

gulp.task('put-in-tweets', ['clean-website'], function () {
    return gulp
        .src('website/tweets/**/*')
        .pipe(gulp.dest('site/src/_data'));
});

gulp.task('prepare-website', ['put-in-assets', 'put-in-articles', 'put-in-navigation', 'put-in-images', 'put-in-tweets', 'lint-docs']);

function buildWebsite (mode, cb) {
    var options = mode ? { stdio: 'inherit', env: { JEKYLL_ENV: mode } } : { stdio: 'inherit' };

    spawn('jekyll', ['build', '--source', 'site/src/', '--destination', 'site/deploy'], options)
        .on('exit', cb);
}

// NOTE: we have three website build configurations.
//
// * production - used when the website is built for publishing. Gulp task 'build-website-production'.
// * development - used when the website is built for local deployment. Gulp task 'build-website-development'.
// * testing - used when the website is built for testing. Gulp task 'build-website-testing'.
//
// This is how they affect the website.
//
// * Blog comments.
//   - Do not appear in testing mode.
//   - In development mode, comments from an internal 'staging' thread are displayed.
//   - In production mode, public comment threads are displayed.
// * Google Analytics is enabled in production mode only.

gulp.task('build-website-production', ['prepare-website'], function (cb) {
    buildWebsite('production', cb);
});

gulp.task('build-website-development', ['prepare-website'], function (cb) {
    buildWebsite('development', cb);
});

gulp.task('build-website-testing', ['prepare-website'], function (cb) {
    buildWebsite('testing', cb);
});

gulp.task('build-website', ['prepare-website'], function (cb) {
    buildWebsite('', cb);
});

gulp.task('serve-website', function (cb) {
    var app = connect()
        .use('/', serveStatic('site/deploy'));

    websiteServer = app.listen(8080, cb);
});

gulp.task('preview-website', function () {
    return new Promise(function (resolve) {
        runSequence('build-website-development', 'serve-website', resolve);
    })
        .then(function () {
            return opn('http://localhost:8080/');
        });
});

function testWebsite (isTravis) {
    return new Promise(function (resolve) {
        var buildTask = isTravis ? 'build-website' : 'build-website-testing';

        runSequence(buildTask, 'serve-website', resolve);
    })
        .then(function () {
            var WebsiteTester = require('./website/test/test.js');
            var websiteTester = new WebsiteTester();

            return websiteTester.checkLinks();
        })
        .then(function (failed) {
            return new Promise(function (resolve, reject) {
                websiteServer.close(function () {
                    if (failed)
                        reject('Broken links found!');
                    else
                        resolve();
                });
            });
        });
}

gulp.task('test-website', function () {
    return testWebsite(false);
});

gulp.task('test-website-travis', function () {
    return testWebsite(true);
});

gulp.task('publish-website', ['build-website-production'], function () {
    // NOTE: it's accidentally stopped being compatible with node 0.10 without
    // major version bump due to https://github.com/floridoo/gulp-sourcemaps/issues/236,
    // so we require it here.
    var ghpages = require('gulp-gh-pages');

    return gulp
        .src('site/deploy/**/*')
        .pipe(rename(function (filePath) {
            filePath.dirname = filePath.dirname.toLowerCase();

            return filePath;
        }))
        .pipe(prompt.confirm({
            message: 'Are you sure you want to publish the website?',
            default: false
        }))
        .pipe(ghpages());
});