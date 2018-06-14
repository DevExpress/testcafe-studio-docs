---
layout: docs
title: On-Page Actions
permalink: /documentation/working-with-testcafe-studio/recording-tests/test-actions/on-page-actions/
---
# On-Page Actions

The **On-Page Actions** category contains test actions that simulate user activity on a tested web page.

* ![Action icon](../../../../../images/actions/action-click-icon.svg) [Click](#click)
* ![Action icon](../../../../../images/actions/action-double-click-icon.svg) [Double Click](#double-click)
* ![Action icon](../../../../../images/actions/action-right-click-icon.svg) [Right Click](#right-click)
* ![Action icon](../../../../../images/actions/action-type-text-icon.svg) [Type Text](#type-text)
* ![Action icon](../../../../../images/actions/action-press-key-icon.svg) [Press Key](#press-key)
* ![Action icon](../../../../../images/actions/action-drag-icon.svg) [Drag](#drag)
* ![Action icon](../../../../../images/actions/action-drag-to-element-icon.svg) [Drag To Element](#drag-to-element)
* ![Action icon](../../../../../images/actions/action-select-text-icon.svg) [Select Text](#select-text)
* ![Action icon](../../../../../images/actions/action-select-editable-content-icon.svg) [Select Editable Content](#select-editable-content)
* ![Action icon](../../../../../images/actions/action-select-text-content-icon.svg) [Select Text Area Content](#select-text-area-content)
* ![Action icon](../../../../../images/actions/action-wait-icon.svg) [Pause](#pause)
* ![Action icon](../../../../../images/actions/action-hover-icon.svg) [Hover](#hover)

You can add these actions in two ways:

* Add them to a test and specify its parameters manually.
* [Record them](../../README.md). You can record most of the on-page actions by interacting with a tested webpage. TestCafe Studio automatically adds corresponding on-page actions with the necessary parameters to a test.

## Click

Clicks a webpage element with the left mouse button.

Parameter | Type  | Description
--------- | ----- | -------------
*[Element Selector](action-parameters.md#element-selector)* | [Selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/) | Identifies the webpage element being clicked.

You can also specify additional parameters for the action. See [Click Action Options](action-options.md#click-action-options).

## Double Click

Double-clicks a webpage element with the left mouse button.

Parameter | Type  | Description
--------- | ----- | -------------
*[Element Selector](action-parameters.md#element-selector)* | [Selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/) | Identifies the webpage element being double-clicked.

You can also specify additional parameters for the action. See [Click Action Options](action-options.md#click-action-options).

## Right Click

Clicks a webpage element with the right mouse button.

Parameter | Type  | Description
--------- | ----- | -------------
*[Element Selector](action-parameters.md#element-selector)* | [Selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/) | Identifies the webpage element being right-clicked.

You can also specify additional parameters for the action. See [Click Action Options](action-options.md#click-action-options).

## Type Text

Types text within an input element.

Parameter | Type  | Description
--------- | ----- | -------------
*[Element Selector](action-parameters.md#element-selector)* | [Selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/) | Identifies the webpage element that receives input focus.
*Text* | String | The text to be typed into the specified webpage element.

You can also specify additional parameters for the action. See [Typing Action Options](action-options.md#typing-action-options).

## Press Key

Presses the specified keyboard key.

Parameter | Type | Description
--------- | ----- | -------------
*Key* | String | The sequence of keys and key combinations to be pressed.

You can also specify additional parameters for the action. See [Basic Action Options](action-options.md#basic-action-options).

## Drag

Drags a webpage element to the specified location.

Parameter | Type  | Description
--------- | ----- | -------------
*[Element Selector](action-parameters.md#element-selector)* | [Selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/) | Identifies the webpage element being dragged.
*DragOffsetX* | Number | An X-offset of the drop coordinates from the mouse pointer's initial position.
*DragOffsetY* | Number | An Y-offset of the drop coordinates from the mouse pointer's initial position.

You can also specify additional parameters for the action. See [Mouse Action Options](action-options.md#mouse-action-options).

## Drag To Element

Drags a webpage element to another element.

Parameter | Type  | Description
--------- | ----- | -------------
*[Element Selector](action-parameters.md#element-selector)* | [Selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/) | Identifies the webpage element being dragged.
*Destination Selector* | [Selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/) | Identifies the webpage element that serves as the drop location.

You can also specify additional parameters for the action. See [Drag To Element Action Options](action-options.md#drag-to-element-action-options).

> You can add this action to the test only in the Test Editor, you cannot record it.

## Select Text

Selects text within an input element.

Parameter | Type  | Description
--------- | ----- | -------------
*[Element Selector](action-parameters.md#element-selector)* | [Selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/) | Identifies the webpage element whose text should be selected.
*Start Position* | Number | The selection's start position. A zero-based integer.
*End Position* | Number | The selection's end position. A zero-based integer.

## Select Editable Content

Selects text within a contenteditable element.

Parameter | Type  | Description
--------- | ----- | -------------
*Start&nbsp;Selector* | [Selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/) | Identifies the webpage element from which selection starts. The selection's start position is the first character of the element's text.
*End Selector* | [Selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/) | Identifies the webpage element at which selection ends. The selection's end position is the last character of the element's text.

You can also specify additional parameters for the action. See [Basic Action Options](action-options.md#basic-action-options).

> You can add this action to the test only in the Test Editor, you cannot record it.

## Select Text Area Content

Selects text within a text area element.

Parameter | Type  | Description
--------- | ----- | -------------
*[Element Selector](action-parameters.md#element-selector)* | [Selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/) | Identifies the text area whose text should be selected.
*Start Line* | Number | The line number at which selection starts. A zero-based integer.
*Start Position* | Number | The selection's start position within the line defined by the *Start Line* parameter. A zero-based integer.
*End Line* | Number | The line number at which selection ends. A zero-based integer.
*End Position* | Number | The selection's end position within the line defined by the *End Line* parameter. A zero-based integer.

You can also specify additional parameters for the action. See [Basic Action Options](action-options.md#basic-action-options).

> You can add this action to the test only in the Test Editor, you cannot record it.

## Wait

Pauses test execution for the specified period of time.

Parameter | Type  | Description
--------- | ----- | -------------
*Timeout* | Number | The pause duration, in milliseconds.

> You can add this action to the test only in the Test Editor, you cannot record it.

## Hover

Hovers over a webpage element with the mouse.

Parameter | Type  | Description
--------- | ----- | -------------
*[Element Selector](action-parameters.md#element-selector)* | [Selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/) | Identifies the webpage element being hovered over.

You can also specify additional parameters for the action. See [Mouse Action Options](action-options.md#mouse-action-options).

> You can add this action to the test only in the Test Editor, you cannot record it.