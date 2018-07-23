---
layout: docs
title: Fixture Properties Dialog
permalink: /documentation/user-interface/fixture-properties-dialog.html
---
# Fixture Properties Dialog

The **Fixture Properties** dialog allows you to specify a fixture's properties.
This dialog opens when you [create a new fixture](../guides/record-tests/README.md#create-fixtures) or click the ![Settings button](../../images/guides/settings-icon.png) button in the [Fixture Editor](fixture-editor.md) to [modify the existing fixture's properties](fixture-editor.md#modify-the-fixtures-properties).

![Fixture Properties dialog](../../images/user-interface/dialogs/new-fixture-dialog.png)

You can specify the following properties:

* Fixture's name. When you enter a name, TestCafe automatically generates a file name and add it to the **File name** field.
* File's name. You can use the generated name or specify your own.
* Tested webpage's URL. TestCafe Studio supports HTTP and HTTPS protocols. You can also use the `file://` scheme to tests webpages in the local file system.
* User credentials for webpages protected with HTTP Basic or NTLM authentication. Expand the **HTTP Basic/NTLM authentication** section and specify a user name and password.
