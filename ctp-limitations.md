# TestCafe Studio CTP Limitations

Visual Test Recorder shipped with the CTP version is unable to record the following actions.

* all actions in iframes,
* handling native browser dialogs,
* file upload,
* HTML5 drag & drop.

You also cannot add client functions or custom code (including variable declarations) to the recorded tests unless you convert them to JavaScript code.

As we advance to the official release version, we plan to implement all the missing functionality.