app.controller('ConsultaCtrl', function ($scope, $location, consultaServices) {

	$scope.nota = {
		"cpf" : "",
        "score" : ""
	};

	consultaServices.consultarHistorico(3, function(historico) {
		console.log(historico.data)
		$scope.historico = historico.data
	})

	$scope.consultarCPF = function (cpf) {
		consultaServices.consultarCPF(cpf, function(score) {
			console.log(score);
            // Jogar o valor do score no campo
        })
	};

});