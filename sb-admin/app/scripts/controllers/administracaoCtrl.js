'use strict';
/**
 * @ngdoc function
 * @name swsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swsApp
 */
angular.module('swsApp')
  .controller('administracaoCtrl', function($scope) {
    
    
    sessionStorage.setItem("titulo", "Administração");
    
  
});