app.controller('ConsultaCtrl', function ($scope, $location, consultaServices) {

	$scope.consulta = {
		"cpf" : "",
        "score" : ""
	};

	$scope.consultarCPF = function () {
		consultaServices.consultarCPF($scope.consulta.cpf, function(score) {
            $scope.consulta.score = score;
        });
	};

});