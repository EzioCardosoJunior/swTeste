'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('swsApp')
        .directive('timeline', function () {
            return {
                templateUrl: 'scripts/directives/timeline/timeline.html',
                restrict: 'E',
                replace: true,

                scope: {
                },
                controller: function ($scope) {

//                    JQUERY TABELA TIMELINE

                    $(document).ready(function () {
                        $('#tabelaInicialP').DataTable({
                             "searching": false,
                            "language": {
                                "lengthMenu": "Exibindo _MENU_ registros por página",
                                "zeroRecords": "Nenhum resultado encontrado",
                                "info": "Mostrando _PAGE_ de _PAGES_",
                                "infoEmpty": "Sem resultados",
                                "infoFiltered": "(filtrando de  _MAX_ registros)"
                                
                            }

                        });
                    });




//                    FIM JQUERY TABELA TIMELINE
                }

            }
        });
