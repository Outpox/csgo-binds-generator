$(function() {
    var $write = $('#write');
    var selectedkey = $('#selectedkey');
    var $this;
    var character;
    $('#keyboard li').click(function() {
	$this = $(this);
	if ($this.attr('class') === ('symbol' || 'symbol lastitem')) {
	    character = $this.children().html();
	} else {
	    character = $this.html();
	}
	var bgc = $this.css("background-color");
	selectedkey.html(character);
	if (bgc === "rgb(211, 211, 211)") {
	    $this.css({'background-color': 'greenyellow'});
	    selectedkey.html("");
//	    window.console.log(bgc + " -> true");
	}
	else {
	    $("#container li").each(function(index) {
		$(this).css({'background-color': 'greenyellow'});
	    });
	    $this.css({'background-color': 'lightgrey'});
//	    window.console.log(bgc + " -> false");
	}
    });
});