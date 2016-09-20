angular.module('customer.service.factory', ['common.services.lsespHttpHandler'])
    .factory("customerRequest", ['lsesp.console.request', function (e) {
        var request = e.request;
        var services = {
            getCustomers: function (e) {
                return request('/mock/customers.json', e);
                //return request('/platform-server/v1/customers', e);
            },
            getCustomer: function (e) {
                //return request('/mock/customer.json', e);
                return request('/platform-server/v1/customers/{custId}', e);
            },
            addCustomer: function (e) {
                e.method = 'post';
                return request('/platform-server/v1/customers', e);
            },
            updateCustomer: function (e) {
                e.method = 'put';
                return request('/platform-server/v1/customers/{custId}', e);
            },
            getContacts: function (e) {
                //return request('/mock/contacts.json');
                return request('/platform-server/v1/customers/{custId}/concats', e);
            },
            addContact: function (e) {
                e.method = 'post';
                return request('/platform-server/v1/customers/{custId}/concats', e);
            },
            getContact: function (e) {
                //return request('/mock/contact.json');
                return request('/platform-server/v1/customers/{custId}/concats/{contId}', e);
            },
            updateContact: function (e) {
                e.method = 'put';
                return request('/platform-server/v1/customers/{custId}/concats/{contId}', e);
            },
            deleteContact: function (e) {
                e.method = 'delete';
                return request('/platform-server/v1/customers/{custId}/concats/{contId}', e);
            },
            getAccounts: function (e) {
                //return request('/mock/accounts.json');
                return request('/platform-server/v1/customers/{custId}/accounts', e);
            },
            addAccount: function (e) {
                e.method = 'post';
                return request('/platform-server/v1/customers/{custId}/accounts', e);
            },
            getAccount: function (e) {
                return request('/platform-server/v1/customers/{custId}/accounts/{accountId}', e);
            },
            updateAccount: function (e) {
                e.method = 'put';
                return request('/platform-server/v1/customers/{custId}/accounts/{accountId}', e);
            },
            deleteAccount: function (e) {
                e.method = 'delete';
                return request('/platform-server/v1/customers/{custId}/accounts/{accountId}', e);
            },
            getDemands: function (e) {
                return request('/platform-server/v1/customers/{custId}/cons', e);
            },
            addDemand: function (e) {
                e.method = 'post';
                return request('/platform-server/v1/customers/{custId}/cons', e);
            },
            getDemand: function (e) {
                return request('/platform-server/v1/customers/{custId}/cons/{consId}', e);
            },
            updateDemand: function (e) {
                e.method = 'put';
                return request('/platform-server/v1/customers/{custId}/cons/{consId}', e);
            },
            deleteDemand: function (e) {
                e.method = 'delete';
                return request('/platform-server/v1/customers/{custId}/cons/{consId}', e);
            },
            getCredentialsAll: function (e) {
                return request('/platform-server/v1/customers/{custId}/credemtials2', e);
            },
            getCredentials: function (e) {
                return request('/platform-server/v1/customers/{custId}/credemtials/{credId}', e);
            }
        };
        return services;
    }])
