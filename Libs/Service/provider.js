function DataProvider() {
    var _method = '';
    var _url = '';
    var _params = {};
    var _data = {};

    this.setMethod = function (method) {
        _method = method;
    }
    this.setUrl = function (url) {
        _url = url;
    }
    this.setParams = function (params) {
        _params = params;
    }
    this.setData = function (data) {
        _data = data;
    }

    this.$get = function ($http, $q) {
        return {
            query: function () {
                var deferred = $q.defer();
                $http({
                    method: _method,
                    url: _url,
                    params: _params,
                    data: _data
                }).success(function (data) {
                    deferred.resolve(data);
                }).error(function () {
                    deferred.reject('error');
                })
                return deferred.promise;
            },
            setMethod: function (method) {
                _method = method;
            },
            setUrl: function (url) {
                _url = url;
            },
            setParams: function (params) {
                _params = params;
            },
            setData: function (data) {
                _data = data;
            }
        }
    }
}