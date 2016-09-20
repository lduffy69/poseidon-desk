angular.module('topbar', [])
    .directive("viewframeworkTopbar", function () {
        return {
            restrict: "A",
            replace: true,
            scope: true,
            templateUrl: "tpl/viewframework/topbar.html",
            controller: ["$rootScope", "$scope", "$state", function ($rootScope, $scope, $state) {

            }
            ],
            link: function (e, t, n) {
            }
        }
    })