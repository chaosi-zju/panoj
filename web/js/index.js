
var app = angular.module('index',[]);

app.controller('mainController', ['$scope', '$http', function ($scope, $http) {    

    doAjax($http, 'GET', '/getTodayQuestions', function (result) {
        $scope.questions = result.questions;
        $scope.acnum = result.acnum;
        $scope.acshouldnum = result.acshouldnum;
        $scope.shouldnum = result.shouldnum;
    }, function () {
        $scope.questions = todayQuestions.questions;
        $scope.acnum = todayQuestions.acnum;
        $scope.acshouldnum = todayQuestions.acshouldnum;
        $scope.shouldnum = todayQuestions.shouldnum;
    });

}]);