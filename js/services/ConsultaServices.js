app.factory('consultaServices', ['$http', 'locationServices', function ($http, locationServices) {

    function consultarCPF(cpf, callback) {
        $http({
            method: 'GET',
            url: locationServices.getLocationAPI() + '/score',
            data: JSON.stringify(cpf)
        }).then(function (data) {
            if (callback) callback(data)
        })
    }

    function consultarHistorico(id, callback) {
        $http({
            method: 'GET',
            url: locationServices.getLocationAPI() + '/empresas/'+id+'/historico'
        }).then(function (data) {
            if (callback) callback(data)
        })
    }

    return {
        consultarHistorico: consultarHistorico
    };
}])