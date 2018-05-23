---
layout: docs
title: Test Actions
permalink: /documentation/working-with-testcafe-studio/recording-tests/test-actions/
---
# Test Actions

Topics of this section contains information about test actions that you can use in tests.
These actions are available in the **Test Editor**'s **Actions** panel and organized into the following categories:

Category              | Description
--------------------- | --------------
[Assertions](assertions.md) | Contains actions that perform different verifications.
[On-Page Actions](on-page-actions.md) | Contains actions that simulate user actions on a tested page like clicks, key presses, drags, etc.
[Debug](debug.md) | Contains actions for [debugging tests](../../debugging-tests.md).
[Browser Actions](browser-actions.md) | Contains actions that perform various actions with a browser window.
[Switch Frames](switch-frames.md) | Contains actions that allows you to switch the test's browsing context to iframes or back to the main window.

## Action Parameters and Options

Actions have parameters that enable you to [specify a target element](#specifying-target-elements) and define how the action should be performed. When you add an action to the test, you need to specify its parameters. If you record a test, TestCafe Studio automatically sets up necessary parameters for the major of [on-page actions](on-page-actions.md).

Some actions have additional options. To add an option, click the **Add Option** button in the action parameters area.

### Specifying Target Elements

For actions that target DOM elements, use the **Element Selector** parameter to identify a desired element. This parameter accepts a [Selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/) function.

When you interact with web page during recording, TestCafe Studio records test actions and generates element selectors for them. For each page element, it produces a set of selectors, so you can pick the one that fits you best. You can also write selectors yourself.

<!--You can add these actions to a test during or after recording. Some of them are added automatically during recording (see [On-Page Actions](#on-page-actions)).

To add an action to a test manually, click its icons in the Actions panel. The action is added to the test. Then specify its parameters in the parameters area. If you add an action during recording, you can visually select a target element on the tested page, thus TestCafe Studio automatically specify the **Element Selector** parameter. See [During Recording](recording-tests/#during-recording).-->
