---
layout: docs
title: Report View
permalink: /documentation/user-interface/report-view.html
---
# Report View

The **Report** view displays a detailed report about a test run. It allows you to view the results in different formats, analyze them, restart failed tests, and export the report to a file.

IMAGE

* [Analyzing Test Results](#analyzing-test-results)
  * [Working with a Grid](#working-with-a-grid)
    * [Examining Failed Tests](#examining-failed-tests)
    * [Sorting Data](#sorting-data)
    * [Searching for Tests](#searching-for-tests)
    * [Grouping Data Records](#grouping-data-records)
* [Rerunning Tests](#rerunning-tests)
* [Exporting the Report](#exporting-the-report)
* [Removing the Report](#removing-the-report)
* [Getting More Report Formats](#getting-more-report-formats)

## Analyzing Test Results

The **Report** view can present data in different formats. They include machine-readable formats like JSON or formats that better fit for human examination like a grid view. To select a format, use a drop-down list in the report header.

IMAGE

TestCafe Studio provides the following report formats out of the box:

* Grid view
* JSON
* xUnit
* List
* Minimal
* Spec

You can select the default format in [run configuration](run-configuration-dialog.md) settings.

### Working with a Grid

Grid view is the most powerful report format to study and analyze.

IMAGE

The top of the grid view displays general info about the test run:

* the total number of executed tests, the number of passed and failed tests,
* date and time when the test run was started and when it was completed,
* test run duration,
* names of browsers and operating systems used to run the tests.

The grid displays the following info about each test:

* test status (passed or failed),
* test name,
* fixture name,
* test run duration,
* the number of errors occurred during the test run.

You can click a test or fixture name to navigate to this test or fixture.

To see the screenshots taken during the test run with the [Take Screenshot](../working-with-testcafe-studio/recording-tests/test-actions/browser-actions.md#take-screenshot) action, click the IMAGE button in the **Screenshots** column.

IMAGE

#### Examining Failed Tests

If a test has failed, an arrow is displayed near its status allowing you to expand the grid row and see details about this fail.

IMAGE

The detail view includes the following:

* the error message,
* the browser and operating system name,
* the page screenshot (if the [Take a screenshot if a test fails](run-configurations-dialog.md) option is enabled).

For [recorded tests](../working-with-testcafe-studio/organizing-tests.md#recorded-test-files), the detail view displays a link to a test action that caused the fail. When you follow the link, you are navigated to the test file. The failed action is automatically expanded and the error message is displayed in it.

IMAGE

For [coded tests](../working-with-testcafe-studio/organizing-tests.md#coded-test-files), the report shows a place in code where the fail occurred and the call stack.

IMAGE

#### Sorting Data

To sort tests by a column, click the column header. To toggle sort order, click the header one more time.

IMAGE

#### Searching for Tests

Use the search bar in the grid header to search for a test by its name or a fixture name.

IMAGE

You can also search for a failed test by the error message, callstack or call site.

#### Grouping Data Records

You can drag a column header and drop it onto the grid's header to group grid rows by that column.

The grid creates a group for each value in the grouped column and puts tests with this value inside the group.

IMAGE

You can group by multiple columns by dragging their headers to the grid header. This creates nested groups.

IMAGE

## Rerunning Tests

You can rerun tests from the **Report** view. To rerun all tests in the test run, use the IMAGE button. If there are failed tests, you can rerun them separately using the IMAGE button.

IMAGE

## Exporting the Report

TestCafe Studio allows you to export a report to an archive file. This archive includes the report in the serialized form and screenshots taken during the test run.

To export a report, use the IMAGE button.

IMAGE

## Removing the Report

To delete a test run report, click the IMAGE button in the grid view header.

IMAGE

Note that this action cannot be undone.

## Getting More Report Formats

You can install [TestCafe reporter plugins](https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/reporters.html) to add more report formats to TestCafe Studio.

Download and install these plugins from [npm](https://www.npmjs.com/) using the following console command.

```sh
npm install -g <reporter-plugin-name>
```

Reporter plugins are npm packages. The reporter package name consists of two parts - the `testcafe-reporter-` prefix and the name of a reporter itself; for example,  `testcafe-reporter-list`.

You can search for available reporter packages on npm: [https://www.npmjs.com/search?q=testcafe-reporter](https://www.npmjs.com/search?q=testcafe-reporter).

TestCafe Studio automatically detects reporter plugins installed on the local machine and adds them to the list.