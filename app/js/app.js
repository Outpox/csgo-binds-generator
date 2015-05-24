(function () {
    var app = angular.module('csgoBinds', ['ngAnimate', 'ngStorage']);


    app.controller('appCtrl', ['$scope', function ($scope) {
        $scope.dataGlobal = {
            key: {value: ""},
            weapon: {
                "Pistols": {},
                "Rifles": {},
                "SMGs": {},
                "Heavies": {},
                "Grenades": {},
                "Equipment": {}
            },
            tool: "buy"
        };
    }]);

    app.controller('WeaponsCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('data/weapons.json').success(function (data) {
            $scope.weapons = data;
            $scope.imgPath = data[data.length - 1].img_path;
        });

        $scope.checkbox = true;

        $scope.search = function (item) {
            return (angular.lowercase(item.value).indexOf($scope.query || '') !== -1 || angular.lowercase(item.value).indexOf($scope.query || '') !== -1);
        };

        $scope.selectWeapon = function (weapon, type) {
            if ($scope.weaponIsSelected(weapon, type)) {
                $scope.dataGlobal.weapon[type] = {};
            } else {
                $scope.dataGlobal.weapon[type] = weapon;
            }
        };

        $scope.weaponIsSelected = function (weapon, type) {
            return $scope.dataGlobal.weapon[type] === weapon;
        };
    }]);

    app.controller('keyboardCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
        $scope.keyboard = $localStorage.$default({file: "keyboard_US"});
        $scope.keyboardList = [];
        $http.get('keyboard/keyboardList.json').success(function (data) {
            $scope.keyboardList = data;
        });

        $scope.updateKeyboard = function () {
            $http.get('keyboard/' + $scope.keyboard.file + '.json').success(function (data) {
                $scope.keyboardData = data;
                console.info("Keyboard layout changed");
            });
        };

        $scope.selectKey = function (key) {
            if ($scope.keyIsSelected(key)) {
                $scope.dataGlobal.key = {};
            }
            else {
                $scope.dataGlobal.key = key;
            }
        };

        $scope.keyIsSelected = function (key) {
            return $scope.dataGlobal.key === key;
        };

        $scope.selectTool = function (tool) {
            $scope.dataGlobal.tool = tool;
        };

        $scope.toolIsSelected = function (tool) {
            return $scope.dataGlobal.tool === tool;
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
        //bind "F12" "buy galilar; buy famas;"
        $scope.$watch(function () {
            var loadout = "";
            for (var type in $scope.dataGlobal.weapon) {
                var equivalent = "";
                if ($scope.dataGlobal.weapon[type].equivalent !== undefined && $scope.dataGlobal.weapon[type].equivalent !== null)
                    equivalent = "; " + $scope.dataGlobal.tool + ' ' + $scope.dataGlobal.weapon[type].equivalent;
                if ($scope.dataGlobal.weapon[type].value !== undefined)
                    loadout += $scope.dataGlobal.tool + ' ' + $scope.dataGlobal.weapon[type].value + equivalent + "; ";
            }
            $scope.dataGlobal.bind = 'bind "' + $scope.dataGlobal.key.value + '" "' + loadout + '"';
        })
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