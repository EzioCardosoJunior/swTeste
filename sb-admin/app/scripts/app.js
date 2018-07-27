'use strict';
/**
 * @ngdoc overview
 * @name swsApp
 * @description
 * # swsApp
 *
 * Main module of the application.
 */
angular
        .module('swsApp', [
            'oc.lazyLoad',
            'ui.router',
            'ui.bootstrap',
            'angular-loading-bar',
        ])
        .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

                $ocLazyLoadProvider.config({
                    debug: false,
                    events: true,
                });

                $urlRouterProvider.otherwise('/login');

                $stateProvider
                        .state('dashboard', {
                            url: '/dashboard',
                            templateUrl: 'views/dashboard/main.html',
                            resolve: {
                                loadMyDirectives: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(
                                            {
                                                name: 'swsApp',
                                                files: [
                                                    'scripts/directives/header/header.js',
                                                    'scripts/directives/header/header-notification/header-notification.js',
                                                    'scripts/directives/sidebar/sidebar.js',
                                                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js',
                                                    'scripts/directives/header/icones-topo/icones-topo.js'
                                                ]
                                            }),
                                            $ocLazyLoad.load(
                                                    {
                                                        name: 'toggle-switch',
                                                        files: ["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                                                            "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                                                        ]
                                                    }),
                                            $ocLazyLoad.load(
                                                    {
                                                        name: 'ngAnimate',
                                                        files: ['bower_components/angular-animate/angular-animate.js']
                                                    })
                                    $ocLazyLoad.load(
                                            {
                                                name: 'ngCookies',
                                                files: ['bower_components/angular-cookies/angular-cookies.js']
                                            })
                                    $ocLazyLoad.load(
                                            {
                                                name: 'ngResource',
                                                files: ['bower_components/angular-resource/angular-resource.js']
                                            })
                                    $ocLazyLoad.load(
                                            {
                                                name: 'ngSanitize',
                                                files: ['bower_components/angular-sanitize/angular-sanitize.js']
                                            })
                                    $ocLazyLoad.load(
                                            {
                                                name: 'ngTouch',
                                                files: ['bower_components/angular-touch/angular-touch.js']
                                            })
                                }
                            }
                        })
                        .state('dashboard.home', {
                            url: '/home',
                            controller: 'MainCtrl',
                            templateUrl: 'views/dashboard/home.html',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'swsApp',
                                        files: [
                                            'scripts/controllers/main.js',
                                            'scripts/directives/timeline/timeline.js',
                                            'scripts/directives/notifications/notifications.js',
                                            'scripts/directives/chat/chat.js',
                                            'scripts/directives/dashboard/stats/stats.js'
                                        ]
                                    })
                                }
                            }
                        })

                        .state('dashboard.form', {
                            templateUrl: 'views/form.html',
                            url: '/form'
                        })                        
                        
                        .state('dashboard.cadastrosGerais', {
                            templateUrl: 'views/cadastrosGerais.html',
                            url: '/cadastrosGerais',
                            controller: 'cadastrosGeraisCtrl',

                        })
                        .state('dashboard.iconesTopo', {
                            templateUrl: 'scripts/directives/iconesTopo.html',
                            url: '/iconesTopo',
                            controller: 'iconesTopoCtrl',

                        })
                        .state('dashboard.blank', {
                            templateUrl: 'views/pages/blank.html',
                            url: '/blank'
                        })
                        .state('login', {
                            templateUrl: 'views/pages/login.html',
                            url: '/login'
                        })
                        
                        .state('dashboard.agenda', {
                            templateUrl: 'views/agenda.html',
                            url: '/agenda',
                            controller: 'agendaCtrl',
                            resolve: {
                                loadMyFile: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                                name: 'swsApp',
                                                files: ['scripts/controllers/agendaCtrl.js'],

                                            })
                                }
                            }
                        })
                        .state('dashboard.areaRepresentante', {
                            templateUrl: 'views/areaRepresentante.html',
                            url: '/areaRepresentante',
                            controller: 'areaRepresentanteCtrl',
                            resolve: {
                                loadMyFile: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                                name: 'swsApp',
                                                files: ['scripts/controllers/areaRepresentanteCtrl.js'],

                                            })
                                }
                            }
                        })
                        .state('dashboard.gestaoCompras', {
                            templateUrl: 'views/gestaoCompras.html',
                            url: '/gestaoCompras',
                            controller: 'gestaoComprasCtrl',
                            resolve: {
                                loadMyFile: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                                name: 'swsApp',
                                                files: ['scripts/controllers/gestaoComprasCtrl.js'],

                                            })
                                }
                            }
                        })
                        .state('dashboard.contabilidade', {
                            templateUrl: 'views/contabilidade.html',
                            url: '/contabilidade',
                            controller: 'contabilidadeCtrl',
                            resolve: {
                                loadMyFile: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                                name: 'swsApp',
                                                files: ['scripts/controllers/contabilidadeCtrl.js'],

                                            })
                                }
                            }
                        })
                        .state('dashboard.documentacao', {
                            templateUrl: 'views/documentacao.html',
                            url: '/documentacao',
                            controller: 'documentacaoCtrl',
                            resolve: {
                                loadMyFile: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                                name: 'swsApp',
                                                files: ['scripts/controllers/documentacaoCtrl.js'],

                                            })
                                }
                            }
                        })
                        .state('dashboard.exportacaoDados', {
                            templateUrl: 'views/exportacao.html',
                            url: '/exportacao',
                            controller: 'exportacaoCtrl',
                            resolve: {
                                loadMyFile: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                                name: 'swsApp',
                                                files: ['scripts/controllers/exportacaoCtrl.js'],

                                            })
                                }
                            }
                        })
                        .state('dashboard.importacaoDados', {
                            templateUrl: 'views/importacaoDados.html',
                            url: '/importacaoDados',
                            controller: 'importacaoDadosCtrl',
                            resolve: {
                                loadMyFile: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                                name: 'swsApp',
                                                files: ['scripts/controllers/importacaoDadosCtrl.js'],

                                            })
                                }
                            }
                        })
                        .state('dashboard.administracao', {
                            templateUrl: 'views/administracao.html',
                            url: 'views/administracao.html',
                            controller: 'administracaoCtrl',                        
                            resolve: {
                                loadMyFile: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                                name: 'swsApp',
                                                files: ['scripts/controllers/administracaoCtrl.js'],

                                            })
                                }
                            }
                        })
                        .state('dashboard.pcp', {
                            templateUrl: 'views/pcp.html',
                            url: 'views/pcp.html',
                            controller: 'pcpCtrl',                        
                            resolve: {
                                loadMyFile: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                                name: 'swsApp',
                                                files: ['scripts/controllers/pcpCtrl.js'],

                                            })
                                }
                            }
                        })
                        .state('dashboard.sistema', {
                            templateUrl: 'views/sistema.html',
                            url: 'views/sistema.html',
                            controller: 'sistemaCtrl',                        
                            resolve: {
                                loadMyFile: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                                name: 'swsApp',
                                                files: ['scripts/controllers/sistemaCtrl.js'],

                                            })
                                }
                            }
                        })
                        
                        .state('dashboard.vendaBalcao', {
                            templateUrl: 'views/vendaBalcao.html',
                            url: 'views/vendaBalcao.html',
                            controller: 'vendaBalcaoCtrl',                        
                            resolve: {
                                loadMyFile: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                                name: 'swsApp',
                                                files: ['scripts/controllers/vendaBalcaoCtrl.js'],

                                            })
                                }
                            }
                        })
                        
                        .state('dashboard.chart', {
                            templateUrl: 'views/chart.html',
                            url: '/chart',
                            controller: 'ChartCtrl',
                            resolve: {
                                loadMyFile: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'chart.js',
                                        files: [
                                            'bower_components/angular-chart.js/dist/angular-chart.min.js',
                                            'bower_components/angular-chart.js/dist/angular-chart.css'
                                        ]
                                    }),
                                            $ocLazyLoad.load({
                                                name: 'swsApp',
                                                files: ['scripts/controllers/chartContoller.js'],

                                            })
                                }
                            }
                        })
                        .state('dashboard.table', {
                            templateUrl: 'views/table.html',
                            url: '/table'
                        })
                        .state('dashboard.panels-wells', {
                            templateUrl: 'views/ui-elements/panels-wells.html',
                            url: '/panels-wells'
                        })
                        .state('dashboard.buttons', {
                            templateUrl: 'views/ui-elements/buttons.html',
                            url: '/buttons'
                        })
                        .state('dashboard.notifications', {
                            templateUrl: 'views/ui-elements/notifications.html',
                            url: '/notifications'
                        })
                        .state('dashboard.typography', {
                            templateUrl: 'views/ui-elements/typography.html',
                            url: '/typography'
                        })
                        .state('dashboard.icons', {
                            templateUrl: 'views/ui-elements/icons.html',
                            url: '/icons'
                        })
                        .state('dashboard.grid', {
                            templateUrl: 'views/ui-elements/grid.html',
                            url: '/grid'
                        })
            }]);


