(function(){
  'use strict';
  angular.module("LunchCheck",[])
  .controller("LunchCheckController",LunchCheckController);

  LunchCheckController.$inject=[$scope];
  function LunchCheckController($scope)
    {

        $scope.buttonSubmit = function(){
          if($scope.textInput = ""){
            $scope.resultText="Please enter data first";
          }
          else {
            const sArray= $scope.textInput.split(",");
            if(sArray.length<=3){
              $scope.resultText="Enjoy!";
            }
            else if (rray.length>3) {
              $scope.resultText=  "Too much!";
            }
          }

        };

  }


  }
)();
