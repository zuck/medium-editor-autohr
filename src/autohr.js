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

  const HR_TOKEN = '---'

  var AutoHR = MediumEditor.Extension.extend({
    name: 'autohr',
    init: function () {
      this.subscribe('editableKeypress', this.onKeypress.bind(this));
    },
    onKeypress: function (keyPressEvent) {
      if (MediumEditor.util.isKey(keyPressEvent, [MediumEditor.util.keyCode.ENTER])) {
        var parentElement = this.base.getSelectedParentElement();
        var hrStart = parentElement.textContent;
        if (hrStart === HR_TOKEN) {
          this.base.execAction('insertHorizontalRule');
          this.base.execAction('insertParagraph');
          parentElement.parentNode.removeChild(parentElement);
        }
      }
    }
  });

  return AutoHR;

} (typeof require === 'function' ? require('medium-editor') : MediumEditor)));
