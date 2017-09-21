var NAME = 'authInjector';
app.factory(NAME, function($log, authServices) {

    var authInjector = {
        request: function(config) {
            config.headers.Authorization = authServices.getToken();
            return config;
        }
    };

    return authInjector;
});
app.config(['$httpProvider', function($httpProvider) {  
    $httpProvider.interceptors.push(NAME);
}]);