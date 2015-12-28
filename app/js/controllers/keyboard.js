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

	$scope.globalData = globalData.data;

	var canvas = document.getElementsByTagName("canvas");
	for (var i = 0; i < canvas.length; i++) {
		canvas[i].addEventListener("keyClick", function (e) {
			keyboardEvent(e);
		});
	}

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
		Materialize.toast('Key reset !', 800);
		console.log($scope.globalData);
	};

	function keyboardEvent(event) {
		var key = event.detail.selectedKey.content !== undefined ? event.detail.selectedKey : undefined;
        deselectAllOtherKeys(event.detail);
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
	}

    function deselectAllOtherKeys(detail) {
        for (var i = 0; i < window.keyboards.length; i++) {
            for (var j = 0; j < window.keyboards[i].lines.length; j++) {
                for (var k = 0; k < window.keyboards[i].lines[j].keys.length; k++) {
                    if (window.keyboards[i].lines[j].keys[k] !== detail.selectedKey){
                        window.keyboards[i].lines[j].keys[k].selected = false;
                    }
                }
            }
            //Re-drawing from the library is not optimized but it is necessary because otherwise the keyboard renders weirdly
            window.keyboards[i].reDraw();
        }
    }

    /**
     * Return the reference of the key which value is the parameter given or null if none
     * @param value
     */
    function getKeyRefByValue(value) {
        //todo
    }

    /**
     * Src: http://stackoverflow.com/a/987376/3560404
     */
     $scope.selectTextArea = function () {
     	var element = "textArea";
     	var doc = document,
            text = doc.getElementById(element),
            range,
            selection;
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