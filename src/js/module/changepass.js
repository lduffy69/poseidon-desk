/* Controllers */
// changepass controller
app.controller('ChangePassFormController', ['$scope', '$http', '$state', 'toaster', function ($scope, $http, $state, toaster) {
    $scope.user = {};
    $scope.serverError = null;
    $scope.change = function () {
        $scope.serverError = null;
        // Try to update password
        $http.post('/lduffy-server/desk/deskController/editUserPwd', {
            items: [{
                oldPwd: $scope.oldPwd,
                newPwd: $scope.newPwd
            }]
        })
            .then(function (response) {
                var ret = response.data.resultValue.items[0];
                $scope.toaster = {
                    type: 'success',
                    title: '',
                    text: ''
                };
                if (ret == '1') {
                    $scope.toaster.text = '修改成功';
                    //$state.go('app.dashboard-v1');
                }
                else if (ret == '2') {
                    $scope.serverError = '原始密码错误';
                    $scope.toaster.text = $scope.serverError;
                    $scope.toaster.type = 'error';
                } else if (ret == '6') {
                    $scope.serverError = '账户为管理员，不能修改密码！';
                    $scope.toaster.text = $scope.serverError;
                    $scope.toaster.type = 'error';
                } else {
                    $scope.serverError = '系统繁忙';
                    $scope.toaster.text = $scope.serverError;
                    $scope.toaster.type = 'wait';
                }
                toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
            }, function (x) {
                $scope.serverError = '系统繁忙';
                $scope.toaster.text = $scope.serverError;
                $scope.toaster.type = 'wait';
                toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
            });
    };
}])