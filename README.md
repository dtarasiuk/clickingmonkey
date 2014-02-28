Clicking Monkey
==============

The library for automated clicking on onepage web apps.

Need to automate creation of accounts/users/posts on a one page application? This library is just for you!


Usage
==============
```coffee
start(clickElem('.TARGETCLASS', 5000)) #Wait 5000 milliseconds(5 seconds) before next step
  .then(clickElem('.TARGETCLASS2', 1000)) #Wait 1000 milliseconds(1 second) before next step
  .then(clickElem('.TARGETCLASS3'))
  .then(submitForm())
```
