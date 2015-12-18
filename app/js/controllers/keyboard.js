angular.module('keyboard', [])
.controller('keyboardCtrl', ['$scope', '$http', '$localStorage' , 'globalData', function ($scope, $http, $localStorage, globalData) {
    // $scope.keyboard = $localStorage.$default({file: "keyboard_US"});
    // $scope.keyboardList = [];
    // $http.get('keyboard/keyboardList.json').success(function (data) {
    //     $scope.keyboardList = data;
    // });

    // $scope.updateKeyboard = function () {
    //     $http.get('keyboard/' + $scope.keyboard.file + '.json').success(function (data) {
    //         $scope.keyboardData = data;
    //         console.info("Keyboard layout changed");
    //     });
    // };

	console.log(globalData);
	$scope.globalData = globalData.data;

	var canvas = document.getElementById("keyboard");
	canvas.addEventListener("keyClick", function (e) {
        var key = e.detail.content !== undefined ? e.detail : undefined;

		console.log(key);

		if (key !== undefined) {
			if (isKeyBinded(key)) {
				$scope.globalData.currentBind = getBindByKey(key);
			}
			else {
				if (!$scope.globalData.currentBind.loadout.isEmpty()) {
					$scope.globalData.currentBind = new Bind(key);
				}
				else {
					$scope.globalData.currentBind.setKey(key);
				}
			}
		}
		else {
			$scope.globalData.currentBind = new Bind();
		}
		$scope.$apply();
		console.log($scope.globalData.currentBind);
	});

    $scope.selectTool = function (tool) {
    	$scope.globalData.currentBind.tool = tool;
    };

    $scope.toolIsSelected = function (tool) {
    	return $scope.globalData.currentBind.tool === tool;
    };

	$scope.reset = function () {
		//$scope.globalData.binds = [];
		$scope.globalData.currentBind = new Bind($scope.globalData.currentBind.key);
		resetBinds();
		console.log($scope.globalData);
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

    // $scope.updateKeyboard();
}]);