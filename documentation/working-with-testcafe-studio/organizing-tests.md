---
layout: docs
title: Organizing Tests
permalink: /documentation/working-with-testcafe-studio/organizing-tests
---
# Organizing Tests

This topic provides information on how to organize your test files.

* [Test Directory](#test-directory)
* [Fixtures](#fixtures)
* [Tests](#tests)
* [.js Test Files](#js-test-files)

The image below demonstrates the **Explorer** panel that serves to manage your test files. It shows them in a tree-like structure.

IMAGE

## Test Directory

A test directory is a file system directory used as the root of your test-related workspace. It is used to store [fixtures](#fixtures) and [.js test files](#js-test-files). You can create a test directory anywhere on your computer and then open it in TestCafe Studio in one of the following ways.

* Go to the **File** menu and click **Open Test Directory**.
* On the **Welcome** page, click **Open Folder**.

> If you start recording a test from the **Welcome** page, TestCafe Studio automatically creates a test directory in the *Users/Username/TestCafeStudio* folder and gives it the tested site's name. If a directory with the same name already exists, TestCafe Studio opens it and adds a new test to it.

You can also organize fixtures and .js test files into *subdirectories*. To create a subdirectory, right-click a test directory in the **Explorer** panel and select **New Directory**. In the **New directory** dialog, enter the directory name and click the **Create** button.

## Fixtures

A fixture is a JavaScript file with `*.testcafe` extension that can contain one or more tests for a single specified target URL. Therefore, you will usually have one test fixture per website page/route.

To create a new fixture:

* Do any of the following:
    * In the **Explorer** panel, click **Create a New Fixture** button.
    * Right-click a test directory or subdirectory in the **Explorer** panel and select **New Fixture** from the context menu.
    The **New Fixture** dialog will open.
* Specify the fixture name and the tested page’s URL.
* Click **Create**.

After the fixture is created, you can start [recording tests](creating-and-recording-tests.md#recording-tests).

> If you start recording a test from the **Welcome** page, TestCafe Studio automatically creates a new fixture.

You can view and modify the fixture in the **Fixture Editor**.

## Tests

[Visual tests](about-test-types.md#visual-tests) (or simply **tests**) are stored within a fixture file and shown as the fixture's child elements in the **Explorer** panel.

For information on how to create tests, see [Creating and Recording Tests](creating-and-recording-tests.md).

## .js Test Files

You can store [JavaScript test files](about-test-types.md#javascript-test-code) to a test directory or subdirectory. For more information, see [Writing Test Code].