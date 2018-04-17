---
layout: docs
title: Organizing Tests
permalink: /documentation/working-with-testcafe-studio/organizing-tests
---
# Organizing Tests

This topic provides information on how to organize your test files.

* [Test Directory](#test-directory)
* [Test Files](#test-files)
  * [Recorded Tests Files](#recorded-tests-files)
  * [Coded Tests Files](#coded-tests-files)

The image below demonstrates the **Explorer** panel that serves to manage your test files.

IMAGE

## Test Directory

A test directory is a file system directory used as the root of your test-related workspace. It is used to store [files](#test-files) with recorded and coded tests.

You can create a test directory anywhere on your computer and then open it in TestCafe Studio in one of the following ways.

* Go to the **File** menu and click **Open Test Directory**.
* On the **Welcome** page, click **Open Folder**.

The **Explorer** panel will show the directory's content.

> If you start recording a test from the **Welcome** page, TestCafe Studio automatically creates a test directory in the *Users/Username/TestCafeStudio* folder and gives it the tested site's name. If a directory with the same name already exists, TestCafe Studio opens it and adds a new test to it.

You can also organize test files into *subdirectories*. To create a subdirectory, right-click a test directory in the **Explorer** panel and select **New Directory**. In the **New directory** dialog, enter the directory name and click the **Create** button.

## Recorded Tests Files

The type of tests you record visually or comprose from test actions is called **recorded tests**. These tests are stored within `*.testcafe` files. TestCafe Studio automatically creates a new `*.testcafe` file when you [start recording a test](recording-tests.md#starting-and-stopping-recording) for a new tested page.

The `.testcafe` test file can contain one more recorded tests.

For information on how to record tests, see [Recording Tests](recording-tests.md)

## Coded Tests Files

TestCafe Studio also allows you to write tests in JavaScript or TypeScript. You create a `.js` or `.ts` file in a test directory, open this file in a built-in code editor and write test code. For more information, see [Writing Test Code].

> TestCafe Studio also allows you to work with tests created with an earlier version of TestCafe (`.test.js` files). You can add these files to a test directory and view/modify/run the tests from TestCafe Studio.