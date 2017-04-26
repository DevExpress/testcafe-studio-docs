---
layout: docs
title: Getting Started
permalink: /documentation/getting-started/
---
# Getting Started

This Getting Started tutorial guides you through creating your first test, running it and analyzing the results.

## Step 1. Creating a Test Directory

Run **TestCafe Studio**.

Click the **Create Test Directory** button in the toolbar or select the **New Test Directory** item in the **File** menu.

IMAGE

This will invoke the **Create test directory** dialog.

In this dialog, enter the directory name *Sandbox* and specify the path to the directory.

IMAGE

Then press **OK**.

## Step 2. Creating a test fixture

Tests are organized into *fixtures* - a fixture contains tests for a single URL. So, you will usually have one fixture per a webpage/route.

Right-click the *Sandbox* directory and select **New Fixture** from the context menu.</para>

IMAGE

This will invoke the **New Fixture** dialog.

In this dialog, specify the fixture name *My first fixture*. TestCafe will automatically generate a file name compatible with the file system.

In the **Web page** input, specify a page against which to run tests. Enter the URL of the TestCafe example page: [http://testcafe.devexpress.com/Example](http://testcafe.devexpress.com/Example).

IMAGE

Finally, click **Create**.

## Step 3. Recording Test Actions

Press the Record button to run the **Visual Test Recorder**.

IMAGE

The default browser will start and show the Example page with the Visual Test Recorder toolbar. TestCafe is ready to record your activity on the webpage.

Do the following actions on the webpage.

* Enter a name in the **Your name** field
* Check two check boxes: **Support for testing on remote devices** and **Advanced traffic and markup analysis**.
* Click the **Submit** button

ANIMATION

TestCafe generates test actions based on your activity on the webpage.

IMAGE

After you click the Submit button, a greetings page is opened.

IMAGE

## Step 4. Creating an Assertion

In this part, you will create an assertion that checks if the name you specified in the **Your name** input is displayed on the greetings page.

Click the Assertion button in the Recorder's toolbar.

IMAGE

The **New Assertion** dialog will be invoked.

In this dialog, specify the assertion name that will appear in test run reports if this assertion fails (*Name on the greetings page*). Click the IMAGE button to show a drop-down menu that specifies the assertion type. Since you need to check if the name in greeting text equals the one you have entered, select the *x = y* type.

IMAGE

Click **OK**. The **Edit assertion** dialog will be invoked.

IMAGE

Click the IMAGE button near the Actual field to select an element whose property you are going to check. After you click the button, the tested webpage is displayed allowing you to select the target element. Click the page header that says *'Thank you, ...'*. The **Element Selector** popup will appear.

IMAGE

This popup suggests a CSS selector that identifies the page header. Use the IMAGE button to view alternative selectors that identify the same element. Choose the selector that relies on the *article-header* class.

IMAGE

Click **Next**. The **Choose Property** dialog will appear.

In this dialog, select the *text* property and click **Next**. You will return to the **Edit Assertion** dialog.

IMAGE

In the **Edit Assertion** dialog, enter the expected text in the **Expected** field and click **OK**.

IMAGE

## Step 5. Playback and Save the Test

Click the IMAGE button to play the recorded actions. Ensure that all steps were recorded correctly.

Click IMAGE, specify the test name in the invoked dialog and click **OK**.

IMAGE

Click IMAGE to return to TestCafe Studio.

## Step 6. Run the Test in Multiple Browsers

Select **Edit configuration...** from the configuration drop-down menu in the toolbar.

IMAGE

The **Test Run Configuration** dialog will appear.

Click **Add** to add a new configuration.

IMAGE

A run configuration contains settings that define how tests will run. These settings include browsers in which the test will run, the path where test run reports and screenshots will be saved, etc.

Specify a configuration name *'My Configuration'* and select two of the browsers installed on your machine.

IMAGE

Click **OK**.

In the Explorer pane that displays the tree of your testing directory, double-click the recorded test to open it.

IMAGE

Click the IMAGE button to run the test in the selected browsers in parallel.

## Step 7. Viewing Test Run Report

While tests are running, the **Tasks** pane displays the progress of the test task.

IMAGE

When tests are finished, click the row in the Tasks pane to open a test run report.

IMAGE

The report begins with general information about the test run such as time elapsed and the number of passed and failed tests. Below is a table that provides details on passed and failed tests.

## Step 8. Running the Test on Remote Devices
