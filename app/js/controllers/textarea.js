angular.module('textarea', [])
    .controller('textAreaCtrl', ['$scope', 'globalData', '$sce', function ($scope, globalData, $sce) {


        //bind "F12" "buy galilar; buy famas;"
        //console.log(globalData);
        $scope.$watch(function () {
            //var loadout = "";
            //for (var type in $scope.dataGlobal.weapon) {
            //    var equivalent = "";
            //    if ($scope.dataGlobal.weapon[type].equivalent !== undefined && $scope.dataGlobal.weapon[type].equivalent !== null)
            //        equivalent = "; " + $scope.dataGlobal.tool + ' ' + $scope.dataGlobal.weapon[type].equivalent;
            //    if ($scope.dataGlobal.weapon[type].value !== undefined)
            //        loadout += $scope.dataGlobal.tool + ' ' + $scope.dataGlobal.weapon[type].value + equivalent + "; ";
            //}
            //$scope.dataGlobal.bind = 'bind "' + $scope.dataGlobal.key.value + '" "' + loadout + '"';

            var binds = $scope.globalData.binds;
            var code = "";
            for (var i in binds) {
                //console.log(binds[i]);
                if (binds[i] !== null) {
                    if (binds[i].toString() !== "") {
                        code += binds[i].toString() + "\n";
                    }
                }
            }
            $scope.globalData.generatedCode = code;
        })
    }]);