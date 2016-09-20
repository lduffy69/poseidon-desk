angular.module('viewframework', ['businessNav', 'topbar', 'aside', 'productNav'])
//桌面框架设置
    .factory('viewFrameworkSetting', ["$rootScope", "$state", "$q", function (t, n, r) {
        if (!t.viewFrameworkConfig) {
            var s = {
                hideTopbar: !1,
                hideSidebar: !1,
                disableNavigation: !1,
                embed: !1,
                sidebar: "mini",
                productId: "",
                productNavBar: "col-1"
            };
            window.viewFrameworkConfig = t.viewFrameworkConfig = s
        }
        return {
            config: t.viewFrameworkConfig,
            setProductNavBar: function (e) {
                t.viewFrameworkConfig.productNavBar = e
            }
        }
    }])
    .directive("viewFramework", function () {
        return {
            restrict: "A",
            replace: true,
            scope: true,
            transclude: true,
            templateUrl: "tpl/viewframework/viewframework.html",
            controller: ["$scope", "viewFrameworkSetting", function ($scope, viewFrameworkSetting) {
                $scope.config = viewFrameworkSetting.config;
                $scope.collapseProductNavbar = function () {
                    var e = $scope.config.productNavBar;
                    e == "col-1" ? e = "none" : e = "col-1", $scope.config.productNavBar = e
                }
            }
            ],
            link: function (e, t, n) {
            }
        }
    })