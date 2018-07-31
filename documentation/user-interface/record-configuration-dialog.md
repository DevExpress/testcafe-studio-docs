---
layout: docs
title: Record Configuration Dialog
permalink: /documentation/user-interface/record-configuration-dialog.html
---
# Record Configuration Dialog

The **Record Configuration** dialog allows you to modify [record configuration](../guides/record-tests/README.md#record-configurations) options. These options affect the test playback during recording. When you click the ![Start recording a test](../../images/guides/record-test-icon.png) **Record test actions** button on the [Test Editor](test-editor.md)'s toolbar to continue the record, TestCafe Studio plays back the existing test actions using the specified options and waits for new actions.

To open the dialog, click the ![Settings button](../../images/guides/settings-icon.png) button next to the **Record Configuration** drop-down menu on the main toolbar.

![Record Configuration Dialog](../../images/user-interface/dialogs/record-configuration-dialog.png)

You can configure the following options:

Options           | Description | Default
----------------- | ----------- | -------
*Selector timeout*  | Specifies the time (in milliseconds) [element selectors](../guides/record-tests/test-actions/on-page-actions/action-parameters.md#element-selector) can obtain the target DOM elements. | 10000
*Assertion timeout* | Specifies the time (in milliseconds) an [assertion](../guides/record-tests/test-actions/assertions.md) can take to pass. The assertion retries to pass multiple times within this timeout, and each time it verifies the [Actual](../guides/record-tests/test-actions/assertions.md#actual-parameter) parameter's value. The test fails if the assertion could not complete successfully within the timeout. | 3000
*Speed*             | Specifies the test speed from 0.01 to 1. | 1
*Debug mode*        | Activates the [debug mode](../guides/debug-tests.md#debugging-recorded-tests). | Disabled
