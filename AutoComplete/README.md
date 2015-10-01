#AutoComplete

A facade to run auto complete modules.

##Dependencies

- [jQuery](https://code.jquery.com/jquery-2.1.4.min.js)
- [Bootstrap 3](https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js)
- [Bootstrap 3 Typeahead](https://github.com/bassjobsen/Bootstrap-3-Typeahead)

##How to build the ES6 file

In terminal, if you have browserify and babelify:

To build the component:

```
$ cd javascript-webpack/AutoComplete/

$ browserify es6/AutoComplete.es6 -t babelify -o js/AutoComplete.js
```

To build the examples:

```
$ cd javascript-webpack/AutoComplete/examples

$ browserify examples.es6 -t babelify -o examples.js
```

##Basic usage

```javascript
var autoComplete = new AutoComplete();
var autoComplete.setInputSelector('.auto-complete');
var source = [
	"Name1", "Name2", "Name3", "Name4",...
];
var autoComplete.setSource(source);
var autoComplete.init();
```