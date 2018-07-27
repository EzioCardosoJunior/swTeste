'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('swsApp')
        .directive('iconesTopo', function () {
            return {
                templateUrl: 'scripts/directives/header/icones-topo/icones-topo.html',
                restrict: 'E',
                replace: true,

                scope: {
                },
                
                controller: function ($scope) {
                    $scope.titulo = sessionStorage.getItem('titulo');
                    alert($scope.titulo);

                }

            }

        });




