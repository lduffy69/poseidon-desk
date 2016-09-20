angular.module('lsesp.customer.tpl', ['tpl/crm/account_create.html', 'tpl/crm/contact_create.html', 'tpl/crm/credentials_upload.html', 'tpl/crm/customer_create.html', 'tpl/crm/customer_dashboard.html', 'tpl/crm/customer_detail.html', 'tpl/crm/customer_edit_baseinfo.html', 'tpl/crm/customer_list.html', 'tpl/crm/customer_portal.html', 'tpl/crm/customer_view_accountinfo.html', 'tpl/crm/customer_view_baseinfo.html', 'tpl/crm/customer_view_contactinfo.html', 'tpl/crm/customer_view_credentials.html', 'tpl/crm/customer_view_header.html', 'tpl/crm/customer_view_powerinfo.html', 'tpl/crm/demand_create.html', 'tpl/crm/layout.html', 'tpl/crm/view_panel.html']);

angular.module("tpl/crm/account_create.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/crm/account_create.html",
    "<div class=\"modal-header\">\n" +
    "    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" data-ng-click=\"close(false)\"\n" +
    "            aria-hidden=\"true\">&times;</button>\n" +
    "    <h5 class=\"modal-title\" ng-bind=\"dlgTitle\"></h5></div>\n" +
    "</div>\n" +
    "<div class=\"modal-body b-t b-light\">\n" +
    "    <form name=\"form\" class=\"form-horizontal\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">\n" +
    "                <span class=\"text-danger\">*</span>开户名称</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"开户名称\" name=\"accountName\"\n" +
    "                       ng-model=\"account.accountName\">\n" +
    "                <!--<span class=\"help-block m-b-none\">Example block-level help text here.</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">\n" +
    "                <span class=\"text-danger\">*</span>开户银行</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <select name=\"bankName\" ng-model=\"account.bankName\" class=\"form-control m-b\">\n" +
    "                    <option value=\"\">-- 请选择 --</option>\n" +
    "                    <option>option 1</option>\n" +
    "                    <option>option 2</option>\n" +
    "                    <option>option 3</option>\n" +
    "                    <option>option 4</option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">银行账号</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"银行账号\" name=\"accountNo\"\n" +
    "                       ng-model=\"account.accountNo\">\n" +
    "                <!--<span class=\"help-block m-b-none\">Example block-level help text here.</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">税号</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"税号\" name=\"taxNo\" ng-model=\"account.taxNo\">\n" +
    "                <!--<span class=\"help-block m-b-none\">Example block-level help text here.</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">预留手机</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"预留手机\" name=\"concatTel\"\n" +
    "                       ng-model=\"account.concatTel\">\n" +
    "                <!--<span class=\"help-block m-b-none\">Example block-level help text here.</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">注册地址</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                                            <textarea class=\"form-control\" rows=\"3\"\n" +
    "                                                      placeholder=\"注册地址\" name=\"registeredAddr\"\n" +
    "                                                      ng-model=\"account.registeredAddr\"></textarea>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-info\" ng-disabled=\"form.$invalid\" ng-click=\"doAction()\">确定\n" +
    "    </button>\n" +
    "    <button class=\"btn btn-default\" data-ng-click=\"close(false)\">取消</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tpl/crm/contact_create.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/crm/contact_create.html",
    "<div class=\"modal-header\">\n" +
    "    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" data-ng-click=\"close(false)\"\n" +
    "            aria-hidden=\"true\">&times;</button>\n" +
    "    <h5 class=\"modal-title\" ng-bind=\"dlgTitle\"></h5></div>\n" +
    "</div>\n" +
    "<div class=\"modal-body b-t b-light\">\n" +
    "    <form name=\"form\" class=\"form-horizontal\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">\n" +
    "                <span class=\"text-danger\">*</span>联系人</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"联系人\" name=\"contName\" ng-model=\"contact.contName\">\n" +
    "                <!--<span class=\"help-block m-b-none\">Example block-level help text here.</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">\n" +
    "                <span class=\"text-danger\">*</span>\n" +
    "                联系类型</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <select name=\"contType\" ng-model=\"contact.contType\" class=\"form-control m-b\"\n" +
    "                        ng-options=\"option.codeValue as option.codeName for option in contTypeOptions\">\n" +
    "                    <option value=\"\">-- 请选择 --</option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">\n" +
    "                办公电话</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"办公电话\" name=\"contact.officeTel\"\n" +
    "                       ng-model=\"contact.officeTel\">\n" +
    "                <!--<span class=\"help-block m-b-none\">Example block-level help text here.</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">\n" +
    "                移动电话</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"移动电话\" name=\"contact.mobile\"\n" +
    "                       ng-model=\"contact.mobile\">\n" +
    "                <!--<span class=\"help-block m-b-none\">Example block-level help text here.</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">传真号码</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"传真号码\" name=\"contact.faxNo\"\n" +
    "                       ng-model=\"contact.faxNo\">\n" +
    "                <!--<span class=\"help-block m-b-none\">Example block-level help text here.</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">联系地址</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                                            <textarea class=\"form-control\" rows=\"3\"\n" +
    "                                                      placeholder=\"\" name=\"contAddr\"\n" +
    "                                                      ng-model=\"contact.contAddr\"></textarea>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-info\" ng-disabled=\"form.$invalid\" ng-click=\"doAction()\">确定\n" +
    "    </button>\n" +
    "    <button class=\"btn btn-default\" data-ng-click=\"close(false)\">取消</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tpl/crm/credentials_upload.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/crm/credentials_upload.html",
    "<div class=\"modal-header\">\n" +
    "    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" data-ng-click=\"close(false)\"\n" +
    "            aria-hidden=\"true\">&times;</button>\n" +
    "    <h5 class=\"modal-title\" ng-bind=\"dlgTitle\"></h5></div>\n" +
    "</div>\n" +
    "<div class=\"modal-body b-t b-light\">\n" +
    "    <form name=\"form\" class=\"form-horizontal\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">\n" +
    "                <span class=\"text-danger\">*</span>证件编号</label>\n" +
    "            <div class=\"col-sm-9 center\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"证件编号\" name=\"credNo\"\n" +
    "                       ng-model=\"credentials.credNo\">\n" +
    "                <!--<span class=\"help-block m-b-none\">Example block-level help text here.</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">上传照片</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"file\" name=\"credFile\" ui-jq=\"filestyle\" class=\"filestyle\"\n" +
    "                       accept=\"image/jpeg,image/png\"\n" +
    "                       data-buttonText=\"选择文件\"\n" +
    "                       data-iconName=\"fa fa-camera-retro\"\n" +
    "                       ng-file-model=\"credFile\"\n" +
    "                       nv-file-select uploader=\"uploader\"/>\n" +
    "                <span class=\"help-block m-b-none\">上传格式为jpg/png,附件大小不超过3M</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\"></label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <div style=\"border: 1px dashed #dddddd;background: #fafafa;width: 96px;height: 96px\" align=\"center\">\n" +
    "                    <a ng-click=\"openLightboxModal()\">\n" +
    "                        <img ng-if=\"credFile.url\" ng-src=\"{{credFile.url}}\"\n" +
    "                             class=\"img-thumbnail\" style=\"height: 96px\"/>\n" +
    "                    </a>\n" +
    "                    <!--<img src=\"img/noimage.png\"  width=\"96px\" height=\"96px\" class=\"img-thumbnail\" ng-hide=\"credFile.credNo\"/>-->\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-info\" ng-disabled=\"form.$invalid\" ng-click=\"doAction()\">确定\n" +
    "    </button>\n" +
    "    <button class=\"btn btn-default\" data-ng-click=\"close(false)\">取消</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tpl/crm/customer_create.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/crm/customer_create.html",
    "<div class=\"modal-header\">\n" +
    "    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" data-ng-click=\"close(false)\"\n" +
    "            aria-hidden=\"true\">&times;</button>\n" +
    "    <h5 class=\"modal-title\" ng-bind=\"dlgTitle\"></h5></div>\n" +
    "<div class=\"modal-body\">\n" +
    "    <form class=\"form-horizontal\" role=\"form\" name=\"form\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">\n" +
    "                <span class=\"text-danger\">*</span>\n" +
    "                用户名称</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"用户名称\" name=\"custName\"\n" +
    "                       ng-model=\"cust.custName\">\n" +
    "                <!--<span class=\"help-block\"-->\n" +
    "                <!--ng-class=\"{'text-danger':form.securityGroupName.$dirty && (form.securityGroupName.$error.maxlength || form.securityGroupName.$error.required ||n                form.securityGroupName.$error.minlength || form.securityGroupName.$error.ecsNamePrefixValidator)}\"-->\n" +
    "                <!--bo-text=\" 'ecs.cm.validator.lb.name_2_128' | translate\"></span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">\n" +
    "                <span class=\"text-danger\">*</span>\n" +
    "                企业名称</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"企业名称\" name=\"enterpriseName\"\n" +
    "                       ng-model=\"cust.enterpriseName\">\n" +
    "                <!--<span class=\"help-block\"-->\n" +
    "                <!--ng-class=\"{'text-danger':form.securityGroupName.$dirty && (form.securityGroupName.$error.maxlength || form.securityGroupName.$error.required ||n                form.securityGroupName.$error.minlength || form.securityGroupName.$error.ecsNamePrefixValidator)}\"-->\n" +
    "                <!--bo-text=\" 'ecs.cm.validator.lb.name_2_128' | translate\"></span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">\n" +
    "                <span class=\"text-danger\">*</span>\n" +
    "                企业性质</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <select name=\"enterpriseNature\" ng-model=\"cust.enterpriseNature\" class=\"form-control m-b\"\n" +
    "                        ng-options=\"option.codeValue as option.codeName for option in enterpriseNatureOptions\">\n" +
    "                    <option value=\"\">-- 请选择 --</option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">\n" +
    "                法人代表</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"法人代表\" name=\"legalPerson\"\n" +
    "                       ng-model=\"cust.legalPerson\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">\n" +
    "                企业注册地址</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                    <textarea class=\"form-control\" rows=\"3\"\n" +
    "                              placeholder=\"企业注册地址\" name=\"registeredAddr\"\n" +
    "                              ng-model=\"cust.registeredAddr\"></textarea>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">\n" +
    "                联系地址</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                      <textarea class=\"form-control\" rows=\"3\"\n" +
    "                                placeholder=\"联系地址\" name=\"concatAddr\"\n" +
    "                                ng-model=\"cust.concatAddr\"></textarea>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">\n" +
    "                营业期限</label>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"input-group w-md\">\n" +
    "                    <input type=\"text\" class=\"form-control\"\n" +
    "                           datepicker-popup=\"yyyy-MM-dd\"\n" +
    "                           ng-model=\"cust.beginBusiTime\" is-open=\"picker.fromOpened\"\n" +
    "                           datepicker-options=\"dateOptions\" close-text=\"Close\"/>\n" +
    "                    <span class=\"input-group-btn\">\n" +
    "                                                    <a class=\"btn btn-default\"\n" +
    "                                                       ng-click=\"open($event);picker.fromOpened=true;picker.toOpened=false\">\n" +
    "                                                        <i class=\"glyphicon glyphicon-calendar\"></i></a>\n" +
    "                        </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">\n" +
    "                至</label>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"input-group w-md\">\n" +
    "                    <input type=\"text\" class=\"form-control\"\n" +
    "                           datepicker-popup=\"yyyy-MM-dd\"\n" +
    "                           ng-model=\"cust.endBusiTime\" is-open=\"picker.toOpened\"\n" +
    "                           datepicker-options=\"dateOptions\"/>\n" +
    "                    <span class=\"input-group-btn\">\n" +
    "                                                    <a class=\"btn btn-default\"\n" +
    "                                                       ng-click=\"open($event);picker.toOpened=true;picker.fromOpened=false\">\n" +
    "                                                        <i class=\"glyphicon glyphicon-calendar\"></i></a>\n" +
    "                                                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-info\" data-ng-disabled=\"!form.$valid\" data-ng-click=\"doAction()\"\n" +
    "            bo-text=\" 'ecs.common.dlg.bt.submit' | translate\">确认\n" +
    "    </button>\n" +
    "    <button class=\"btn btn-default\" data-ng-click=\"close(false)\"\n" +
    "            bo-text=\" 'ecs.common.dlg.bt.cancel' | translate\">取消\n" +
    "    </button>\n" +
    "</div>");
}]);

angular.module("tpl/crm/customer_dashboard.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/crm/customer_dashboard.html",
    "<!-- hbox layout -->\n" +
    "<div class=\"hbox hbox-auto-xs bg-light \" ng-init=\"\n" +
    "  app.settings.asideFixed = true;\n" +
    "  app.settings.asideDock = false;\n" +
    "  app.settings.container = false;\n" +
    "  app.hideAside = false;\n" +
    "  app.hideFooter = true;\">\n" +
    "    <!-- column -->\n" +
    "    <div class=\"col w-lg lt b-r\">\n" +
    "        <div ui-view=\"list\" class=\"vbox\"/>\n" +
    "    </div>\n" +
    "    <!-- /column -->\n" +
    "    <div class=\"col r bg-light item hbox\">\n" +
    "        <div ui-view class=\"fade-in-up\"/>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- /hbox layout -->");
}]);

angular.module("tpl/crm/customer_detail.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/crm/customer_detail.html",
    "<div class=\"wrapper-md\">\n" +
    "    <!--<div class=\"row\">-->\n" +
    "    <!--<div ui-view=\"header\"/>-->\n" +
    "    <!--</div>-->\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-6 connected\" ui-jq=\"sortable\"\n" +
    "             ui-options=\"{items:'.portlet', handle:'.panel-heading', connectWith:'.connected'}\">\n" +
    "            <div ui-view=\"base\" class=\"portlet\"/>\n" +
    "            <div ui-view=\"demand\" class=\"portlet\"/>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-6 connected\" ui-jq=\"sortable\"\n" +
    "             ui-options=\"{items:'.portlet', handle:'.panel-heading', connectWith:'.connected'}\">\n" +
    "            <div ui-view=\"contact\" class=\"portlet\"/>\n" +
    "            <div ui-view=\"credentials\" class=\"portlet\"/>\n" +
    "            <div ui-view=\"account\" class=\"portlet\"/>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("tpl/crm/customer_edit_baseinfo.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/crm/customer_edit_baseinfo.html",
    "<div class=\"modal-header\">\n" +
    "    <button type=\"button\" style=\"font-size: 28px;\n" +
    "margin-top: -8px;\n" +
    "float:right;\n" +
    "font-weight: normal;\n" +
    "padding: 0;\n" +
    "cursor: pointer;\n" +
    "background: transparent;\n" +
    "border: 0;\n" +
    "-webkit-appearance: none;\" ng-click=\"close()\">×\n" +
    "    </button>\n" +
    "    <h5 class=\"modal-title\"><span ng-bind=\"modal.title\"/>基本信息</h5>\n" +
    "</div>\n" +
    "<div class=\"modal-body b-t b-light\">\n" +
    "    <form class=\"form-horizontal\" name=\"form\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-lg-2 control-label\">用户名称</label>\n" +
    "            <div class=\"col-lg-4\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"用户名称\" name=\"custName\"\n" +
    "                       ng-model=\"cust.custName\">\n" +
    "                <!--<span class=\"help-block m-b-none\">Example block-level help text here.</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-lg-2 control-label\">企业名称</label>\n" +
    "            <div class=\"col-lg-10\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"企业名称\" name=\"enterpriseName\"\n" +
    "                       ng-model=\"cust.enterpriseName\">\n" +
    "                <!--<span class=\"help-block m-b-none\">Example block-level help text here.</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-lg-2 control-label\">企业性质</label>\n" +
    "            <div class=\"col-lg-4\">\n" +
    "                <select name=\"enterpriseNature\" ng-model=\"cust.enterpriseNature\" class=\"form-control m-b\"\n" +
    "                        ng-options=\"option.codeValue as option.codeName for option in enterpriseNatureOptions\">\n" +
    "                    <option value=\"\">-- 请选择 --</option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <label class=\"col-lg-2 control-label\">法人代表</label>\n" +
    "            <div class=\"col-lg-4\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"法人代表\" name=\"legalPerson\"\n" +
    "                       ng-model=\"cust.legalPerson\">\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-lg-2 control-label\">企业注册地址</label>\n" +
    "            <div class=\"col-lg-10\">\n" +
    "                                            <textarea class=\"form-control\" rows=\"3\"\n" +
    "                                                      placeholder=\"Your comment...\" name=\"registeredAddr\"\n" +
    "                                                      ng-model=\"cust.registeredAddr\"></textarea>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-lg-2 control-label\">联系地址</label>\n" +
    "            <div class=\"col-lg-10\">\n" +
    "                                            <textarea class=\"form-control\" rows=\"3\"\n" +
    "                                                      placeholder=\"Your comment...\" name=\"concatAddr\"\n" +
    "                                                      ng-model=\"cust.concatAddr\"></textarea>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-lg-2 control-label\">营业期限</label>\n" +
    "            <div class=\"col-lg-4\">\n" +
    "                <div class=\"input-group w-md\">\n" +
    "                    <input type=\"text\" class=\"form-control\"\n" +
    "                           datepicker-popup=\"yyyy-MM-dd\"\n" +
    "                           ng-model=\"cust.beginBusiTime\" is-open=\"picker.fromOpened\"\n" +
    "                           datepicker-options=\"dateOptions\" close-text=\"Close\"/>\n" +
    "                    <span class=\"input-group-btn\">\n" +
    "                                                    <a class=\"btn btn-default\"\n" +
    "                                                       ng-click=\"open($event);picker.fromOpened=true;picker.toOpened=false\">\n" +
    "                                                        <i class=\"glyphicon glyphicon-calendar\"></i></a>\n" +
    "                                                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-lg-2 control-label\">至</label>\n" +
    "            <div class=\"col-lg-4\">\n" +
    "                <div class=\"input-group w-md\">\n" +
    "                    <input type=\"text\" class=\"form-control\"\n" +
    "                           datepicker-popup=\"yyyy-MM-dd\"\n" +
    "                           ng-model=\"cust.endBusiTime\" is-open=\"picker.toOpened\"\n" +
    "                           datepicker-options=\"dateOptions\" close-text=\"Close\"/>\n" +
    "                    <span class=\"input-group-btn\">\n" +
    "                                                    <a class=\"btn btn-default\"\n" +
    "                                                       ng-click=\"open($event);picker.toOpened=true;picker.fromOpened=false\">\n" +
    "                                                        <i class=\"glyphicon glyphicon-calendar\"></i></a>\n" +
    "                                                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!--<div class=\"form-group\">-->\n" +
    "        <!--<div class=\"col-lg-offset-2 col-lg-10\">-->\n" +
    "        <!--<button type=\"submit\" class=\"btn btn-sm btn-info\"-->\n" +
    "        <!--ng-click=\"show_basic=!show_basic;show_contact=!show_contact;\">保存-->\n" +
    "        <!--</button>-->\n" +
    "        <!--</div>-->\n" +
    "        <!--</div>-->\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-default\" ng-disabled=\"form.$invalid\" ng-click=\"save()\"\n" +
    "            disabled=\"disabled\">确定\n" +
    "    </button>\n" +
    "    <button class=\"btn btn-default\" data-ng-click=\"cancel()\">取消</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tpl/crm/customer_list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/crm/customer_list.html",
    "<div class=\"wrapper\">\n" +
    "    <div class=\"pull-right\">\n" +
    "        <button class=\"btn btn-sm btn-default  m-t-n-xs\" ng-click=\"refresh()\">\n" +
    "            <span class=\"glyphicon glyphicon-refresh\"></span>刷新\n" +
    "        </button>\n" +
    "        <button class=\"btn btn-sm btn-info m-t-n-xs\" customer-create>新增</button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"h4\">客户档案管理</div>\n" +
    "</div>\n" +
    "<div class=\"wrapper b-t m-t-xxs\">\n" +
    "    <div class=\"input-group\">\n" +
    "        <span class=\"input-group-addon input-sm\"><i class=\"fa fa-search\"></i></span>\n" +
    "        <input type=\"text\" class=\"form-control input-sm\" placeholder=\"客户名称\" ng-model=\"query\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row-row\">\n" +
    "    <div class=\"cell scrollable hover\">\n" +
    "        <div class=\"cell-inner\">\n" +
    "            <div class=\"padder\">\n" +
    "                <div class=\"list-group\">\n" +
    "                    <a ng-repeat=\"item in items | filter:query\"\n" +
    "                       class=\"list-group-item b-l-3x hover-anchor\"\n" +
    "                       ui-sref=\".detail({ custId: item.custId })\"\n" +
    "                       ng-class=\"{'hover b-l-info': item.selected}\" ng-click=\"selectItem(item)\">\n" +
    "                        <span class=\"block text-ellipsis\">{{ item.custName ? item.custName : '未知' }}</span>\n" +
    "                        <small class=\"text-muted\" ng-bind=\"item.enterpriseName\"></small>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("tpl/crm/customer_portal.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/crm/customer_portal.html",
    "<div class=\"hbox hbox-auto-xs hbox-auto-sm\" >\n" +
    "  <!-- main -->\n" +
    "  <div class=\"col\">\n" +
    "    <div class=\"wrapper-md bg-white-only b-b\">\n" +
    "      <div class=\"row text-center\">\n" +
    "        <div class=\"col-sm-3 col-xs-6\">\n" +
    "          <div>Users <i class=\"fa fa-fw fa-caret-up text-success text-sm\"></i></div>\n" +
    "          <div class=\"h2 m-b-sm\">219k</div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-3 col-xs-6\">\n" +
    "          <div>Items <i class=\"fa fa-fw fa-caret-down text-warning text-sm\"></i></div>\n" +
    "          <div class=\"h2 m-b-sm\">1230</div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-3 col-xs-6\">\n" +
    "          <div>Orders <i class=\"fa fa-fw fa-caret-up text-success text-sm\"></i></div>\n" +
    "          <div class=\"h2 m-b-sm\">2839</div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-3 col-xs-6\">\n" +
    "          <div>Visits <i class=\"fa fa-fw fa-caret-down text-danger text-sm\"></i></div>\n" +
    "          <div class=\"h2 m-b-sm\">2,300</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"wrapper-md\">\n" +
    "      <div class=\"row text-center\">\n" +
    "        <div class=\"col-sm-3 col-xs-6\">\n" +
    "          <div>Todays activity</div>\n" +
    "          <div ui-jq=\"easyPieChart\" ui-options=\"{\n" +
    "              percent: 75,\n" +
    "              lineWidth: 4,\n" +
    "              trackColor: '{{app.color.light}}',\n" +
    "              barColor: '{{app.color.primary}}',\n" +
    "              scaleColor: false,\n" +
    "              size: 115,\n" +
    "              rotate: 90,\n" +
    "              lineCap: 'butt'\n" +
    "            }\" class=\"inline m-t\">\n" +
    "            <div>\n" +
    "              <span class=\"text-primary h3\">75%</span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-3 col-xs-6\">\n" +
    "          <div>Active Players</div>\n" +
    "          <div ui-jq=\"easyPieChart\" ui-options=\"{\n" +
    "              percent: 35,\n" +
    "              lineWidth: 4,\n" +
    "              trackColor: '{{app.color.light}}',\n" +
    "              barColor: '{{app.color.info}}',\n" +
    "              scaleColor: false,\n" +
    "              size: 115,\n" +
    "              rotate: 0,\n" +
    "              lineCap: 'butt'\n" +
    "            }\" class=\"inline m-t\">\n" +
    "            <div>\n" +
    "              <span class=\"text-info h3\">35%</span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-3 col-xs-6\">\n" +
    "          <div>Weekly Changes</div>\n" +
    "          <div ui-jq=\"easyPieChart\" ui-options=\"{\n" +
    "              percent: 50,\n" +
    "              lineWidth: 4,\n" +
    "              trackColor: '{{app.color.light}}',\n" +
    "              barColor: '{{app.color.warning}}',\n" +
    "              scaleColor: false,\n" +
    "              size: 115,\n" +
    "              rotate: 180,\n" +
    "              lineCap: 'butt'\n" +
    "            }\" class=\"inline m-t\">\n" +
    "            <div>\n" +
    "              <span class=\"text-warning h3\">50%</span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-3 col-xs-6\">\n" +
    "          <div>Monthly Changes</div>\n" +
    "          <div ui-jq=\"easyPieChart\" ui-options=\"{\n" +
    "              percent: 60,\n" +
    "              lineWidth: 4,\n" +
    "              trackColor: '{{app.color.light}}',\n" +
    "              barColor: '{{app.color.success}}',\n" +
    "              scaleColor: false,\n" +
    "              size: 115,\n" +
    "              rotate: 90,\n" +
    "              lineCap: 'butt'\n" +
    "            }\" class=\"inline m-t\">\n" +
    "            <div>\n" +
    "              <span class=\"text-success h3\">60%</span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"wrapper-md\">\n" +
    "      <!-- users -->\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-md-6\">\n" +
    "          <div class=\"panel no-border\">\n" +
    "            <a class=\"btn btn-primary btn-addon btn-sm pull-right\" href=\"#/customer/add\" ng-click=\"createCust()\"><i class=\"fa fa-plus\"></i>新增客户</a>\n" +
    "            <h3 class=\"font-thin m-t-none m-b-none text-muted\">客户概览</h3>\n" +
    "\n" +
    "            <div class=\"panel-heading wrapper b-b b-light\">\n" +
    "\n" +
    "            </div>\n" +
    "            <ul class=\"list-group list-group-lg m-b-none\">\n" +
    "              <li class=\"list-group-item\">\n" +
    "                <a href class=\"thumb-sm m-r\">\n" +
    "                  <img src=\"img/a1.jpg\" class=\"r r-2x\">\n" +
    "                </a>\n" +
    "                <span class=\"pull-right label bg-primary inline m-t-sm\">签约</span>\n" +
    "                <a href>Damon Parker</a>\n" +
    "              </li>\n" +
    "              <li class=\"list-group-item\">\n" +
    "                <a href class=\"thumb-sm m-r\">\n" +
    "                  <img src=\"img/a2.jpg\" class=\"r r-2x\">\n" +
    "                </a>\n" +
    "                <span class=\"pull-right label bg-info inline m-t-sm\">电源商</span>\n" +
    "                <a href>Joe Waston</a>\n" +
    "              </li>\n" +
    "              <li class=\"list-group-item\">\n" +
    "                <a href class=\"thumb-sm m-r\">\n" +
    "                  <img src=\"img/a3.jpg\" class=\"r r-2x\">\n" +
    "                </a>\n" +
    "                <span class=\"pull-right label bg-warning inline m-t-sm\">潜在</span>\n" +
    "                <a href>Jannie Dvis</a>\n" +
    "              </li>\n" +
    "              <li class=\"list-group-item\">\n" +
    "                <a href class=\"thumb-sm m-r\">\n" +
    "                  <img src=\"img/a4.jpg\" class=\"r r-2x\">\n" +
    "                </a>\n" +
    "                <span class=\"pull-right label bg-warning inline m-t-sm\">潜在</span>\n" +
    "                <a href>Emma Welson</a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-6\">\n" +
    "          <div class=\"list-group list-group-lg list-group-sp\">\n" +
    "            <a herf class=\"list-group-item clearfix\">\n" +
    "              <span class=\"pull-left thumb-sm avatar m-r\">\n" +
    "                <img src=\"img/a4.jpg\" alt=\"...\">\n" +
    "                <i class=\"on b-white right\"></i>\n" +
    "              </span>\n" +
    "              <span class=\"clear\">\n" +
    "                <span>Chris Fox</span>\n" +
    "                <small class=\"text-muted clear text-ellipsis\">What's up, buddy</small>\n" +
    "              </span>\n" +
    "            </a>\n" +
    "            <a herf class=\"list-group-item clearfix\">\n" +
    "              <span class=\"pull-left thumb-sm avatar m-r\">\n" +
    "                <img src=\"img/a5.jpg\" alt=\"...\">\n" +
    "                <i class=\"on b-white right\"></i>\n" +
    "              </span>\n" +
    "              <span class=\"clear\">\n" +
    "                <span>Amanda Conlan</span>\n" +
    "                <small class=\"text-muted clear text-ellipsis\">Come online and we need talk about the plans that we have discussed</small>\n" +
    "              </span>\n" +
    "            </a>\n" +
    "            <a herf class=\"list-group-item clearfix\">\n" +
    "              <span class=\"pull-left thumb-sm avatar m-r\">\n" +
    "                <img src=\"img/a6.jpg\" alt=\"...\">\n" +
    "                <i class=\"busy b-white right\"></i>\n" +
    "              </span>\n" +
    "              <span class=\"clear\">\n" +
    "                <span>Dan Doorack</span>\n" +
    "                <small class=\"text-muted clear text-ellipsis\">Hey, Some good news</small>\n" +
    "              </span>\n" +
    "            </a>\n" +
    "            <a herf class=\"list-group-item clearfix\">\n" +
    "              <span class=\"pull-left thumb-sm avatar m-r\">\n" +
    "                <img src=\"img/a7.jpg\" alt=\"...\">\n" +
    "                <i class=\"busy b-white right\"></i>\n" +
    "              </span>\n" +
    "              <span class=\"clear\">\n" +
    "                <span>Lauren Taylor</span>\n" +
    "                <small class=\"text-muted clear text-ellipsis\">Nice to talk with you.</small>\n" +
    "              </span>\n" +
    "            </a>\n" +
    "            <a herf class=\"list-group-item clearfix\">\n" +
    "              <span class=\"pull-left thumb-sm avatar m-r\">\n" +
    "                <img src=\"img/a8.jpg\" alt=\"...\">\n" +
    "                <i class=\"away b-white right\"></i>\n" +
    "              </span>\n" +
    "              <span class=\"clear\">\n" +
    "                <span>Mike Jackson</span>\n" +
    "                <small class=\"text-muted clear text-ellipsis\">This is nice</small>\n" +
    "              </span>\n" +
    "            </a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <!-- / users -->\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!-- / main -->\n" +
    "</div>");
}]);

angular.module("tpl/crm/customer_view_accountinfo.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/crm/customer_view_accountinfo.html",
    "<div class=\"panel panel-default panel-portlet\">\n" +
    "    <div class=\"panel-portlet-tool\">\n" +
    "        <ul class=\"nav dropdown\" dropdown>\n" +
    "            <li class=\"nav-item inline\" ng-if=\"account\">\n" +
    "                <a href class=\"dropdown-toggle\" dropdown-toggle>\n" +
    "                    <i class=\"icon-list\"></i>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item inline\" ng-if=\"!account\">\n" +
    "                <a account-create item=\"account\"><i class=\"icon-plus\"></i></a>\n" +
    "            </li>\n" +
    "            <ul class=\"dropdown-menu dropdown-menu-right animated fadeInDown w\">\n" +
    "                <li>\n" +
    "                    <a account-create item=\"account\">新增</a>\n" +
    "                </li>\n" +
    "                <li ng-if=\"account\">\n" +
    "                    <a account-create edit-mode=\"true\" item=\"account\">编辑</a>\n" +
    "                </li>\n" +
    "                <li class=\"divider\" ng-if=\"account\"></li>\n" +
    "                <li ng-if=\"account\">\n" +
    "                    <a account-delete item=\"account\">删除</a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"panel-heading\">\n" +
    "        企业银行账户信息\n" +
    "        <!--<span ng-if=\"accounts.length>0\">-->\n" +
    "        <!--<a account-delete item=\"account\"><i class=\"fa fa-times pull-right\"></i></a>-->\n" +
    "        <!--<a account-create edit-mode=\"true\" item=\"account\"><i class=\"fa fa-edit pull-right\"></i></a>-->\n" +
    "        <!--</span>-->\n" +
    "        <!--<a class=\"text-info-dk h4\" account-create item=\"item\" ng-if=\"accounts.length==0\"><i class=\"fa fa-plus-circle pull-right\"></i></a>-->\n" +
    "    </div>\n" +
    "    <div class=\"list-group no-radius alt\" ng-if=\"accounts.length>0\">\n" +
    "        <div class=\"list-group-item clearfix\">\n" +
    "            <div class=\"clear\">\n" +
    "                <div class=\"h3 m-t-xs m-b-xs\">\n" +
    "                    {{account.accountName}}\n" +
    "                </div>\n" +
    "                <small class=\"text-muted\">{{account.bankName}}</small>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <a class=\"list-group-item\" href=\"\">\n" +
    "            <span class=\"badge bg-light\" ng-bind=\"account.accountNo\"></span>\n" +
    "            <i class=\"fa fa-credit-card fa-fw text-muted\"></i>银行卡号\n" +
    "        </a>\n" +
    "        <a class=\"list-group-item\" href=\"\">\n" +
    "            <i class=\"fa fa-compass fa-fw text-muted\"></i>注册地址\n" +
    "            <span class=\"badge bg-light\" ng-bind=\"account.registeredAddr\"></span>\n" +
    "        </a>\n" +
    "        <a class=\"list-group-item\" href=\"\">\n" +
    "            <span class=\"badge bg-light\" ng-bind=\"account.taxNo\"></span>\n" +
    "            <i class=\"fa fa-compass fa-fw text-muted\"></i>客户税号\n" +
    "        </a>\n" +
    "        <a class=\"list-group-item\" href=\"\">\n" +
    "            <span class=\"badge bg-light\" ng-bind=\"account.concatTel\"></span>\n" +
    "            <i class=\"fa fa-mobile fa-fw text-muted\"></i>联系电话\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"panel-footer\" ng-if=\"accounts.length>0\">\n" +
    "        <div class=\"m-b m-t-lg\">\n" +
    "            <a ng-repeat=\"account in accounts\"\n" +
    "               ng-click=\"view(account)\" class=\"avatar thumb-xs m-r-xs\"\n" +
    "               href=\"\"> <img src=\"img/a1.jpg\">\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("tpl/crm/customer_view_baseinfo.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/crm/customer_view_baseinfo.html",
    "<div class=\"panel panel-default panel-portlet\">\n" +
    "    <div class=\"panel-portlet-tool\">\n" +
    "        <ul class=\"nav\">\n" +
    "            <li class=\"nav-item inline\">\n" +
    "                <a customer-create edit-mode=\"true\" item=\"cust\"><i\n" +
    "                        class=\"fa fa-edit\"></i></a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"panel-heading\">\n" +
    "        基本信息\n" +
    "    </div>\n" +
    "    <div class=\"list-group no-radius alt\">\n" +
    "        <div class=\"clearfix list-group-item\">\n" +
    "            <a href=\"\" class=\"pull-left thumb-md avatar b-3x m-r\">\n" +
    "                <img src=\"img/a2.jpg\" alt=\"...\">\n" +
    "            </a>\n" +
    "\n" +
    "            <div class=\"clear\">\n" +
    "                <div class=\"h3 m-t-xs m-b-xs\">\n" +
    "                    <span ng-bind=\"cust.custName\"/>\n" +
    "                </div>\n" +
    "                <small class=\"text-muted\" ng-bind=\"cust.custNo\"></small>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <a class=\"list-group-item\" href=\"\">\n" +
    "            <span class=\"badge bg-light\" ng-bind=\"cust.enterpriseName\"></span>\n" +
    "            <i class=\"fa fa-comment fa-fw text-muted\"></i>\n" +
    "            企业名称\n" +
    "        </a>\n" +
    "        <a class=\"list-group-item\" href=\"\">\n" +
    "            <span class=\"badge bg-light\" ng-bind=\"cust.concatAddr\"></span>\n" +
    "            <i class=\"fa fa-envelope fa-fw text-muted\"></i>\n" +
    "            联系地址\n" +
    "        </a>\n" +
    "        <a class=\"list-group-item\" href=\"\">\n" +
    "            <span class=\"badge bg-light\" ng-bind=\"cust.legalPerson\"></span>\n" +
    "            <i class=\"fa fa-eye fa-fw text-muted\"></i>\n" +
    "            法人代表\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("tpl/crm/customer_view_contactinfo.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/crm/customer_view_contactinfo.html",
    "<div class=\"panel panel-default panel-portlet\">\n" +
    "    <div class=\"panel-portlet-tool\">\n" +
    "        <ul class=\"nav dropdown\" dropdown>\n" +
    "            <li class=\"nav-item inline\" ng-if=\"contact\">\n" +
    "                <a href class=\"dropdown-toggle nav-link\" dropdown-toggle>\n" +
    "                    <i class=\"icon-list\"></i>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item inline\" ng-if=\"!contact\">\n" +
    "                <a contact-create item=\"contact\"><i class=\"icon-plus\"></i></a>\n" +
    "            </li>\n" +
    "            <ul class=\"dropdown-menu dropdown-menu-right animated fadeInDown w\">\n" +
    "                <li>\n" +
    "                    <a contact-create item=\"contact\">新增</a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <a contact-create edit-mode=\"true\" item=\"contact\">编辑</a>\n" +
    "                </li>\n" +
    "                <li class=\"divider\"></li>\n" +
    "                <li>\n" +
    "                    <a contact-delete item=\"contact\">删除</a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"panel-heading\">\n" +
    "        企业联系人信息\n" +
    "        <!--<span ng-if=\"contacts.length>0\">-->\n" +
    "        <!--<a contact-delete item=\"contact\"><i class=\"fa fa-times pull-right\"></i></a>-->\n" +
    "        <!--<a contact-create edit-mode=\"true\" item=\"contact\"><i class=\"fa fa-edit pull-right\"></i></a>-->\n" +
    "        <!--</span>-->\n" +
    "        <!--<a class=\"text-info-dk h4\" contact-create item=\"item\" ng-if=\"contacts.length==0\"><i class=\"fa fa-plus-circle pull-right\"></i></a>-->\n" +
    "    </div>\n" +
    "    <div class=\"list-group no-radius alt\" ng-if=\"contacts.length>0\">\n" +
    "        <div class=\"list-group-item clearfix\">\n" +
    "            <div class=\"clear\">\n" +
    "                <div class=\"h3 m-t-xs m-b-xs\">\n" +
    "                    {{contact.contName}}\n" +
    "                </div>\n" +
    "                <small class=\"text-muted\">{{contact.contAddr}}</small>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <a class=\"list-group-item\" href=\"\"> <span class=\"badge bg-light\">{{contact.mobile}}</span>\n" +
    "            <i class=\"fa fa-mobile fa-fw text-muted\"></i> Mobile\n" +
    "        </a> <a class=\"list-group-item\" href=\"\"> <span class=\"badge bg-light\">{{contact.officeTel}}</span>\n" +
    "        <i class=\"fa fa-phone fa-fw text-muted\"></i> Office\n" +
    "    </a><a class=\"list-group-item\" href=\"\" ng-show=\"contact.show\"> <span\n" +
    "            class=\"badge bg-light\">{{contact.faxNo}}</span> <i\n" +
    "            class=\"fa  fa-fax fa-fw text-muted\"></i> FaxNO\n" +
    "    </a> <a class=\"list-group-item\" href=\"\" ng-show=\"contact.show\"> <span\n" +
    "            class=\"badge bg-light\">{{contact.postCode}}</span> <i\n" +
    "            class=\"fa fa-institution fa-fw text-muted\"></i> Post\n" +
    "    </a> <a class=\"list-group-item\" href=\"\"> <span class=\"badge bg-light\">{{contact.email}}</span>\n" +
    "        <i class=\"fa fa-envelope fa-fw text-muted\"></i> Email\n" +
    "    </a> <a class=\"list-group-item\" href=\"\" ng-show=\"contact.show\"> <span\n" +
    "            class=\"badge bg-light\">{{contact.webchart}}</span> <i\n" +
    "            class=\"fa fa-comments fa-fw text-muted\"></i> WeiChart\n" +
    "    </a> <a class=\"list-group-item\" href=\"\" ng-show=\"contact.show\"> <span\n" +
    "            class=\"badge bg-light\">{{contact.qq}}</span> <i\n" +
    "            class=\"fa fa-qq fa-fw text-muted\"></i> QQ\n" +
    "    </a>\n" +
    "        <button class=\"btn btn-default btn-sm pull-right\" type=\"button\"\n" +
    "                ng-click=\"contact.show=!contact.show\">\n" +
    "            <i class=\"fa fa-fw  pull-right\"\n" +
    "               ng-class=\"{'fa-angle-double-down':!contact.show,'fa-angle-double-up':contact.show}\"></i>\n" +
    "        </button>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"panel-footer\" ng-if=\"contacts.length>0\">\n" +
    "        <div class=\"m-b m-t-lg\">\n" +
    "            <a ng-repeat=\"contact in contacts\" ng-class=\"{'hover': contact }\"\n" +
    "               ng-click=\"view(contact)\" class=\"avatar thumb-xs m-r-xs\"\n" +
    "               href=\"\"> <img src=\"img/a1.jpg\">\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("tpl/crm/customer_view_credentials.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/crm/customer_view_credentials.html",
    "<div class=\"panel panel-default b-a\">\n" +
    "    <div class=\"panel-heading no-border\">\n" +
    "        <span class=\"text-lt\">企业资质</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"hbox text-center b-b b-light text-sm\">\n" +
    "        <a href=\"\" class=\"col padder-v text-muted b-r b-light\" credentials-upload item=\"credentialsList[0]\">\n" +
    "            <i class=\"icon-grid block m-b-xs fa-2x\"></i>\n" +
    "            <span ng-bind=\"credentialsList[0].credTypeName\"></span>\n" +
    "        </a>\n" +
    "        <a href=\"\" class=\"col padder-v text-muted b-r b-light\" credentials-upload item=\"credentialsList[1]\">\n" +
    "            <i class=\"icon-credit-card block m-b-xs fa-2x\"></i>\n" +
    "            <span ng-bind=\"credentialsList[1].credTypeName\"></span>\n" +
    "        </a>\n" +
    "        <a href=\"\" class=\"col padder-v text-muted b-r b-light\" credentials-upload item=\"credentialsList[2]\">\n" +
    "            <i class=\"icon-pencil block m-b-xs fa-2x\"></i>\n" +
    "            <span ng-bind=\"credentialsList[2].credTypeName\"></span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <!--<div class=\"hbox text-center b-b b-light text-sm\">-->\n" +
    "        <!--<a href=\"\" class=\"col padder-v text-muted b-r b-light\" credentials-upload item=\"credentialsList[0]\">-->\n" +
    "            <!--<i class=\"icon-grid block m-b-xs fa-2x\"></i>-->\n" +
    "            <!--<span ng-bind=\"credentialsList[0].credTypeName\"></span>-->\n" +
    "        <!--</a>-->\n" +
    "        <!--<a href=\"\" class=\"col padder-v text-muted b-r b-light\" credentials-upload item=\"credentialsList[1]\">-->\n" +
    "            <!--<i class=\"icon-credit-card block m-b-xs fa-2x\"></i>-->\n" +
    "            <!--<span ng-bind=\"credentialsList[1].credTypeName\"></span>-->\n" +
    "        <!--</a>-->\n" +
    "        <!--<a href=\"\" class=\"col padder-v text-muted b-r b-light\" credentials-upload item=\"credentialsList[2]\">-->\n" +
    "            <!--<i class=\"icon-pencil block m-b-xs fa-2x\"></i>-->\n" +
    "            <!--<span ng-bind=\"credentialsList[2].credTypeName\"></span>-->\n" +
    "        <!--</a>-->\n" +
    "    <!--</div>-->\n" +
    "    <!--<div class=\"hbox text-center b-b b-light text-sm\">-->\n" +
    "        <!--<a href=\"\" class=\"col padder-v text-muted b-r b-light\">-->\n" +
    "            <!--<i class=\"icon-plus block m-b-xs fa-2x\"></i>-->\n" +
    "            <!--<span>添加其他资质</span>-->\n" +
    "        <!--</a>-->\n" +
    "    <!--</div>-->\n" +
    "</div>");
}]);

angular.module("tpl/crm/customer_view_header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/crm/customer_view_header.html",
    "<div class=\"col-md-6\">\n" +
    "    <div class=\"hbox h-auto m-b-lg\">\n" +
    "        <div class=\"col text-center w-sm\">\n" +
    "            <div class=\"thumb-lg avatar inline\">\n" +
    "                <img ng-src=\"{{item.avatar}}\" ng-show=\"item.avatar\">\n" +
    "                <img src=\"img/a2.jpg\" ng-show=\"!item.avatar\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col v-middle h3 font-thin\">\n" +
    "            <div><span ng-bind=\"cust.custName\"></span></div>\n" +
    "            <!--<div>-->\n" +
    "            <!--<input type=\"text\" placeholder=\"custName\"-->\n" +
    "            <!--class=\"form-control w-auto input-lg m-b-n-xxs font-bold\"-->\n" +
    "            <!--ng-model=\"customer.custName\">-->\n" +
    "            <!--</div>-->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"col-md-6\">\n" +
    "    <div class=\"row row-sm text-center\">\n" +
    "        <div class=\"col-xs-6\">\n" +
    "            <a class=\"block panel padder-v bg-success  item\" href=\"\"> <span\n" +
    "                    class=\"text-white font-thin h3 block\">长协</span> <span\n" +
    "                    class=\"text-muted text-xs\">到期日2016年12月</span> <span\n" +
    "                    class=\"bottom text-right w-full\"> <i\n" +
    "                    class=\"fa fa-cloud-upload text-muted m-r-sm\"></i>\n" +
    "				</span>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-6\">\n" +
    "            <a class=\"block panel padder-v bg-success item\" href=\"\"> <span\n" +
    "                    class=\"text-white font-thin h3 block\">竞价</span> <span\n" +
    "                    class=\"text-muted text-xs\">到期日2016年12月</span> <span\n" +
    "                    class=\"bottom text-right w-full\"> <i\n" +
    "                    class=\"fa fa-cloud-upload text-muted m-r-sm\"></i>\n" +
    "				</span>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("tpl/crm/customer_view_powerinfo.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/crm/customer_view_powerinfo.html",
    "<div class=\"panel panel-default panel-portlet\">\n" +
    "    <div class=\"panel-portlet-tool\">\n" +
    "        <ul class=\"nav dropdown\" dropdown>\n" +
    "            <li class=\"nav-item inline\" ng-if=\"demand\">\n" +
    "                <a href class=\"dropdown-toggle\" dropdown-toggle>\n" +
    "                    <i class=\"icon-list\"></i>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item inline\" ng-if=\"!demand\">\n" +
    "                <a demand-create item=\"demand\"><i class=\"icon-plus\"></i></a>\n" +
    "            </li>\n" +
    "            <ul class=\"dropdown-menu dropdown-menu-right animated fadeInDown w\">\n" +
    "                <li>\n" +
    "                    <a demand-create item=\"demand\">新增</a>\n" +
    "                </li>\n" +
    "                <li ng-if=\"demand\">\n" +
    "                    <a demand-create edit-mode=\"true\" item=\"demand\">编辑</a>\n" +
    "                </li>\n" +
    "                <li class=\"divider\" ng-if=\"demand\"></li>\n" +
    "                <li ng-if=\"demand\">\n" +
    "                    <a demand-delete item=\"demand\">删除</a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"panel-heading\">\n" +
    "        企业用电信息\n" +
    "        <!--<span ng-if=\"demands.length>0\">-->\n" +
    "        <!--<a demand-delete item=\"demand\"><i class=\"fa fa-times pull-right\"></i></a>-->\n" +
    "        <!--<a demand-create edit-mode=\"true\" item=\"demand\"><i class=\"fa fa-edit pull-right\"></i></a>-->\n" +
    "        <!--</span>-->\n" +
    "        <!--<a class=\"text-info-dk h4\" demand-create item=\"item\" ng-if=\"demands.length==0\"><i-->\n" +
    "        <!--class=\"fa fa-plus-circle pull-right\"></i></a>-->\n" +
    "    </div>\n" +
    "    <div class=\"list-group no-radius alt\" ng-if=\"demands.length>0\">\n" +
    "        <a class=\"list-group-item\" href=\"\"> <span class=\"badge bg-light\">{{demand.consNo}}</span>\n" +
    "            <i class=\"fa fa-mobile fa-fw text-muted\"></i> 供电户号\n" +
    "        </a> <a class=\"list-group-item\" href=\"\"> <span class=\"badge bg-light\">{{demand.powerOrgName}}</span>\n" +
    "        <i class=\"fa fa-mobile fa-fw text-muted\"></i> 供电单位\n" +
    "    </a> <a class=\"list-group-item text-center\" href=\"\"> 年度负荷 </a>\n" +
    "        <div class=\"hbox text-center b-t b-success\">\n" +
    "            <div class=\"col padder-v text-muted\">\n" +
    "                <div class=\"h3 text-danger\">\n" +
    "                    <span ng-bind=\"demand.maxLoad\"></span>\n" +
    "                </div>\n" +
    "                <span>最大</span>\n" +
    "            </div>\n" +
    "            <div class=\"col padder-v text-muted\">\n" +
    "                <div class=\"h3 text-warning\">\n" +
    "                    <span ng-bind=\"demand.averLoad\"></span>\n" +
    "                </div>\n" +
    "                <span>平均</span>\n" +
    "            </div>\n" +
    "            <div class=\"col padder-v text-muted\">\n" +
    "                <div class=\"h3 text-success\">\n" +
    "                    <span ng-bind=\"demand.minLoad\"></span></div>\n" +
    "                <span>最小</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"panel-footer\" ng-if=\"demands.length>0\">\n" +
    "        <div class=\"m-b m-t-lg\">\n" +
    "            <a ng-repeat=\"demand in demands\"\n" +
    "               ng-click=\"view(demand)\" class=\"avatar thumb-xs m-r-xs\"\n" +
    "               href=\"\"> <img src=\"img/a1.jpg\">\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tpl/crm/demand_create.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/crm/demand_create.html",
    "<div class=\"modal-header\">\n" +
    "    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" data-ng-click=\"close(false)\"\n" +
    "            aria-hidden=\"true\">&times;</button>\n" +
    "    <h5 class=\"modal-title\" ng-bind=\"dlgTitle\"></h5></div>\n" +
    "</div>\n" +
    "<div class=\"modal-body b-t b-light\">\n" +
    "    <form name=\"form\" class=\"form-horizontal\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">\n" +
    "                <span class=\"text-danger\">*</span>配网用户户号</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"配网用户户号\" name=\"consNo\"\n" +
    "                       ng-model=\"demand.consNo\">\n" +
    "                <!--<span class=\"help-block m-b-none\">Example block-level help text here.</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\"><span class=\"text-danger\">*</span>供电公司</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"供电公司\" name=\"powerOrgName\"\n" +
    "                       ng-model=\"demand.powerOrgName\">\n" +
    "                <!--<span class=\"help-block m-b-none\">Example block-level help text here.</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\"><span class=\"text-danger\">*</span>供电公司单位代码</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"供电公司单位代码\" name=\"powerOrgNo\"\n" +
    "                       ng-model=\"demand.powerOrgNo\">\n" +
    "                <!--<span class=\"help-block m-b-none\">Example block-level help text here.</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">最大负荷</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"最大负荷\" name=\"maxLoad\"\n" +
    "                       ng-model=\"demand.maxLoad\">\n" +
    "                <!--<span class=\"help-block m-b-none\">Example block-level help text here.</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">最小负荷</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"最小负荷\" name=\"minLoad\"\n" +
    "                       ng-model=\"demand.minLoad\">\n" +
    "                <!--<span class=\"help-block m-b-none\">Example block-level help text here.</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-3 control-label\">平均负荷</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"平均负荷\" name=\"averLoad\"\n" +
    "                       ng-model=\"demand.averLoad\">\n" +
    "                <!--<span class=\"help-block m-b-none\">Example block-level help text here.</span>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-info\" ng-disabled=\"form.$invalid\" ng-click=\"doAction()\">确定\n" +
    "    </button>\n" +
    "    <button class=\"btn btn-default\" data-ng-click=\"close(false)\">取消</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tpl/crm/layout.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/crm/layout.html",
    "<div class=\"fade-in-up app-content-body app-content-full\" ui-view></div>");
}]);

angular.module("tpl/crm/view_panel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/crm/view_panel.html",
    "<div class=\"panel\" ng-class=\"panel.css\">\n" +
    "    <div class=\"panel-tool\" style=\"position: absolute;right: 5px;\">\n" +
    "        <ul class=\"nav dropdown\" dropdown>\n" +
    "            <li class=\"nav-item inline\">\n" +
    "                <a href class=\"dropdown-toggle nav-link\" dropdown-toggle>\n" +
    "                    <i class=\"icon-list\"></i>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <ul class=\"dropdown-menu dropdown-menu-right animated fadeInDown w\">\n" +
    "                <li>\n" +
    "                    <a contact-create item=\"contact\">新增</a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <a contact-create edit-mode=\"true\" item=\"contact\">编辑</a>\n" +
    "                </li>\n" +
    "                <li class=\"divider\"></li>\n" +
    "                <li>\n" +
    "                    <a contact-delete item=\"contact\">删除</a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"panel-heading\">\n" +
    "        {{panel.title}}\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "        <div class=\"list-group no-radius alt\" ng-if=\"accounts.length>0\">\n" +
    "            <div class=\"list-group-item clearfix\">\n" +
    "                <div class=\"clear\">\n" +
    "                    <div class=\"h3 m-t-xs m-b-xs\">\n" +
    "                        {{account.accountName}}\n" +
    "                    </div>\n" +
    "                    <small class=\"text-muted\">{{account.bankName}}</small>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <a class=\"list-group-item\" href=\"\">\n" +
    "                <span class=\"badge bg-light\" ng-bind=\"account.accountNo\"></span>\n" +
    "                <i class=\"fa fa-credit-card fa-fw text-muted\"></i>银行卡号\n" +
    "            </a>\n" +
    "            <a class=\"list-group-item\" href=\"\">\n" +
    "                <i class=\"fa fa-compass fa-fw text-muted\"></i>注册地址\n" +
    "                <span class=\"badge bg-light\" ng-bind=\"account.registeredAddr\"></span>\n" +
    "            </a>\n" +
    "            <a class=\"list-group-item\" href=\"\">\n" +
    "                <span class=\"badge bg-light\" ng-bind=\"account.taxNo\"></span>\n" +
    "                <i class=\"fa fa-compass fa-fw text-muted\"></i>客户税号\n" +
    "            </a>\n" +
    "            <a class=\"list-group-item\" href=\"\">\n" +
    "                <span class=\"badge bg-light\" ng-bind=\"account.concatTel\"></span>\n" +
    "                <i class=\"fa fa-mobile fa-fw text-muted\"></i>联系电话\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"panel-footer\" ng-if=\"accounts.length>0\">\n" +
    "        <div class=\"m-b m-t-lg\">\n" +
    "            <a ng-repeat=\"account in accounts\"\n" +
    "               ng-click=\"view(account)\" class=\"avatar thumb-xs m-r-xs\"\n" +
    "               href=\"\"> <img src=\"img/a1.jpg\">\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
