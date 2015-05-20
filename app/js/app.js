(function () {
    var app = angular.module('csgoBinds', ['ngAnimate']);

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
})();

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