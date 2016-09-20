angular.module('lsesp.common.tpl', ['tpl/viewframework/aside.html', 'tpl/viewframework/nav.html', 'tpl/viewframework/productNav.html', 'tpl/viewframework/topbar.html', 'tpl/viewframework/viewframework.html', 'tpl/lsesp_home.html', 'tpl/common/message.html', 'tpl/common/message_dialog.html']);

angular.module("tpl/viewframework/aside.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/viewframework/aside.html",
    "<div>\n" +
    "    <div class=\"aside-wrap\">\n" +
    "        <!-- if you want to use a custom scroll when aside fixed, use the slimScroll\n" +
    "          <div class=\"navi-wrap\" ui-jq=\"slimScroll\" ui-options=\"{height:'100%', size:'8px'}\">\n" +
    "        -->\n" +
    "        <div class=\"navi-wrap\">\n" +
    "            <!-- user -->\n" +
    "            <div class=\"clearfix hidden-xs text-center hide\" id=\"aside-user\">\n" +
    "                <div class=\"dropdown wrapper\" dropdown>\n" +
    "                    <a ui-sref=\"app.page.profile\">\n" +
    "          <span class=\"thumb-lg w-auto-folded avatar m-t-sm\">\n" +
    "            <img src=\"img/a0.jpg\" class=\"img-full\" alt=\"...\">\n" +
    "          </span>\n" +
    "                    </a>\n" +
    "                    <a href class=\"dropdown-toggle hidden-folded\" dropdown-toggle>\n" +
    "          <span class=\"clear\">\n" +
    "            <span class=\"block m-t-sm\">\n" +
    "              <strong class=\"font-bold text-lt\" ng-bind=\"userinfo.accountName\"></strong>\n" +
    "              <b class=\"caret\"></b>\n" +
    "            </span>\n" +
    "            <span class=\"text-muted text-xs block\" ng-bind=\"userinfo.accountRole\"></span>\n" +
    "          </span>\n" +
    "                    </a>\n" +
    "                    <!-- dropdown -->\n" +
    "                    <ul class=\"dropdown-menu animated fadeInDown w hidden-folded\">\n" +
    "                        <li>\n" +
    "                            <a href=\"#/app/user/changepass\" ui-sref=\"app.user.changepass\">修改密码</a>\n" +
    "                        </li>\n" +
    "                        <li class=\"divider\"></li>\n" +
    "                        <li>\n" +
    "                            <a ng-click=\"logout()\">注销</a>\n" +
    "\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                    <!-- / dropdown -->\n" +
    "                </div>\n" +
    "                <div class=\"line dk hidden-folded\"></div>\n" +
    "            </div>\n" +
    "            <!-- / user -->\n" +
    "\n" +
    "            <!-- nav -->\n" +
    "            <nav ui-nav class=\"navi\" viewframework-nav></nav>\n" +
    "            <!-- nav -->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("tpl/viewframework/nav.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/viewframework/nav.html",
    "<!-- list -->\n" +
    "<ul class=\"nav\">\n" +
    "    <!--业务菜单-->\n" +
    "    <li class=\"hidden-folded padder m-t m-b-sm text-muted text-xs\">\n" +
    "        <span class=\"font-bold\" translate=\"aside.nav.ESP\"></span>\n" +
    "    </li>\n" +
    "    <li ng-repeat=\"row in tree_rows\">\n" +
    "        <a href class=\"auto\">\n" +
    "      <span class=\"pull-right text-muted\"> <i class=\"fa fa-fw fa-angle-right text\"></i> <i\n" +
    "              class=\"fa fa-fw fa-angle-down text-active\"></i>\n" +
    "      </span>\n" +
    "            <i ng-class=\"row.icon\"></i>\n" +
    "            <span ng-bind=\"row.label\" class=\"font-bold\"></span>\n" +
    "        </a>\n" +
    "        <ul class=\"nav nav-sub dk\">\n" +
    "            <li class=\"nav-sub-header\">\n" +
    "                <a href>\n" +
    "                    <span ng-bind=\"row.label\"></span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li ng-repeat=\"child in row.children\">\n" +
    "                <a ng-href=\"{{child.href}}\">\n" +
    "                    <span ng-bind=\"child.label\"></span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "<!-- / list -->");
}]);

angular.module("tpl/viewframework/productNav.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/viewframework/productNav.html",
    "<div class=\"product-nav-stage\" ng-show=\"navScene\"\n" +
    "     ng-class=\"{'product-nav-stage-main':navScene=='main','product-nav-stage-sub':navScene=='sub'}\">\n" +
    "    <div class=\"product-nav-scene product-nav-main-scene\">\n" +
    "        <div class=\"product-nav-title\" id=\"nav-title\" ng-bind=\"config.title\"></div>\n" +
    "        <div class=\"product-nav-list\">\n" +
    "            <ul role=\"tree\" aria-labelledby=\"nav-title\">\n" +
    "                <li ng-repeat=\"item in config.mainNav\"\n" +
    "                    ng-class=\"{'nav-showchild':item.showChild}\">\n" +
    "                    <!--<div product-nav-link item=\"item\"></div>-->\n" +
    "                    <a href=\"{{item.href}}\" role=\"treeitem\">\n" +
    "                        <div class=\"nav-icon\"></div>\n" +
    "                        <div class=\"nav-title\" ng-bind=\"item.title\"></div>\n" +
    "                    </a>\n" +
    "                    <ul ng-if=\"item.childs\" ng-show=\"item.showChild\" role=\"group\">\n" +
    "                        <li ng-repeat=\"childItem in item.childs\">\n" +
    "                            <!--<div product-nav-link item=\"childItem\"></div>-->\n" +
    "                            <a href=\"{{childItem.href}}\" role=\"treeitem\">\n" +
    "                                <div class=\"nav-icon\"></div>\n" +
    "                                <div class=\"nav-title\" ng-bind=\"childItem.title\">概览</div>\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"product-nav-scene product-nav-sub-scene\">\n" +
    "        <div class=\"product-nav-title\"><a href=\"javascript:;\" class=\"nav-icon\"\n" +
    "                                          title=\"{{i18nMessage['common.lb.back']}}\" ng-click=\"backNav()\"\n" +
    "                                          ng-if=\"config.backNav\" aliyun-console-spm=\"3\"><span class=\"icon-left\"></span></a>\n" +
    "        </div>\n" +
    "        <div class=\"product-nav-list\">\n" +
    "            <ul role=\"tree\">\n" +
    "                <li ng-repeat=\"item in config.subNav\" class=\"{{item.cls}}\"\n" +
    "                    ng-class=\"{'active':checkActive(item,'sub')&&!item.showChild,'nav-showchild':item.showChild}\"\n" +
    "                    aliyun-console-spm=\"20{{$index}}\">\n" +
    "                    <div product-nav-link item=\"item\"></div>\n" +
    "                    <ul ng-if=\"item.childs\" ng-show=\"item.showChild\" role=\"group\">\n" +
    "                        <li ng-repeat=\"childItem in item.childs\" class=\"{{childItem.cls}}\"\n" +
    "                            ng-class=\"{active:checkActive(childItem,'sub')}\">\n" +
    "                            <div product-nav-link item=\"childItem\"\n" +
    "                                 aliyun-console-spm=\"20{{$parent.$index}}0{{$index}}\"></div>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("tpl/viewframework/topbar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/viewframework/topbar.html",
    "<div>\n" +
    "    <!-- navbar header -->\n" +
    "    <div class=\"navbar-header {{app.settings.navbarHeaderColor}}\">\n" +
    "        <button class=\"pull-right visible-xs dk\" ui-toggle-class=\"show\" data-target=\".navbar-collapse\">\n" +
    "            <i class=\"glyphicon glyphicon-cog\"></i>\n" +
    "        </button>\n" +
    "        <button class=\"pull-right visible-xs\" ui-toggle-class=\"off-screen\" data-target=\".app-aside\" ui-scroll=\"app\">\n" +
    "            <i class=\"glyphicon glyphicon-align-justify\"></i>\n" +
    "        </button>\n" +
    "        <!-- brand -->\n" +
    "        <a href=\"#/\" class=\"navbar-brand text-lt\">\n" +
    "            <!--<i class=\"fa fa-btc\"></i>-->\n" +
    "            <img src={{app.logo}} alt=\".\" class=\"\" style=\"display: inline\">\n" +
    "            <span class=\"hidden-folded m-l-xs\">{{app.name}}</span>\n" +
    "        </a>\n" +
    "        <!-- / brand -->\n" +
    "    </div>\n" +
    "    <!-- / navbar header -->\n" +
    "    <!-- navbar collapse -->\n" +
    "    <div class=\"collapse pos-rlt navbar-collapse box-shadow {{app.settings.navbarCollapseColor}}\">\n" +
    "        <!-- buttons -->\n" +
    "        <div class=\"nav navbar-nav hidden-xs\">\n" +
    "            <a href class=\"btn no-shadow navbar-btn\" ng-click=\"app.settings.asideFolded = !app.settings.asideFolded\">\n" +
    "                <i class=\"fa {{app.settings.asideFolded ? 'fa-indent' : 'fa-dedent'}} fa-fw\"></i>\n" +
    "            </a>\n" +
    "            <a href class=\"btn no-shadow navbar-btn\" ui-toggle-class=\"show\" target=\"#aside-user\">\n" +
    "                <i class=\"icon-user fa-fw\"></i>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <!-- / buttons -->\n" +
    "        <!-- nabar right -->\n" +
    "        <ul class=\"nav navbar-nav navbar-right\">\n" +
    "            <li class=\"hidden-xs\">\n" +
    "                <a ui-fullscreen></a>\n" +
    "            </li>\n" +
    "            <li class=\"dropdown\" dropdown>\n" +
    "                <a href class=\"dropdown-toggle clear\" dropdown-toggle>\n" +
    "              <span class=\"thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm\">\n" +
    "                <img src=\"img/a0.jpg\" alt=\"...\">\n" +
    "                <i class=\"on md b-white bottom\"></i>\n" +
    "              </span>\n" +
    "                    <span class=\"hidden-sm hidden-md\" ng-bind=\"userinfo.accountName\"></span> <b class=\"caret\"></b>\n" +
    "                </a>\n" +
    "                <!-- dropdown -->\n" +
    "                <ul class=\"dropdown-menu animated fadeInRight w\">\n" +
    "                    <li>\n" +
    "                        <a href=\"#/user/changepass\" ui-sref=\"user.changepass\">修改密码</a>\n" +
    "                    </li>\n" +
    "                    <li class=\"divider\"></li>\n" +
    "                    <li>\n" +
    "                        <a ng-click=\"logout()\">注销</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "                <!-- / dropdown -->\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <!-- / navbar right -->\n" +
    "    </div>\n" +
    "    <!-- / navbar collapse -->\n" +
    "</div>");
}]);

angular.module("tpl/viewframework/viewframework.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/viewframework/viewframework.html",
    "<div>\n" +
    "    <div ng-class=\"{'app-header-fixed':app.settings.headerFixed, 'app-aside-fixed':app.settings.asideFixed, 'app-aside-folded':app.settings.asideFolded, 'app-aside-dock':app.settings.asideDock, 'container':app.settings.container}\">\n" +
    "        <div class=\"app-header navbar\" viewframework-topbar></div>\n" +
    "        <div class=\"app-aside hidden-xs {{app.settings.asideColor}}\" ng-class=\"{'hide': app.hideAside }\"\n" +
    "             viewframework-aside></div>\n" +
    "        <!--<div class=\"app-content\">-->\n" +
    "        <!--<div class=\"fade-in-up app-content-body\" ui-view/>-->\n" +
    "        <!--</div>-->\n" +
    "        <div class=\"viewFramework-product app-content\"\n" +
    "             ng-class=\"{'viewFramework-product-col-1':config.productNavBar=='col-1','m-n': app.hideAside,'h-full': app.hideFooter}\">\n" +
    "            <div class=\"viewFramework-product-navbar\" ng-if=\"config.productNavBar != 'disabled'\">\n" +
    "                <div business-nav/>\n" +
    "            </div>\n" +
    "            <div class=\"viewFramework-product-navbar-collapse\" ng-if=\"config.productNavBar != 'disabled'\"\n" +
    "                 ng-click=\"collapseProductNavbar()\">\n" +
    "                <div class=\"product-navbar-collapse-inner\">\n" +
    "                    <div class=\"product-navbar-collapse-bg\"></div>\n" +
    "                    <div class=\"product-navbar-collapse\">\n" +
    "                        <span class=\"fa fa-fw fa-indent\"></span>\n" +
    "                        <span class=\"fa fa-fw fa-dedent\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"viewFramework-product-body\">\n" +
    "                <div ui-view/>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tpl/lsesp_home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/lsesp_home.html",
    "<div class=\"app-content-body app-content-full fade-in-up\">\n" +
    "    <div class=\"hbox hbox-auto-xs hbox-auto-sm\" ng-init=\"\n" +
    "    app.settings.asideFolded = false; \n" +
    "    app.settings.asideDock = false;\n" +
    "  \">\n" +
    "        <!-- main -->\n" +
    "        <div class=\"col\">\n" +
    "            <!-- main header -->\n" +
    "            <div class=\"bg-light lter b-b wrapper-md\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-6 col-xs-12\">\n" +
    "                        <h1 class=\"m-n font-thin h3 text-black\">Dashboard</h1>\n" +
    "                        <small class=\"text-muted\">Welcome to angulr application</small>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-6 text-right hidden-xs\">\n" +
    "                        <div class=\"inline m-r text-left\">\n" +
    "                            <div class=\"m-b-xs\">1290 <span class=\"text-muted\">items</span></div>\n" +
    "                            <div ng-init=\"data1=[ 106,108,110,105,110,109,105,104,107,109,105,100,105,102,101,99,98 ]\"\n" +
    "                                 ui-jq=\"sparkline\"\n" +
    "                                 ui-options=\"{{data1}}, {type:'bar', height:20, barWidth:5, barSpacing:1, barColor:'#dce5ec'}\"\n" +
    "                                 class=\"sparkline inline\">loading...\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"inline text-left\">\n" +
    "                            <div class=\"m-b-xs\">$30,000 <span class=\"text-muted\">revenue</span></div>\n" +
    "                            <div ng-init=\"data2=[ 105,102,106,107,105,104,101,99,98,109,105,100,108,110,105,110,109 ]\"\n" +
    "                                 ui-jq=\"sparkline\"\n" +
    "                                 ui-options=\"{{data2}}, {type:'bar', height:20, barWidth:5, barSpacing:1, barColor:'#dce5ec'}\"\n" +
    "                                 class=\"sparkline inline\">loading...\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- / main header -->\n" +
    "            <div class=\"wrapper-md\" ng-controller=\"FlotChartDemoCtrl\">\n" +
    "                <!-- stats -->\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <div class=\"row row-sm text-center\">\n" +
    "                            <div class=\"col-xs-6\">\n" +
    "                                <div class=\"panel padder-v item\">\n" +
    "                                    <div class=\"h1 text-info font-thin h1\">521</div>\n" +
    "                                    <span class=\"text-muted text-xs\">New items</span>\n" +
    "                                    <div class=\"top text-right w-full\">\n" +
    "                                        <i class=\"fa fa-caret-down text-warning m-r-sm\"></i>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-6\">\n" +
    "                                <a href class=\"block panel padder-v bg-primary item\">\n" +
    "                                    <span class=\"text-white font-thin h1 block\">930</span>\n" +
    "                                    <span class=\"text-muted text-xs\">Uploads</span>\n" +
    "                                    <span class=\"bottom text-right w-full\">\n" +
    "                  <i class=\"fa fa-cloud-upload text-muted m-r-sm\"></i>\n" +
    "                </span>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-6\">\n" +
    "                                <a href class=\"block panel padder-v bg-info item\">\n" +
    "                                    <span class=\"text-white font-thin h1 block\">432</span>\n" +
    "                                    <span class=\"text-muted text-xs\">Comments</span>\n" +
    "                                    <span class=\"top text-left\">\n" +
    "                  <i class=\"fa fa-caret-up text-warning m-l-sm\"></i>\n" +
    "                </span>\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-6\">\n" +
    "                                <div class=\"panel padder-v item\">\n" +
    "                                    <div class=\"font-thin h1\">129</div>\n" +
    "                                    <span class=\"text-muted text-xs\">Feeds</span>\n" +
    "                                    <div class=\"bottom text-left\">\n" +
    "                                        <i class=\"fa fa-caret-up text-warning m-l-sm\"></i>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-12 m-b-md\">\n" +
    "                                <div class=\"r bg-light dker item hbox no-border\">\n" +
    "                                    <div class=\"col w-xs v-middle hidden-md\">\n" +
    "                                        <div ng-init=\"data1=[60,40]\" ui-jq=\"sparkline\"\n" +
    "                                             ui-options=\"{{data1}}, {type:'pie', height:40, sliceColors:['{{app.color.warning}}','#fff']}\"\n" +
    "                                             class=\"sparkline inline\"></div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col dk padder-v r-r\">\n" +
    "                                        <div class=\"text-primary-dk font-thin h1\"><span>$12,670</span></div>\n" +
    "                                        <span class=\"text-muted text-xs\">Revenue, 60% of the goal</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-7\">\n" +
    "                        <div class=\"panel wrapper\">\n" +
    "                            <label class=\"i-switch bg-warning pull-right\" ng-init=\"showSpline=true\">\n" +
    "                                <input type=\"checkbox\" ng-model=\"showSpline\">\n" +
    "                                <i></i>\n" +
    "                            </label>\n" +
    "                            <h4 class=\"font-thin m-t-none m-b text-muted\">Latest Campaign</h4>\n" +
    "                            <div ui-jq=\"plot\" ui-refresh=\"showSpline\" ui-options=\"\n" +
    "              [\n" +
    "                { data: {{d0_1}}, label:'TV', points: { show: true, radius: 1}, splines: { show: showSpline, tension: 0.4, lineWidth: 1, fill: 0.8 } },\n" +
    "                { data: {{d0_2}}, label:'Mag', points: { show: true, radius: 1}, splines: { show: showSpline, tension: 0.4, lineWidth: 1, fill: 0.8 } }\n" +
    "              ], \n" +
    "              {\n" +
    "                colors: ['{{app.color.info}}', '{{app.color.primary}}'],\n" +
    "                series: { shadowSize: 3 },\n" +
    "                xaxis:{ font: { color: '#a1a7ac' } },\n" +
    "                yaxis:{ font: { color: '#a1a7ac' }, max:20 },\n" +
    "                grid: { hoverable: true, clickable: true, borderWidth: 0, color: '#dce5ec' },\n" +
    "                tooltip: true,\n" +
    "                tooltipOpts: { content: 'Visits of %x.1 is %y.4',  defaultTheme: false, shifts: { x: 10, y: -25 } }\n" +
    "              }\n" +
    "            \" style=\"height:246px\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- / stats -->\n" +
    "\n" +
    "                <!-- service -->\n" +
    "                <div class=\"panel hbox hbox-auto-xs no-border\">\n" +
    "                    <div class=\"col wrapper\">\n" +
    "                        <i class=\"fa fa-circle-o text-info m-r-sm pull-right\"></i>\n" +
    "                        <h4 class=\"font-thin m-t-none m-b-none text-primary-lt\">Managed Services</h4>\n" +
    "                        <span class=\"m-b block text-sm text-muted\">Service report of this year (updated 1 hour ago)</span>\n" +
    "                        <div ui-jq=\"plot\" ui-options=\"\n" +
    "            [\n" +
    "              { data: {{d4}}, lines: { show: true, lineWidth: 1, fill:true, fillColor: { colors: [{opacity: 0.2}, {opacity: 0.8}] } } }\n" +
    "            ], \n" +
    "            {\n" +
    "              colors: ['{{app.color.light}}'],\n" +
    "              series: { shadowSize: 3 },\n" +
    "              xaxis:{ show:false },\n" +
    "              yaxis:{ font: { color: '#a1a7ac' } },\n" +
    "              grid: { hoverable: true, clickable: true, borderWidth: 0, color: '#dce5ec' },\n" +
    "              tooltip: true,\n" +
    "              tooltipOpts: { content: '%s of %x.1 is %y.4',  defaultTheme: false, shifts: { x: 10, y: -25 } }\n" +
    "            }\n" +
    "          \" style=\"height:240px\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col wrapper-lg w-lg bg-light dk r-r\">\n" +
    "                        <h4 class=\"font-thin m-t-none m-b\">Reports</h4>\n" +
    "                        <div class=\"\">\n" +
    "                            <div class=\"\">\n" +
    "                                <span class=\"pull-right text-primary\">60%</span>\n" +
    "                                <span>Consulting</span>\n" +
    "                            </div>\n" +
    "                            <progressbar value=\"60\" class=\"progress-xs m-t-sm bg-white\" animate=\"true\"\n" +
    "                                         type=\"primary\"></progressbar>\n" +
    "                            <div class=\"\">\n" +
    "                                <span class=\"pull-right text-info\">35%</span>\n" +
    "                                <span>Online tutorials</span>\n" +
    "                            </div>\n" +
    "                            <progressbar value=\"35\" class=\"progress-xs m-t-sm bg-white\" animate=\"true\"\n" +
    "                                         type=\"info\"></progressbar>\n" +
    "                            <div class=\"\">\n" +
    "                                <span class=\"pull-right text-warning\">25%</span>\n" +
    "                                <span>EDU management</span>\n" +
    "                            </div>\n" +
    "                            <progressbar value=\"25\" class=\"progress-xs m-t-sm bg-white\" animate=\"true\"\n" +
    "                                         type=\"warning\"></progressbar>\n" +
    "                        </div>\n" +
    "                        <p class=\"text-muted\">Dales nisi nec adipiscing elit. Morbi id neque quam. Aliquam sollicitudin\n" +
    "                            venenatis</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- / service -->\n" +
    "\n" +
    "                <!-- tasks -->\n" +
    "                <div class=\"panel wrapper\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-6 b-r b-light no-border-xs\">\n" +
    "                            <a href class=\"text-muted pull-right text-lg\"><i class=\"icon-arrow-right\"></i></a>\n" +
    "                            <h4 class=\"font-thin m-t-none m-b-md text-muted\">My Tasks</h4>\n" +
    "                            <div class=\" m-b\">\n" +
    "                                <div class=\"m-b\">\n" +
    "                                    <span class=\"label text-base bg-warning pos-rlt m-r\"><i\n" +
    "                                            class=\"arrow right arrow-warning\"></i> 19:30</span>\n" +
    "                                    <a href>Feed cat</a>\n" +
    "                                </div>\n" +
    "                                <div class=\"m-b\">\n" +
    "                                    <span class=\"label text-base bg-info pos-rlt m-r\"><i\n" +
    "                                            class=\"arrow right arrow-info\"></i> 12:30</span>\n" +
    "                                    <a href>Fishing Time</a>\n" +
    "                                </div>\n" +
    "                                <div class=\"m-b\">\n" +
    "                                    <span class=\"label text-base bg-primary pos-rlt m-r\"><i\n" +
    "                                            class=\"arrow right arrow-primary\"></i> 10:30</span>\n" +
    "                                    <a href>Kick-off meeting</a>\n" +
    "                                </div>\n" +
    "                                <div class=\"m-b\">\n" +
    "                                    <span class=\"label text-base bg-light pos-rlt m-r\"><i\n" +
    "                                            class=\"arrow right arrow-light\"></i> 07:30</span>\n" +
    "                                    <a href>Morning running</a>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"row row-sm\">\n" +
    "                                <div class=\"col-xs-6 text-center\">\n" +
    "                                    <div ui-jq=\"easyPieChart\" ui-options=\"{\n" +
    "                    percent: 75,\n" +
    "                    lineWidth: 4,\n" +
    "                    trackColor: '{{app.color.light}}',\n" +
    "                    barColor: '{{app.color.primary}}',\n" +
    "                    scaleColor: false,\n" +
    "                    size: 115,\n" +
    "                    rotate: 90,\n" +
    "                    lineCap: 'butt'\n" +
    "                  }\" class=\"inline m-t\">\n" +
    "                                        <div>\n" +
    "                                            <span class=\"text-primary h4\">75%</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"text-muted font-bold text-xs m-t m-b\">Work Done</div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-6 text-center\">\n" +
    "                                    <div ui-jq=\"easyPieChart\" ui-options=\"{\n" +
    "                    percent: 50,\n" +
    "                    lineWidth: 4,\n" +
    "                    trackColor: '{{app.color.light}}',\n" +
    "                    barColor: '{{app.color.info}}',\n" +
    "                    scaleColor: false,\n" +
    "                    size: 115,\n" +
    "                    rotate: 180,\n" +
    "                    lineCap: 'butt'\n" +
    "                  }\" class=\"inline m-t\">\n" +
    "                                        <div>\n" +
    "                                            <span class=\"text-info h4\">50%</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"text-muted font-bold text-xs m-t m-b\">Started</div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- / tasks -->\n" +
    "\n" +
    "                <!-- tasks -->\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <div class=\"panel no-border\">\n" +
    "                            <div class=\"panel-heading wrapper b-b b-light\">\n" +
    "              <span class=\"text-xs text-muted pull-right\">\n" +
    "                <i class=\"fa fa-circle text-primary m-r-xs\"></i> 12\n" +
    "                <i class=\"fa fa-circle text-info m-r-xs m-l-sm\"></i> 30\n" +
    "                <i class=\"fa fa-circle text-warning m-r-xs m-l-sm\"></i> 98\n" +
    "              </span>\n" +
    "                                <h4 class=\"font-thin m-t-none m-b-none text-muted\">Teammates</h4>\n" +
    "                            </div>\n" +
    "                            <ul class=\"list-group list-group-lg m-b-none\">\n" +
    "                                <li class=\"list-group-item\">\n" +
    "                                    <a href class=\"thumb-sm m-r\">\n" +
    "                                        <img src=\"img/a1.jpg\" class=\"r r-2x\">\n" +
    "                                    </a>\n" +
    "                                    <span class=\"pull-right label bg-primary inline m-t-sm\">Admin</span>\n" +
    "                                    <a href>Damon Parker</a>\n" +
    "                                </li>\n" +
    "                                <li class=\"list-group-item\">\n" +
    "                                    <a href class=\"thumb-sm m-r\">\n" +
    "                                        <img src=\"img/a2.jpg\" class=\"r r-2x\">\n" +
    "                                    </a>\n" +
    "                                    <span class=\"pull-right label bg-info inline m-t-sm\">Member</span>\n" +
    "                                    <a href>Joe Waston</a>\n" +
    "                                </li>\n" +
    "                                <li class=\"list-group-item\">\n" +
    "                                    <a href class=\"thumb-sm m-r\">\n" +
    "                                        <img src=\"img/a3.jpg\" class=\"r r-2x\">\n" +
    "                                    </a>\n" +
    "                                    <span class=\"pull-right label bg-warning inline m-t-sm\">Editor</span>\n" +
    "                                    <a href>Jannie Dvis</a>\n" +
    "                                </li>\n" +
    "                                <li class=\"list-group-item\">\n" +
    "                                    <a href class=\"thumb-sm m-r\">\n" +
    "                                        <img src=\"img/a4.jpg\" class=\"r r-2x\">\n" +
    "                                    </a>\n" +
    "                                    <span class=\"pull-right label bg-warning inline m-t-sm\">Editor</span>\n" +
    "                                    <a href>Emma Welson</a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                            <div class=\"panel-footer\">\n" +
    "                                <span class=\"pull-right badge badge-bg m-t-xs\">32</span>\n" +
    "                                <button class=\"btn btn-primary btn-addon btn-sm\"><i class=\"fa fa-plus\"></i>Add Teammate\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <div class=\"list-group list-group-lg list-group-sp\">\n" +
    "                            <a herf class=\"list-group-item clearfix\">\n" +
    "              <span class=\"pull-left thumb-sm avatar m-r\">\n" +
    "                <img src=\"img/a4.jpg\" alt=\"...\">\n" +
    "                <i class=\"on b-white right\"></i>\n" +
    "              </span>\n" +
    "                                <span class=\"clear\">\n" +
    "                <span>Chris Fox</span>\n" +
    "                <small class=\"text-muted clear text-ellipsis\">What's up, buddy</small>\n" +
    "              </span>\n" +
    "                            </a>\n" +
    "                            <a herf class=\"list-group-item clearfix\">\n" +
    "              <span class=\"pull-left thumb-sm avatar m-r\">\n" +
    "                <img src=\"img/a5.jpg\" alt=\"...\">\n" +
    "                <i class=\"on b-white right\"></i>\n" +
    "              </span>\n" +
    "                                <span class=\"clear\">\n" +
    "                <span>Amanda Conlan</span>\n" +
    "                <small class=\"text-muted clear text-ellipsis\">Come online and we need talk about the plans that we have discussed</small>\n" +
    "              </span>\n" +
    "                            </a>\n" +
    "                            <a herf class=\"list-group-item clearfix\">\n" +
    "              <span class=\"pull-left thumb-sm avatar m-r\">\n" +
    "                <img src=\"img/a6.jpg\" alt=\"...\">\n" +
    "                <i class=\"busy b-white right\"></i>\n" +
    "              </span>\n" +
    "                                <span class=\"clear\">\n" +
    "                <span>Dan Doorack</span>\n" +
    "                <small class=\"text-muted clear text-ellipsis\">Hey, Some good news</small>\n" +
    "              </span>\n" +
    "                            </a>\n" +
    "                            <a herf class=\"list-group-item clearfix\">\n" +
    "              <span class=\"pull-left thumb-sm avatar m-r\">\n" +
    "                <img src=\"img/a7.jpg\" alt=\"...\">\n" +
    "                <i class=\"busy b-white right\"></i>\n" +
    "              </span>\n" +
    "                                <span class=\"clear\">\n" +
    "                <span>Lauren Taylor</span>\n" +
    "                <small class=\"text-muted clear text-ellipsis\">Nice to talk with you.</small>\n" +
    "              </span>\n" +
    "                            </a>\n" +
    "                            <a herf class=\"list-group-item clearfix\">\n" +
    "              <span class=\"pull-left thumb-sm avatar m-r\">\n" +
    "                <img src=\"img/a8.jpg\" alt=\"...\">\n" +
    "                <i class=\"away b-white right\"></i>\n" +
    "              </span>\n" +
    "                                <span class=\"clear\">\n" +
    "                <span>Mike Jackson</span>\n" +
    "                <small class=\"text-muted clear text-ellipsis\">This is nice</small>\n" +
    "              </span>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- / tasks -->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- / main -->\n" +
    "        <!-- right col -->\n" +
    "        <div class=\"col w-md bg-white-only b-l bg-auto no-border-xs\">\n" +
    "            <tabset class=\"nav-tabs-alt\" justified=\"true\">\n" +
    "                <tab>\n" +
    "                    <tab-heading>\n" +
    "                        <i class=\"glyphicon glyphicon-user text-md text-muted wrapper-sm\"></i>\n" +
    "                    </tab-heading>\n" +
    "                    <div class=\"wrapper-md\">\n" +
    "                        <div class=\"m-b-sm text-md\">Who to follow</div>\n" +
    "                        <ul class=\"list-group no-bg no-borders pull-in\">\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <a herf class=\"pull-left thumb-sm avatar m-r\">\n" +
    "                                    <img src=\"img/a4.jpg\" alt=\"...\" class=\"img-circle\">\n" +
    "                                    <i class=\"on b-white bottom\"></i>\n" +
    "                                </a>\n" +
    "                                <div class=\"clear\">\n" +
    "                                    <div><a href>Chris Fox</a></div>\n" +
    "                                    <small class=\"text-muted\">Designer, Blogger</small>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <a herf class=\"pull-left thumb-sm avatar m-r\">\n" +
    "                                    <img src=\"img/a5.jpg\" alt=\"...\" class=\"img-circle\">\n" +
    "                                    <i class=\"on b-white bottom\"></i>\n" +
    "                                </a>\n" +
    "                                <div class=\"clear\">\n" +
    "                                    <div><a href>Mogen Polish</a></div>\n" +
    "                                    <small class=\"text-muted\">Writter, Mag Editor</small>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <a herf class=\"pull-left thumb-sm avatar m-r\">\n" +
    "                                    <img src=\"img/a6.jpg\" alt=\"...\" class=\"img-circle\">\n" +
    "                                    <i class=\"busy b-white bottom\"></i>\n" +
    "                                </a>\n" +
    "                                <div class=\"clear\">\n" +
    "                                    <div><a href>Joge Lucky</a></div>\n" +
    "                                    <small class=\"text-muted\">Art director, Movie Cut</small>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <a herf class=\"pull-left thumb-sm avatar m-r\">\n" +
    "                                    <img src=\"img/a7.jpg\" alt=\"...\" class=\"img-circle\">\n" +
    "                                    <i class=\"away b-white bottom\"></i>\n" +
    "                                </a>\n" +
    "                                <div class=\"clear\">\n" +
    "                                    <div><a href>Folisise Chosielie</a></div>\n" +
    "                                    <small class=\"text-muted\">Musician, Player</small>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <a herf class=\"pull-left thumb-sm avatar m-r\">\n" +
    "                                    <img src=\"img/a8.jpg\" alt=\"...\" class=\"img-circle\">\n" +
    "                                    <i class=\"away b-white bottom\"></i>\n" +
    "                                </a>\n" +
    "                                <div class=\"clear\">\n" +
    "                                    <div><a href>Aron Gonzalez</a></div>\n" +
    "                                    <small class=\"text-muted\">Designer</small>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                        <div class=\"text-center\">\n" +
    "                            <a href class=\"btn btn-sm btn-primary padder-md m-b\">More Connections</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </tab>\n" +
    "                <tab>\n" +
    "                    <tab-heading>\n" +
    "                        <i class=\"glyphicon glyphicon-comment text-md text-muted wrapper-sm\"></i>\n" +
    "                    </tab-heading>\n" +
    "                    <div class=\"wrapper-md\">\n" +
    "                        <div class=\"m-b-sm text-md\">Chat</div>\n" +
    "                        <ul class=\"list-group no-borders pull-in auto\">\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <span class=\"pull-left thumb-sm m-r\"><img src=\"img/a1.jpg\" alt=\"...\" class=\"img-circle\"></span>\n" +
    "                                <a href class=\"text-muted\" ui-toggle-class=\"show\" target=\".app-aside-right\"><i\n" +
    "                                        class=\"fa fa-comment-o pull-right m-t-sm text-sm\"></i></a>\n" +
    "                                <div class=\"clear\">\n" +
    "                                    <div><a href=\"\">Chris Fox</a></div>\n" +
    "                                    <small class=\"text-muted\">about 2 minutes ago</small>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <span class=\"pull-left thumb-sm m-r\"><img src=\"img/a2.jpg\" alt=\"...\" class=\"img-circle\"></span>\n" +
    "                                <a href class=\"text-muted\" ui-toggle-class=\"show\" target=\".app-aside-right\"><i\n" +
    "                                        class=\"fa fa-comment-o pull-right m-t-sm text-sm\"></i></a>\n" +
    "                                <div class=\"clear\">\n" +
    "                                    <div><a href=\"\">Amanda Conlan</a></div>\n" +
    "                                    <small class=\"text-muted\">about 2 hours ago</small>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <span class=\"pull-left thumb-sm m-r\"><img src=\"img/a3.jpg\" alt=\"...\" class=\"img-circle\"></span>\n" +
    "                                <a href class=\"text-muted\" ui-toggle-class=\"show\" target=\".app-aside-right\"><i\n" +
    "                                        class=\"fa fa-comment-o pull-right m-t-sm text-sm\"></i></a>\n" +
    "                                <div class=\"clear\">\n" +
    "                                    <div><a href=\"\">Dan Doorack</a></div>\n" +
    "                                    <small class=\"text-muted\">3 days ago</small>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <span class=\"pull-left thumb-sm m-r\"><img src=\"img/a4.jpg\" alt=\"...\" class=\"img-circle\"></span>\n" +
    "                                <a href class=\"text-muted\" ui-toggle-class=\"show\" target=\".app-aside-right\"><i\n" +
    "                                        class=\"fa fa-comment-o pull-right m-t-sm text-sm\"></i></a>\n" +
    "                                <div class=\"clear\">\n" +
    "                                    <div><a href=\"\">Lauren Taylor</a></div>\n" +
    "                                    <small class=\"text-muted\">about 2 minutes ago</small>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </tab>\n" +
    "                <tab>\n" +
    "                    <tab-heading>\n" +
    "                        <i class=\"glyphicon glyphicon-transfer text-md text-muted wrapper-sm\"></i>\n" +
    "                    </tab-heading>\n" +
    "                    <div class=\"wrapper-md\">\n" +
    "                        <div class=\"m-b-sm text-md\">Transaction</div>\n" +
    "                        <ul class=\"list-group list-group-sm list-group-sp list-group-alt auto m-t\">\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <span class=\"text-muted\">Transfer to Jacob at 3:00 pm</span>\n" +
    "                                <span class=\"block text-md text-info\">B 15,000.00</span>\n" +
    "                            </li>\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <span class=\"text-muted\">Got from Mike at 1:00 pm</span>\n" +
    "                                <span class=\"block text-md text-primary\">B 23,000.00</span>\n" +
    "                            </li>\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <span class=\"text-muted\">Sponsored ORG at 9:00 am</span>\n" +
    "                                <span class=\"block text-md text-warning\">B 3,000.00</span>\n" +
    "                            </li>\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <span class=\"text-muted\">Send to Jacob at 8:00 am</span>\n" +
    "                                <span class=\"block text-md\">B 11,000.00</span>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </tab>\n" +
    "            </tabset>\n" +
    "            <div class=\"padder-md\">\n" +
    "                <!-- streamline -->\n" +
    "                <div class=\"m-b text-md\">Recent Activity</div>\n" +
    "                <div class=\"streamline b-l m-b\">\n" +
    "                    <div class=\"sl-item\">\n" +
    "                        <div class=\"m-l\">\n" +
    "                            <div class=\"text-muted\">5 minutes ago</div>\n" +
    "                            <p><a href class=\"text-info\">Jessi</a> commented your post.</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"sl-item\">\n" +
    "                        <div class=\"m-l\">\n" +
    "                            <div class=\"text-muted\">11:30</div>\n" +
    "                            <p>Join comference</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"sl-item b-success b-l\">\n" +
    "                        <div class=\"m-l\">\n" +
    "                            <div class=\"text-muted\">10:30</div>\n" +
    "                            <p>Call to customer <a href class=\"text-info\">Jacob</a> and discuss the detail.</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"bg-info wrapper-sm m-l-n m-r-n m-b r r-2x\">\n" +
    "                        Create tasks for the team\n" +
    "                    </div>\n" +
    "                    <div class=\"sl-item b-primary b-l\">\n" +
    "                        <div class=\"m-l\">\n" +
    "                            <div class=\"text-muted\">Wed, 25 Mar</div>\n" +
    "                            <p>Finished task <a href class=\"text-info\">Testing</a>.</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"sl-item b-warning b-l\">\n" +
    "                        <div class=\"m-l\">\n" +
    "                            <div class=\"text-muted\">Thu, 10 Mar</div>\n" +
    "                            <p>Trip to the moon</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"sl-item b-info b-l\">\n" +
    "                        <div class=\"m-l\">\n" +
    "                            <div class=\"text-muted\">Sat, 5 Mar</div>\n" +
    "                            <p>Prepare for presentation</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"sl-item b-l\">\n" +
    "                        <div class=\"m-l\">\n" +
    "                            <div class=\"text-muted\">Sun, 11 Feb</div>\n" +
    "                            <p><a href class=\"text-info\">Jessi</a> assign you a task <a href class=\"text-info\">Mockup\n" +
    "                                Design</a>.</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"sl-item b-l\">\n" +
    "                        <div class=\"m-l\">\n" +
    "                            <div class=\"text-muted\">Thu, 17 Jan</div>\n" +
    "                            <p>Follow up to close deal</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- / streamline -->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- / right col -->\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("tpl/common/message.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/common/message.html",
    "<div class=\"console-message-dialog\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" data-ng-click=\"close(false)\" z-index=\"-1\"\n" +
    "                aria-hidden=\"true\">&times;</button>\n" +
    "        <h5 class=\"modal-title\">{{ title }}</h5></div>\n" +
    "    <div class=\"modal-body clearfix\">\n" +
    "        <div class=\"col-sm-1 text-center\"><span class=\"text-2x\" ng-class=\"iconClass\"></span></div>\n" +
    "        <div class=\"col-sm-11 breakall\"><p ng-bind-html=\"message\"></p></div>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button ng-repeat=\"btn in buttons\" ng-click=\"eventHandler(btn.result)\" class=\"btn\" ng-class=\"btn.cssClass\">{{\n" +
    "            btn.label }}\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("tpl/common/message_dialog.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/common/message_dialog.html",
    "<div bindonce class=\"console-message-dialog\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" data-ng-click=\"close(false)\"\n" +
    "                aria-hidden=\"true\">&times;</button>\n" +
    "        <h5 class=\"modal-title\">{{dlgTitle }}</h5></div>\n" +
    "    <div class=\"modal-body clearfix\">\n" +
    "        <div class=\"pull-left col-padding\"><span class=\"text-size-32 icon-help-2 text-warning\"></span></div>\n" +
    "        <div class=\"pull-left col-padding col-sm-10\">\n" +
    "            <div batch-action-confirm-message selected-item=\"viewModel.selectedItems\" config=\"config\"\n" +
    "                 columns=\"columns\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button class=\"btn btn-primary\" data-ng-click=\"doAction()\"\n" +
    "                bo-text=\" \\'ecs.common.dlg.bt.submit\\' | translate\"></button>\n" +
    "        <button class=\"btn btn-default\" data-ng-click=\"close(false)\"\n" +
    "                bo-text=\" \\'ecs.common.dlg.bt.cancel\\' | translate\"></button>\n" +
    "    </div>\n" +
    "</div>");
}]);
