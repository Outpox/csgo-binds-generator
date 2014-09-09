$(function() {
    $('#menu input').click(function() {
        var $this = $(this);
        window.console.log($this);
    });
    $('#primwepbut').click(function() {
        $('#rifles').toggle(50);
    });
    $('#menu input:radio').addClass('input_hidden');

    $('#menu li').click(function(e) {
        e.preventDefault();
        window.console.log("click");
        if ($(this).closest('li').attr('class') === 'selected') {
            window.console.log("already selected");
            $(this).closest('li').removeClass('selected');
        }
        else {
            window.console.log("not selected");
            $(this).closest('li').addClass('selected').siblings().removeClass('selected');
        }
    });
});