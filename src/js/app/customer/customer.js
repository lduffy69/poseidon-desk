app.controller('CustomerCtrl', ['$scope', '$filter', '$state', 'commonTopicService', 'viewFrameworkSetting', 'customerRequest', function ($scope, $filter, $state, commonTopicService, viewFrameworkSetting, customerRequest) {
    $scope.show_basic = true;

    var getList = function (args) {
        var options={
            successMessage:'刷新客户档案列表成功。'
        }
        customerRequest.getCustomers(options).then(function (res) {
            $scope.items = res.data.resultValue.items;
            args=args||{};
            if (args.editmode) {
                $state.reload($state.current);
            } else {
                $state.go('customer.dashboard.detail', {custId: $scope.items[0].custId});//默认选择第一个客户
            }
        });
    }

    getList();

    $scope.filter = '';

    $scope.selectItem = function (item) {
        angular.forEach($scope.items, function (item) {
            item.selected = false;
            item.editing = false;
        });
        $scope.item = item;
        $scope.item.selected = true;
    };

    $scope.refresh = function () {
        getList();
    }

    commonTopicService.subscribe("CUSTOMER_CREATE_OK", function (target, args) {
        getList(args);
    });
}]);