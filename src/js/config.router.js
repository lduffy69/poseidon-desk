'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                //默认跳转home页面
                $urlRouterProvider
                    .otherwise('/');
                $stateProvider
                    .state('home', {
                        url: '/',
                        templateUrl: 'tpl/lsesp_home.html',
                        controller: ['viewFrameworkSetting', function (t) {
                            t.setProductNavBar("disabled");
                        }]
                    })
                    .state('customer', {
                        abstract: true,
                        url: '/customer',
                        templateUrl: 'tpl/crm/layout.html'
                    })
                    .state('customer.portal', {
                        url: '/portal',
                        templateUrl: 'tpl/crm/customer_portal.html'
                    })
                    .state("customer.dashboard", {
                        url: '/dashboard',
                        views: {
                            '': {
                                templateUrl: 'tpl/crm/customer_dashboard.html',
                                controller: "CustomerCtrl"
                            },
                            'list@customer.dashboard': {
                                templateUrl: 'tpl/crm/customer_list.html'
                            }
                        }
                    })
                    .state("customer.dashboard.detail", {
                        url: '^/customer/{custId}/detail',
                        views: {
                            '': {
                                templateUrl: 'tpl/crm/customer_detail.html'
                            },
                            'header@customer.dashboard.detail': {
                                templateUrl: 'tpl/crm/customer_view_header.html',
                                controller: 'CustBaseController'
                            },
                            'base@customer.dashboard.detail': {
                                templateUrl: 'tpl/crm/customer_view_baseinfo.html',
                                controller: 'CustBaseController'
                            },
                            'contact@customer.dashboard.detail': {
                                templateUrl: 'tpl/crm/customer_view_contactinfo.html',
                                controller: 'CustContactController'
                            },
                            'account@customer.dashboard.detail': {
                                templateUrl: 'tpl/crm/customer_view_accountinfo.html',
                                controller: 'CustAccountController'
                            },
                            'demand@customer.dashboard.detail': {
                                templateUrl: 'tpl/crm/customer_view_powerinfo.html',
                                controller: 'CustDemandController'
                            },
                            'credentials@customer.dashboard.detail': {
                                templateUrl: 'tpl/crm/customer_view_credentials.html',
                                controller: 'CustCredentialsController'
                            }
                        },
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('bootstrapLightbox').then(function () {
                                        return $ocLazyLoad.load(['angularFileUpload', 'ng-file-model']);
                                    })
                                }]
                        }
                    })
                    .state('user', {
                        url: '/user',
                        template: '<div ui-view class="fade-in-up"></div>'
                    })
                    .state('user.changepass', {
                        url: '/changepass',
                        templateUrl: 'tpl/changepass.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('toaster').then(
                                        function () {
                                            return $ocLazyLoad.load('js/module/changepass.js');
                                        }
                                    );
                                }]
                        }
                    })
            }
        ]
    );