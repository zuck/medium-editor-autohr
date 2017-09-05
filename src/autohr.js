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
      this.subscribe('editableKeydownEnter', this.onInput.bind(this));
    },
    onInput: function (evt) {
      var parentElement = this.base.getSelectedParentElement();
      if (parentElement.textContent === HR_TOKEN) {
        this.base.execAction('delete');
        this.base.execAction('delete');
        this.base.execAction('delete');
        this.base.execAction('insertHorizontalRule');
      }
    }
  });

  return AutoHR;

} (typeof require === 'function' ? require('medium-editor') : MediumEditor)));
