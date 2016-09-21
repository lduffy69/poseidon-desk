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
        NEED_LOGIN: "401",
        HTTP_SUCCESS: 200
    },
    ALIYUN_CONSOLE_SESSION_TIMEOUT: "lsespConsoleSessionTimeout",
    LSESP_NEED_LOGIN: "lsespNeedLogin",
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


angular.module("common.services.lsespHttpHandler", ["common.cons.lsespCons", "common.topic.service"])
    .constant("lsespConsoleConf", {
        linkHandler: function (url, e) {
            var rest = url.replace(/\{.*?\}/g, function (word) {
                var matches = word.match(/(?!\{).*(?=\})/);
                return matches && matches.length > 0 && e[matches[0]] != undefined ? e[matches[0]] : '';
            });
            return rest;
        },
        httpOptionInterceptor: function (e) {
            console.log("no data to post");
            return e
        },
        httpOptionWrapper: function (e) {
            return e
        },
        httpResponseInterceptor: function (e) {
            return e
        },
        responseSuccessCode: o.SUCCESS,
        enableSessionTimeout: true,
        sessionTimeoutCode: o.SESSION_TIMEOUT,
        sessionTimeoutLink: "",
        sessionTimeoutNeedCallbackFunc: true,
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
    .factory("lsesp.console.request", ["lsesp.console.requestWrapper", "growl", "$q", "lsespConsoleSetting", "lsespCons", "commonTopicService", function (requestWrapper, growl, $q, i, lsespCons, commonTopicService) {
        var showResErrMsg = lsespCons.SHOW_RESPONSE_ERROR_MESSAGE;
        var resCode = lsespCons.RESPONSE_CODE;

        function request(url, options) {
            options = options || {};
            url = i.linkHandler(url, options);
            if (options && options.method) {
                var f = options.method.toUpperCase();
                f == "POST" && (options.data == undefined && (options.data = {}), i.httpOptionInterceptor(options))
            } else
                options.method = "GET";
            return options && options.submitMessage && growl.addSuccessMessage(options.submitMessage), i.httpOptionWrapper(options),
                requestWrapper.sendRequestWithUrl(url, options).then(
                    function (e) {
                        var r = e.config;
                        return r && e.status == o.SUCCESS && r.successMessage != undefined && growl.addSuccessMessage(r.successMessage), e
                    },
                    function (e) {
                        return options && options.ignoreErrorHandler && options.ignoreErrorHandler == true ? $q.reject(e) : ( e.status !== resCode.HTTP_SUCCESS && commonTopicService.publish(showResErrMsg, e.data) , $q.reject(e))
                    })
        }

        return {
            request: request
        }
    }
    ])
    .factory("lsespConsoleHttpInterceptor", ["$q", "$rootScope", "lsespConsoleSetting", "$injector", function ($q, $rootScope, n, r) {
        return {
            response: function (i) {
                var s = i.data;
                return n.enableSessionTimeout && s.code == n.sessionTimeoutCode ? ($rootScope.$emit(a, i), $q.reject(i)) : n.httpResponseInterceptor(i, r) === !1 ? $q.reject(i) : i || $q.when(i)
            },
            responseError: function (e) {
                // return e.status == o.NEED_LOGIN ? ($rootScope.$emit(n.LSESP_NEED_LOGIN, e), $q.reject(e)) : $q.reject(e)
                return $q.reject(e);
            }
        }
    }
    ])
    .run(["$rootScope", "lsespConsoleSetting", function (e, n) {
        var r = n.labels;
        e.gConfig == undefined && (e.gConfig = {
            sessionTimeout: true
        });

        // e.$on(n.LSESP_NEED_LOGIN, function (i, s) {
        //
        // });

        //超时监听
        e.$on(a, function (i, s) {
            var o;
            n.sessionTimeoutNeedCallbackFunc ? o = n.sessionTimeoutLink + "?oauth_callback=" + encodeURIComponent(location.href) : o = n.sessionTimeoutLink + encodeURIComponent(location.href);
            var a = r.SESSION_TIMEOUT1 + "<a href=" + o + ">" + r.SESSION_TIMEOUT2 + "</a>。";
            e.gConfig.sessionTimeout == 0 && (e.gConfig.sessionTimeout = !0, setTimeout(function () {

            }, 0))
        });
    }
    ])