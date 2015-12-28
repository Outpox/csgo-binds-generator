(function () {
    var app = angular.module('csgoBinds', ['ngAnimate', 'ngStorage', 'weapons', 'keyboard', 'textarea'])

        .service('globalData', function () {
            this.data = {
                binds: bindsArray,
                currentBind: new Bind(),
                generatedCode: ""
            };
        })

        .controller('appCtrl', ['$scope', function ($scope) {
        }])
})();

$(function () {
    var canvas = document.getElementById("keyboard");
    var options = {
        "layout": "keyboard/qwerty_us.json",
        "backgroundColor": "transparent",
        "keyFontColor": "#EEEEEE",
        "keyFontType": "20px Calibri",
        "keyBackgroundColor": "#7f8c8d",
        "keyHoverBackgroundColor": "#27ae60",
        "keySelectedBackgroundColor": "darkgreen",
        "keyBorderColor": "black",
        "keyHoverBorderColor": "black",
        "keySelectedBorderColor": "black",
        "disabledCursor": "not-allowed"
    };
    var kb = new Keyboard(canvas, options);
    kb.init();

    var cNumpad = document.getElementById("numpad");
    var kNumpad = new Keyboard(cNumpad, options);
    kNumpad.layout = "keyboard/qwerty_us_numpad.json";
    kNumpad.init();

    window.keyboards = [kb, kNumpad];

    //canvas.addEventListener("keyClick", function (e) {
    //   console.log(kb.selectedKey);
    //});

    $(".button-collapse").sideNav();
    $('#loadCfgTrigger').leanModal({
        ready: function () {
            $("#cfgContent").focus();
        }
    });
    var modal = $("#widthWarning");
    var modalContent = $("#widthWarningContent");
    var width = window.innerWidth;
    $(window).resize(function () {
        width = window.innerWidth;
        if (width < 420) {
            modalContent.html();
            modal.openModal();
        }
    });

    if (width < 420) {
        modalContent.html();
        modal.openModal();
    }


});