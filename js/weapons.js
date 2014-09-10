$(function() {
    var key = $('#selectedkey');
    var write = $("#write");
    function generate() {
        var pwep = $("#primaryform :checked").val();
        window.console.log("Selected key : " + key.html());
        window.console.log("Selected weapon : " + pwep);
        if (key.html() !== "") {
            if (pwep !== undefined) {
                pwep = "\"" + pwep + "\"";
            }
            write.html("bind \"" + key.html().toLowerCase() + "\" " + pwep);
        }
    }
    $('#primwepbut').click(function() {
        $('#primary').toggle(100);
    });
    $('#riflesbut').click(function(e) {
        e.preventDefault();
        $('#rifles').toggle(100);
    });
    $('#smgsbut').click(function(e) {
        e.preventDefault();
        $('#smgs').toggle(100);
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
            $(this).closest('li').removeClass('selected');
            $(this).children().prop("checked", false);
        }
        else {
            $(this).closest('li').addClass('selected').siblings().removeClass('selected');
        }
    });
    $('#keyboard li').click(function() {
        if ($(":checked").val() !== undefined)
            generate();
    });
});