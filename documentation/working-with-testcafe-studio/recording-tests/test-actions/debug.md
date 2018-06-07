---
layout: docs
title: Debug
permalink: /documentation/working-with-testcafe-studio/recording-tests/test-actions/debug.html
---
# Debug Actions

The **Debug** category contains actions for [debugging tests](../../debugging-tests.md).

* ![Action icon](../../../../images/actions/action-debug-icon.svg) [Debug](#debug)
* ![Action icon](../../../../images/actions/action-set-test-speed-icon.svg) [Set Test Speed](#set-test-speed)

## Debug

Activates the debug mode. When test execution reaches this action, it pauses. This allows you to debug the tested page using the browser's developer tools. See [Debugging Recorded Tests](../../debugging-tests.md#debugging-recorded-tests) for more information.

## Set Test Speed

Sets the test execution speed.

Parameter | Type  | Description
--------- | ----- | -------------
*Test Speed* | Number | Specifies the test speed. A number between `1` (the maximum speed) and `0.01` (the minimum speed).
