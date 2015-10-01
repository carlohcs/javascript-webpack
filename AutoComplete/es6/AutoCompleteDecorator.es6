/**
 * AutoCompleteDecorator
 * 
 * A example how to modificate the layout of auto complete module.
 *
 * @author Carlos Henrique Carvalho de Santana <carlohcs@gmail.com>
 * @date 2015-09-30
 */ 
const AutoCompleteDecorator = () => {
	
	return {
	
		fruits(item, query)
		{

		    var regex = new RegExp( '(' + query + ')', 'gi' );
			
			var fruit = item.replace( regex, '<strong>$1</strong>' );
		    
		    var component = "<div class='typeahead_wrapper'>"
             	+ "<div class='typeahead_labels'>"
                 	+ "<div class='typeahead_primary'>A fruit with name: </div>"
                 	+ "<div class='typeahead_secondary'>" + fruit + "</div>"
             	+ "</div>"
             + "</div>";
			
			//console.log("Component -> ", item, "\n");

			return component;
		}

	};

}();

//Export the module
export default AutoCompleteDecorator;