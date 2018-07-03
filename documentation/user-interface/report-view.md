---
layout: docs
title: Report View
permalink: /documentation/user-interface/report-view.html
---
# Report View

The **Report** view displays a detailed report about a test run. It allows you to view the results in different formats, analyze them, restart failed tests, and export the report to a file.

![Report View](../../images/user-interface/report-view/report-view.png)

* [Analyze Test Results](#analyze-test-results)
  * [Work with a Grid](#work-with-a-grid)
    * [Examine Failed Tests](#examine-failed-tests)
    * [Sort Data](#sort-data)
    * [Search for Tests](#search-for-tests)
    * [Group Data Records](#group-data-records)
* [Rerun Tests](#rerun-tests)
* [Export the Report](#export-the-report)
* [Remove the Report](#remove-the-report)
* [Get More Report Formats](#get-more-report-formats)

## Analyze Test Results

The **Report** view can display data in different formats. You can use the report header's drop-down list to select a format.

![Drop-Down Format List](../../images/user-interface/report-view/drop-down-format-list.png)

TestCafe Studio provides the following report formats:

* Grid view
* JSON
* xUnit
* List
* Minimal
* Spec

See [Get More Report Formats](#get-more-report-formats) for information on how to add more report formats.

You can select the default format in the [run configuration](run-configuration-dialog.md) settings.

### Work with a Grid

The grid view displays test run results in the tabular form.

![Grid View](../../images/user-interface/report-view/grid-view.png)

You can click a test or fixture name to navigate to this test or fixture.

Click the ![Screenshot Icon](../../images/user-interface/report-view/screenshot-icon.svg) button in the **Screenshots** column to see screenshots taken with the [Take Screenshot](../guides/record-tests/test-actions/browser-actions.md#take-screenshot) action during the test run.

![Screenshots Window](../../images/user-interface/report-view/screenshots-window.png)

#### Examine Failed Tests

An arrow is displayed near a failed test's status. This arrow allows you to expand the grid row and see details about this failure.

![Failed Test](../../images/user-interface/report-view/failed-test.png)

For [recorded tests](../guides/organize-tests.md#recorded-tests-files), the detail view displays a link to a test action that caused the failure. Click this link to navigate to the test file. The failed action is automatically expanded and displays the error message.

![Test Editor with Failed Action](../../images/user-interface/report-view/test-editor-failed.png)

For [coded tests](../guides/organize-tests.md#coded-tests-files), the report shows a place in code where the failure occurred and the call stack.

![Failed Coded Test](../../images/user-interface/report-view/failed-coded-test.png)

#### Sort Data

Click the column header to sort tests by a column. To toggle sort order, click the header one more time.

#### Search for Tests

The search bar in the grid header allows you to search for a test by its name or a fixture name.

![Searching for Tests](../../images/user-interface/report-view/searching-for-test.png)

You can also search for a failed test by the error message, callstack or call site.

#### Group Data Records

You can drag a column header and drop it onto the grid's header to group grid rows by that column.
The grid creates a row group for each value in the grouped column.

![Grid Row Group](../../images/user-interface/report-view/grid-row-group.png)

You can group by multiple columns. Drag several column headers to the grid header to create nested groups.

![Nested Groups](../../images/user-interface/report-view/nested-groups.png)

## Rerun Tests

You can rerun tests from the **Report** view. To rerun all tests in the test run, use the ![Run All Tests](../../images/user-interface/report-view/run-icon.svg) **Restart all tests** button. If there are failed tests, you can use the ![Run Failed Tests Icon](../../images/user-interface/report-view/run-failed-tests-icon.svg) **Restart failed tests** button to rerun them separately.

## Export the Report

TestCafe Studio allows you to export a report to an archive file. This archive includes the serialized report in the selected format (JSON if grid view is selected) and screenshots taken during the test run.

Use the ![Export Report Icon](../../images/user-interface/report-view/export-report-icon.svg) **Export report** button to export a report.

## Remove the Report

Click the ![Remove Report Icon](../../images/user-interface/report-view/remove-icon.svg) **Remove report** button in the grid view header to delete a test run report.

Note that this action cannot be undone.

## Get More Report Formats

You can install [TestCafe reporter plugins](https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/reporters.html) to add more report formats to TestCafe Studio.

Use the following console command to download and install plugins from [npm](https://www.npmjs.com/):

```sh
npm install -g <reporter-plugin-name>
```

Reporter plugins are npm packages. The reporter package name consists of two parts - the `testcafe-reporter-` prefix and the reporter's name itself; for example,  `testcafe-reporter-list`.

You can search for more reporter packages on npm: [https://www.npmjs.com/search?q=testcafe-reporter](https://www.npmjs.com/search?q=testcafe-reporter).

TestCafe Studio automatically detects reporter plugins on the local machine and adds them to the **Report** view's drop-down list.
