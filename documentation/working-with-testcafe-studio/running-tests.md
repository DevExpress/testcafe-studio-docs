---
layout: docs
title: Running Tests
permalink: /documentation/working-with-testcafe-studio/running-tests
---
# Running Tests

This topic describes how to execute tests and contains the following sections.

* [Run Configurations](#run-configurations)
* [Starting and Stopping Tests](#starting-and-stopping-tests)
* [Running Tests in Remote Browsers](#running-tests-in-remote-browsers)

## Run Configurations

TestCafe Studio can run tests in all popular browser: desktop, mobile and cloud, the ones with UI or headless. It determines browsers installed on the local computer and automatically creates *run configurations* for them. You can view available configurations in the **Run Configuration** list.

To modify congirations or create a new one, use the **Run Configurations** dialog. For each configuration, you can select one or multiple browsers and specify options that affect test execution.

## Starting and Stopping Tests

> Important! Before running tests, select a desired run configuration in the Run Configuration list.

You can run the entire test directory/subdirectory, a specific fixture, an individual test or a .js test file. To run them, use the IMAGE button. This button is available in the **Test Editor**, **Fixture Editor** and **Explorer** panel.

**To run the entire test directory or subdirectory**, click the **Run all tests** button next to the directory in the Explorer panel.

**To run a fixture**, click the **Run all tests** IMAGE button next to the fixture in the **Explorer** panel or on the **Fixture Editor**'s toolbar.

**To run an individual test**, do any of the following:

* Click the IMAGE **Run test** button on the **Test Editor**'s toolbar.
* Click the IMAGE **Run test** button next to the test in the **Fixture Editor** or in the **Explorer** panel.

**To run a .js test file**, click the **Run test** IMAGE button next to the file in the **Explorer** panel.

After starting a test run, TestCafe Studio launches specified browsers and execute tests in them in parallel. The **Reports** panel displays the test's progress.

**To stop a running test**, click the IMAGE button in the **Reports** panel.

If the *Pause the test when it failes* option is enabled in the used run configuration, TestCafe Studio pauses the test at the moment it fails. To finish the test, click the IMAGE **Finish** button in the browser window.

## Running Tests in Remote Browsers

TestCafe Studio allows you to run tests on any device that has network access to the machine where TestCafe Studio is installed.

To run a test in remote browsers, follow the steps:

1. Create a run configuration for the remote browsers. In the configuration's settings, select the **Remote browser** checkbox and specify the number of remote browsers.
2. Select the configuration in the **Run Configuration** list.
3. Start the test run by clicking the **Run test** button. TestCafe will provide URLs to open in the remote browsers against which you want to test. As you open these URLs, the browser connects to the TestCafe Studio server and starts testing.

IMAGE