app.factory('consultaServices', ['$http', 'locationServices', 'loginServices', function ($http, locationServices, loginServices) {

    function consultarCPF(cpf, callback) {
        $http({
            method: 'GET',
            url: locationServices.getLocationAPI() + '/score',
            data: JSON.stringify(cpf)
        }).then(function (data) {
            if (callback) callback(data)
        })
    }

    function consultarHistorico(callback) {
        $http({
            method: 'GET',
            url: locationServices.getLocationAPI() + '/empresas/historico',
            headers: {
                'Authorization': loginServices.getToken()}
        }).then(function (data) {
            if (callback) callback(data)
        })
    }

    return {
        consultarHistorico: consultarHistorico
    };
}])