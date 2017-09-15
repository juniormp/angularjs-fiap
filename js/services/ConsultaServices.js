app.factory('consultaServices', ['$http', 'locationServices', function($http, locationServices) {

        function consultarCPF(cpf, callback) {
            $http({
                method: 'GET',
                url: locationServices.getLocationAPI() + '/consulta',
                data:JSON.stringify(cpf)
            }).then(function (data) {
                if (callback) callback(data)
            })
        }

        return {
            consultarCPF:consultarCPF
        };
    }])