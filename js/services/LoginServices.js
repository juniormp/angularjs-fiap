app.factory('loginServices', ['$http', 'locationServices', 'authServices', function ($http, locationServices, authServices) {

    var TOKEN_KEY = 'auth';

    function login(login) {
        return $http({
            method: 'POST',
            url: locationServices.getLocationAPI() + '/login',
            data: JSON.stringify(login)
        }).then(function (data) {
            var token = data.headers('authorization');
            authServices.login(token);
        });
    }

    return {
        login: login
    };
}]);