---
layout: docs
title: Fixture Properties Dialog
permalink: /documentation/user-interface/fixture-properties-dialog.html
---
# Fixture Properties Dialog

When you [create a new fixture](../guides/record-tests/README.md#create-fixtures), you can specify its properties in the invoked **Fixture Properties** dialog.

The dialog also allows you to [modify](fixture-editor.md#modify-the-fixtures-properties) an existing fixture's properties.

![Fixture Properties dialog](../../images/user-interface/dialogs/new-fixture-dialog.png)

You can specify the following properties:

* The fixture name. When you enter a name, TestCafe automatically generates a file name and adds it to the **File name** field.
* The file name. You can use the generated name or specify your own.
* The tested webpage's URL. TestCafe Studio supports HTTP and HTTPS protocols. You can also use the `file://` scheme to tests web pages in the local file system.
* User credentials for web pages with HTTP [Basic](https://en.wikipedia.org/wiki/Basic_access_authentication) or [Windows (NTLM)](https://en.wikipedia.org/wiki/Integrated_Windows_Authentication) protection. Expand the **HTTP Basic/NTLM authentication** section and specify the username and password.
