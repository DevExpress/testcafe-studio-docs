---
layout: docs
title: Reports Panel
permalink: /documentation/user-interface/reports-panel.html
---
# Reports Panel

The **Reports** panel shows a test run's progress and result.

![Reports Panel](../../images/guides/reports-panel.png)

Each row in the **Reports** panel corresponds to a single test run. A test run can consist of an individual test, all tests from a particular directory or fixture, or a group of tests from different fixtures. Refer to [Run Tests](../guides/run-tests.md) for more information.

A row in the **Reports** panel indicates:

* the test run's name,
* a progress bar that shows the test run's progress,
* the test run's start date and time,
* the test run's duration,
* a counter that shows the total number of tests and the number of passed and failed tests.

The progress bar and counter color indicates a test run's outcome:

* green - all tests passed;
* red - some test failed;
* gray - undefined (for instance, a test run was interrupted).

## View a Detailed Report

Click a **Reports** panel row to view a completed test run's report. This opens the **Report** view that displays the test run's details. Refer to [Report View](report-view.md) for more information.

## Stop Test Run

Click the ![Stop Test](../../images/user-interface/reports-panel/stop-task-icon.svg) **Stop** button to stop a test run. This button is only displayed when a test run is in progress.

## Clear Results

Click the ![Clear Reports](../../images/user-interface/reports-panel/clear-reports-icon.svg) **Clear reports** button in the panel header to remove all the test run results from the **Reports** panel.

Note that this operation cannot be undone.

## Hide Reports Panel

Use the ![Collapse Panel](../../images/user-interface/reports-panel/collapse-panel-down-icon.svg) **Collapse Panel** button to hide the **Reports** panel.

This hides only the panel content. You can use the ![Expand Panel](../../images/user-interface/reports-panel/expand-panel-up-icon.svg) **Expand Panel** button to display the panel again.
