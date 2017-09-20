app.factory('loginServices', ['$http', 'locationServices', function ($http, locationServices) {

    function login(login, callback) {
        $http({
            method: 'POST',
            url: locationServices.getLocationAPI() + '/login',
            data: JSON.stringify(login)
        }).then(function (data) {
            console.log(data.headers());
            if (callback) callback(data)
        }, function errorCallback(response) {
            if (callback) callback(response)
        })
    }

    return {
        login: login
    };
}])