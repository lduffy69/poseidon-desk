var t = function () {
    var e = window.location.hostname;
    if (!e.match(/^.+\.aliyun\.|^aliyun\./))
        return ".com";
    var t = e.replace(/^.*\.aliyun|^aliyun/i, "");
    return t || (t = ".com"), t
}();
var n = {
    SHOW_RESPONSE_ERROR_MESSAGE: "showResponseErrorMessage",
    RESPONSE_CODE: {
        SUCCESS: "200",
        SESSION_TIMEOUT: "-99",
        NEED_LOGIN: "-100",
        HTTP_SUCCESS: 200
    },
    ALIYUN_CONSOLE_SESSION_TIMEOUT: "lsespConsoleSessionTimeout",
    SUFFIX: t
}
var i = {
    "msg.timeoutTip.partOne": "您当前的会话已超时，请",
    "msg.timeoutTip.partTwo": "重新登录",
    "msg.response.error": "当前请求失败，建议您刷新页面或者稍后重试。"
}, s = {
    timeoutTipPrefix: i["msg.timeoutTip.partOne"],
    timeoutTipSufix: i["msg.timeoutTip.partTwo"],
    error: i["msg.response.error"]
}, o = n.RESPONSE_CODE, u = n.SHOW_RESPONSE_ERROR_MESSAGE, a = n.ALIYUN_CONSOLE_SESSION_TIMEOUT;


angular.module("common.services.lsespHttpHandler", [])
    .constant("lsespConsoleConf", {
        linkHandler: function (url, e) {
            var rest = url.replace(/\{.*?\}/g, function (word) {
                var matches = word.match(/(?!\{).*(?=\})/);
                return matches && matches.length > 0 && e[matches[0]] != undefined ? e[matches[0]] : '';
            });
            return rest;
        },
        httpOptionInterceptor: function (e) {
            return e
        },
        httpOptionWrapper: function (e) {
            return e
        },
        httpResponseInterceptor: function (e) {
            return e
        },
        responseSuccessCode: o.SUCCESS,
        enableSessionTimeout: !0,
        sessionTimeoutCode: o.SESSION_TIMEOUT,
        sessionTimeoutLink: "",
        sessionTimeoutNeedCallbackFunc: !0,
        labels: {
            SESSION_TIMEOUT1: s.timeoutTipPrefix,
            SESSION_TIMEOUT2: s.timeoutTipSufix,
            RESPONSE_ERROR: s.error
        }
    })
    .provider("lsespConsoleSetting", ["lsespConsoleConf", function (t) {
        var n = t;
        return {
            setProviderOptions: function (t) {
                e.extend(n, t)
            },
            setGlobalLabels: function (e) {
                n && (n.labels = e)
            },
            $get: function () {
                return n
            }
        }
    }
    ])
    .config(["$httpProvider", function (e) {
        e.interceptors.push("lsespConsoleHttpInterceptor")
    }
    ])
    .config(["growlProvider", function (e) {
        e.onlyUniqueMessages(true), e.globalTimeToLive(3e3), e.globalEnableHtml(true)
    }
    ])
    .factory("lsesp.console.request", ["lsesp.console.requestWrapper", "growl", "$q", "lsespConsoleSetting", function (e, t, n, i) {
        function s(s, a) {
            a = a || {};
            var s = i.linkHandler(s, a);
            if (a && a.method) {
                var f = a.method.toUpperCase();
                f == "POST" && (a.data == undefined && (a.data = {}), i.httpOptionInterceptor(a))
            } else
                a.method = "GET";
            return a && a.submitMessage && t.addSuccessMessage(a.submitMessage), i.httpOptionWrapper(a),
                e.sendRequestWithUrl(s, a).then(
                    function (e) {
                        var r = e.config;
                        return r && e.status == o.SUCCESS && r.successMessage != undefined && t.addSuccessMessage(r.successMessage), e
                    },
                    function (e) {
                        return a && a.ignoreErrorHandler && a.ignoreErrorHandler == 1 ? n.reject(e) : (console.log(e), e.status !== o.HTTP_SUCCESS , n.reject(e))
                    })
        }

        return {
            request: s
        }
    }
    ])
    .factory("lsespConsoleHttpInterceptor", ["$q", "$rootScope", "lsespConsoleSetting", "$injector", function (e, t, n, r) {
        return {
            response: function (i) {
                var s = i.data;
                return n.enableSessionTimeout && s.code == n.sessionTimeoutCode ? (t.$emit(a, i), e.reject(i)) : n.httpResponseInterceptor(i, r) === !1 ? e.reject(i) : i || e.when(i)
            },
            responseError: function (t) {
                return e.reject(t)
            }
        }
    }
    ])
    .run(["$rootScope", "lsespConsoleSetting", function (e, n) {
        var r = n.labels;
        e.gConfig == undefined && (e.gConfig = {
            sessionTimeout: !1
        }), e.$on(a, function (i, s) {
            var o;
            n.sessionTimeoutNeedCallbackFunc ? o = n.sessionTimeoutLink + "?oauth_callback=" + encodeURIComponent(location.href) : o = n.sessionTimeoutLink + encodeURIComponent(location.href);
            var a = r.SESSION_TIMEOUT1 + "<a href=" + o + ">" + r.SESSION_TIMEOUT2 + "</a>。";
            e.gConfig.sessionTimeout == 0 && (e.gConfig.sessionTimeout = !0, setTimeout(function () {

            }, 0))
        })
    }
    ])