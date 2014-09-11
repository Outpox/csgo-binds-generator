$(function() {
    var key = $('#selectedkey');
    var write = $("#write");
    function generate() {
        var loadout;
        var pwep = $("#primaryform :checked").val();
        var swep = $("#secondaryform :checked").val();
        var gre = $("#greform :checked").val();
        var equip = $("#equipform :checked").val();
        window.console.log(gre);
        if (pwep === undefined) {
            pwep = "";
        }
        if (swep === undefined) {
            swep = "";
        }
        if (gre === undefined) {
            gre = "";
        }
        if (equip === undefined) {
            equip = "";
        }
        if (key.html() !== "") {
            loadout = "\"" + pwep + swep + gre + equip + "\"";
            write.html("bind \"" + key.html().toLowerCase() + "\" " + loadout);
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
    $('#heavybut').click(function(e) {
        e.preventDefault();
        $('#heavy').toggle(100);
    });
    $('#secondwepbut').click(function() {
        $('#gun').toggle(100);
    });
    $('#grebut').click(function() {
        $('#grenades').toggle(100);
    });
    $('#equipbut').click(function() {
        $('#equipment').toggle(100);
    });

    $('#menu input:radio').addClass('input_hidden');
    $('#menu input:checkbox').addClass('input_hidden');

    $('#menu li').click(function(e) {
        e.preventDefault();
        $(this).children().prop("checked", true);
        if ($(this).closest('li').attr('class') === 'selected') {
            $(this).closest('li').removeClass('selected');
            $(this).children().prop("checked", false);
        }
        else {
//            if ($(this).closest('form').attr('id') !== ('greform' || 'equipform'))
                $(this).closest('li').addClass('selected').siblings().removeClass('selected');
//            else
//                $(this).closest('li').addClass('selected');
        }
        generate();
    });
    $('#keyboard li').click(function() {
        if ($(":checked").val() !== undefined)
            generate();
    });
});