var hexToRgb=function(t,a){var t="#"+t,h=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),r=function(){return void 0==this.alpha?"rgb("+this.r+", "+this.g+", "+this.b+")":(this.alpha>1?this.alpha=1:this.alpha<0&&(this.alpha=0),"rgb("+this.r+", "+this.g+", "+this.b+", "+this.alpha+")")};return void 0==a?h?{r:parseInt(h[1],16),g:parseInt(h[2],16),b:parseInt(h[3],16),toString:r}:null:(a>1?a=1:0>a&&(a=0),h?{r:parseInt(h[1],16),g:parseInt(h[2],16),b:parseInt(h[3],16),alpha:a,toString:r}:null)};

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
				newcolor.rgb = hexToRgb(newcolor.hex).toString();
			}
			
			if($url.indexOf("color=") > -1) {
				color = $url.split('color=')[1];
				newcolor.name = color.toLowerCase();
			}
		});

		colorDictionary.push(newcolor);
	}

});

console.log(colorDictionary);
copy(colorDictionary);
