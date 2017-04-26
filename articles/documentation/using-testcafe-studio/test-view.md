---
layout: docs
title: Test View
permalink: /documentation/using-testcafe-studio/test-view.html
---
# Test View

Test View lists actions and assertions contained in the test allowing you to add, edit or remove them.

IMAGE

The Test View consists of a toolbar and the list of test actions and assertions.

## Adding a Test Action

Test View allows you to add test actions that are not recorded by the [Visual Test Recorder](visual-test-recorder.md). These actions include

Icon | Name
---- | ------
IMAGE | Wait
IMAGE | Hover
IMAGE | Take a screenshot
IMAGE | Navigate
IMAGE | Resize
IMAGE | Resize to full screen
IMAGE | Client Function

To add a test action, click the corresponding button. This action will be added to the end of the list.

For details about test actions, see Test Actions.

## Adding an Assertion

Assertions allow you to check that the actual state of webpage elements matches the state you expect.

To add an assertion, click the IMAGE button.

## Editing Test Actions

Click a test action row to expand a section that displays its arguments and options.

IMAGE

Input boxes below the action name allow you to specify action arguments. For information about the arguments a particular action requires, see Test Actions.

The Options button invokes a menu where you can specify additional options like cursor position offsets, keys held during the action, etc.

IMAGE

## Reordering Test Actions

To change the order of actions in a test, drag the corresponding row to a new position in the list. Use the IMAGE grip to drag the action or assertion.

IMAGE

## Removing Test Actions

To remove an action, click it to open the arguments section and then click the IMAGE button.

IMAGE

## Running a Test

To run the test, click the IMAGE button.

If test run configuration has not been created, the **Test Run Configuration** dialog will be invoked. Use this dialog to create a configuration. For details, see Test Run Configuration.
