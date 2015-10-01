(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * AutoComplete
 * 
 * A facade to run auto complete modules.
 *
 * @author Carlos Henrique Carvalho de Santana <carlohcs@gmail.com>
 * @date 2015-09-30
 /*
 	Description:
 	Help to create a auto complete modules. A common way to render auto complete modules.
 
 	Syntax:
 	var autoComplete = new AutoComplete();
 	var autoComplete.setInputSelector('.auto-complete');
 	var source = [
 		"Name1", "Name2", "Name3", "Name4",...
 	];
 	var autoComplete.setSource(source);
 	var autoComplete.init();

 	Depedencies:
 		- jQuery - Pass the jQuery object. -> window.jQuery
 		- Bootstrap 3
 		- Bootstrap 3 Typeahead
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var AutoComplete = function AutoComplete($) {

	var config = {
		inputSelector: '.auto-complete',
		source: [],
		highlighter: function highlighter(item, query) {

			var regex = new RegExp('(' + query + ')', 'gi');

			return item.replace(regex, "<strong>$1</strong>");
		}
	};

	return {
		/**
   * Set the input selector
   */
		setInputSelector: function setInputSelector(inputSelector) {
			config.inputSelector = inputSelector;
		},
		/**
   * Set the source
   */
		setSource: function setSource(source) {
			config.source = source;
		},
		/**
   * Set highlighter
   */
		setHighlighter: function setHighlighter(highlighter) {
			config.highlighter = highlighter;
		},
		/**
   * Configure and init the module
   */
		init: function init() {
			//console.log('jQuery -> ', $);

			//Configure with the custom input selector and init
			$(config.inputSelector).typeahead({
				source: config.source,
				highlighter: function highlighter(item, query) {
					return config.highlighter(item, query);
				},
				suppressKeyPressRepeat: true
			});
		}
	};
};

//Export the module
exports['default'] = AutoComplete;
module.exports = exports['default'];

},{}]},{},[1]);
