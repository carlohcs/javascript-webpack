#Spinner

Spinner is a module to help create loading components.

##Dependencies

This component need the Spinner.css file. 

```html
<link rel="stylesheet" type="text/css" href="javascript-webpack/Spinner/Spinner.css">
```

##How to build the ES6 file

In terminal, if you have browserify and babelify:

To build the component:

```
$ cd javascript-webpack/Spinner/

$ browserify es6/Spinner.es6 -t babelify -o js/Spinner.js
```

To build the examples:

```
$ cd javascript-webpack/Spinner/examples

$ browserify examples.es6 -t babelify -o examples.js
```

##Basic usage

```javascript
var target = document.getElementById('container');
var type = 'wave';
var spinnerComponent = new Spinner(target, type);
spinnerComponent.active();
```