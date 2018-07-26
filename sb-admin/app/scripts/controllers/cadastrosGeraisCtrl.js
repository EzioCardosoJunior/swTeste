'use strict';
/**
 * @ngdoc function
 * @name swsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swsApp
 */
angular.module('swsApp')
  .controller('cadastrosGeraisCtrl', function($scope, $rootScope) {
    
    
    sessionStorage.setItem("titulo", "Cadastros Gerais");
    alert ("oba");
  
    $scope.titulo = $rootScope.name;
    
});