---
layout: docs
title: Reports Panel
permalink: /documentation/user-interface/reports-panel.html
---
# Reports Panel

The **Reports** panel shows test run progress and results.

IMAGE

Each row in the **Reports** panel corresponds to a single test run. A test run can consist of an individual test, all tests from a particular directory or fixture, or an arbitrary group of tests. For more information, see [Running Tests](../working-with-testcafe-studio/running-tests.md).

A row in the **Reports** panel indicates:

* the test run name,
* a progress bar that shows test run progress,
* the test run start date and time,
* the test run duration,
* a counter that shows the total number of tests and the number of passed and failed tests.

The progress bar and counter color indicates test run outcome.

* green - all tests passed;
* red - some test failed;
* gray - undefined (for instance, a test run was interrupted).

## Viewing a Detailed Report

To view a complete test run report, click the **Reports** panel row. This opens the **Report** view that presents details on the test run. To learn mode, see [Report View](report-view.md).

## Stopping Test Run

To stop a test run, use the IMAGE **Stop** button displayed when a test run is in progress.

IMAGE

## Clearing Results

To remove all test run results from the **Reports** panel, use the IMAGE **Clear reports** button in the panel header.

IMAGE

Note that this operation cannot be undone.

## Hiding Reports Panel

To hide the **Reports** panel, use the IMAGE button.

IMAGE

This hides the panel content leaving only the header visible. You can bring the panel back later using the IMAGE button.