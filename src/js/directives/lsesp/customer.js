angular.module("directives.lsesp.customer", [])
    .directive("customerCreate", ["$rootScope", "$http", "$q", 'commonTopicService', "commonDialog", "poseidonRequest", "customerRequest", function ($rootScope, $http, $q, commonTopicService, commonDialog, poseidonRequest, customerRequest) {
        return {
            restrict: "AC",
            scope: {
                item: "="
            },
            link: function (scope, element, attrs) {
                element.on('click', function (e) {
                    var handler = function (scope) {
                        scope.editMode = mode;
                        scope.dlgTitle = scope.editMode ? "修改客户档案信息" : "新增客户档案信息";
                        scope.cust = scope._passedObject;
                        var params = {
                            params: {
                                codeType: 'enterpriseNature'
                            }
                        };

                        poseidonRequest.getCodes(params).then(function (resp) {
                            scope.enterpriseNatureOptions = resp.data.resultValue.items;
                        });

                        //datepicker config
                        scope.dateOptions = {
                            formatYear: 'yy',
                            startingDay: 1,
                            class: 'datepicker',
                            datepickerMode: 'day'
                        };
                        scope.open = function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                        }

                        scope.doAction = function () {
                            var options = {};
                            options.data = JSON.stringify(scope.cust);
                            if (!mode) {
                                options.successMessage = "创建客户档案成功。";
                                customerRequest.addCustomer(options).then(function (resp) {
                                    commonTopicService.publish('CUSTOMER_CREATE_OK', {});
                                    scope.close();
                                })
                            } else {
                                options.custId = scope.cust.custId;
                                options.successMessage = "修改客户档案成功。";
                                customerRequest.updateCustomer(options).then(function (resp) {
                                    commonTopicService.publish('CUSTOMER_CREATE_OK', {editmode: true});
                                    scope.close();
                                })
                            }
                        }
                    };
                    e.preventDefault();
                    var templateUrl = 'tpl/crm/customer_create.html';
                    var mode = attrs.editMode;
                    var item = scope.item;
                    var config = {};
                    mode && item && (angular.extend(config, item));
                    commonDialog.showDialogByUrl(templateUrl, handler, config);
                });

            }
        }
    }])
    .directive("contactCreate", ["$rootScope", "$http", "$q", 'commonTopicService', "commonDialog", "poseidonRequest", "customerRequest", function ($rootScope, $http, $q, commonTopicService, commonDialog, poseidonRequest, customerRequest) {
        return {
            restrict: "AC",
            scope: {
                item: "="
            },
            link: function (scope, element, attrs) {
                element.on('click', function (e) {
                    var handler = function (scope) {
                        scope.editMode = mode;
                        scope.dlgTitle = scope.editMode ? "修改企业联系人信息" : "新增企业联系人信息";
                        scope.contact = scope._passedObject;
                        var params = {
                            params: {
                                codeType: 'contType'
                            }
                        };

                        poseidonRequest.getCodes(params).then(function (resp) {
                            scope.contTypeOptions = resp.data.resultValue.items;
                        });


                        scope.doAction = function () {
                            var options = {};
                            options.data = JSON.stringify(scope.contact);
                            options.custId = scope.contact.custId;
                            if (!mode) {
                                options.successMessage = "创建企业联系人成功";
                                customerRequest.addContact(options).then(function (resp) {
                                    commonTopicService.publish('CONTACT_OPERATE_OK', {});
                                    scope.close();
                                })
                            } else {
                                options.contId = scope.contact.contId;
                                options.successMessage = "修改企业联系人成功";
                                customerRequest.updateContact(options).then(function (resp) {
                                    commonTopicService.publish('CONTACT_OPERATE_OK', {editmode: true});
                                    scope.close();
                                })
                            }
                        }
                    };
                    e.preventDefault();
                    var templateUrl = 'tpl/crm/contact_create.html';
                    var mode = attrs.editMode;
                    var config = {};
                    angular.extend(config, scope.item);
                    commonDialog.showDialogByUrl(templateUrl, handler, config);
                });

            }
        }
    }])
    .directive("contactDelete", ["$rootScope", "$http", "$q", 'commonTopicService', "commonDialog", "poseidonRequest", "customerRequest", function ($rootScope, $http, $q, commonTopicService, commonDialog, poseidonRequest, customerRequest) {
        return {
            restrict: "AC",
            scope: {
                item: "="
            },
            link: function (scope, element, attrs) {
                element.on('click', function (e) {
                    var handler = function (scope) {
                        scope.eventHandler = function (e) {
                            var options = {};
                            scope.contact = scope._passedObject;
                            options.custId = scope.contact.custId;
                            options.contId = scope.contact.contId;
                            options.successMessage = "删除企业联系人成功。";
                            e === true ?
                                customerRequest.deleteContact(options).then(function (resp) {
                                    commonTopicService.publish('CONTACT_OPERATE_OK', {});
                                    scope.close();
                                })
                                :
                                scope.close();


                        }
                    };
                    e.preventDefault();
                    scope.item.iconClass = "fa fa-warning";
                    var conf = {
                        title: '删除企业联系人',
                        message: '确认删除此企业联系人吗?',
                        buttons: [{
                            result: true,
                            label: '确认',
                            cssClass: "btn-info"
                        }, {
                            result: false,
                            label: '取消',
                            cssClass: "btn-default"
                        }
                        ],
                        passedObject: scope.item
                    };
                    commonDialog.showMessageDialog(conf, handler);
                });

            }
        }
    }])
    .directive("accountCreate", ["$rootScope", "$http", "$q", 'commonTopicService', "commonDialog", "poseidonRequest", "customerRequest", function ($rootScope, $http, $q, commonTopicService, commonDialog, poseidonRequest, customerRequest) {
        return {
            restrict: "AC",
            scope: {
                item: "="
            },
            link: function (scope, element, attrs) {
                element.on('click', function (e) {
                    var handler = function (scope) {
                        scope.editMode = mode;
                        scope.dlgTitle = scope.editMode ? "修改企业银行账户信息" : "新增企业银行账户信息";
                        scope.account = scope._passedObject;
                        var params = {
                            params: {
                                codeType: 'contType'
                            }
                        };

                        poseidonRequest.getCodes(params).then(function (resp) {
                            scope.contTypeOptions = resp.data.resultValue.items;
                        });


                        scope.doAction = function () {
                            var options = {};
                            options.data = JSON.stringify(scope.account);
                            options.custId = scope.account.custId;
                            if (!mode) {
                                options.successMessage = "创建企业银行账户成功";
                                customerRequest.addAccount(options).then(function (resp) {
                                    commonTopicService.publish('ACCOUNT_OPERATE_OK', {});
                                    scope.close();
                                })
                            } else {
                                options.accountId = scope.account.accountId;
                                options.successMessage = "修改企业银行账户成功";
                                customerRequest.updateAccount(options).then(function (resp) {
                                    commonTopicService.publish('ACCOUNT_OPERATE_OK', {editmode: true});
                                    scope.close();
                                })
                            }
                        }
                    };
                    e.preventDefault();
                    var templateUrl = 'tpl/crm/account_create.html';
                    var mode = attrs.editMode;
                    var config = {};
                    angular.extend(config, scope.item);
                    commonDialog.showDialogByUrl(templateUrl, handler, config);
                });

            }
        }
    }])
    .directive("accountDelete", ["$rootScope", "$http", "$q", 'commonTopicService', "commonDialog", "poseidonRequest", "customerRequest", function ($rootScope, $http, $q, commonTopicService, commonDialog, poseidonRequest, customerRequest) {
        return {
            restrict: "AC",
            scope: {
                item: "="
            },
            link: function (scope, element, attrs) {
                element.on('click', function (e) {
                    var handler = function (scope) {
                        scope.eventHandler = function (e) {
                            var options = {};
                            scope.account = scope._passedObject;
                            options.custId = scope.account.custId;
                            options.accountId = scope.account.accountId;
                            options.successMessage = "删除企业银行账户成功。";
                            e === true ?
                                customerRequest.deleteAccount(options).then(function (resp) {
                                    commonTopicService.publish('ACCOUNT_OPERATE_OK', {});
                                    scope.close();
                                })
                                :
                                scope.close();


                        }
                    };
                    e.preventDefault();
                    scope.item.iconClass = "fa fa-warning";
                    var conf = {
                        title: '删除企业银行账户',
                        message: '确认删除此企业银行账户吗?',
                        buttons: [{
                            result: true,
                            label: '确认',
                            cssClass: "btn-info"
                        }, {
                            result: false,
                            label: '取消',
                            cssClass: "btn-default"
                        }
                        ],
                        passedObject: scope.item
                    };
                    commonDialog.showMessageDialog(conf, handler);
                });

            }
        }
    }])
    .directive("demandCreate", ["$rootScope", "$http", "$q", 'commonTopicService', "commonDialog", "poseidonRequest", "customerRequest", function ($rootScope, $http, $q, commonTopicService, commonDialog, poseidonRequest, customerRequest) {
        return {
            restrict: "AC",
            scope: {
                item: "="
            },
            link: function (scope, element, attrs) {
                element.on('click', function (e) {
                    var handler = function (scope) {
                        scope.editMode = mode;
                        scope.dlgTitle = scope.editMode ? "修改企业用电信息" : "新增企业用电信息";
                        scope.demand = scope._passedObject;
                        var params = {
                            params: {
                                codeType: 'contType'
                            }
                        };

                        poseidonRequest.getCodes(params).then(function (resp) {
                            scope.contTypeOptions = resp.data.resultValue.items;
                        });


                        scope.doAction = function () {
                            var options = {};
                            options.data = JSON.stringify(scope.demand);
                            options.custId = scope.demand.custId;
                            if (!mode) {
                                options.successMessage = "创建企业用电信息成功";
                                customerRequest.addDemand(options).then(function (resp) {
                                    commonTopicService.publish('DEMAND_OPERATE_OK', {});
                                    scope.close();
                                })
                            } else {
                                options.consId = scope.demand.consId;
                                options.successMessage = "修改企业用电信息成功";
                                customerRequest.updateDemand(options).then(function (resp) {
                                    commonTopicService.publish('DEMAND_OPERATE_OK', {editmode: true});
                                    scope.close();
                                })
                            }
                        }
                    };
                    e.preventDefault();
                    var templateUrl = 'tpl/crm/demand_create.html';
                    var mode = attrs.editMode;
                    var config = {};
                    angular.extend(config, scope.item);
                    commonDialog.showDialogByUrl(templateUrl, handler, config);
                });

            }
        }
    }])
    .directive("demandDelete", ["$rootScope", "$http", "$q", 'commonTopicService', "commonDialog", "poseidonRequest", "customerRequest", function ($rootScope, $http, $q, commonTopicService, commonDialog, poseidonRequest, customerRequest) {
        return {
            restrict: "AC",
            scope: {
                item: "="
            },
            link: function (scope, element, attrs) {
                element.on('click', function (e) {
                    var handler = function (scope) {
                        scope.eventHandler = function (e) {
                            var options = {};
                            scope.demand = scope._passedObject;
                            options.custId = scope.demand.custId;
                            options.consId = scope.demand.consId;
                            options.successMessage = "删除企业用电信息成功。";
                            e === true ?
                                customerRequest.deleteDemand(options).then(function (resp) {
                                    commonTopicService.publish('DEMAND_OPERATE_OK', {});
                                    scope.close();
                                })
                                :
                                scope.close();


                        }
                    };
                    e.preventDefault();
                    scope.item.iconClass = "fa fa-warning";
                    var conf = {
                        title: '删除企业用电信息',
                        message: '确认删除此企业用电信息吗?',
                        buttons: [{
                            result: true,
                            label: '确认',
                            cssClass: "btn-info"
                        }, {
                            result: false,
                            label: '取消',
                            cssClass: "btn-default"
                        }
                        ],
                        passedObject: scope.item
                    };
                    commonDialog.showMessageDialog(conf, handler);
                });

            }
        }
    }])
    .directive("credentialsUpload", ["$rootScope", "$http", "$q", 'commonTopicService', "commonDialog", "poseidonRequest", "customerRequest", "FileUploader", "Lightbox", function ($rootScope, $http, $q, commonTopicService, commonDialog, poseidonRequest, customerRequest, FileUploader, Lightbox) {
        return {
            restrict: "AC",
            scope: {
                item: "="
            },
            link: function (scope, element, attrs) {
                element.on('click', function (e) {
                    var handler = function (scope) {
                        scope.dlgTitle = "上传企业资质文件";
                        var credentials = scope.credentials = scope._passedObject;

                        console.log(scope._passedObject);

                        if (credentials.credNo) {
                            var options = {
                                custId: credentials.custId,
                                credId: credentials.credId
                            }
                            customerRequest.getCredentials(options).then(function (resp) {
                                scope.credFile = {
                                    url: '/platform-server/v1/customers/' + credentials.custId + '/credemtials/' + credentials.credId + '/image',
                                    thumbUrl: '/platform-server/v1/customers/' + credentials.custId + '/credemtials/' + credentials.credId + '/image'
                                }
                            });
                        }

                        //上传配置
                        var uploadUrl = '/platform-server/v1/customers/' + credentials.custId + '/credemtials';
                        credentials.credNo ? uploadUrl = uploadUrl + '/' + credentials.credId : uploadUrl;
                        var uploader = scope.uploader = new FileUploader({
                            url: uploadUrl
                        });
                        //选择资质完成
                        uploader.onAfterAddingFile = function (fileItem) {
                            scope.fileItem = fileItem;
                            // console.info('onAfterAddingFile', fileItem);
                        };
                        //上传完成
                        uploader.onCompleteItem = function (fileItem, response, status, headers) {
                            commonTopicService.publish("UPLOAD_OPERATE_OK", {});
                            scope.close();
                            // console.info('onCompleteItem', fileItem, response, status, headers);
                        };

                        //预览资质
                        scope.openLightboxModal = function () {
                            Lightbox.openModal([scope.credFile], 0);
                        };
                        //上传资质
                        scope.doAction = function () {
                            scope.fileItem.formData.push({
                                'credType': credentials.credType,
                                'credNo': credentials.credNo
                            });
                            scope.fileItem.upload();
                        }
                    };
                    e.preventDefault();
                    var templateUrl = 'tpl/crm/credentials_upload.html';
                    var config = {};
                    angular.extend(config, scope.item);
                    commonDialog.showDialogByUrl(templateUrl, handler, config);
                });

            }
        }
    }])
