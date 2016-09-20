app.controller("CustAccountController", ['$scope', '$modal', '$stateParams', 'customerRequest', 'poseidonRequest', function ($scope, $modal, $stateParams, customerRequest, poseidonRequest) {

    $scope.getAccounts = function () {
        customerRequest.getAccounts($stateParams.custId).then(function (resp) {
            $scope.accounts = resp.data.resultValue.items;
            console.log(resp);
        });
    }

    $scope.getAccounts(); //temp

    $scope.delete = function (accountId) {
        var data = {
            custId: $stateParams.custId,
            accountId: accountId
        }
        customerRequest.deleteAccount(data).then(function (resp) {
            console.log(res);
            $scope.getAccounts();
        })
    }

    $scope.openModal = function (controller, data) {
        var size = 'large';//default
        return $modal.open({
            templateUrl: 'tpl/customer/account_detail.html',
            size: size,
            controller: controller,
            resolve: {
                model: function () {
                    return data;
                }
            }
        });
    }

    $scope.add = function () {
        var data = {
            custId: $stateParams.custId,
            title: '新增'
        };
        var modalInstance = $scope.openModal('CreateAccountController', data);
        modalInstance.result.then(function (res) {
            console.log(res);
            $scope.getAccounts();
        });
    }

    $scope.edit = function (accountId) {
        var data = {
            custId: $stateParams.custId,
            accountId: accountId,
            title: '修改'
        };
        var modalInstance = $scope.openModal('UpdateAccountController', data);
        modalInstance.result.then(function () {
            $scope.getAccounts();
        });
    }

    $scope.delete = function (accountId) {
        var data = {
            custId: $stateParams.custId,
            accountId: accountId
        };
        customerRequest.deleteAccount(data).then(function (resp) {
            console.log(resp);
            $scope.getAccounts();
        })
    }
}
]);

app.controller('CreateAccountController', ['$scope', '$modalInstance', 'customerRequest', 'poseidonRequest', 'model', function ($scope, $modalInstance, customerRequest, poseidonRequest, model) {
    $scope.account = {};
    $scope.modal = {
        title: model.title
    }
    var params = {
        params: {
            codeType: 'contType'
        }
    };

    poseidonRequest.getCodes(params).then(function (resp) {
        $scope.contTypeOptions = resp.data.resultValue.items;
    });

    $scope.save = function () {
        $scope.account.custId = model.custId;
        var options = {};
        options.data = JSON.stringify($scope.account);
        customerRequest.addAccount(model, options).then(function (resp) {
            console.log(resp);
            $modalInstance.close();
        });

    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
    $scope.close = function () {
        $modalInstance.dismiss('cancel');
    };
}])
app.controller('UpdateAccountController', ['$scope', '$modalInstance', 'customerRequest', 'poseidonRequest', 'model', function ($scope, $modalInstance, customerRequest, poseidonRequest, model) {
    $scope.modal = {
        title: model.title
    }
    var params = {
        params: {
            codeType: 'contType'
        }
    };

    poseidonRequest.getCodes(params).then(function (resp) {
        $scope.contTypeOptions = resp.data.resultValue.items;
    });

    customerRequest.getAccount(model).then(function (resp) {
        $scope.account = resp.data.resultValue.items[0];
    });

    $scope.save = function () {
        var options = {};
        options.data = JSON.stringify($scope.account);
        customerRequest.updateAccount(model, options).then(function (resp) {
            console.log(resp);
            $modalInstance.close();
        });

    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
    $scope.close = function () {
        $modalInstance.dismiss('cancel');
    };
}])
