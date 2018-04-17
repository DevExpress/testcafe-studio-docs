---
layout: docs
title: Debugging Tests
permalink: /documentation/working-with-testcafe-studio/debugging-tests
---
# Debugging Tests

This topic provides information about debugging tests and contains the following sections.

* [Debugging Recorded Tests](#debugging-recorded-tests)
  * [Options Useful for Debugging](#options-useful-for-debugging)
* [Debugging Coded Tests](#debugging-coded-tests)

## Debugging Recorded Tests

To debug recorded tests, TestCafe Studio provides the **Debug** action that pauses a test and allows you to debug using the browser's developer tools.

IMAGE

When test execution reaches this action, it pauses so that you can open browser's developer tools and check the web page state, the location of DOM elements, their CSS styles, etc.

The footer displays buttons that allow you to continue test execution or step to the next test action.

IMAGE

### Options Useful for Debugging

TestCafe Studio includes a few features helpful to find the cause of issues in your tests.

#### Screenshots

TestCafe Studio can capture screenshots of a browser window during test runs. Analyzing these screenshots helps save time on debugging and allows you to determine the reason of issues earlier.

There are two ways to take screenshots:

* Use the **Screenshot** action to take a screenshot in a particular place in a test.

    IMAGE

* Turn on the *Take a screenshot if a test fails* option for a desired run configuration in the **Run Configurations** dialog. This option enables TestCafe Studio to take a screenshot when a test fails.

    IMAGE

TestCafe Studio stores the screenshots in a directory specified in the **Run Configurations** dialog and displays them in test reports.

IMAGE

#### Test Execution Speed

TestCafe Studio provides the capability to change test speed. By default, tests are executed at full speed with minimum delays between actions. This makes it hard to identify problems visually when running a test. To slow down the test, use the **Test Execution Speed** action. You can use values from 1 to 0.01.

IMAGE

When tests run slowly, you can monitor test execution more easily and notice when test behavior differs from the one that's expected.

## Debugging Coded Tests

For more information about debugging coded tests, see [Debugging](https://devexpress.github.io/testcafe/documentation/test-api/debugging.htm) in TestCafe documentation.