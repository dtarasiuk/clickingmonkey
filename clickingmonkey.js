var clickElem, loadScript, start, submitForm, typeElem;

loadScript = function(sUrl) {
  var nScript;
  nScript = document.createElement('script');
  nScript.setAttribute('language', 'JavaScript');
  nScript.setAttribute('src', sUrl);
  return document.body.appendChild(nScript);
};

if (!(typeof Q !== "undefined" && Q !== null)) {
  loadScript('//cdnjs.cloudflare.com/ajax/libs/q.js/1.0.0/q.js');
}

start = function(firstCallback) {
  return firstCallback();
};

clickElem = function(selector, delay) {
  if (delay == null) delay = 100;
  return function() {
    var deferred;
    deferred = Q.defer();
    (document.querySelector(selector)).click();
    setTimeout(deferred.resolve, delay);
    return deferred.promise;
  };
};

typeElem = function(selector, text) {
  return function() {
    var deferred;
    deferred = Q.defer();
    (document.querySelector(selector)).value = text;
    deferred.resolve();
    return deferred.promise;
  };
};

submitForm = function(delay) {
  if (delay == null) delay = 1000;
  return clickElem('[type=submit]', delay);
};
