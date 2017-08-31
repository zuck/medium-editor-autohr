(function (root, factory) {
  'use strict';

  if (typeof module === 'object') {
      module.exports = factory;
  }
  else if (typeof define === 'function' && define.amd) {
      define(factory);
  }
  else {
      root.AutoHR = factory;
  }
} (this, function (MediumEditor) {

  var AutoHR = MediumEditor.Extension.extend({
    name: 'autohr',
    init: function () {
      this.subscribe('editableKeypress', this.onKeypress.bind(this));
    },
    onKeypress: function (keyPressEvent) {
     if (MediumEditor.util.isKey(keyPressEvent, [MediumEditor.util.keyCode.ENTER])) {
        var hr_start = this.base.getSelectedParentElement().textContent;
        if (hr_start === '---') {
          this.base.getSelectedParentElement().textContent = this.base.getSelectedParentElement().textContent.slice(4).trim();
          this.base.execAction('insertHorizontalRule');
        }
      }
    }
  });

  return AutoHR;

} (typeof require === 'function' ? require('medium-editor') : MediumEditor)));
