(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//https://gist.github.com/gordonbrander/2230317
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ID = function ID() {
	// Math.random should be unique because of its seeding algorithm.
	// Convert it to base 36 (numbers + letters), and grab the first 9 characters
	// after the decimal.
	return '_' + Math.random().toString(36).substr(2, 9);
};

/**
 * Spinner
 * -----------------
 * 
 * Spinner is a module to help a create a loading component
 *
 * @author Carlos Henrique Carvalho de Santana <carlohcs@gmail.com>
 * @date(2015-08-18)
 /*
 	Description:
 	Help to create spinners components.
 
 	Syntax:
 	var target = document.getElementById('container');
	var type = 'wave';
	var spinnerComponent = new Spinner(target, type);
	spinnerComponent.active();

 	Depedencies:
 		- Spinner.css
 */

var Spinner = (function () {

	/**
  * Spinner constructor
  * 
  * @param  object target DOM element
  * @param  string type Spinner to render
  */

	function Spinner(target, type) {
		_classCallCheck(this, Spinner);

		//Spinners
		this.spinners = {

			'wave': {
				'class': 'sk-spinner-wave',
				children: '<div class="sk-rect1"></div>\n\t\t\t\t\t\t    <div class="sk-rect2"></div>\n\t\t\t\t\t\t    <div class="sk-rect3"></div>\n\t\t\t\t\t\t    <div class="sk-rect4"></div>\n\t\t\t\t\t\t    <div class="sk-rect5"></div>'
			},
			'rotating-plane': {
				'class': 'sk-spinner-rotating-plane',
				children: ''
			},
			'double-bounce': {
				'class': 'sk-spinner-double-bounce',
				children: '<div class="sk-double-bounce1"></div>\n\t\t\t\t\t\t\t<div class="sk-double-bounce2"></div>'
			},
			'wandering-cubes': {
				'class': 'sk-spinner-wandering-cubes',
				children: '<div class="sk-cube1"></div>\n\t\t\t\t\t\t\t<div class="sk-cube2"></div>'
			},
			'pulse': {
				'class': 'sk-spinner-pulse',
				children: ''
			},
			'chasing-dots': {
				'class': 'sk-spinner-chasing-dots',
				children: '<div class="sk-dot1"></div>\n\t\t\t\t\t\t\t<div class="sk-dot2"></div>'
			},
			'three-bounce': {
				'class': 'sk-spinner-three-bounce',
				children: '<div class="sk-bounce1"></div>\n                            <div class="sk-bounce2"></div>\n                            <div class="sk-bounce3"></div>'
			},
			'circle': {
				'class': 'sk-spinner-circle',
				children: '<div class="sk-circle1 sk-circle"></div>\n                           <div class="sk-circle2 sk-circle"></div>\n                           <div class="sk-circle3 sk-circle"></div>\n                           <div class="sk-circle4 sk-circle"></div>\n                           <div class="sk-circle5 sk-circle"></div>\n                           <div class="sk-circle6 sk-circle"></div>\n                           <div class="sk-circle7 sk-circle"></div>\n                           <div class="sk-circle8 sk-circle"></div>\n                           <div class="sk-circle9 sk-circle"></div>\n                           <div class="sk-circle10 sk-circle"></div>\n                           <div class="sk-circle11 sk-circle"></div>\n                           <div class="sk-circle12 sk-circle"></div>'
			},
			'cube-grid': {
				'class': 'sk-spinner-cube-grid',
				children: '<div class="sk-cube"></div>\n                           <div class="sk-cube"></div>\n                           <div class="sk-cube"></div>\n                           <div class="sk-cube"></div>\n                           <div class="sk-cube"></div>\n                           <div class="sk-cube"></div>\n                           <div class="sk-cube"></div>\n                           <div class="sk-cube"></div>\n                           <div class="sk-cube"></div>'
			},
			'fading-circle': {
				'class': 'sk-spinner-fading-circle',
				children: '<div class="sk-circle1 sk-circle"></div>\n                           <div class="sk-circle2 sk-circle"></div>\n                           <div class="sk-circle3 sk-circle"></div>\n                           <div class="sk-circle4 sk-circle"></div>\n                           <div class="sk-circle5 sk-circle"></div>\n                           <div class="sk-circle6 sk-circle"></div>\n                           <div class="sk-circle7 sk-circle"></div>\n                           <div class="sk-circle8 sk-circle"></div>\n                           <div class="sk-circle9 sk-circle"></div>\n                           <div class="sk-circle10 sk-circle"></div>\n                           <div class="sk-circle11 sk-circle"></div>\n                           <div class="sk-circle12 sk-circle"></div>'
			}

		};

		if (typeof type === 'undefined') {

			throw 'The type is not defined. The default spinner `wave` has defined.';

			type = 'wave';
		}

		this.containerId = ID();

		if (typeof target !== 'undefined') {

			var spinnerType = this.spinners[type];

			//Create a container element
			var containerComponent = document.createElement("div");
			containerComponent.id = this.containerId;
			containerComponent.className = "hide";

			this.container = containerComponent;

			//Create a spinner element
			var spinnerComponent = document.createElement("div");
			spinnerComponent.className = 'sk-spinner ' + spinnerType['class'];
			spinnerComponent.innerHTML = spinnerType.children;

			//Define spinner component
			this.spinner = spinnerComponent;

			//Set the spinners' target
			this.target = target;

			//Initialize the component
			this._init();
		} else throw "The target param is not defined. Pass a valid object param to the constructor.";
	}

	//Export the module

	/**
  * Active the element
  */

	_createClass(Spinner, [{
		key: 'active',
		value: function active() {

			this.container.className = '';
		}

		/**
   * Desactive the element
   */
	}, {
		key: 'desactive',
		value: function desactive() {

			this.container.className = 'hide';
		}

		/**
   * Append and show the component
   */
	}, {
		key: 'render',
		value: function render() {

			//Append spinner component into container
			this.container.appendChild(this.spinner);

			//Append all to target
			this.target.appendChild(this.container);
		}

		/**
   * Initialize the component
   */
	}, {
		key: '_init',
		value: function _init() {

			this.render();
		}
	}]);

	return Spinner;
})();

exports['default'] = Spinner;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

var Spinner = require('../es6/Spinner.es6');

//console.log("Spinner -> ", Spinner);

//Define a array with all component types
var types = ['wave', 'rotating-plane', 'double-bounce', 'wandering-cubes', 'pulse', 'chasing-dots', 'three-bounce', 'circle', 'cube-grid', 'fading-circle'];

for (var i in types) {
	var target = document.getElementById(types[i]);
	var type = types[i];
	var spinnerComponent = new Spinner(target, type);
	spinnerComponent.active();
}

},{"../es6/Spinner.es6":1}]},{},[2]);
