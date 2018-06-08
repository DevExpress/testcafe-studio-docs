---
layout: docs
title: Browser Actions
permalink: /documentation/working-with-testcafe-studio/recording-tests/test-actions/browser-actions.html
---
# Browser Actions

The **Browser Actions** category contains actions that perform various actions with a browser window.

* ![Action icon](../../../../images/actions/action-resize-window-icon.svg) [Resize Window](#resize-window)
* ![Action icon](../../../../images/actions/action-maximize-window-icon.svg) [Maximize Window](#maximize-window)
* ![Action icon](../../../../images/actions/action-resize-window-to-fit-device-icon.svg) [Resize Window to Fit Device](#resize-window-to-fit-device)
* ![Action icon](../../../../images/actions/action-navigate-to-icon.svg) [Navigate](#navigate)
* ![Action icon](../../../../images/actions/action-take-screenshot-icon.svg) [Take Screenshot](#take-screenshot)

## Resize Window

Resizes the browser window to the specified dimensions.

Parameter | Type  | Description
--------- | ----- | -------------
*Width*  | Number | The new width, in pixels.
*Height* | Number | The new height, in pixels.

## Maximize Window

Resizes the browser window to the full screen.

## Resize Window to Fit Device

Resizes the browser window to the device's display dimensions.

Parameter | Description
--------- | -------------
*Device* | String | The name of the device. You can select it from the drop-down list.
*Portrait Orientation* | Boolean | Specifies whether to use dimensions of the screen with portrait or landscape orientation.

## Navigate

Navigates the browser to the specified URL.

Parameter | Type  | Description
--------- | ----- | -------------
*Url* | String | The URL to navigate to. Absolute or relative to the current page.

## Take Screenshot

Takes a screenshot of the tested webpage.

Parameter | Type  | Description
--------- | ----- | -------------
*Path*&nbsp;(optional) | String | The relative path and the name of the screenshot file to be created. Resolved from the screenshot directory specified using the *Screenshot path* option of the run configuration (see [Run Configuration Dialog](../../../user-interface/run-configurations-dialog.md)).
