app.controller("CustCredentialsController", ['$scope', '$modal', '$stateParams', '$http', 'customerRequest', function ($scope, $modal, $stateParams, $http, customerRequest) {

    $scope._getCredentialsAll = function () {
        customerRequest.getCredentialsAll($stateParams.custId).then(function (resp) {
            $scope.credentialsList = resp.data.resultValue.items;
        });
    }

    $scope._getCredentialsAll();

    $scope.openModal = function (controller, data) {
        var size = 'large';//default
        return $modal.open({
            templateUrl: 'tpl/customer/credentials_detail.html',
            size: size,
            controller: controller,
            resolve: {
                model: function () {
                    return data;
                }
            }
        });
    }

    $scope.edit = function (credType, credId) {
        var data = {
            custId: $stateParams.custId,
            title: '上传资质',
            credType: credType,
            credId: credId
        };
        var modalInstance = $scope.openModal('UpdateCredentialsController', data);
        modalInstance.result.then(function () {
            $scope._getCredentialsAll();
        });
    }

}]);

app.controller("UpdateCredentialsController", ['$scope', '$modalInstance', 'customerRequest', 'model', 'FileUploader', 'Lightbox', function ($scope, $modalInstance, customerRequest, model, FileUploader, Lightbox) {
    $scope.modal = {
        title: model.title
    }

    if (model.credId != 0) {
        customerRequest.getCredentials(model).then(function (resp) {
            $scope.credId = resp.data.resultValue.items[0].credId;
            $scope.credNo = resp.data.resultValue.items[0].credNo;
            $scope.credFile = {
                url: '/platform-server/v1/customers/' + model.custId + '/credemtials/' + model.credId + '/image',
                thumbUrl: '/platform-server/v1/customers/' + model.custId + '/credemtials/' + model.credId + '/image'
            }
        });
    }
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
    $scope.close = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.ok = function () {
        $scope.fileItem.formData.push({'credType': model.credType, 'credNo': $scope.credNo});
        $scope.fileItem.upload();
    }

    $scope.openLightboxModal = function () {
        Lightbox.openModal([$scope.credFile], 0);
    };

    var uploadUrl = '/platform-server/v1/customers/' + model.custId + '/credemtials';//上传
    model.credId ? uploadUrl = uploadUrl + '/' + model.credId : uploadUrl;
    var uploader = $scope.uploader = new FileUploader({
        url: uploadUrl
    });

    // FILTERS

    uploader.filters.push({
        name: 'customFilter',
        fn: function (item /*{File|FileLikeObject}*/, options) {
            return this.queue.length < 10;
        }
    });

    // CALLBACKS

    uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function (fileItem) {
        $scope.fileItem = fileItem;
        console.info('onAfterAddingFile', fileItem);
    };
    uploader.onSuccessItem = function (fileItem, response, status, headers) {
        console.info('onSuccessItem', fileItem, response, status, headers);
    };
    uploader.onErrorItem = function (fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function (fileItem, response, status, headers) {
        $modalInstance.close();
        console.info('onCompleteItem', fileItem, response, status, headers);
    };

}]);