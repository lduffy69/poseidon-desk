module.exports = {
    options: {
        // htmlmin: {
        //     collapseBooleanAttributes: true,
        //     collapseWhitespace: true,
        //     removeAttributeQuotes: true,
        //     removeComments: true,
        //     removeEmptyAttributes: true,
        //     removeRedundantAttributes: true,
        //     removeScriptTypeAttributes: true,
        //     removeStyleLinkTypeAttributes: true
        // }
    },
    common: {
        options: {module: 'lsesp.common.tpl'},
        src: ['src/tpl/viewframework/*.html','src/tpl/lsesp_home.html','src/tpl/common/*.html'],
        dest: 'src/js/module/lsesp-common-tpl.js'
    },
    customer: {
        options: {module: 'lsesp.customer.tpl'},
        src: ['src/tpl/crm/*.html'],
        dest: 'src/js/module/lsesp-customer-tpl.js'
    }
}