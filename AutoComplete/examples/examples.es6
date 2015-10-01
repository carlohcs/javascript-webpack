	//Import the AutoComplete module
	//This way doesn't work anymore:
	//Error: 'import' and 'export' may appear only with 'sourceType: module'
	//import AutoComplete from '../es6/AutoComplete.es6';
	//import AutoComplete from '../es6/AutoComplete.es6';
	
	var AutoComplete = require('../es6/AutoComplete.es6');
	
	var AutoCompleteDecorator = require('../es6/AutoCompleteDecorator.es6');

	//Get jQuery object
	var _$ = window.jQuery;

	/**
	 * Fruits module
	 */
	var fruitsSource = [
		'Banana',
		'Apple',
		'Orange'
	];
	var fruitsAutoComplete = new AutoComplete(_$);
	fruitsAutoComplete.setInputSelector("[name='fruits']");
	fruitsAutoComplete.setSource(fruitsSource);
	fruitsAutoComplete.init();

	/**
	 * Cars module
	 */
	var carsSource = [
		'BMW',
		'Porshe',
		'Audi'
	];
	var carsAutoComplete = new AutoComplete(_$);
	carsAutoComplete.setInputSelector("[name='cars']");
	carsAutoComplete.setSource(carsSource);
	carsAutoComplete.init();

	/**
	 * Language module
	 */
	var languagesSource = [
		'Pyton',
		'PHP',
		'Java'
	];
	var languagesAutoComplete = new AutoComplete(_$);
	languagesAutoComplete.setInputSelector("[name='languages']");
	languagesAutoComplete.setSource(languagesSource);
	languagesAutoComplete.init();



	/**
	 * Fruits module
	 */
	var fruitsSourceDecorator = [
		'Banana',
		'Apple',
		'Orange'
	];
	var fruitsAutoCompleteDecorator = new AutoComplete(_$);
	fruitsAutoCompleteDecorator.setInputSelector("[name='fruits_decorator']");
	fruitsAutoCompleteDecorator.setSource(fruitsSourceDecorator);
	fruitsAutoCompleteDecorator.setHighlighter(AutoCompleteDecorator.fruits);
	fruitsAutoCompleteDecorator.init();
	