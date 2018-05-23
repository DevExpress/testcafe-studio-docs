---
layout: docs
title: Switch Frames
permalink: /documentation/working-with-testcafe-studio/recording-tests/test-actions/switch-frames.html
---
# Switch Frames

The **Switch Frames** category contains actions that allows you to switch the test's browsing context to iframes or back to the main window.

* ![Action icon](../../../../images/actions/action-switch-to-iframe-icon.svg) [Switch to IFrame](#switch-to-iframe)
* ![Action icon](../../../../images/actions/action-switch-to-main-window-icon.svg) [Switch to Main Window](#switch-to-main-window)

## Switch to IFrame

Switches the test's browsing context to the specified iFrame. Allows you to select an iFrame on a tested page and test its content.

Parameter | Type  | Description
--------- | ----- | -------------
*Element Selector* | Selector | Identifies an iFrame on the tested page. See [Selecting Target Element](README.md#selecting-target-elements).

## Switch to Main Window

Switches the test's browsing context from an iFrame back to the main window.