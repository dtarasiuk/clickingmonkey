var ClickingMonkey;

ClickingMonkey = function() {
  var delay, doClick, doType, promise,
    _this = this;
  if (!(this instanceof ClickingMonkey)) return new ClickingMonkey();
  promise = new Promise(function(resolve, reject) {
    return resolve();
  });
  delay = function(ms) {
    return new Promise(function(resolve, reject) {
      return setTimeout(resolve, ms);
    });
  };
  doClick = function(selector) {
    var _ref;
    return (_ref = document.querySelector(selector)) != null ? _ref.click() : void 0;
  };
  doType = function(selector, text) {
    var _ref;
    return (_ref = document.querySelector(selector)) != null ? _ref.value = text : void 0;
  };
  this.clickElem = function(selector, ms) {
    if (ms == null) ms = 1000;
    promise = promise.then(function() {
      doClick(selector);
      return delay(ms);
    });
    return _this;
  };
  this.typeElem = function(selector, text) {
    promise = promise.then(function() {
      doType(selector, text);
      return delay(1);
    });
    return _this;
  };
  this.submitForm = function(ms) {
    if (ms == null) ms = 1000;
    return _this.clickElem('[type=submit]', ms);
  };
  return this;
};
