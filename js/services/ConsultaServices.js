app.factory('consultaServices', ['$http', 'locationServices', 'authServices', function ($http, locationServices, authServices) {

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
            url: locationServices.getLocationAPI() + '/empresas/historico'
        }).then(function (data) {
            if (callback) callback(data)
        })
    }

    return {
        consultarHistorico: consultarHistorico
    };
}])