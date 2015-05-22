(function () {
    var app = angular.module('csgoBinds', ['ngAnimate', 'ngStorage']);

    var keyGlobal = {};
    var weaponGlobal = {};
    var toolGlobal = "use";

    app.controller('WeaponsCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('../data/weapons.json').success(function (data) {
            $scope.weapons = data;
            $scope.imgPath = data[data.length - 1].img_path;
        });

        $scope.checkbox = true;

        $scope.search = function (item) {
            return (angular.lowercase(item.value).indexOf($scope.query || '') !== -1 || angular.lowercase(item.value).indexOf($scope.query || '') !== -1);
        };

        $scope.selectWeapon = function (weapon, type) {
            if ($scope.weaponIsSelected(weapon, type)) {
                keyGlobal[type] = {};
            } else {
                keyGlobal[type] = weapon;
            }
            console.log(keyGlobal);
        };

        $scope.weaponIsSelected = function (weapon, type) {
            return keyGlobal[type] === weapon;
        };
    }]);

    app.controller('keyboardCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
        $scope.keyboard = $localStorage.$default({
            file: "keyboard_US"
        });

        $scope.keyboardList = [];
        $http.get('../keyboard/keyboardList.json').success(function (data) {
            $scope.keyboardList = data;
            console.info("Keyboard layout list loaded");
        });

        $scope.updateKeyboard = function () {
            $http.get('../keyboard/' + $scope.keyboard.file + '.json').success(function (data) {
                $scope.keyboardData = data;
                console.info("Keyboard layout changed");
            });
        };

        $scope.selectTool = function (tool) {
            toolGlobal = tool;
        };

        $scope.toolIsSelected = function (tool) {
            console.log(toolGlobal === tool);
            return toolGlobal === tool;
        };

        /**
         * Src: http://stackoverflow.com/a/987376/3560404
         */
        $scope.selectTextArea = function () {
            var element = "textArea";
            var doc = document
                , text = doc.getElementById(element)
                , range, selection
                ;
            if (doc.body.createTextRange) {
                range = document.body.createTextRange();
                range.moveToElementText(text);
                range.select();
            } else if (window.getSelection) {
                selection = window.getSelection();
                range = document.createRange();
                range.selectNodeContents(text);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        };

        $scope.updateKeyboard();
    }]);

    app.controller('textAreaCtrl', ['$scope', function ($scope) {
        $scope.cfg = "lallalal";
    }]);
})
();

$(function () {
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