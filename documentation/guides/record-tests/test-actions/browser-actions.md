---
layout: docs
title: Browser Actions
permalink: /documentation/guides/record-tests/test-actions/browser-actions.html
---
# Browser Actions

The **Browser Actions** category contains actions that control the browser window.

* ![Action icon](../../../../images/actions/action-resize-window-icon.svg) [Resize Window](#resize-window)
* ![Action icon](../../../../images/actions/action-maximize-window-icon.svg) [Maximize Window](#maximize-window)
* ![Action icon](../../../../images/actions/action-resize-window-to-fit-device-icon.svg) [Resize Window to Fit Device](#resize-window-to-fit-device)
* ![Action icon](../../../../images/actions/action-navigate-to-icon.svg) [Navigate](#navigate)
* ![Action icon](../../../../images/actions/action-take-screenshot-icon.svg) [Take Screenshot](#take-screenshot)

## Resize Window

Resizes the browser window to the specified dimensions.

Parameter | Type  | Description
--------- | ----- | -------------
*Width*  | Number | The width (in pixels).
*Height* | Number | The height (in pixels).

## Maximize Window

Resizes the browser window to fit the screen.

## Resize Window to Fit Device

Resizes the browser window to fit the device's display dimensions.

Parameter | Type  | Description
--------- | ----- | -------------
*Device* | String | The device's name. You can select it from the drop-down list.
*Portrait Orientation* | Boolean | Specifies whether to use the dimensions of a screen in portrait orientation. If unchecked, it uses the landscape orientation's dimensions.

## Navigate

Navigates the browser to the specified URL.

Parameter | Type  | Description
--------- | ----- | -------------
*Url* | String | The URL to navigate to. Absolute or relative to the current page.

## Take Screenshot

Takes a screenshot of the tested webpage.

Parameter | Type  | Description
--------- | ----- | -------------
*Path*&nbsp;(optional) | String | The screenshot files' relative path and name. Resolved from the screenshot directory specified using the run configuration's *Screenshot path* option (see [Run Configuration Dialog](../../../user-interface/run-configurations-dialog.md)).
