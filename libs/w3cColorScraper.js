var $table = $('.reference');
var $tr = $table.find('tr');
var colorDictionary = [];

$tr.each(function(){
	var $this = $(this);
	var $a = $this.find('a');
	var newcolor = {};
	var colorhex = null;
	var color = null;

	if($a.length) {
		$a.each(function(){
			var $this = $(this);
			$url = $this.attr('href');

			if($url.indexOf("colorhex=") > -1) {
				colorhex = $url.split('colorhex=')[1];
				newcolor.hex = colorhex.toLowerCase();
			}
			
			if($url.indexOf("color=") > -1) {
				color = $url.split('color=')[1];
				newcolor.name = color.toLowerCase();
			}
		});

		colorDictionary.push(newcolor);
	}

});

// console.log(colorDictionary);
// copy(colorDictionary);
