app.factory('cadastroServices', ['$http', 'locationServices', function ($http, locationServices) {

    function salvar(empresa, callback) {
        console.log(empresa)
        $http({
            method: 'POST',
            url: locationServices.getLocationAPI() + '/empresas',
            data: JSON.stringify(empresa)
        }).then(function (data) {
            if (callback) callback(data)
        }, function errorCallback(response) {
            if (callback) callback(response)
        })
    }

    return {
        salvar: salvar
    };
}])