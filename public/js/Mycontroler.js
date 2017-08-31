(function() {
    var myapp = angular.module('myApp');
        myapp.controller("GCtrl", function($http,$scope) {
            $scope.gethttp = function (){
                    $http.get('http://opendatacanarias.es/datos/dataset/df18833a-0796-45c8-9364-647a27197852/resource/abd9933f-c484-43e3-8e8a-e225994439f6/download/restauracion.json').then(function(value) {
                        $scope.info = value;
                });
            };
        });
}());
