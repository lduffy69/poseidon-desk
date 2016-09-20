var customer = angular.module("lsesp.customer", ["lsesp.customer.tpl", "directives.lsesp.customer", "customer.service.factory", "common.topic.service", "poseidon.service.factory"]);
customer.constant("BUSINESS_MAIN_NAVS", [{
    title: '概览',
    href: '#/customer/portal'
}, {
    title: '客户列表',
    href: '#/customer/dashboard'
}
])
    .run(['BUSINESS_MAIN_NAVS', 'businessNavBarSetting', 'viewFrameworkSetting', function (BUSINESS_MAIN_NAVS, businessNavBarSetting, viewFrameworkSetting) {
        businessNavBarSetting.setTitle("客户档案");
        businessNavBarSetting.setMainNav(BUSINESS_MAIN_NAVS);
        viewFrameworkSetting.setProductNavBar('disabled');
    }])
customer.controller('CustomerCtrl', ['$scope', '$filter', '$state', 'commonTopicService', 'viewFrameworkSetting', 'customerRequest', function ($scope, $filter, $state, commonTopicService, viewFrameworkSetting, customerRequest) {
    $scope.show_basic = true;

    var getList = function (args) {
        var options = {
            successMessage: '刷新客户档案列表成功。'
        }
        customerRequest.getCustomers(options).then(function (res) {
            $scope.items = res.data.resultValue.items;
            args = args || {};
            if (args.editmode) {
                $state.reload($state.current);
            } else {
                $state.go('customer.dashboard.detail', {custId: $scope.items[0].custId});//默认选择第一个客户
                $scope.items[0].selected = true;
            }
        });
    }

    getList();

    $scope.filter = '';

    $scope.selectItem = function (item) {
        angular.forEach($scope.items, function (item) {
            item.selected = false;
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
customer.controller("CustBaseController", ['$scope', '$state', '$stateParams', 'customerRequest', 'poseidonRequest', function ($scope, $state, $stateParams, customerRequest, poseidonRequest) {
    var options = {
        custId: $stateParams.custId
    }
    customerRequest.getCustomer(options).then(function (resp) {
        var data = resp.data.resultValue.items;
        if (data.length == 1) {
            $scope.cust = data[0];
        }
    });
}]);
customer.controller("CustContactController", ['$scope', '$modal', '$stateParams', 'commonTopicService', 'customerRequest', function ($scope, $modal, $stateParams, commonTopicService, customerRequest) {

    $scope._getContacts = function () {
        var options = {
            custId: $stateParams.custId
        }
        customerRequest.getContacts(options).then(function (resp) {
            $scope.contacts = resp.data.resultValue.items;
            $scope.contact = $scope.contacts[0];//默认选择
            $scope.item = {
                custId: $stateParams.custId
            }
        });
    }

    $scope._getContacts();

    $scope.view = function (contact) {
        $scope.contact = contact;
    }

    commonTopicService.subscribe("CONTACT_OPERATE_OK", function (target, args) {
        $scope._getContacts();
    });
}]);
customer.controller("CustAccountController", ['$scope', '$modal', '$stateParams', 'commonTopicService', 'customerRequest', 'poseidonRequest', function ($scope, $modal, $stateParams, commonTopicService, customerRequest, poseidonRequest) {

    $scope._getAccounts = function () {
        var options = {
            custId: $stateParams.custId
        }
        customerRequest.getAccounts(options).then(function (resp) {
            $scope.accounts = resp.data.resultValue.items;
            $scope.account = $scope.accounts[0];//默认选择
            $scope.item = {
                custId: $stateParams.custId
            }
        });
    }

    $scope._getAccounts();

    $scope.refresh = function () {
        $scope._getAccounts();
    }

    $scope.view = function (account) {
        $scope.account = account;
    }

    commonTopicService.subscribe("ACCOUNT_OPERATE_OK", function (target, args) {
        $scope._getAccounts();
    });

}]);
customer.controller("CustDemandController", ['$scope', '$modal', '$stateParams', 'commonTopicService', 'customerRequest', 'poseidonRequest', function ($scope, $modal, $stateParams, commonTopicService, customerRequest, poseidonRequest) {

    $scope._getDemands = function () {
        var options = {
            custId: $stateParams.custId
        }
        customerRequest.getDemands(options).then(function (resp) {
            $scope.demands = resp.data.resultValue.items;
            $scope.demand = $scope.demands[0];//默认选择
            $scope.item = {
                custId: $stateParams.custId
            }
        });
    };

    $scope._getDemands();

    $scope.view = function (demand) {
        $scope.demand = demand;
    }

    commonTopicService.subscribe("DEMAND_OPERATE_OK", function (target, args) {
        $scope._getDemands();
    });
}]);
customer.controller("CustCredentialsController", ['$scope', '$modal', '$stateParams', '$http', 'commonTopicService', 'customerRequest', function ($scope, $modal, $stateParams, $http, commonTopicService, customerRequest) {

    $scope._getCredentialsAll = function () {
        var options = {
            custId: $stateParams.custId
        }
        customerRequest.getCredentialsAll(options).then(function (resp) {
            $scope.credentialsList = resp.data.resultValue.items;
        });
    }

    $scope._getCredentialsAll();

    commonTopicService.subscribe("UPLOAD_OPERATE_OK", function (target, args) {
        $scope._getCredentialsAll();
    });

}]);

