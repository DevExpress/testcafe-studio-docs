---
layout: docs
title: Explorer Panel
permalink: /documentation/user-interface/explorer-panel.html
---
# Explorer Panel

The **Explorer** panel allows you to view and manage files in your [test directory](../working-with-testcafe-studio/organizing-tests.md#test-directory).

Once you open a test directory in TestCafe Studio, the panel shows the directory's content as a tree of subdirectories, files and tests. See [Organizing Tests](../working-with-testcafe-studio/organizing-tests.md) for more information.

![Explorer panel](../../images/working-with-testcafe-studio/explorer-panel.png)

The Explorer panel allows you to manage test directories, files, fixtures and tests using the context menu's commands. The set of available commands depends on the item currently selected in the panel.

The panel also has the **Record a New Test** and **Create a New Fixture** buttons that allow you to quickly start recording a test and create a fixture correspondingly.

## Creating a Directory

To create a new directory, invoke the context menu for a directory in which you want to create a new one and select **New Directory**. The **New Directory** dialog opens. Specify the directory name in this dialog and click **Create**.

IMAGE

The created directory appears in the **Explorer** panel.

## Creating a Fixture

To create a new [fixture](../working-with-testcafe-studio/recording-tests.md#creating-fixtures), select a directory where you want to create it and click the **Create a New Fixture** button or select the **New Fixture** command from the context menu. The **New Fixture** dialog opens.

![Creating a Fixture](../../images/working-with-testcafe-studio/creating-fixture.png)

Enter the name of the fixture in the **Fixture name** dialog. You can use spaces and punctuation in the fixture name. A file name compatible with the file system is automatically generated in the **File name** field. You can use the generated file name or specify your own.

In the **Web page** field, specify the URL of the tested webpage. TestCafe Studio supports the HTTP and HTTPS protocols. You can also use the `file://` scheme to tests against webpages in the local file system.

If the tested webpage is protected with HTTP Basic or NTLM authentication, expand the **HTTP Basic/NTLM authentication** section and use the **User name** and **Password** fields to specify your credentials.

Finally, click the **Create** button. The new fixture appears in the **Explorer** panel.

## Creating a Test

You can create a new test in one of the following ways:

* Select a fixture in which you want to create a test and click the **Record a New Test** button. TestCafe Studio automatically creates a new test, adds it to the fixture and starts recording.

* Select a fixture in which you want to create a test and select **New Test** from the context menu. The **New Test** dialog appears.

    IMAGE

    Specify the test name in this dialog and click **Create**. TestCafe Studio automatically creates an empty test and open it in **Test Editor**.

## Creating a File

To create a new file, right-click a directory in which you want to create a file and select **New File** from the context menu.

IMAGE

The **New File** dialog appears. Specify the file name and extension in this dialog and click **Create**.

IMAGE

The created file appears in the **Explorer** panel and opened in **Code Editor**.

## Running Tests

To run any runnable item (test, fixture or directory), hover the mouse on it and click the ![The Run test button](../../images/working-with-testcafe-studio/action-run-icon.png) **Run test** or **Run all tests** button appeared next to this item.

To run several tests from different fixtures and directories, select desired tests with Ctrl-click, then click the ![The Run test button](../../images/working-with-testcafe-studio/action-run-icon.png) **Run Tests** button.

You can also use the context menu's **Run Test** command to run tests.

IMAGE

## Editing a Fixture

To edit fixture properties, invoke the context menu for a fixture and select **Edit**.

IMAGE

The **Modify Fixture** dialog appears. You can change the fixture name, file name, target webpage and authentication credentials in this dialog. To save the changes, click **OK**.

IMAGE

### Renaming Tests

To rename a test, invoke the context menu for it and select **Rename**.

IMAGE

The **Rename Test** dialog appears. Specify the new test name and click **Rename**.

IMAGE

### Converting Fixtures to JavaScript

To convert a fixture with recorded tests to JavaScript, invoke the context menu for the fixture and select **Convert to JavaScript**. The **Convert to JavaScript** dialog appears. Specify the test file name and extension, then click **Create**.

![Convert to JavaScript Code Dialog](../../images/working-with-testcafe-studio/converted-tests.png)

TestCafe Studio creates the test file in the same test directory and displays it in the **Explorer** panel.

### Viewing Test Code

To view JavaScript and TypeScript files in **Code Editor**, select a fixture or test in the Explorer panel, then select **Show Code** from the context menu.

IMAGE

The fixture code is revealed in **Code Editor**.

IMAGE

### Showing Files in Windows Explorer/MacOS Finder

To view a fixture or directory in Windows Explorer and macOS Finder, invoke the context menu for the fixture or directory and select **Show in Explorer/Finder**.

IMAGE

### Deleting Directories, Fixtures and Tests

To delete a directory, fixture or test, invoke the context menu for it and select **Delete**.

IMAGE

A confirmation dialog appears. Click **Yes** to delete this item.

To delete several tests from different fixtures and directories, select desired tests with Ctrl-click, then select **Delete** from the context menu.
