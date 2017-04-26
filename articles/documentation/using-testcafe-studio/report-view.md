---
layout: docs
title: Report View
permalink: /documentation/using-testcafe-studio/report-view.html
---
# Report View

Report View shows a test run report with information about passed and failed tests.

IMAGE

## Report Formats

The Report View can display test run reports in different formats. To select a format, use the drop-down box in the view's header.

IMAGE

* Grid

    IMAGE

* List

    IMAGE

* Minimal

    IMAGE

* Spec

    IMAGE

* JSON

    IMAGE

* XUnit

    IMAGE

## Grid Format

When the Grid format is selected, the report shows test results in a table where each row corresponds to an individual test.

IMAGE

This table has the following columns:

* **status** - The status of the test run: passed or failed.
* **test** - The name of the test.
* **fixture** - The name of the fixture to which the test belongs.
* **duration** - The time spent on test execution.
* **screenshots** - If the test has the Screenshot action, this column refers to a collection of screenshots captured during the test run. To view the captured images, click the IMAGE icon.
* **errors** - The number of errors occurred during the test run.

When you click the IMAGE icon in the 'screenshots' column, the screenshot collection is displayed in a new window. The images are grouped by test steps. Each group contains screenshots for all workers engaged in the test.

IMAGE

### Failure Details

Grid rows that correspond to failed tests can be expanded to show the details about the cause of the failure. These details include test code where the failure occurred, the expected and actual values for assertion fails, the error message for errors. If the test run was configured to take a screenshot when a test fails, the screenshot is also displayed in this section.

IMAGE

### Sorting the Results

By default, test results are sorted by the status column. You can sort the results by any column by clicking the column header. The sort icon IMAGE will appear next to the column caption. The image below demonstrates sorting test results by the duration column.

IMAGE

### Grouping the Results

You can group the test results by a specific column. To do this, drag the column header to *Drag a column header here to group by that column*.

IMAGE

The records with identical column values will be arranged into groups. In the image below, the results are grouped against the Fixture column. To ungroup results, drag the column header back to the grid view.

IMAGE

### Searching in Results

You can search through the results by using the search box with the IMAGE icon. When you type a search text into this box, the grid’s content is filtered according to what you have typed. For example, if you type “dragging”, the Result tab will show only the test results that contain that word. This makes finding report entries faster.

IMAGE

### Exporting a Report

To export a report, use the IMAGE button. If the grid format is selected, the report will be exported to JSON. For all other formats, the report will be saved to a text file as is.

### Rerunning Tests

You can repeat all tests in the task by using the IMAGE button. If the report contains failed tests, you can rerun them separately with the IMAGE button.

### Removing a Report

To remove a report, use the IMAGE button.
