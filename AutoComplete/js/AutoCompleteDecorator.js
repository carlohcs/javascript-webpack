(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * AutoCompleteDecorator
 * 
 * A example how to modificate the layout of auto complete module.
 *
 * @author Carlos Henrique Carvalho de Santana <carlohcs@gmail.com>
 * @date 2015-09-30
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var AutoCompleteDecorator = (function () {

	return {

		fruits: function fruits(item, query) {

			var regex = new RegExp('(' + query + ')', 'gi');

			var fruit = item.replace(regex, '<strong>$1</strong>');

			var component = "<div class='typeahead_wrapper'>" + "<div class='typeahead_labels'>" + "<div class='typeahead_primary'>A fruit with name: </div>" + "<div class='typeahead_secondary'>" + fruit + "</div>" + "</div>" + "</div>";

			//console.log("Component -> ", item, "\n");

			return component;
		}

	};
})();

//Export the module
exports['default'] = AutoCompleteDecorator;
module.exports = exports['default'];

},{}]},{},[1]);
