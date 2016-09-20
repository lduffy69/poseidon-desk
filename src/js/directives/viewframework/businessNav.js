angular.module('businessNav', [])
    .factory("businessNavBarSetting", ["$rootScope", "$state", function (t, n) {
        function r(t) {
            var n = {};
            return e.forEach(t, function (t) {
                t.childs ? e.forEach(t.childs, function (e) {
                    !e.outlet && e.state && (n[e.state] = e)
                }) : t.state && !t.outlet && (n[t.state] = t)
            }), n
        }

        function setTitle(title) {
            t.businessNavBarConfig.title = title;
        }

        function setMainNav(mainNav) {
            t.businessNavBarConfig.mainNav = mainNav;
        }

        function setSubNav(backNav, subNav) {
            t.businessNavBarConfig.backNav = backNav;
            t.businessNavBarConfig.subNav = subNav
        }

        function getSubNav() {
            return t.businessNavBarConfig.subNav
        }

        function a(e) {
            t.businessNavBarConfig.extend = e
        }

        function f() {
            return t.businessNavBarConfig.transcludedHtml
        }

        function l(e) {
            t.businessNavBarConfig.transcludedHtml = e
        }

        return t.businessNavBarConfig || (t.businessNavBarConfig = {
            title: "",
            mainNav: [],
            subNav: [],
            backNav: "",
            mainNavMapping: [],
            subNavMapping: [],
            extend: {},
            transcludedHtml: ""
        }), {
            setTitle: setTitle,
            setMainNav: setMainNav,
            setSubNav: setSubNav,
            //setTranscludedHtml: l,
            //updateExtend: a,
            getSubNav: getSubNav,
            //getTranscludedHtml: f
        }
    }
    ])
    .directive("businessNav", function () {
        return {
            restrict: "A",
            replace: !0,
            scope: !0,
            templateUrl: "tpl/viewframework/productNav.html",
            controller: ["$rootScope", "$scope", "$state", "businessNavBarSetting", "$timeout", function ($rootScope, $scope, $state, s, o) {
                $rootScope.$watch("businessNavBarConfig", function (e) {
                    $scope.config = e;
                })
                $scope.navScene = 'main';
                // var a = function (t) {
                //     if (t.state && t.highlightConsiderParams && t.params && i.params && i.includes(t.state)) {
                //         var n = !0;
                //         return e.forEach(t.params, function (e, t) {
                //             t && n && (n = i.params[t] == e)
                //         }), n
                //     }
                //     if (!t.includes && t.state)
                //         return i.includes(t.state);
                //     if (t.includes) {
                //         var r = t.includes;
                //         if (e.isArray(r)) {
                //             for (var s = 0; s < r.length; s++)
                //                 if (i.includes(r[s]))
                //                     return !0;
                //             return !1
                //         }
                //         return i.includes(r)
                //     }
                // };
                // $scope.checkActive = function (e, t) {
                //     var n = a(e);
                //     return n && r.navScene != t && o(function () {
                //         r.navScene = t
                //     }, 20), n
                // };
                $scope.backNav = function () {
                    $state.go($rootScope.businessNavBarConfig.backNav)
                };
            }
            ],
            link: function (e, t, n) {
            }
        }
    })
/*.directive("productNavLink", ["$compile", function (e) {
 return {
 restrict: "A",
 scope: {
 item: "="
 },
 replace: !0,
 controller: ["$rootScope", "$scope", "$state", "businessNavBarSetting", function (e, t, n, r) {
 t.go = function (e, t) {
 n.go(e, t || {})
 }, t.extend || (t.extend = {})
 }
 ],
 link: function (t, n, r) {
 var i = "";
 t.item.childs ? i += '<a href="" role="treeitem" aria-haspopup="true" aria-label="press enter to expand" ng-click="item.showChild=!item.showChild">' : t.item.outlet && t.item.outlet.state ? i += '<a href="" role="treeitem" ui-sref="{{item.outlet.state}}({{item.outlet.params||\'\'}})">' : t.item.outlet && t.item.outlet.url ? i += '<a href="{{item.outlet.url}}" role="treeitem" target="{{item.outlet.target || \'_blank\'}}">' : t.item.state && (i += '<a href="" role="treeitem" ui-sref="{{item.state}}({{item.params||\'\'}})">'), i += '<div class="nav-icon">', t.item.childs && (i += "<span ng-class=\"{'icon-arrow-down':item.showChild,'icon-arrow-right':!item.showChild}\"></span>"), i += '</div><div class="nav-title" ng-bind="item.title"></div>', t.item.extend && (i += '<div class="nav-extend">' + t.item.extend + "</div>"), i += "</a>", n.html(i), e(n.contents())(t)
 }
 }
 }
 ])*/