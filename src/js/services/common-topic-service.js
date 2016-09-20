angular.module('common.topic.service', [])
    .factory("commonTopicService", ["$rootScope", "$q", function ($rootScope, $q) {
        function publish(topic, args, flag) {
            if (flag === true) {
                var deferred = $q.defer();
                return angular.isString(args) ? args = {
                    message: args,
                    modalResultDeferred: deferred
                } : args.modalResultDeferred = deferred, $rootScope.$emit(topic, args), deferred.promise
            }
            $rootScope.$emit(topic, args)
        }

        function subscribe(topic, listener) {
            return $rootScope.$on(topic, listener)
        }

        return {
            publish: publish,
            subscribe: subscribe
        };
    }
    ])