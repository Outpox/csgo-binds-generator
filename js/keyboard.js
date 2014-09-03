$(function() {
    var $write = $('#write');
    var selectedkey = $('#selectedkey');
    $('#keyboard li').click(function() {
	var $this = $(this), character = $this.html();
	var bgc = $this.css("background-color");
	selectedkey.html(character);
	if (bgc === "rgb(211, 211, 211)") {
	    $this.css({'background-color': 'greenyellow'});
	    selectedkey.html("");
	    window.console.log(bgc + " -> true");
	}
	else {
	    $("#container li").each(function(index) {
		$(this).css({'background-color': 'greenyellow'});
	    });
	    $this.css({'background-color': 'lightgrey'});
	    window.console.log(bgc + " -> false");
	}
    });
});