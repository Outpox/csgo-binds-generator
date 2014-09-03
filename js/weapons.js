$(function() {
    $('#menu input').click(function() {
	var $this = $(this);
	window.console.log($this);
    });
    $('#primwepbut').click(function() {
	$('#rifles').toggle(50);
    });
});