---
layout: docs
title: Creating and Recording Tests
permalink: /documentation/working-with-testcafe-studio/creating-and-recording-tests
---
# Creating and Recording Tests

This topic explains the basic concepts of tests in TestCafe Studio and describes how to create, record and modify them. The topic contains the following sections.

* [Test Actions](#test-actions)
* [Recording Tests](#recording-tests)
    * [Starting and Stopping Recording](#starting-and-stopping-recording)
    * [During Recording](#during-recording)
* [Creating Tests Manually](#creating-tests-manually)

## Test Actions

Tests consists of *test actions* to be performed with a tested page. You can create tests in two ways:

* by recording test actions;
* by adding test actions to a test manually in the **Test Editor**.

TestCafe Studio provides a set of actions that you can use in tests. These actions are shown in the **Actions** panel on the right of the **Test Editor**. Actions are organized into a number of categories. For example, actions of the **On-page Actions** category simulate on-screen actions (click, key press, drag, etc.) over your tested page. The actions of the **Assertions** category allow you to perform different verifications.

IMAGE

Each action has parameters that define how the action should be performed. To identify a target page element for the action, the **Element Selector** parameter is used. This parameter can contain a [Selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/) function.

IMAGE

## Recording Tests

You can quickly create tests by recording test actions. This way has the following advantages:

* You can record on-page actions simply by interacting with the web page.
* You can create assertions quickly. In the recording mode, TestCafe Studio allows you to visually select a target element.

### Starting and Stopping Recording

You can record a test in any local browser. TestCafe detects browsers installed on the local computer and add them to the **Record configuration** list. Before recording a test, select a desired record configuration in the list.

**To start recording** a new test, do any of the following.

* Select a fixture in the Explorer panel and click the **Record a New Test** button.
* Click the **Record test actions** button on the **Fixture Editor**'s toolbar.
* Click the **Start recording a test** button on the **Welcome** page.

TestCafe Studio will create a new test, add it to the fixture and switches to the recording mode.

<!--If you already have an empty test, click the Record test actions button on the Test Editor's toolbar.-->

**To stop recording**, close the browser or click the **Stop** button on the **Test Editor**'s toolbar.

**To resume recording**, click the **Record test actions** button on the **Test Editor**'s toolbar. TestCafe will replay the previous actions and wait for new ones.

### During Recording

When recording is started, TestCafe Studio launches the default browser and starts recording your activity on the tested page.

You can do the following during test recording:

* Interact with the webpage to record on-page actions like clicks, drags, key presses and so on.

* Add actions from the **Actions** panel to the test. To do this, click a desired action's button in the **Actions** panel. The action will be added to the end of the test. Then specify the action parameters.

    > When you add an assetion action in the recording mode, you can visually select an object to verify on the tested page. To do this, click the IMAGE button next to the **Actual** field in the assertion parameters' area and click the desired element on the page.

* View and modify the recorded actions in the **Test Editor**: re-order and delete actions, or change their parameters.

## Creating Tests Manually

To create a new test, right-click a desired fixture in the **Explorer** panel and select **New Test** from the context menu. In the **Create Test** dialog, specify the test name and click **Create**. TestCafe Studio will create a test with the specified name and open it in the **Test Editor**. Note that the created test is empty. You will have to add actions to it in the **Test Editor**.

To add an action to the test, click it in the **Actions** panel. The action will be added to the end of the test. Then specify the action parameters.

You can also click the **Record test actions** button on the **Test Editor**'s toolbar and record test actions.