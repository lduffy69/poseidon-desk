app.controller('LogoutCtrl', ['$scope', '$modal', 'sysinfo', function ($scope, $modal, sysinfo) {
    var logoutUrl;
    sysinfo.success(function (data) {
        logoutUrl = data[0].logoutUrl;
    })

    $scope.logout = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'logoutContent.html',
            controller: 'LogoutModalInstanceCtrl',
            size: size,
            resolve: {
                logoutUrl: function () {
                    return logoutUrl;
                }
            }
        });
    };
}]);

app.controller('LogoutModalInstanceCtrl', ['$scope', '$modalInstance', 'logoutUrl', function ($scope, $modalInstance, logoutUrl) {
    $scope.ok = function () {
        window.location.href = logoutUrl;
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}])