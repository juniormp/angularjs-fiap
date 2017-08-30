app.controller('CadastroCtrl', function ($scope, $location, cadastroServices) {

	$scope.empresa = {
		"nome" : "",
		"login" : "",
		"senha" : ""
	};

	$scope.salvar = function(empresa) {
        cadastroServices.salvar(empresa, function() {
            console.log("Sucesso");
        })
    };

});