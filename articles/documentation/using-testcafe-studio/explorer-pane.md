---
layout: docs
title: Explorer Pane
permalink: /documentation/using-testcafe-studio/explorer-pane.html
---
# Explorer Pane

The **Explorer pane** shows a tree of subdirectories, fixtures and tests within the current test directory. Use this pane to create, rename and delete directories, fixtures and tests.

IMAGE

## Creating a Directory

To create a new directory, right-click a directory in which you want to create a new one and select **New Directory** from the context menu.

IMAGE

The **New Directory** dialog will be invoked. Specify the directory name and click **Create**.

IMAGE

The created directory will appear in the Explorer pane.

## Creating a Fixture

In TestCafe Studio, tests are organized into fixtures. Each fixture contains tests that run against the same webpage.

To create a new fixture, right-click a directory where you want to create it and select **New Fixture** from the context menu.

IMAGE

The **New Fixture** dialog will appear.

IMAGE

Enter the name of the fixture in the **Fixture name** input. You can use spaces and punctuation in the fixture name. A file name compatible with the file system will be automatically generated in the **File name** box. You can use the generated file name or specify your own.

In the **Web page** input, specify the URL of the tested webpage. TestCafe Studio supports the HTTP and HTTPS protocols. You can also use the `file://` scheme to tests against webpages in the local file system.

If the tested webpage is protected with HTTP Basic or NTLM authentication, expand the **HTTP Basic/NTLM authentication** section and use the **User name** and **Password** fields to specify your credentials.

IMAGE

Finally, click the **Create** button. The new fixture will appear in the Explorer pane.

## Creating a Test

To create a new test, right-click a fixture in which you want to create a test and select **New Test** from the context menu.

IMAGE

A **New Test** dialog will be invoked. Specify the test name in this dialog and click **Create**.

IMAGE

The created test will appear in the Explorer pane. You can double-click this test to open it in the **Test View**.

## Running Tests

You can run an individual test or all tests in a fixture or directory. To do this, right-click the test, fixture or directory and select **Run Tests** from the context menu.

IMAGE

If test run configuration has not been created, the **Test Run Configuration** dialog will be invoked. Use this dialog to create a configuration. For details, see Test Run Configuration.

## Editing a Fixture

To edit fixture properties, right-click a fixture and select **Edit** from the context menu.

IMAGE

The **Modify Fixture** dialog will be invoked. You can change the fixture name, file name, target webpage and authentication credentials in this dialog. When you are done, click **OK**.

IMAGE

## Renaming Tests

To rename a test, right-click it and select **Rename** from the context menu.

IMAGE

The **Rename Test** dialog will appear. Specify the new test name and click **Rename**.

IMAGE

## Viewing Test Code

You can view fixture code in code editor. To do this, right-click a fixture or test in the Explorer pane and select **Show Code** from the context menu.

IMAGE

The fixture code will be revealed in the Code Editor.

IMAGE

## Showing Files in Windows Explorer/macOS Finder

TestCafe Studio can show a fixture or directory in Windows Explorer and macOS Finder. To do this, right-click the fixture or directory and select **Show in Explorer/Finder** from the context menu.

IMAGE

## Deleting Directories, Fixtures and Tests

To delete a directory, fixture or test, right-click it and select **Delete** from the context menu.

IMAGE

A confirmation dialog will appear. Click **Yes** to delete this item.
