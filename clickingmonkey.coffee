loadScript = (sUrl) ->
  nScript = document.createElement 'script'
  nScript.setAttribute 'language', 'JavaScript'
  nScript.setAttribute 'src', sUrl
  document.body.appendChild nScript


loadScript '//cdnjs.cloudflare.com/ajax/libs/q.js/1.0.0/q.js' if !Q?

start = (firstCallback) ->
  firstCallback()

clickElem = (selector, delay=100) ->->
  deferred = Q.defer()
  (document.querySelector selector).click()
  setTimeout deferred.resolve, delay
  deferred.promise

typeElem = (selector, text) ->->
  deferred = Q.defer()
  (document.querySelector selector).value = text
  deferred.resolve()
  deferred.promise

submitForm = (delay=1000) ->
  clickElem '[type=submit]', delay
