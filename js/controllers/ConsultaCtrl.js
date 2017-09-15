app.controller('ConsultaCtrl', function ($scope, $location, consultaServices) {

	$scope.nota = {
		"cpf" : "",
        "score" : ""
	};

	$scope.consultarCPF = function (cpf) {
		consultaServices.consultarCPF(cpf, function(score) {
			console.log(score);
            // Jogar o valor do score no campo
        })
	};
});