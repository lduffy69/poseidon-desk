app.controller("CustContactController", ['$scope', '$modal', '$stateParams', 'customerRequest', function ($scope, $modal, $stateParams, customerRequest) {

    $scope._getContacts = function () {
        customerRequest.getContacts($stateParams.custId).then(function (resp) {
            $scope.contacts = resp.data.resultValue.items;
            console.log(resp);
        });
    }

    $scope._getContacts();

    $scope.showContacts = function () {
        $scope.show_contact = !$scope.show_contact

    }

    $scope.delete = function (contId) {
        var data = {
            custId: $stateParams.custId,
            contId: contId
        }
        customerRequest.deleteContact(data).then(function (resp) {
            console.log(res);
            $scope.getContacts();
        })
    }

    $scope.openModal = function (controller, data) {
        var size = 'large';//default
        return $modal.open({
            templateUrl: 'tpl/customer/contact_detail.html',
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
        var modalInstance = $scope.openModal('CreateContactController', data);
        modalInstance.result.then(function (res) {
            console.log(res);
            $scope.getContacts();
        });
    }

    $scope.edit = function (contId) {
        var data = {
            custId: $stateParams.custId,
            contId: contId,
            title: '修改'
        };
        var modalInstance = $scope.openModal('UpdateContactController', data);
        modalInstance.result.then(function () {
            $scope.getContacts();
        });
    }

    $scope.delete = function (contId) {
        var data = {
            custId: $stateParams.custId,
            contId: contId
        };
        customerRequest.deleteContact(data).then(function (resp) {
            console.log(resp);
            $scope.getContacts();
        })
    }
}]);
app.controller("ViewContactController", ['$scope', '$modal', '$stateParams', 'customerRequest', function ($scope, $modal, $stateParams, customerRequest) {

    $scope._getContacts = function () {
        customerRequest.getContacts($stateParams.custId).then(function (resp) {
            $scope.contacts = resp.data.resultValue.items;
            $scope.contact = $scope.contacts[0];//默认选择
        });
    }

    $scope._getContacts();


    $scope.delete = function (contId) {
        var data = {
            custId: $stateParams.custId,
            contId: contId
        }
        customerRequest.deleteContact(data).then(function (resp) {
            console.log(res);
            $scope.getContacts();
        })
    }

    $scope.view = function (contact) {
        $scope.contact = contact;
    }

    $scope.openModal = function (controller, data) {
        var size = 'large';//default
        return $modal.open({
            templateUrl: 'tpl/customer/contact_detail.html',
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
        var modalInstance = $scope.openModal('CreateContactController', data);
        modalInstance.result.then(function (res) {
            console.log(res);
            $scope.getContacts();
        });
    }

    $scope.edit = function (contId) {
        var data = {
            custId: $stateParams.custId,
            contId: contId,
            title: '修改'
        };
        var modalInstance = $scope.openModal('UpdateContactController', data);
        modalInstance.result.then(function () {
            $scope.getContacts();
        });
    }

    $scope.delete = function (contId) {
        var data = {
            custId: $stateParams.custId,
            contId: contId
        };
        customerRequest.deleteContact(data).then(function (resp) {
            console.log(resp);
            $scope.getContacts();
        })
    }
}]);

app.controller('CreateContactController', ['$scope', '$modalInstance', 'customerRequest', 'poseidonRequest', 'model', function ($scope, $modalInstance, customerRequest, poseidonRequest, model) {
    $scope.contact = {};
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
        $scope.contact.custId = model.custId;
        var options = {};
        options.data = JSON.stringify($scope.contact);
        customerRequest.addContact(model, options).then(function (resp) {
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
app.controller('UpdateContactController', ['$scope', '$modalInstance', 'customerRequest', 'poseidonRequest', 'model', function ($scope, $modalInstance, customerRequest, poseidonRequest, model) {
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

    customerRequest.getContact(model).then(function (resp) {
        $scope.contact = resp.data.resultValue.items[0];
    });

    $scope.save = function () {
        var options = {};
        options.data = JSON.stringify($scope.contact);
        customerRequest.updateContact(model, options).then(function (resp) {
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
