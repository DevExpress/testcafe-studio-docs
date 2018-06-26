---
layout: docs
title: Getting Started
permalink: /documentation/getting-started/
---
# Getting Started

This Getting Started tutorial describes how to record a test, run it and analyze the results.

This tutorial uses the [TestCafe sample page](http://devexpress.github.io/testcafe/example) to record the test and consists of the following sections:

* [Install TestCafe Studio](#install-testcafe-studio)
* [Record Test Actions](#record-test-actions)
* [View the Recorded Test](#view-the-recorded-test)
* [Add New Actions to the Test](#add-new-actions-to-the-test)
* [Run the Test](#run-the-test)
* [View the Test Results](#view-the-test-results)

## Install TestCafe Studio

You can install TestCafe Studio on MacOS, Windows or Linux. See [Installing TestCafe Studio](../installing-testcafe-studio/README.md) for more information.

## Record Test Actions

First, create a directory to store your tests.
Go to TestCafe Studio, open the **File** menu, click **Open Tests Directory** and navigate to the created directory.
You can view the directory's contents in the **Explorer** panel.

![The Explorer panel](../../images/getting-started/explorer-panel.png)

Next, create a test fixture for the sample webpage tests.
In the **Explorer** panel, click the **Create a New Fixture** button, and in the invoked **New Fixture** dialog, specify the fixture name and the tested page's URL. Click **Create**.

![The New Fixture dialog](../../images/getting-started/new-fixture-dialog.png)

The new fixture is added to the test directory.

To start recording a test, click the **Record a New Test** button in the **Explorer** panel.
TestCafe Studio launches the default browser with the tested site and starts recording your activity on the webpage.

Perform the following actions on the webpage:

* Enter a name in the **Your name** field.
* Check the **Support for testing on remote devices** and **Advanced traffic and markup analysis** checkboxes.
* Click the **Submit** button.

TestCafe Studio adds your actions to the test. You can view the recorded actions in TestCafe Studio at any time.

![Recording the test](../../images/getting-started/recording-the-test.png)

To stop the recording, close the browser window or click ![Stop recording](../../images/getting-started/stop-recording-icon.png) on the toolbar.

## View the Recorded Test

TestCafe Studio displays the recorded test in the **Test Editor**.

![The recorded test](../../images/getting-started/recorded-test.png)

Click an action in the editor to view or change its parameters.
For example, you can change the selector that identifies the action's element by selecting an alternative selector from the list of generated selectors or using your own.

![Choosing the selector](../../images/getting-started/choosing-the-selector.png)

The **Test Editor** also allows you to reorder, delete and [add new actions](#add-new-actions-to-the-test).

## Add New Actions to the Test

You can continue the recording to add more steps to the test. The Test Editor also contains an **Actions** panel with specific actions that can be added to the test during and after recording.

This step adds an assertion that checks if the **Thank you** page displays the name you entered as **Your name**. You can add the assertion while recording to select which object to verify on the tested page.

To continue recording the test, click the ![Record test actions](../../images/getting-started/record-test-icon.png) **Record test actions** button on the toolbar.
TestCafe Studio replays the previous actions and waits for new ones.
Click the button ![Equals assertion](../../images/getting-started/assertion-eql-icon.svg) in the **Actions** panel's **Assertions** section.
New actions are added to the end of the test.

Next, specify the assertion parameters in the **Test Editor**:

1. Click the button ![Pick a target element](../../images/getting-started/element-picker-icon.png) next to the **Actual** field to select an element whose property you are going to check. This displays the tested webpage where you can select the target element. Hover over the page header that says *'Thank you, ...'* to show the **Element Selector** popup that contains a CSS selector identifying the page header.

    ![The Element Selector popup](../../images/getting-started/selector-popup.png)

    Click the page header to add the selector to the **Actual** field. To view or select alternative selectors that identify the same element, click the ![Choose the selector](../../images/getting-started/id-bar-icon.png) arrow button next to the **Actual** field.

2. Select the property you want to verify from the list. The **Value** field displays the current property value.

    ![The Properties list](../../images/getting-started/properties-list.png)

3. Enter the object property's expected value in the **Expected** field. To add the current property value, click the ![Copy the value to the Expected field](../../images/getting-started/copy-value-icon.png) button.

    ![Assertion](../../images/getting-started/assertion.png)

You can stop the recording by clicking the ![Stop recording](../../images/getting-started/stop-recording-icon.png) **Stop recording** button.

## Run the Test

TestCafe Studio can run tests in all popular browsers.
It automatically detects browsers on the local computer and creates test run configurations for them.
You can open the **Run Configuration** menu on the toolbar to view the available configurations.

![The Run Configuration menu](../../images/getting-started/run-configuration-menu.png)

To view configurations' details, modify them or create your own configuration, click ![Settings button](../../images/getting-started/settings-icon.png) next to the menu and use the invoked **Run Configurations** dialog.
You can select one or several browsers for each configuration and specify additional test run options.

![The Run Configurations dialog](../../images/getting-started/run-configurations-dialog.png)

To run the recorded test in all the installed browsers, use the *all* configuration. Select it in the **Run Configuration** menu and click the ![Run test](../../images/getting-started/action-run-icon.png) **Run test** button on the toolbar. TestCafe Studio executes the test in several browsers simultaneously.
The **Reports** panel displays the test's progress.

## View the Test Results

The **Reports** panel displays the test result after the test is completed. To see a complete test report in the **Report** tab, click the corresponding entry in the **Reports** panel.

![Report](../../images/getting-started/report.png)
