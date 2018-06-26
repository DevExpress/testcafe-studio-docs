---
layout: docs
title: Action Parameters
permalink: /documentation/working-with-testcafe-studio/recording-tests/test-actions/on-page-actions/action-parameters.html
---
# Action Parameters

## Element Selector

The *Element Selector* parameter specifies a target element for an [on-page action](README.md). This parameter accepts a [Selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/) function.

You can set up the *Element Selector* parameter in one of the following ways:

* **Use an automatically generated selector**

    When you interact with a webpage during recording, TestCafe Studio records test actions, automatically generates an element selector for each target element and adds the selector to the **Element Selector** field.

    ![Element selector](../../../../../images/actions/element-selector.png)

    TestCafe Studio produces a set of selectors for a target element. These selectors are available in the **Element Selector** drop-down list.

    ![Selectors list](../../../../../images/actions/selectors-list.png)

* **Generate a selector by picking an element on a webpage**

    You can use an element picker to select a target element on the tested webpage during recording. To do this, click the ![Element Picker](../../../../../images/getting-started/element-picker-icon.png) button next to the **Element Selector** field and select the element on the webpage. TestCafe Studio generates the element selector and adds it to the **Element Selector** field.

    ![Picking an element](../../../../../images/working-with-testcafe-studio/picking-element.gif)

* **Enter a Selector function manually**

## Other Parameters

Refer to [on-page action description](README.md) for more information on other parameters.
