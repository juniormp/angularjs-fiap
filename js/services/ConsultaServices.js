app.factory('consultaServices', ['$http', 'locationServices', 'authServices', function ($http, locationServices, authServices) {

    function consultarCPF(cpf, callback) {
        $http({
            method: 'POST',
            url: locationServices.getLocationAPI() + '/score',
            data: JSON.stringify({ cpf: cpf })
        }).then(function (result) {
            console.log(result);
            if (callback) callback(result.data.score)
        })
    }

    function consultarHistorico(callback) {
        $http({
            method: 'GET',
            url: locationServices.getLocationAPI() + '/empresas/historico'
        }).then(function (data) {
            console.log(data);
            if (callback) callback(data)
        })
    }

    return {
        consultarHistorico: consultarHistorico,
        consultarCPF: consultarCPF
    };
}])