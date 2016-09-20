angular.module("common.cons.lsespCons", [])
    .factory('lsespCons', function () {
        var e = {
            SUCCESS: "200",
            SESSION_TIMEOUT: "-99",
            NEED_LOGIN: "-100",
            HTTP_SUCCESS: 200
        }, t = function () {
            var e = window.location.hostname;
            if (!e.match(/^.+\.lsesp\.|^lsesp\./))
                return ".com";
            var t = e.replace(/^.*\.lsesp|^lsesp/i, "");
            return t || (t = ".com"), t
        }();
        return {
            SHOW_RESPONSE_ERROR_MESSAGE: "showResponseErrorMessage",
            RESPONSE_CODE: e,
            ALIYUN_CONSOLE_SESSION_TIMEOUT: "aliyunConsoleSessionTimeout",
            SUFFIX: t
        }
    })