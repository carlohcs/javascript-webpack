//https://gist.github.com/gordonbrander/2230317
var ID = function () {
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
class Spinner{

	/**
	 * Spinner constructor
	 * 
	 * @param  object target DOM element
	 * @param  string type Spinner to render
	 */
	constructor(target, type){

		//Spinners
		this.spinners = {

			'wave': {
				class: 'sk-spinner-wave',
				children: `<div class="sk-rect1"></div>
						    <div class="sk-rect2"></div>
						    <div class="sk-rect3"></div>
						    <div class="sk-rect4"></div>
						    <div class="sk-rect5"></div>`
			},
			'rotating-plane': {
				class: 'sk-spinner-rotating-plane',
				children: ``
			},
			'double-bounce': {
				class: 'sk-spinner-double-bounce',
				children: `<div class="sk-double-bounce1"></div>
							<div class="sk-double-bounce2"></div>`
			},
			'wandering-cubes': {
				class: 'sk-spinner-wandering-cubes',
				children: `<div class="sk-cube1"></div>
							<div class="sk-cube2"></div>`
			},
			'pulse': {
				class: 'sk-spinner-pulse',
				children: ``
			},
			'chasing-dots': {
				class: 'sk-spinner-chasing-dots',
				children: `<div class="sk-dot1"></div>
							<div class="sk-dot2"></div>`
			},
			'three-bounce': {
				class: 'sk-spinner-three-bounce',
				children: `<div class="sk-bounce1"></div>
                            <div class="sk-bounce2"></div>
                            <div class="sk-bounce3"></div>`
			},
			'circle': {
				class: 'sk-spinner-circle',
				children: `<div class="sk-circle1 sk-circle"></div>
                           <div class="sk-circle2 sk-circle"></div>
                           <div class="sk-circle3 sk-circle"></div>
                           <div class="sk-circle4 sk-circle"></div>
                           <div class="sk-circle5 sk-circle"></div>
                           <div class="sk-circle6 sk-circle"></div>
                           <div class="sk-circle7 sk-circle"></div>
                           <div class="sk-circle8 sk-circle"></div>
                           <div class="sk-circle9 sk-circle"></div>
                           <div class="sk-circle10 sk-circle"></div>
                           <div class="sk-circle11 sk-circle"></div>
                           <div class="sk-circle12 sk-circle"></div>`
			},
			'cube-grid': {
				class: 'sk-spinner-cube-grid',
				children: `<div class="sk-cube"></div>
                           <div class="sk-cube"></div>
                           <div class="sk-cube"></div>
                           <div class="sk-cube"></div>
                           <div class="sk-cube"></div>
                           <div class="sk-cube"></div>
                           <div class="sk-cube"></div>
                           <div class="sk-cube"></div>
                           <div class="sk-cube"></div>`
			},
			'fading-circle': {
				class: 'sk-spinner-fading-circle',
				children: `<div class="sk-circle1 sk-circle"></div>
                           <div class="sk-circle2 sk-circle"></div>
                           <div class="sk-circle3 sk-circle"></div>
                           <div class="sk-circle4 sk-circle"></div>
                           <div class="sk-circle5 sk-circle"></div>
                           <div class="sk-circle6 sk-circle"></div>
                           <div class="sk-circle7 sk-circle"></div>
                           <div class="sk-circle8 sk-circle"></div>
                           <div class="sk-circle9 sk-circle"></div>
                           <div class="sk-circle10 sk-circle"></div>
                           <div class="sk-circle11 sk-circle"></div>
                           <div class="sk-circle12 sk-circle"></div>`
			}


		};

		if(typeof type === 'undefined'){

			throw('The type is not defined. The default spinner `wave` has defined.');

			type = 'wave';

		}

		this.containerId = ID();

		if(typeof target !== 'undefined'){

			var spinnerType = this.spinners[type];

			//Create a container element
			var containerComponent = document.createElement("div");
				containerComponent.id = this.containerId;
				containerComponent.className = "hide";

			this.container = containerComponent;

			//Create a spinner element
			var spinnerComponent = document.createElement("div");
				spinnerComponent.className = 'sk-spinner ' + spinnerType.class;
				spinnerComponent.innerHTML = spinnerType.children;
			
			//Define spinner component
			this.spinner = spinnerComponent;
			
			//Set the spinners' target
			this.target = target;

			//Initialize the component
			this._init();
		}
		else
			throw("The target param is not defined. Pass a valid object param to the constructor.");

	}
	/**
	 * Active the element
	 */
	active(){

		this.container.className = '';

	}
	/**
	 * Desactive the element
	 */
	desactive(){

		this.container.className = 'hide';

	}
	/**
	 * Append and show the component
	 */
	render(){

		//Append spinner component into container
		this.container.appendChild(this.spinner);

		//Append all to target
		this.target.appendChild(this.container);

	}
	/**
	 * Initialize the component
	 */
	_init(){

		this.render();

	}

}

//Export the module
export default Spinner;