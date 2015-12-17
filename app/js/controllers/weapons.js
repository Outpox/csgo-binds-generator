angular.module('weapons', [])
    .controller('WeaponsCtrl', ['$scope', '$http', 'globalData', function ($scope, $http, globalData) {

        $scope.globalData = globalData.data;

        $http.get('data/weapons.json').success(function (data) {
            $scope.weapons = data;
            $scope.imgPath = data[data.length - 1].img_path;
        });

        $scope.checkbox = true;

        $scope.search = function (item) {
            return (angular.lowercase(item.value).indexOf($scope.query || '') !== -1 || angular.lowercase(item.value).indexOf($scope.query || '') !== -1);
        };

        $scope.selectWeapon = function (weapon, type) {
            console.log(weapon);
            console.log(type);
            console.log($scope.globalData.currentBind);
            if ($scope.globalData.currentBind.key !== undefined) {
                if ($scope.weaponIsSelected(weapon, type)) {
                    $scope.globalData.currentBind.loadout.setWeapon(weapon, type);
                } else {
                    $scope.globalData.weapon[type] = weapon;
                }
            }
        };

        $scope.weaponIsSelected = function (weapon, type) {
            return $scope.dataGlobal.weapon[type] === weapon;
        };
    }]);