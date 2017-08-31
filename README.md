# medium-editor-autohr

An extension for [Medium Editor](https://github.com/yabwe/medium-editor) which auto adds horizontal rules.

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
