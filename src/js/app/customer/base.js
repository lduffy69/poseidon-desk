app.controller("CreateCustController", ['$scope', 'customerRequest', 'poseidonRequest', function ($scope, customerRequest, poseidonRequest) {
    $scope.cust = {};
    var params = {
        params: {
            codeType: 'enterpriseNature'
        }
    };

    poseidonRequest.getCodes(params).then(function (resp) {
        $scope.enterpriseNatureOptions = resp.data.resultValue.items;
        //console.log($scope.enterpriseNatureOptions);
    });
    $scope.save = function () {
        var options = {};
        options.data = JSON.stringify($scope.cust);
        customerRequest.addCustomer(options).then(function (resp) {
            if (resp.data.successful == true) {
                alert("save successful");
                //$scope.cust.custId = resp.data.resultValue.items[0];
            }
        });
    }

    //datepicker config
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker',
        datepickerMode: 'day'
    };
    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
    }
}]);

app.controller("CustBaseController", ['$scope', '$state', '$stateParams', 'customerRequest', 'poseidonRequest', function ($scope, $state, $stateParams, customerRequest, poseidonRequest) {
    customerRequest.getCustomer($stateParams.custId).then(function (resp) {
        var data = resp.data.resultValue.items;
        if (data.length == 1) {
            $scope.cust = data[0];
        }

    });

    var params = {
        params: {
            codeType: 'enterpriseNature'
        }
    }

    poseidonRequest.getCodes(params).then(function (resp) {
        $scope.enterpriseNatureOptions = resp.data.resultValue.items;
        //console.log($scope.enterpriseNatureOptions);
    });

    $scope.save = function () {
        var options = {};
        options.data = JSON.stringify($scope.cust);
        customerRequest.updateCustomer($stateParams.custId, options).then(function (resp) {

        });
    }
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker',
        datepickerMode: 'day'
    };
    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
    }
}
]);