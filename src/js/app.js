'use strict';
angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    'ui.load',
    'ui.jq',
    'ui.validate',
    'oc.lazyLoad',
    'pascalprecht.translate',
    'angular-growl',//toaster消息
    'common.services.bootstrap',//启动服务
    'common.services.lsespHttpHandler',//http服务
    'lsesp.common.tpl',//通用模板
    'lsesp.common.dialog',//通用modal dialog
    'viewframework',//桌面框架
    'poseidon.service.factory',//poseidon平台服务
    'lsesp.customer'
]);
