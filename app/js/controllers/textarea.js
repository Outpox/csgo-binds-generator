angular.module('textarea', [])
    .controller('textAreaCtrl', ['$scope', function ($scope) {

        $scope.$watch(function () {
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