---
layout: docs
title: Writing Test Code
permalink: /documentation/working-with-testcafe-studio/writing-test-code
---
# Writing Test Code

TestCafe Studio allows you to write tests using JavaScript and TypeScript. It provides a powerful **Code Editor** with syntax highlight, code completion, parameter hints and so on.

To write test code from scratch, follow the steps:

1. Create a `.js` or `.ts` file in a [test directory](organizing-tests.md#test-directory) or subdirectory. To do this, right-click the directory in the **Explorer** panel and select **New File** from the context menu. In the **New File** dialog, specify the file name and click **Create**. TestCafe Stuido will create the test file and open it in the **Code Editor**.

2. Write test code. For information about the API used in tests, see the [Test API](https://devexpress.github.io/testcafe/documentation/test-api/) topic in the open-source TestCafe documentation.

## Converting Recorded Tests to JavaScript Code

You can convert recorded tests to JavaScript code. This may be useful, for example, if you want to get more control and flexibility in your test.

To convert a test fixture with recorded tests to code:

1. Select the fixture in the **Explorer** panel and select **Convert to JavaScript Code** from the context menu.

    IMAGE

2. In the subsequent dialog, specify a name of the file where the test code will be added.

    IMAGE

TestCafe Studio will create the `.js` file with tests and show it in the **Explorer** panel.

    IMAGE