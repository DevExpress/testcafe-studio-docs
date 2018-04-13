---
layout: docs
title: Recording Tests
permalink: /documentation/working-with-testcafe-studio/recording-tests
---
# Recording Tests

Tests consists of **test actions** to be performed with a tested page.

TestCafe Studio provides a set of actions that you can use in tests. These actions are shown in the **Actions** panel on the right of the **Test Editor**. Actions are organized into a number of categories. For example, actions of the **On-Page Actions** category simulate user actions, like clicks, key presses, drags, etc., over your tested page. The actions of the **Assertions** category allow you to perform different verifications.

IMAGE

Actions have parameters that allows you to specify a target element and define how the action should be performed.

IMAGE

You can create tests:

* by recording test actions;
* by adding test actions to a test manually in the [Test Editor].

The following sections provides detailed information about test recording.

* [Record Configurations](#record-configurations)
* [Creating Fixtures](#creating-fixtures)
* [Starting and Stopping Recording](#starting-and-stopping-recording)
* [During Recording](#during-recording)
* [Modifying Tests](#modifying-tests)

## Record Configurations

You can record a test in any local browser. TestCafe detects browsers installed on the local computer and adds them to the **Record configuration** list. Before recording a test, select a desired record configuration in the list.

IMAGE

## Creating Fixtures

Recorded tests must be organized into fixtures. See [Recorded Tests Files](organizing-tests.md#recorded-tests-files).

To create a fixture, follow the steps:

1. Open a [test directory](organizing-tests.md#test-directory).
2. Do any of the following:
    * In the **Explorer** panel, click **Create a New Fixture** button.
    * Right-click a test directory or subdirectory in the **Explorer** panel and select **New Fixture** from the context menu.
    The **New Fixture** dialog will open.
3. Specify the fixture name and the tested page’s URL.
4. Click **Create**.

After the fixture is created, you can start recording tests.

> If you start recording a test from the **Welcome** page, TestCafe Studio automatically creates a new fixture.

You can view and modify the fixture in the **Fixture Editor**.

## Starting and Stopping Recording

**To start recording** a new test, do any of the following.

* Select a desired fixture in the Explorer panel and click the **Record a New Test** button.
* Click the IMAGE **Record a new test** button on the **Fixture Editor** toolbar.
* Click the IMAGE **Start recording a test** button on the **Welcome** page.

TestCafe Studio will create a new test, add it to the fixture and start recording test actions. See [During Recording](#during-recording).

You can also create an empty test and add actions to it manually. To do this, right-click a desired fixture in the **Explorer** panel and select **New Test** from the context menu. In the **Create Test** dialog, specify the test name and click **Create**. TestCafe Studio will create a test with the specified name and open it in the **Test Editor**. Next, add actions to the test from the **Actions** panel manually or click the IMAGE **Record test actions** button on the **Test Editor** toolbar and record them.

**To stop recording**, close the browser or click the IMAGE **Stop** button on the **Test Editor** toolbar.

**To continue recording**, click the **Record test actions** button on the **Test Editor** toolbar. TestCafe will replay the previous actions and wait for new ones.

## During Recording

When recording is started, TestCafe Studio launches a browser selected in the **Record configuration** list and starts recording your activity on the tested page.

You can do the following during test recording:

* Record on-page actions (clicks, drags, key presses, etc.) simply by interacting with the web page. TestCafe Studio will add actions with necessary parameters to the test.

* Add actions from the **Actions** panel to the test. To do this, click a desired action in the **Actions** panel. The action will be added to the end of the test. Then specify the action parameters.

    When you add an on-page action or assertion, you can visually select a target element on the tested page. To do this, click the IMAGE button in the action parameters' area and click the desired element on the page.

    For assertion, you can also choose a desired property from the auto-generated property list and see the assertion status.

* View and modify the recorded actions. See [Modifying Tests](#modifying-tests).

### Modifying Tests

You can view and modify recorded tests in the **Test Editor** both during and after recording. You can do the following:

* Rename tests.

* Re-order and delete actions.

* View and modify action parameters.

* Add new actions.

For more information, see the description of the **Test Editor** panel.

> If you add or modify actions after recording, you cannot visually select a target elements for actions, you need to specify them manually.