ClickingMonkey = ->
  return new ClickingMonkey() if not (@ instanceof ClickingMonkey)

  promise = new Promise (resolve, reject)-> resolve()

  delay = (ms)->
    new Promise (resolve, reject)-> setTimeout resolve, ms
  doClick = (selector) ->
    (document.querySelector selector).click()
  doType = (selector, text) ->
    (document.querySelector selector).value = text

  @clickElem = (selector, ms=1000) =>
    promise = promise.then ->
      doClick selector
      delay ms
    @

  @typeElem = (selector, text) =>
    promise = promise.then ->
      doType selector, text
      delay 1
    @

  @submitForm = (ms=1000) =>
    @clickElem '[type=submit]', ms
  @
