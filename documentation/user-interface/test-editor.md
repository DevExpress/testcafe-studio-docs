---
layout: docs
title: Test Editor
permalink: /documentation/user-interface/test-editor.html
---
# Test Editor

The **Test** editor allows you to view and modify existing tests, and create new tests. The editor opens when you double-click the test in the [Explorer](explorer-panel.md) panel or click it in the [Fixture](fixture-editor.md) editor. If you [create an empty test](../working-with-testcafe-studio/recording-tests/README.md#creating-tests) or start [recording a new test](../working-with-testcafe-studio/recording-tests/README.md#starting-and-stopping-recording), TestCafe Studio automatically opens the test in the editor.

The **Test** editor consists of the following parts:

* The toolbar - Provides information about the test (the test name, fixture name, tested page's URL) and buttons for perfoming [common tasks](#common-tasks) .

    You can click the fixture name to open the fixture in the [Fixture](#fixture-editor) editor. You can also click the webpage's URL to view the webpage in the browser.

* The test area - Displays the current test's content.
* The **Actions** panel - Lists [actions](../working-with-testcafe-studio/recording-tests/test-actions/README.md) you can add to the test.
    The actions are organized into categories. You can expand or collapse the categories by clicking the arrows next to the categories' names.

![Test editor](../../images/user-interface/test-editor.png)

## Common Tasks

You can perform the following tasks in the editor:

* [Add Actions to Tests](#add-actions-to-tests)
* [Record Actions](#record-actions)
* [Run Tests](#run-tests)
* [Modify Actions' Parameters](#modify-action-parameters)
* [Change Actions' Position](#change-action-position)
* [Rename Tests](#rename-tests)
* [Delete Actions](#delete-actions)

### Add Actions to Tests

Click an action in the **Actions** panel to add the action to the test. TestCafe Studio adds the action to the end of the test and allows you to specify the action's parameters.

IMAGE

You can add actions after or during recording. In the last case, you can pick an element on a webpage to set it as an action parameter ([Element Selector](../working-with-testcafe-studio/recording-tests/test-actions/on-page-actions/action-parameters.md#element-selector) or [Actual Parameter](../working-with-testcafe-studio/recording-tests/test-actions/assertions.md#actual-parameter)).

### Record Actions

You can record [on-page actions](../working-with-testcafe-studio/recording-tests/test-actions/on-page-actions/README.md) and append them to the current test.

Click the ![Record button](../../images/working-with-testcafe-studio/record-test-icon.png) **Record test actions** button on the toolbar to start recording and wait while TestCafe Studio plays back the existing actions, then perform new actions on the tested page. TestCafe Studio records your activity and inserts new actions after the existing actions.

### Run Tests

Click the ![Run tests button](../../images/working-with-testcafe-studio/action-run-icon.png) **Run test** button on the editor's toolbar to run the test.

### Modify Actions' Parameters

Click the action's row to expand the action parameters area that allows you to view or modify the action's parameters.

### Change an Action's Position

Hover the mouse cursor over the ![Drag icon](../../images/user-interface/drag-item-icon.svg) button to the left of the action's name until the cursor icon changes to the ![Drag icon](../../images/user-interface/move-cursor-icon.png) icon, then drag the action to a new position.

### Rename Tests

Click the ![Rename button](../../images/working-with-testcafe-studio/settings-icon.png) button on the editor's toolbar to rename the test. The **Rename test** dialog appears and allows you to specify a new test name.

![Rename test dialog](../../images/user-interface/dialogs/rename-test-dialog.png)

### Delete Actions

Hover the mouse cursor over it and click the ![Remove icon](../../images/user-interface/remove-big-icon.svg) **Remove action** button to the right of the action's row to delete a single action from the test.

To delete all actions, click the ![Remove all actions icon](../../images/user-interface/remove-all-icon.svg) **Remove all actions** button on the editor's toobar.