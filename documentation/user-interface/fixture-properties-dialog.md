---
layout: docs
title: Fixture Properties Dialog
permalink: /documentation/user-interface/fixture-properties-dialog.html
---
# Fixture Properties Dialog

The **Fixture Properties** dialog opens when you [create a new fixture](../guides/record-tests/README.md#create-fixtures) and allows you to specify its properties.

The dialog also allows you to [modify](fixture-editor.md#modify-the-fixtures-properties) an existing fixture's properties.

![Fixture Properties dialog](../../images/user-interface/dialogs/new-fixture-dialog.png)

You can specify the following properties:

* Fixture's name. When you enter a name, TestCafe automatically generates a file name and add it to the **File name** field.
* File's name. You can use the generated name or specify your own.
* Tested webpage's URL. TestCafe Studio supports HTTP and HTTPS protocols. You can also use the `file://` scheme to tests webpages in the local file system.
* User credentials for webpages protected with HTTP [Basic](https://en.wikipedia.org/wiki/Basic_access_authentication) or [Windows (NTLM)](https://en.wikipedia.org/wiki/Integrated_Windows_Authentication) authentication. Expand the **HTTP Basic/NTLM authentication** section and specify a user name and password.
