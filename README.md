# Documentation for TestCafe Studio

This repository contains documentation for TestCafe Studio and the source code of TestCafe Studio website.

## What is TestCafe Studio?

TestCafe Studio is a cross-platform IDE for end-to-end Web testing. You can create and maintain tests without coding using the built-in Visual Test Recorder.

TestCafe Studio does not require WebDriver, browser plugins or other tools. It works on Windows, macOS and Linux.

The IDE is built on top of the [open-source TestCafe testing framework](https://github.com/DevExpress/testcafe/) and inhertis all its benefits. TestCafe tests do not require manual timeouts as all the waiting is performed automatically. This makes tests more stable and deterministic.

Altogether it provides lightweight, fast and reliable test automation.

## What's in this repo?

### Website

This repository contains the sources of TestCafe Studio website. This static website is built using Jekyll and published on GitHub Pages.

To preview the website locally, you need to [install Ruby](https://www.ruby-lang.org/en/documentation/installation/) with the following gems.

```sh
gem install jekyll htmlentities sanitize redcarpet jekyll-sitemap
```

After that, run a `gulp` task.

```sh
gulp preview-website
```

### Documentation

In the [/articles/documentation](/articles/documentation) directory, you can find the current **development** version of TestCafe Studio documentation. Note that the functionality described here may not be included in the current release version. Unreleased functionality may change or be dropped before the next release.