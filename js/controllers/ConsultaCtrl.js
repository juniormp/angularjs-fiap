app.controller('ConsultaCtrl', function ($scope, $location, consultaServices) {

	$scope.nota = {
		"cpf" : "",
        "score" : ""
	};

	$scope.consultar = function (cpf) {
		consultaServices.consultarCPF(cpf, function(score) {
			console.log(score);
            // Jogar o valor do score no campo
        })
	};
});