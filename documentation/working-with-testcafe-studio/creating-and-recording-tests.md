---
layout: docs
title: Creating and Recording Tests
permalink: /documentation/working-with-testcafe-studio/creating-and-recording-tests
---
# Creating and Recording Tests

This topic explains the basic concepts of tests in TestCafe Studio and describes how to create, record and modify them. The topic contains the following sections.

* [Test Actions](#test-actions)
* [Recording Tests](#recording-tests)
    * [Record Configurations](#record-configurations)
    * [Starting and Stopping Recording](#starting-and-stopping-recording)
    * [During Recording](#during-recording)
* [Creating Tests Manually](#creating-tests-manually)
* [Modifying Tests](#modifying-tests)

## Test Actions

Tests consists of *test actions* to be performed with a tested page.

TestCafe Studio provides a set of actions that you can use in tests. These actions are shown in the **Actions** panel on the right of the **Test Editor**. Actions are organized into a number of categories. For example, actions of the **On-Page Actions** category simulate user actions, like clicks, key presses, drags, etc., over your tested page. The actions of the **Assertions** category allow you to perform different verifications.

IMAGE

Each action has parameters that specify a target element and define how the action should be performed.

IMAGE

You can create tests in two ways:

* By [recording test actions](#recording-tests).
* By adding test actions to a test [manually](#creating-tests-manually) in the **Test Editor**.

## Recording Tests

You can quickly create tests by recording test actions. Using the test recorder has the following advantages:

* You can record on-page actions simply by interacting with the web page.
* You can visually select a target element for actions added from the Actions panel during recording.
* You can create assertions quickly: visually select a target element, choose a desired property from the auto-generated property list, see the assertion status.

### Record Configurations

You can record a test in any local browser. TestCafe detects browsers installed on the local computer and adds them to the **Record configuration** list. Before recording a test, select a desired record configuration in the list.

IMAGE

### Starting and Stopping Recording

**To start recording** a new test, do any of the following.

* Select a [fixture](organizing-tests.md#fixtures) in the Explorer panel and click the **Record a New Test** button.
* Click the IMAGE **Record a new test** button on the **Fixture Editor**'s toolbar.
* Click the IMAGE **Start recording a test** button on the **Welcome** page.

TestCafe Studio will create a new test, add it to the fixture and start recording test actions. See [During Recording](#during-recording).

**To stop recording**, close the browser or click the IMAGE **Stop** button on the **Test Editor**'s toolbar.

**To resume recording**, click the **Record test actions** button on the **Test Editor**'s toolbar. TestCafe will replay the previous actions and wait for new ones.

### During Recording

When recording is started, TestCafe Studio launches a browser selected in the **Record configuration** list and starts recording your activity on the tested page.

You can do the following during test recording:

* Interact with the webpage to record on-page actions like clicks, drags, key presses and so on.

* Add actions from the **Actions** panel to the test.

    > When you add an on-page action or assertion, you can visually select a target element on the tested page. To do this, click the IMAGE button in the action parameters' area and click the desired element on the page.

* View and modify the recorded actions. See [Modifying Tests](#modifying-tests).

## Creating Tests Manually

To create a new test, right-click a desired [fixture](organizing-tests.md#fixtures) in the **Explorer** panel and select **New Test** from the context menu. In the **Create Test** dialog, specify the test name and click **Create**. TestCafe Studio will create a test with the specified name and open it in the **Test Editor**. Note that the created test is empty. You will have to add actions to it in the **Test Editor**. See [Modifying Tests](#modifying-tests).

You can also click the **Record test actions** button on the **Test Editor**'s toolbar and [record](#recording-tests) test actions.

### Modifying Tests

You can view and modify recorded tests in the **Test Editor** both during and after recording. You can do the following:

* Rename tests.

* Re-order and delete actions.

* View and modify action parameters.

* Add new actions. To do this, click a desired action in the **Actions** panel. The action will be added to the end of the test. Then specify the action parameters.

For more information, see the description of the **Test Editor** panel.