---
layout: docs
title: HTTP Basic and NTLM Authentication
permalink: /documentation/using-testcafe-studio/common-concepts/http-basic-and-ntlm-authentication.html
---
# HTTP Basic and NTLM Authentication

TestCafe Studio allows you to test webpages protected with HTTP Basic and NTLM Authentication. You can specify the credentials in fixture settings or when recording a test in the Visual Test Recorder.

## Specifying the Credentials in Fixture Settings

In the Explorer pane, right-click a fixture and select **Edit** from the context menu.

IMAGE

The **Modify Fixture** dialog will appear. Expand the **HTTP Basic/NTLM Authentication** section and enter your credentials into the **User name** and **Password** fields.

IMAGE

## Specifying the Credentials in the Visual Test Recorder

If a webpage opened with the Visual Test Recorder requires HTTP Basic or NTLM authentication, the Recorder displays a dialog where you can enter the credentials.

IMAGE

Note that in case of Windows authentication, TestCafe Studio additionally requires domain and workstation (PC) names. By default, these names are automatically received from the machine where TestCafe Studio is installed.
