angular.module('poseidon.service.factory', ['common.services.lsespHttpHandler'])
//rpc数据服务
    .factory("poseidonRequest", ['lsesp.console.request', function (e) {
        var request = e.request;
        var services = {
            getSysDef: function () {
                return request('/platform-server/desk/deskDefController/getDefaultDeskDef');
            },
            getNavTree: function () {
                var options = {
                    cache: false
                }
                //return request('/platform-server/desk/deskController/getObjMenuTree', options)
                 return request('mock/navs.json', options) //test
            },
            getUserInfo: function () {
                var options = {
                    cache: false
                }
                return request('/platform-server/desk/deskController/getUserInfo', options);
            },
            getSysInfo: function () {
                var options = {
                    cache: false
                }
                return request('/platform-server/desk/deskController/getConfig', options);
            },
            getCodes: function (e) {
                return request('/platform-server/v1/utils/code', e);
            }
        };
        return services;
    }])