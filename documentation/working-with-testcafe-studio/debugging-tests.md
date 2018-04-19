---
layout: docs
title: Debugging Tests
permalink: /documentation/working-with-testcafe-studio/debugging-tests
---
# Debugging Tests

This topic provides information about debugging tests and contains the following sections.

* [Debugging Recorded Tests](#debugging-recorded-tests)
  * [Features Useful for Debugging](#features-useful-for-debugging)
* [Debugging Coded Tests](#debugging-coded-tests)

## Debugging Recorded Tests

To help you understand what is happening in your web page during test run, TestCafe Studio provides a debug mode. In this mode, TestCafe Studio pauses running a test and allows you to debug the tested page using the browser's developer tools: check the web page state, the location of DOM elements, their CSS styles, and so on.

You can activate the debug mode in one of the following ways:

* Add the **Debug** action to a particular place in a test. When test execution reaches this action, it pauses.
* Enable the **Debug mode** option for a run configuration in the **Run Configurations** dialog. In this case, test run is paused before the first test action.
* Enable the **Pause the test when it fails** option for a run configuration in the **Run Configurations** dialog. TestCafe Studio automatically enters the debug mode when a test fails.

IMAGE

Once the test run is paused, you can open browser's developer tools and debug.

During debugging, the browser window displays the footer with the following buttons:

* The **Unlock Page** button unlocks the tested page and allows you to interact with its elements.
* The **Resume** button continues test execution.
* The **Next Action** button allows you to step to the next test action.

IMAGE

### Features Useful for Debugging

TestCafe Studio includes a few features helpful to find the cause of issues in your tests.

#### Screenshots

TestCafe Studio can capture screenshots of a browser window during test runs. Analyzing these screenshots helps save time on debugging and allows you to determine the reason of issues earlier.

There are two ways to take screenshots.

* Use the **Screenshot** action to take a screenshot in a particular place in a test.

    IMAGE

* Turn on the *Take a screenshot if a test fails* option for a desired run configuration in the **Run Configurations** dialog. This option enables TestCafe Studio to take a screenshot when a test fails.

    IMAGE

TestCafe Studio stores the screenshots in a directory specified in the **Run Configurations** dialog and displays them in test reports.

IMAGE

#### Test Speed

TestCafe Studio provides the capability to change test speed. By default, tests are executed at full speed with minimum delays between actions. This makes it hard to identify problems visually when running a test. You can slow down the test in one of the following ways.

* Use the **Set Test Speed** action. The action parameter allows you to specify test speed from 1 to 0.01.

    IMAGE

* Change the **Speed** option's value in the **Run Configurations** dialog.

When tests run slowly, you can monitor test execution more easily and notice when test behavior differs from the one that's expected.

## Debugging Coded Tests

For more information about debugging coded tests, see [Debugging](https://devexpress.github.io/testcafe/documentation/test-api/debugging.html) in TestCafe documentation.