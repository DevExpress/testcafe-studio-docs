---
layout: docs
title: Getting Started
permalink: /documentation/getting-started/
---
# Getting Started

This Getting Started tutorial guides you through recording your first test, running it and analyzing the results.

In the tutorial, you will record a test for the [http://devexpress.github.io/testcafe/example](http://devexpress.github.io/testcafe/example) sample page.

The tutorial includes the following steps:

* [Recording Test Actions](#recording-test-actions)
* [Viewing the Recorded Test](#viewing-the-recorded-test)
* [Adding New Commands to the Test](#adding-new-commands-to-the-test)
* [Running the Test](#running-the-test)
* [Viewing the Test Results](#viewing-the-test-results)

## Recording Test Actions

To begin with, create a directory anywhere on your computer to store tests you will record.
Go to TestCafe Studio, open the **File** menu, click **Open Tests Directory** and navigate to the created directory.
You can view the directory contents in the **Explorer** panel. Currently, the test directory is empty.

The next step is to create a test fixture that will contain tests for a specific webpage.
In the **Explorer** panel, click the **Create a New Fixture** button.
In the opened **New Fixture** dialog, specify the fixture name (*My first fixture*) and the tested page URL (*[http://devexpress.github.io/testcafe/example](http://devexpress.github.io/testcafe/example)*) and click **Create**.
The new fixture will be added to the test directory.

To start recording a test, click the **Record a New Test** button in the **Explorer** panel.
TestCafe will launch the default browser with the tested site and start recording your activity on the webpage.

Do the following actions on the webpage.

* Enter a name in the **Your name** field.
* Check two check boxes: **Support for testing on remote devices** and **Advanced traffic and markup analysis**.
* Click the **Submit** button.

ANIMATION

While you perform these actions, TestCafe adds the corresponding commands to the test. You can view the recorded commands in TestCafe Studio both during the recording or after you finish it.

IMAGE

To stop the recording, close the browser window or click IMAGE on the toolbar.

## Viewing the Recorded Test

TestCafe Studio displays the recorded test in the **Test Editor**.

When you click a command in the editor, the command parameters are displayed.
You can edit the parameters.
In particular, you can change the selector that identifies the element for the action: select an alternative selector from the list of the generated selectors or enter your own one.

IMAGE

The **Test Editor** also allows you to reorder, delete the recorded commands and [add new ones](#adding-new-commands-to-the-test).

## Adding New Commands to the Test

If you need to add more steps to the test, you can continue the recording. The Test Editor also contains the **Test Commands** panel with specific commands that can be added to the test both during and after the recording.

At this step, you will add an assertion that checks if the name you specified in the **Your name** input on the tested page is displayed on the **Thank you** page. It is more convenient to add the assertion command in the recording mode in order to visually select an object to verify on the tested page.

To continue recording the test, click the IMAGE button.
TestCafe Studio will play back the existing commands and wait for adding new ones.
Click the IMAGE button in the **Assertions** section of the **Test Commands** panel.
The new command will be added to the end of the test.

Now you need to specify the assertion parameters in the **Test Editor**.

1. Select an element whose property you are going to check. To do this, click the IMAGE button next to the **Actual** field. The tested webpage will be displayed allowing you to select the target element. Hover over the page header that says *'Thank you, ...'*. The **Element Selector** popup will appear. It suggests a CSS selector that identifies the page header.

    IMAGE

    Click the page header to add the selector to the **Actual** field. To view or select alternative selectors that identify the same element, use the IMAGE button.

    IMAGE

2. Select the property you want to verify. Click the IMAGE button to open the list of the object properties and select the desired one. The **Value** field will display the current property value.

3. Enter the expected value of the object property into the **Expected** field. To add the current property value, click the IMAGE button. <!--By default, it holds the current property value.-->

    IMAGE

Stop the recording by clicking the IMAGE button.

## Running the Test

TestCafe can run tests in most popular browsers.
It automatically detects browsers installed on the local computer and creates test run configurations for them.
To view available configurations, open the **Run Configuration** menu on the toolbar.
To view configurations details, modify them or create your own configuration, click the IMAGE button next to the menu and use the subsequent **Run Configurations** dialog.
For each configuration, you can select one or several browsers and specify additional options that affect test run.

IMAGE

To run the recorded test in all the installed browsers, use the *all* configuration. Select it in the **Run Configuration** menu and click the IMAGE button.

IMAGE

TestCafe will start test execution within several browsers in parallel.
While the test is running, the **Reports** panel displays its progress.

## Viewing the Test Results

After the test is over, the **Reports** panel displays the test result. To see a complete test report within the **Report** tab, click the entry in the **Reports** panel.

IMAGE