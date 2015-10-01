	var Spinner = require('../es6/Spinner.es6');

	//console.log("Spinner -> ", Spinner);

	//Define a array with all component types 
	var types = ['wave', 'rotating-plane', 'double-bounce', 'wandering-cubes', 'pulse', 'chasing-dots', 'three-bounce', 'circle', 'cube-grid', 'fading-circle'];

	for(var i in types)
	{
		var target = document.getElementById(types[i]);
		var type = types[i];
		var spinnerComponent = new Spinner(target, type);
		spinnerComponent.active();
	}