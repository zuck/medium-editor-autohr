# medium-editor-autohr

[![npm version](https://badge.fury.io/js/medium-editor-autohr.svg)](https://www.npmjs.com/package/medium-editor-autohr)

> An extension for [Medium Editor](https://github.com/yabwe/medium-editor) which auto adds horizontal rules.

![Demo](https://rawgit.com/zuck/medium-editor-autohr/master/art/screenshot.gif)

## How to install

```bash
$ npm install --save medium-editor-autohr
```

## Use the extension

```js
const AutoHR = require('medium-editor-autohr');

var editor = new MediumEditor('.editable', {
    extensions: {
        'autohr': new AutoHR()
    }
});
```

Now, type `---` followed by `ENTER`: an `<hr>` element will appear!

## License

Copyright (c) 2017 Emanuele Bertoldi

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
