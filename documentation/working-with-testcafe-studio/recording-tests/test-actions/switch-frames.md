---
layout: docs
title: Switch Frames
permalink: /documentation/working-with-testcafe-studio/recording-tests/test-actions/switch-frames.html
---
# Switch Frames

The **Switch Frames** category contains actions that allows you to switch the test's [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#windows) to iframes or back to the main window.

* ![Action icon](../../../../images/actions/action-switch-to-iframe-icon.svg) [Switch Context to IFrame](#switch-context-to-iframe)
* ![Action icon](../../../../images/actions/action-switch-to-main-window-icon.svg) [Switch to Main Window](#switch-to-main-window)

## Switch Context to IFrame

When you add the **Switch Context to iFrame** action to a test, TestCafe Studio switches the test's browsing context to a specified iFrame and performs the following actions in this iFrame until reaches the [Switch Context to Main Window](#switch-to-main-window) action in the test.

Parameter | Type  | Description
--------- | ----- | -------------
*Element Selector* | Selector | Identifies an iFrame on the tested page. The parameter accepts a [Selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/) function that returns the iFrame. You can generate an element selector using an element picker. To do this, click the ![Element Picker](../../../../images/getting-started/element-picker-icon.png) button next to the **Element Selector** field, then select a target element on the tested webpage. TestCafe Studio generates the element selector and fills the **Element Selector** field with it.

## Switch Context to Main Window

When you add the **Switch Context to Main Window** action to a test, TestCafe Studio switches the test's browsing context from an iFrame back to the main window.

> If you reorder the **Switch Frames** actions or move test actions between browsing contexts, make sure the actions relate to a desired context. Otherwise, they may be executed incorrectly.