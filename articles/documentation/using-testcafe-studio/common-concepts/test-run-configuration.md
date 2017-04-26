---
layout: docs
title: Test Run Configuration
permalink: /documentation/using-testcafe-studio/common-concepts/test-run-configuration.html
---
# Test Run Configuration

Test Run Configuration is a group of settings that define how tests will run. You can create many configurations and switch between them in TestCafe Studio.

The current test run configuration is displayed in the toolbar.

IMAGE

You can use the drop-down menu to switch to a different configuration.

IMAGE

## Test Run Configuration Dialog

Click **Edit configurations** in the drop-down menu to open a **Test Run Configuration** dialog where you can create, modify and delete configurations.

IMAGE

The Test Run Configuration dialog displays the list of configurations in the left pane. Use this list to select the configuration you need to edit.
To create a new configuration, click **Add**.

The right section of the dialog displays a form that allows you to edit test run configuration settings.

Setting | Description
-------- | -------------
Name | The name of the test run configuration. It is displayed in the configuration drop-down menu in the TestCafe Studio toolbar.
Reports path | Path to the directory where test run reports are saved.
Screenshots path | Path to the directory where screenshots taken during the test are saved.
Default report view | Format used by default in test run reports.
Browsers | Browsers in which the test will run. This section lists locally installed browsers detected by TestCafe automatically. If you select multiple browsers, tests will run in the selected browsers in parallel. You can use the **Select All** and **Deselect All** buttons to set or remove selection for all the browsers.
Fail if a JavaScript error occurs on a page | Specifies whether the test will be considered failed if a JavaScript error occurs on the tested page. If unchecked, JavaScript errors are ignored.
Take a screenshot if a test fails | Specifies whether TestCafe should take a screenshot of the tested page whenever a test fails

After you have made the changes, click **Apply** to apply the changes without leaving the dialog, or **OK** to apply the changes and close the dialog.

To remove a test run configuration, use the **Remove** button.