$(function() {
    var key = $('#selectedkey');
    var write = $("#write");
    function generate() {
        var pwep = $("#riflesform input[name=radiorifles]:checked").val();
        window.console.log("generate");
        window.console.log(key.html());
        window.console.log(pwep);
        if (key !== "") {
            write.html("bind \"" + key.html().toLowerCase() + "\" \"" + pwep + "\"");
        }
    }
    $('#primwepbut').click(function() {
        $('#rifles').toggle(100);
    });
    $('#secondwepbut').click(function() {
        $('#gun').toggle(100);
    });
    $('#menu input:radio').addClass('input_hidden');

    $('#menu li').click(function(e) {
        e.preventDefault();
        $(this).children().prop("checked", true);
        generate();
        if ($(this).closest('li').attr('class') === 'selected') {
            window.console.log("already selected");
            $(this).closest('li').removeClass('selected');
        }
        else {
            $(this).closest('li').addClass('selected').siblings().removeClass('selected');
        }
    });
    $('#keyboard li').click(function() {
        if ($("#riflesform input[name=radiorifles]:checked").val() !== undefined)
            generate();
    });
});