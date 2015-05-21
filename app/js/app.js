(function () {
    var app = angular.module('csgoBinds', ['ngAnimate', 'ngStorage']);

    app.controller('WeaponsCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('../data/weapons.json').success(function (data) {
            $scope.weapons = data;
            $scope.imgPath = data[data.length - 1].img_path;
        });

        $scope.checkbox = true;

        $scope.search = function (item) {
            return (angular.lowercase(item.value).indexOf($scope.query || '') !== -1 || angular.lowercase(item.value).indexOf($scope.query || '') !== -1);
        };

        $scope.bla = function (weapon) {
            Materialize.toast('You clicked on the ' + weapon.name, 2000);
            $scope.cfg += weapon.name;
        };

        $scope.cfg = "lalal";

        $scope.template = {
            url: "./template/keyboard.html"
        };
    }]);

    app.controller('keyboardCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
        $scope.keyboard = $localStorage.$default({
            file: "keyboard_US"
        });

        $scope.keyboardList = [
            {
                "file": "keyboard_US",
                "lang": "QWERTY"
            },
            {
                "file": "keyboard_FR",
                "lang": "AZERTY"
            }
        ];

        $scope.bla = function (key) {
            Materialize.toast('You clicked on the "' + key.value + '" key', 2000);
        };

        $scope.updateKeyboard = function () {
            $http.get('../keyboard/' + $scope.keyboard.file + '.json').success(function (data) {
                $scope.keyboardData = data;
                console.info("Keyboard layout changed");
            });
        };

        $scope.updateKeyboard();

    }]);
})
();

$(function () {
    $(".button-collapse").sideNav();
    $('select').material_select();
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