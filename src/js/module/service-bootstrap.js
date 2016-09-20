angular.module("common.services.bootstrap", [])
    .run(["$rootScope", "$state", "$stateParams", function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on("$stateChangeSuccess", function (e, t, n, r, i) {
        });
        $rootScope.$on("$stateChangeError", function (e, t, n, r, i, s) {
            console.log("ERROR " + s + " . From state: " + r.name + " to state: " + t.name)
        })
    }
    ])
    .factory("lsespHttpInterceptor", ["$q", function (e) {
        return {
            requestError: function (t) {
                return console.log("request error: " + t), e.reject(t)
            },
            request: function (t) {
                return t || e.when(t)
            },
            response: function (t) {
                return t || e.when(t)
            },
            responseError: function (t) {
                return console.log("response error: ", t), e.reject(t)
            }
        }
    }
    ])
    .config(["$httpProvider", function (e) {
        e.interceptors.push("lsespHttpInterceptor")
    }
    ])
    .config(["$provide", function (e) {
        e.decorator("$exceptionHandler", ["$delegate", function (e) {
            return function (t, n) {
                e(t, n), console.log(t.message || t)
            }
        }
        ])
    }
    ])
    .factory("lsesp.console.requestWrapper", ["$http", function (e) {
        var n = function (e) {
            var t = "", r, i, s, o, u, a, f;
            for (r in e) {
                i = e[r];
                if (i instanceof Array)
                    for (f = 0; f < i.length; ++f)
                        u = i[f], a = {}, a[r] = u, t += n(a) + "&";
                else if (i instanceof Object)
                    for (o in i)
                        u = i[o], s = r + "[" + o + "]", a = {}, a[s] = u, t += n(a) + "&";
                else
                    i !== undefined && i !== null && (t += encodeURIComponent(r) + "=" + encodeURIComponent(i) + "&")
            }
            return t.length ? t.substr(0, t.length - 1) : t
        };
        var r = function (r) {
            var i = {
                method: "GET"
            }
                , s = angular.extend({}, i, r)
                , o = s.method.toUpperCase();
            //o == "POST" ? (s.headers = s.headers || {}, s.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8", s.data == undefined && s.params ? (s.data = n(s.params), delete s.params) : s.data = n(s.data)) : o == "GET" && (s.params = s.params || {}, s.params.__preventCache = (new Date).getTime());
            o == "POST" || o == "PUT" ? (s.headers = s.headers || {}, s.headers["Content-Type"] = "application/json;charset=utf-8", s.data == undefined && s.params ? (s.data = s.params, delete s.params) : s.data = s.data) : (o == "GET" ? (s.params = s.params || {}, s.params.__preventCache = (new Date).getTime()) : {});
            var u = e(s).success(function (e, t, n, r) {
            }).error(function (e, t, n, r) {
            });
            return angular.isFunction(s.dataFormatter) && u.then(function (e) {
                return s.dataFormatter.apply(null, [e])
            }), u
        }, i = function (e, t) {
            return t = t || {}, t.url = e, r(t)
        };
        return {
            sendRequest: r,
            sendRequestWithUrl: i
        }
    }
    ])