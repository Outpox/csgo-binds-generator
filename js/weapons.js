$(function() {
    var key = $('#selectedkey');
    var write = $("#write");
    var pwep = $('input[name=primary]:checked', '#pwep').val();
    function generate() {
        window.console.log("generate");
        window.console.log(key.html());
        window.console.log(pwep);
        if (key !== "") {
            write.html("bind \"" + key.html().toLowerCase() + "\"");
        }
    }
    $('#menu input').click(function() {
        var $this = $(this);
        window.console.log($this);
    });
    $('#primwepbut').click(function() {
        $('#rifles').toggle(100);
    });
    $('#secondwepbut').click(function() {
        $('#gun').toggle(100);
    });
    $('#menu input:radio').addClass('input_hidden');

    $('#menu li').click(function(e) {
        e.preventDefault();
        generate();
        if ($(this).closest('li').attr('class') === 'selected') {
            window.console.log("already selected");
            $(this).closest('li').removeClass('selected');
        }
        else {
            $(this).closest('li').addClass('selected').siblings().removeClass('selected');
        }
    });
});