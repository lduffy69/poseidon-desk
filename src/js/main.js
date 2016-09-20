'use strict';

/* Controllers */

angular.module('app')
    .controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window', 'poseidonRequest',
        function ($scope, $translate, $localStorage, $window, poseidonRequest) {
            // add 'ie' classes to html
            var isIE = !!navigator.userAgent.match(/MSIE/i);
            isIE && angular.element($window.document.body).addClass('ie');
            isSmartDevice($window) && angular.element($window.document.body).addClass('smart');

            // config
            $scope.app = {
                name: 'LSESP售电平台',
                version: '1.0.0',
                // for chart colors
                color: {
                    primary: '#7266ba',
                    info: '#23b7e5',
                    success: '#27c24c',
                    warning: '#fad733',
                    danger: '#f05050',
                    light: '#e8eff0',
                    dark: '#3a3f51',
                    black: '#1c2b36'
                },
                settings: {
                    themeID: 1,
                    navbarHeaderColor: 'bg-black',
                    navbarCollapseColor: 'bg-white-only',
                    asideColor: 'bg-black',
                    headerFixed: true,
                    asideFixed: false,
                    asideFolded: false,
                    asideDock: false,
                    container: false
                }
            }
            // angular translate
            $scope.lang = {isopen: false};
            $scope.langs = {en: 'English', de_DE: 'German', it_IT: 'Italian', cn: 'China'};
            $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";
            $scope.setLang = function (langKey, $event) {
                // set the current lang
                $scope.selectLang = $scope.langs[langKey];
                // You can change the language during runtime
                $translate.use(langKey);
                $scope.lang.isopen = !$scope.lang.isopen;
            };

            //userinfo
            poseidonRequest.getUserInfo().then(function (resp) {
                    $scope.userinfo = resp.data.resultValue;
                }
                // , function (resp, status, headers, config) {
                //     if (resp.status == '401' || resp.status == 401) {
                //         window.location.href = 'http://172.19.18.90:8080/platform-server/pt_login/login';
                //     }
                // }
            );
            //sysinfo
            var logoutUrl, theme;
            poseidonRequest.getSysInfo().then(function (resp) {
                logoutUrl = resp.data[0].logoutUrl;
                // save theme settings to local storage
                if (angular.isDefined($localStorage.settings)) {
                    $scope.app.settings = $localStorage.settings;
                } else {
                    theme = data[0].theme.split("|");
                    $scope.app.settings.navbarHeaderColor = theme[0];
                    $scope.app.settings.navbarCollapseColor = theme[1];
                    $scope.app.settings.asideColor = theme[2];
                    $localStorage.settings = $scope.app.settings;
                }
                $scope.$watch('app.settings', function () {
                    if ($scope.app.settings.asideDock && $scope.app.settings.asideFixed) {
                        // aside dock and fixed must set the header fixed.
                        $scope.app.settings.headerFixed = true;
                    }
                    // save to local storage
                    $localStorage.settings = $scope.app.settings;
                }, true);
            });
            poseidonRequest.getSysDef().then(function (resp) {
                $scope.app.name = resp.data.resultValue.logoName;
                if (resp.data.resultValue.logoURL)
                    $scope.app.logo = resp.data.resultValue.logoURL;
                else
                    $scope.app.logo = 'img/poseidon-logo-white.png';
            });
            $scope.logout = function () {
                window.location.href = logoutUrl;
            }


            //智能设备检测
            function isSmartDevice($window) {
                // Adapted from http://www.detectmobilebrowsers.com
                var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
                // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
                return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
            }

        }]);