app.controller("CustDemandController", ['$scope', '$modal', '$stateParams', 'customerRequest', 'poseidonRequest', function ($scope, $modal, $stateParams, customerRequest, poseidonRequest) {

    $scope.getDemands = function () {
        customerRequest.getDemands($stateParams.custId).then(function (resp) {
            $scope.demands = resp.data.resultValue.items;
            console.log(resp);
        });
    }

    $scope.getDemands(); //temp

    $scope.delete = function (consId) {
        var data = {
            custId: $stateParams.custId,
            consId: consId
        }
        customerRequest.deleteDemand(data).then(function (resp) {
            console.log(res);
            $scope.getDemands();
        })
    }

    $scope.openModal = function (controller, data) {
        var size = 'large';//default
        return $modal.open({
            templateUrl: 'tpl/customer/demand_detail.html',
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
        var modalInstance = $scope.openModal('CreateDemandController', data);
        modalInstance.result.then(function (res) {
            console.log(res);
            $scope.getDemands();
        });
    }

    $scope.edit = function (consId) {
        var data = {
            custId: $stateParams.custId,
            consId: consId,
            title: '修改'
        };
        var modalInstance = $scope.openModal('UpdateDemandController', data);
        modalInstance.result.then(function () {
            $scope.getDemands();
        });
    }

    $scope.delete = function (consId) {
        var data = {
            custId: $stateParams.custId,
            consId: consId
        };
        customerRequest.deleteDemand(data).then(function (resp) {
            console.log(resp);
            $scope.getDemands();
        })
    }
}
]);

app.controller('CreateDemandController', ['$scope', '$modalInstance', 'customerRequest', 'poseidonRequest', 'model', function ($scope, $modalInstance, customerRequest, poseidonRequest, model) {
    $scope.demand = {};
    $scope.modal = {
        title: model.title
    }


    $scope.save = function () {
        $scope.demand.custId = model.custId;
        var options = {};
        options.data = JSON.stringify($scope.demand);
        customerRequest.addDemand(model, options).then(function (resp) {
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
app.controller('UpdateDemandController', ['$scope', '$modalInstance', 'customerRequest', 'poseidonRequest', 'model', function ($scope, $modalInstance, customerRequest, poseidonRequest, model) {
    $scope.modal = {
        title: model.title
    }

    customerRequest.getDemand(model).then(function (resp) {
        $scope.demand = resp.data.resultValue.items[0];
    });


    $scope.save = function () {
        var options = {};
        options.data = JSON.stringify($scope.demand);
        customerRequest.updateDemand(model, options).then(function (resp) {
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
