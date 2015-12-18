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
            var currentBind = $scope.globalData.currentBind;
            if (currentBind.key !== undefined) {
                if (currentBind.loadout.isSelected(weapon, type)) {
                    //The weapon is supposed to be removed here
                    currentBind.loadout.removeWeapon(weapon, type);
                } else {
                    currentBind.loadout.setWeapon(weapon, type);
                }
            }
        };

        $scope.weaponIsSelected = function (weapon, type) {
            return $scope.globalData.currentBind.loadout.isSelected(weapon, type);
            //return $scope.dataGlobal.weapon[type] === weapon;
        };
    }]);