---
layout: docs
title: Running Tests
permalink: /documentation/working-with-testcafe-studio/running-tests.html
---
# Running Tests

This topic describes how to execute tests and consists of the following sections:

* [Run Configurations](#run-configurations)
* [Starting and Stopping Tests](#starting-and-stopping-tests)
* [Running Tests in Remote Browsers](#running-tests-in-remote-browsers)
* [Concurrent Test Execution](#concurrent-test-execution)

## Run Configurations

TestCafe Studio can run tests in all desktop and mobile browsers (with or without a UI). It determines which browsers are installed on the local computer and automatically creates *run configurations* for them. You can view available configurations and switch between them in the **Run Configuration** drop-down menu.

![Run Congiruation Menu](../../images/working-with-testcafe-studio/run-configuration-list.png)

To modify configurations or create a new one, click the ![Settings button](../../images/working-with-testcafe-studio/settings-icon.png) button and use the [Run Configurations](../user-interface/run-configurations-dialog.md) dialog. You can select one or multiple browsers and specify options that affect test execution for each configuration.

![Run Configurations Dialog](../../images/working-with-testcafe-studio/run-configurations-dialog.png)

## Starting and Stopping Tests

> Important! Before running tests, select the run configuration from the **Run Configuration** list.

You can run an entire test directory/subdirectory, a specific fixture, an individual test or a coded test file.

**To run the entire test directory or subdirectory**, click the ![Run all tests button](../../images/working-with-testcafe-studio/action-run-icon.png) **Run all tests** button next to the directory in the [Explorer](../user-interface/explorer-panel.md) panel.

**To run a fixture**, click the ![Run all tests button](../../images/working-with-testcafe-studio/action-run-icon.png) **Run all tests** button next to the fixture in the **Explorer** panel or on the [Fixture Editor](../user-interface/fixture-editor.md)'s toolbar.

**To run an individual test**, do any of the following:

* Click the ![Run test button](../../images/working-with-testcafe-studio/action-run-icon.png) **Run test** button on the [Test Editor](../user-interface/test-editor.md)'s toolbar.
* Click the ![Run test button](../../images/working-with-testcafe-studio/action-run-icon.png) **Run test** button next to the test in the **Fixture Editor** or **Explorer** panel.

**To run a coded test's file**, click the ![Run test button](../../images/working-with-testcafe-studio/action-run-icon.png) **Run test** button next to the file in the **Explorer** panel. You can also run test fixtures and individual tests from the **Code Editor** by clicking the ![Run test button](../../images/working-with-testcafe-studio/action-run-icon.png) button.

**To run several tests** from different fixtures and directories, select the tests in the **Explorer** panel using Shift-click, Ctrl-click, or Command-click, then select **Run tests** from the context menu or click the ![The Run tests button](../../images/user-interface/context-menu/run-tests.png) **Run Tests** button next to any selected item.

![Running multiple items](../../images/user-interface/running-multiple-items.png)

After starting a test, TestCafe Studio launches the specified browsers and executes tests in them simultaneously. The [Reports panel](../user-interface/reports-panel.md) displays the tests' progress.

Click the ![Stop recording button](../../images/working-with-testcafe-studio/stop-recording-icon.png) button in the **Reports** panel **to stop the test**.

TestCafe Studio pauses the test when it fails if the *Pause the test when it fails* option is enabled in the run configuration. To finish the test, click the **Finish** button in the browser window.

## Running Tests in Remote Browsers

TestCafe Studio allows you to run tests on any device that has network access to the machine where TestCafe Studio is installed.

Follow the steps below to run a test in remote browsers:

1. Create a run configuration for the remote browsers. In the run configuration's settings, select the **Remote browser** checkbox and specify the number of remote browser instances.

    ![Remote Browser Configuration](../../images/working-with-testcafe-studio/remote-browser-configuration.png)

2. Select the configuration in the **Run Configuration** list.
3. Click the **Run test** button to start the test. TestCafe provides URLs to open in the remote browsers which you want to test. When you open these URLs, the browser connects to the TestCafe Studio server and starts testing.

![Running in Remote Browsers](../../images/working-with-testcafe-studio/running-in-remote-browsers.png)

## Concurrent Test Execution

TestCafe allows you to execute tests concurrently. *Concurrency* is an optional mode that allows you to invoke multiple browser instances. Each test runs in the first available instance.

To enable concurrency and specify the number of browser instances, use the run configuration's **Concurrency** option (see [Advanced Options](../user-interface/run-configurations-dialog.md#advanced-options)).

> TestCafe Studio cannot run concurrent tests in Microsoft Edge. This is because there is no known way to start Edge in a new window and make it open a URL.

You can also use the *Concurrency* option when testing a webpage in multiple browsers.

![Concurrency against multiple browsers](../../images/working-with-testcafe-studio/concurrency-multiple-browsers.png)

In this case, the same tests are run on four Safari and four Firefox instances.

When you run tests on a [remote browser](#running-tests-in-remote-browsers), the number of browser instances should be divided by the concurrency parameter `n`. Otherwise, an exception is thrown.

If you test against multiple remote browsers, open and connect one browser's instances before you connect the next browser.
