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
const AutoComplete = ($) => {

	var config = {
		inputSelector: '.auto-complete',
		source: [],
		highlighter: (item, query) => {

			var regex = new RegExp( '(' + query + ')', 'gi' );
			
			return item.replace( regex, "<strong>$1</strong>" );
		}
	};

	return {
		/**
		 * Set the input selector
		 */
		setInputSelector(inputSelector)
		{
			config.inputSelector = inputSelector;
		},
		/**
		 * Set the source
		 */
		setSource(source)
		{
			config.source = source;
		},
		/**
		 * Set highlighter
		 */
		setHighlighter(highlighter)
		{
			config.highlighter = highlighter;
		},
		/**
		 * Configure and init the module
		 */
		init()
		{
			//console.log('jQuery -> ', $);
			
			//Configure with the custom input selector and init
			$(config.inputSelector).typeahead({
				source: config.source,
				highlighter: (item, query) => {
					return config.highlighter(item, query);
				},
				suppressKeyPressRepeat: true
			});
		}
	};
	
};

//Export the module
export default AutoComplete;