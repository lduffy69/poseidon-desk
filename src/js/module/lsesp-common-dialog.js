angular.module('lsesp.common.dialog', [])
    .provider("commonDialogConfig", function () {
        var conf = {
            defaultButtonConfig: [{
                result: !0,
                label: s,
                cssClass:'btn-info'
            }, {
                result: !1,
                label: o,
                cssClass: "btn-default"
            }
            ]
        };
        return {
            setButtonLabels: function (t) {
                angular.forEach(conf.defaultButtonConfig, function (e, n) {
                    e.label = t[n]
                })
            },
            // setProviderOptions: function (t) {
            //     angular.extend(e, t)
            // },
            $get: function () {
                return conf
            }
        }
    })
    .factory("commonDialog", ["$rootScope", "$modal", "$modalStack", "commonDialogConfig", function (e, t, r, i) {
        var s = function (e) {
            var conf = {
                backdrop: "static"
            }, rConf = angular.extend({}, conf, e), modalInstance = t.open(rConf);
            return modalInstance;
        }, o = function (templateUrl, t, r) {
            var i, o, u = {
                templateUrl: templateUrl,
                resolve: {
                    passedObject: function () {
                        return r;
                    }
                },
                controller: ["$scope", "$modalInstance", "$rootScope", "$modalStack", "passedObject", function (e, r, s, u, a) {
                    o = e.$on("$locationChangeSuccess", function () {
                        i && e._dialogShow == 1 && e.close(!1)
                    });
                    var f = "icon-warning-2";
                    a != undefined && a.iconClass && (f = a.iconClass);
                    var l = "text-warning";
                    a != undefined && a.iconColor && (l = a.iconColor), e.iconClass = f + " " + l, e._passedObject = a, e._dialogShow = !0, e.close = function (t) {
                        e._dialogShow = !1, r.close(t), i = null
                    }, angular.isFunction(t) && t(e)
                }
                ]
            };
            r && r.windowClass && (u.windowClass = r.windowClass), i = s(u);
            var a = function (e) {
                return o && o(), e
            };
            return i.result.then(function (e) {
                return a(e)
            }, function (e) {
                return a(e)
            }), i
        }, u = function (e, t, r) {
            var s = "tpl/common/message.html", u = i.defaultButtonConfig;
            t = t || e.callback, r = r || e.passedObject;
            var a = e.buttons || u, f = function (r) {
                r.title = e.title, r.message = e.message, r.buttons = a, r.eventHandler = function (e) {
                    if (n.isFunction(e)) {
                        e(r);
                        return
                    }
                    r.close(e)
                }, angular.isFunction(t) && t(r)
            };
            return o(s, f, r)
        }, a = function (e, t, n, r) {
            return u({
                title: e,
                message: t,
                buttons: n,
                passedObject: r
            })
        };
        return {
            showDialog: s,
            showDialogByUrl: o,
            showMessageDialog: u,
            showMessageDialogSimple: a
        }
    }
    ])