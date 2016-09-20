angular.module('aside', [])
    .directive("viewframeworkAside", function () {
        return {
            restrict: "A",
            replace: true,
            scope: true,
            templateUrl: "tpl/viewframework/aside.html",
            controller: ["$rootScope", "$scope", "$state", function ($rootScope, $scope, $state) {

            }
            ],
            link: function (e, t, n) {
            }
        }
    })