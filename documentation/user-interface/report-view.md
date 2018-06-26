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

The **Report** view can present data in different formats. They include machine-readable formats like JSON or formats that better fit for human examination like a grid view. Use a drop-down list in the report header to select a format.

IMAGE

TestCafe Studio provides the following report formats out of the box:

* Grid view
* JSON
* xUnit
* List
* Minimal
* Spec

See [Getting More Report Formats](#getting-more-report-formats) to learn how to make more report formats available.

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

Click the IMAGE button in the **Screenshots** column to see screenshots taken with the [Take Screenshot](../working-with-testcafe-studio/recording-tests/test-actions/browser-actions.md#take-screenshot) action during the test run.

IMAGE

#### Examining Failed Tests

If a test has failed, an arrow is displayed near its status. This arrow allows you to expand the grid row and see details about this fail.

IMAGE

The detail view includes the following:

* the error message,
* the browser and operating system name,
* the page screenshot (if the [Take a screenshot if a test fails](run-configurations-dialog.md) option is enabled).

For [recorded tests](../working-with-testcafe-studio/organizing-tests.md#recorded-tests-files), the detail view displays a link to a test action that caused the fail. Click this link to navigate to the test file. The failed action will be automatically expanded and the error message will be displayed in it.

IMAGE

For [coded tests](../working-with-testcafe-studio/organizing-tests.md#coded-tests-files), the report shows a place in code where the fail occurred and the call stack.

IMAGE

#### Sorting Data

Click the column header to sort tests by a column. To toggle sort order, click the header one more time.

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

You can rerun tests from the **Report** view. To rerun all tests in the test run, use the IMAGE button. If there are failed tests, you can use the IMAGE button to rerun them separately.

IMAGE

## Exporting the Report

TestCafe Studio allows you to export a report to an archive file. This archive includes the serialized report in the selected format (JSON if the grid view is selected) and screenshots taken during the test run.

Use the IMAGE button to export a report.

IMAGE

## Removing the Report

Click the IMAGE button in the grid view header to delete a test run report.

IMAGE

Note that this action cannot be undone.

## Getting More Report Formats

You can install [TestCafe reporter plugins](https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/reporters.html) to add more report formats to TestCafe Studio.

Use the following console command to download and install plugins from [npm](https://www.npmjs.com/).

```sh
npm install -g <reporter-plugin-name>
```

Reporter plugins are npm packages. The reporter package name consists of two parts - the `testcafe-reporter-` prefix and the reporter's name itself; for example,  `testcafe-reporter-list`.

You can search for available reporter packages on npm: [https://www.npmjs.com/search?q=testcafe-reporter](https://www.npmjs.com/search?q=testcafe-reporter).

TestCafe Studio automatically detects reporter plugins installed on the local machine and adds them to the drop-down list in the **Report** view.