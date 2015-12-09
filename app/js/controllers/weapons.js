angular.module('weapons', [])
.controller('WeaponsCtrl', ['$scope', '$http', function ($scope, $http) {
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