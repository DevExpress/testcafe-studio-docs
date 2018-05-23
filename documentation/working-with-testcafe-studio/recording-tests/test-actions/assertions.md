---
layout: docs
title: Assertions
permalink: /documentation/working-with-testcafe-studio/recording-tests/test-actions/assertions.html
---
# Assertions

The **Assertions** category contains actions that perform different verifications.

* ![Action icon](../../../../images/actions/assertion-eql-icon.svg) [Equals](#equals)
* ![Action icon](../../../../images/actions/assertion-not-eql-icon.svg) [Not Equals](#not-equals)
* ![Action icon](../../../../images/actions/assertion-ok-icon.svg) [Ok](#ok)
* ![Action icon](../../../../images/actions/assertion-not-ok-icon.svg) [Not Ok](#not-ok)
* ![Action icon](../../../../images/actions/assertion-contains-icon.svg) [Contains](#contains)
* ![Action icon](../../../../images/actions/assertion-not-contains-icon.svg) [Not Contains](#not-contains)
* ![Action icon](../../../../images/actions/assertion-type-of-icon.svg) [Type of](#type-of)
* ![Action icon](../../../../images/actions/assertion-not-type-of-icon.svg) [Not Type of](#not-type-of)
* ![Action icon](../../../../images/actions/assertion-gt-icon.svg) [Greater than](#greater-than)
* ![Action icon](../../../../images/actions/assertion-gte-icon.svg) [Greater than or Equals to](#greater-than-or-equals-to)
* ![Action icon](../../../../images/actions/assertion-lt-icon.svg) [Less than](#less-than)
* ![Action icon](../../../../images/actions/assertion-lte-icon.svg) [Less than or Equals to](#less-than-or-equals-to)
* ![Action icon](../../../../images/actions/assertion-within-icon.svg) [Within](#within)
* ![Action icon](../../../../images/actions/assertion-not-within-icon.svg) [Not Within](#not-within)
* ![Action icon](../../../../images/actions/assertion-match-icon.svg) [Match](#match)
* ![Action icon](../../../../images/actions/assertion-not-match-icon.svg) [Not Match](#not-match)

## Assertion Parameters and Options

When you add an assertion to a test, you need to set up its parameters.

Each assertion has an **Actual** parameter that takes a comparison value. This parameter can take any value. If you need to compare a property of a particular DOM node, you can pass a [selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/)'s property to this parameter. You can enter a selector's property to the **Actual** field or generate it during test recording by selecting a target element on the tested webpage.

To generate a Selector's property, follow the steps:

1. Click the ![Element Picker](../../../../images/getting-started/element-picker-icon.png) **Element Picker** button next to the **Actual** field.
2. Select a target element on the tested webpage using an element picker. TestCafe Studio generates an element selector and adds it to the **Actual** field.
3. Select a desired property from the list.

Some of assertions have the **Expected** parameter that takes an expected value. You can enter a desired value or add the current property value by clicking the ![Copy the value to the Expected field](../../../../images/getting-started/copy-value-icon.png) button.

See assertions description below to learn more about assertion parameters.

You can also add the following options to assertions:

* *Timeout* - the time (in milliseconds) an assertion can take to pass before the test fails. To add this option, click the **Add Timeout** button in the assertion parameters area.

* *Message* - an assertion message that is displayed in the report if the test fails. To add this option, click the **Add Message** button in the assertion parameters area.

## Equals

Asserts that *Actual* is equal to **Expected**.

Parameter              | Type                                              | Description
---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------
*Actual*             | Any Type &#124; Selector's Property &#124; | A comparison value.
*Expected*             | Any type | An expected value.

## Not Equals

Asserts that *Actual* is not equal to **Expected**.

Parameter              | Type                                              | Description
---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------
*Actual*             | Any Type &#124; Selector's Property &#124; | A comparison value.
*Expected*             | Any type | An unexpected value

## Ok

Asserts that *Actual* is true.

Parameter              | Type                                              | Description
---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------
*Actual*             | Any Type &#124; Selector's Property &#124; | A value that should be truthy.

## Not Ok

Asserts that *Actual* is false.

Parameter              | Type                                              | Description
---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------
*Actual*             | Any Type &#124; Selector's Property &#124; | A value that should be falsy.

## Contains

Asserts that *Actual* contains *Expected*.

Parameter              | Type                                              | Description
---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------
*Actual*             | String &#124; Array &#124; Object &#124; Selector's Property &#124; | A string that contains the *Expected* substring, an array that contains the *Expected* value or an object that contains the *Expected* property.
*Expected*             | Any type | The expected value.

## Not Contains

Asserts that *Actual* does not contain *Expected*.

***text
await t.expect( *Actual* ).notContains( expected, message, options );
***

Parameter              | Type                                              | Description
---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------
*Actual*             | String &#124; Array &#124; Object &#124; Selector's Property &#124; | A string that should not contain the *Expected* substring, an array that should not contain the *Expected* value or an object that should not contain the *Expected* property.
*Expected*             | Any type | The expected value.

## Type of

Asserts that the *Actual* type corresponds to a particular type.

Parameter              | Type                                              | Description
---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------
*Actual*             | Any Type &#124; Selector's Property &#124;  | A comparison value. If you pass a [selector's property](../selecting-page-elements/selectors/using-selectors.md#define-assertion-actual-value) the assertion automatically waits until the *Actual* value is obtained.
*Type Name*             | String | The expected type of the *Actual* value.

## Not Type of

Asserts that the *Actual* type is not correspond to a particular type.

Parameter              | Type                                              | Description
---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------
*Actual*             | Any Type &#124; Selector's Property &#124; | A comparison value.
*Type Name*             | String | An unexpected type of the *Actual* value.

## Greater than

Asserts that *Actual* is greater than *Expected*.

Parameter              | Type                                              | Description
---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------
*Actual*             | Number &#124; Selector's Property &#124;  | A value that should be greater than *Expected*.
*Expected*             | Any type | A comparison value.

## Greater than or Equals to

Asserts that *Actual* is greater than or equal to *Expected*.

Parameter              | Type                                              | Description
---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------
*Actual*             | Number &#124; Selector's Property &#124; | A value that should be greater than or equal to *Expected*.
*Expected*             | Any type | A comparison value.

## Less than

Asserts that *Actual* is less than *Expected*.

Parameter              | Type                                              | Description
---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------
*Actual*             | Number &#124; Selector's Property &#124; | A value that should be less than *Expected*.
*Expected*             | Any type | A comparison value.

## Less than or Equals to

Asserts that *Actual* is less than or equal to *Expected*.

Parameter              | Type                                              | Description
---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------
*Actual*             | Number &#124; Selector's Property &#124; | A value that should be less than or equal to *Expected*.
*Expected*             | Any type | A comparison value.

## Within

Asserts that *Actual* is within a range from *Start* to *Finish*. Bounds are inclusive.

Parameter              | Type                                              | Description
---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------
*Actual*             | Number &#124; Selector's Property &#124; | A comparison value.
*Start Value*             | Number | A lower bound of range (included).
*Finish Value*            | Number | An upper bound of range (included).

## Not Within

Asserts that *Actual* is not within a range from *Start* to *Finish*. Bounds are inclusive.

Parameter              | Type                                              | Description
---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------
*Actual*                  | Number &#124; Selector's Property &#124; | A comparison value.
*Start Value*             | Number | A lower bound of range (included).
*Finish Value*            | Number | An upper bound of range (included).

## Match

Asserts that *Actual* matches the *re* regular expression.

Parameter              | Type                                              | Description
---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------
*Actual*             | String &#124; Selector's Property &#124; | A comparison value.
*re*             | RegExp | A regular expression that is expected to match *Actual*.

## Not Match

Asserts that *Actual* does not match the re regular expression.

Parameter              | Type                                              | Description
---------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------
*Actual*             | String &#124; Selector's Property &#124; | A comparison value.
*re*             | RegExp | A regular expression that is expected not to match *Actual*.