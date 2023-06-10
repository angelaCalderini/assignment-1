(function(){
  'use strict';
  angular.module("LunchCheck",[])
  .controller("LunchCheckController",LunchCheckController);

  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope)
    {
        $scope.textInput = "";
        $scope.message = "";
        $scope.submit = function() {
            if ($scope.textInput.length == 0) {
              $scope.messageStyle = {"color":"red","border-color": "red"};
                $scope.message = "Please enter data first";
            }
            else {
                var array = $scope.textInput.split(',');
                $scope.messageStyle = {"color":"green","border-color":'green'};
                if (array.length <= 3) {
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too much!";
                }
            }

        };
      }
  }
)();
