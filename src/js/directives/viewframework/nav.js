angular.module('productNav', [])
    .factory("viewframeworkNavSetting", ['poseidonRequest', function (poseidonRequest) {
        var renderTree = function (data) {
            _map2NgNavTree(data);
            return data;
        }

        var _map2NgNavTree = function (data) {
            data.forEach(function (node) {
                if (node['nodes']) {
                    _map2NgNavTree(node['nodes']);
                    node.children = node['nodes'];
                    delete node.nodes;
                }
                node.label = node['text'];
                delete node.text;
            })

        }
        return {
            getProductNavs: poseidonRequest.getNavTree(),
            renderTree: renderTree
        }
    }])
    .directive("viewframeworkNav", function () {
        return {
            restrict: "A",
            replace: false,
            scope: true,
            templateUrl: "tpl/viewframework/nav.html",
            controller: ["$rootScope", "$scope", "$state", 'viewframeworkNavSetting', function ($rootScope, $scope, $state, viewframeworkNavSetting) {
                viewframeworkNavSetting.getProductNavs.then(function (resp) {
                    var data = resp.data.resultValue;
                    $scope.tree_rows = viewframeworkNavSetting.renderTree(data);
                });
            }
            ],
            link: function (e, t, n) {
            }
        }
    })