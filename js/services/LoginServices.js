app.factory('loginServices', ['$http', 'locationServices', '$window', function ($http, locationServices, $window) {

    var TOKEN_KEY = 'auth';

    function login(login) {
        return $http({
            method: 'POST',
            url: locationServices.getLocationAPI() + '/login',
            data: JSON.stringify(login)
        }).then(function (data) {
            var token = data.headers('authorization');
            $window.localStorage.setItem(TOKEN_KEY, token);
        });
    }

    function getToken() {
        return $window.localStorage.getItem(TOKEN_KEY);
    }

    function estahLogado() {
        return getToken() !== null;
    }

    function logout() {
        $window.localStorage.removeItem(TOKEN_KEY);
    }

    return {
        login: login,
        getToken: getToken,
        estahLogado: estahLogado,
        logout: logout
    };
}])