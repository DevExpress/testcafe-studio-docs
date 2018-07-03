---
layout: docs
title: Run Configurations Dialog
permalink: /documentation/user-interface/run-configurations-dialog.html
---
# Run Configurations Dialog

The **Run Configurations** dialog allows you to create, modify, and delete [run configurations](../guides/run-tests.md#run-configurations).
This dialog opens when you click the ![Settings button](../../images/guides/settings-icon.png) button next to the **Run Configuration** drop-down menu on the main toolbar.

![Run Configurations Dialog](../../images/guides/run-configurations-dialog.png)

The dialog's left panel lists the available run configurations. When you select a configuration, the dialog's right section displays its settings organized into several categories:

* [General](#general)
* [Browsers](#browsers)
* [Review Fails and Debug](#review-fails-and-debug)
* [Advanced Options](#advanced-options)

## General

Setting | Description
------- | -------------
*Name* | The configuration's name. It is displayed in the **Run Configurations** drop-down menu on the main toolbar.
*Default report view* | The test report's format used in the [Report view](report-view.md). The available formats are *grid*, *json*, *list*, *minimal*, *spec*, *xunit*.

## Browsers

This section lists locally installed browsers TestCafe Studio detects. You can select on which browsers you want to run tests.

You can also select the **Remote browser** checkbox to run tests on remote machines. See [Running Tests in Remote Browsers](../guides/run-tests.md#running-tests-in-remote-browsers).

Tests can run in multiple browsers simultaneously. You can use the **Select All** and **Deselect All** buttons to select or remove selection of all the browsers.

## Review Fails and Debug

Setting                                         | Description
----------------------------------------------- | -----------
*Fail if a JavaScript error occurs on a page* | Specifies whether the test is considered failed if a JavaScript error occurs on the tested page. If unchecked, JavaScript errors are ignored.
*Take a screenshot if a test fails* | Specifies whether TestCafe Studio takes the tested page's screenshot when a test fails.
*Debug mode* | Activates the [debug mode](../guides/debug-tests.md#debugging-recorded-tests).
*Quarantine mode* | Enables the *quarantine mode* for tests that fail. In this mode, a failed test is executed several times. The test result depends on the outcome (passed or failed) that occurs most often. That is, if the test fails on most attempts, the result is failed. If the test result differs between test runs, the test is marked as unstable.
*Pause the test when it fails* | Specifies whether to activate the [debug mode](../guides/debug-tests.md#debugging-recorded-tests) when a test fails.

## Advanced Options

Setting | Description
-------- | -------------
*Reports path* | The directory's path where test run reports are saved.
*Screenshots path* | The directory's path where screenshots captured during test execution are saved.
*Selector timeout* | Specifies the time (in milliseconds) [element selectors](../guides/record-tests/test-actions/on-page-actions/action-parameters.md#element-selector) can obtain target DOM elements.
*Assertion timeout* | Specifies the time (in milliseconds) an [assertion](../guides/record-tests/test-actions/assertions.md) can take to pass before the test fails.
*Speed* | Specifies the [test speed](../guides/debug-tests.md#test-speed) from 0.01 to 1.
*Concurrency* | Specifies the number of browser instances to execute tests concurrently. See [Concurrent Test Execution](../guides/run-tests.md#concurrent-test-execution).

## Managing Configurations

To create a new run configuration, click **Add**. TestCafe Studio adds a new configuration to the configuration list.

To edit a run configuration, select it in the dialog's left panel and modify its settings. Next, click **Apply** to apply the changes without leaving the dialog, or **OK** to apply the changes and close the dialog.

To remove a run configuration, click the **Remove** button.
