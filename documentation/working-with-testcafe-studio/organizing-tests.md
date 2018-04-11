---
layout: docs
title: Organizing Tests
permalink: /documentation/working-with-testcafe-studio/organizing-tests
---
# Organizing Tests

This topic provides information on how to organize your test files.

* [Test Directory](#test-directory)
* [Fixtures](#fixtures)
* [Recorded Tests](#recorded-tests)
* [Coded Test Files](#coded-test-files)

The image below demonstrates the **Explorer** panel that serves to manage your test files. It shows them in a tree-like structure.

IMAGE

## Test Directory

A test directory is a file system directory used as the root of your test-related workspace. It is used to store [fixtures](#fixtures) containing [recorded tests](#recorded-tests) and [coded tests files](#coded-tests-files). You can create a test directory anywhere on your computer and then open it in TestCafe Studio in one of the following ways.

* Go to the **File** menu and click **Open Test Directory**.
* On the **Welcome** page, click **Open Folder**.

> If you start recording a test from the **Welcome** page, TestCafe Studio automatically creates a test directory in the *Users/Username/TestCafeStudio* folder and gives it the tested site's name. If a directory with the same name already exists, TestCafe Studio opens it and adds a new test to it.

You can also organize fixtures and tests files into *subdirectories*. To create a subdirectory, right-click a test directory in the **Explorer** panel and select **New Directory**. In the **New directory** dialog, enter the directory name and click the **Create** button.

## Fixtures

A fixture is a JSON file with `*.testcafe` extension that can contain one or more [recorded tests](#recorded-tests) for a single specified target URL. Therefore, you will usually have one test fixture per website page/route.

To create a new fixture:

* Do any of the following:
    * In the **Explorer** panel, click **Create a New Fixture** button.
    * Right-click a test directory or subdirectory in the **Explorer** panel and select **New Fixture** from the context menu.
    The **New Fixture** dialog will open.
* Specify the fixture name and the tested page’s URL.
* Click **Create**.

After the fixture is created, you can [start recording tests](recording-tests.md#starting-and-stopping-recording).

> If you start recording a test from the **Welcome** page, TestCafe Studio automatically creates a new fixture.

You can view and modify the fixture in the **Fixture Editor**.

## Recorded Tests

The major type of tests you create with TestCafe Studio is **recorded tests**. These tests are stored within a fixture file and shown as the fixture's child elements in the **Explorer** panel.

For information on how to create these tests, see [Recording Tests](recording-tests.md).

## Coded Tests Files

TestCafe Studio also allows you to write tests in JavaScript or TypeScript. You create a .js or .ts file in a test directory or subdirectory and write test code using a built-in code editor.

For more information, see [Writing Test Code].