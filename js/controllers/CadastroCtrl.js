app.controller('CadastroCtrl', function ($scope, $location, cadastroServices, toastr) {

	$scope.empresa = {
		"nome": "",
		"login": "",
		"senha": ""
	};

	$scope.salvar = function (empresa) {
		cadastroServices.salvar(empresa, function (response) {
			if (response.status == 201) {
				$scope.empresa = {
					"nome": "",
					"login": "",
					"senha": ""
				};
				$scope.cadastro.$setPristine()
				toastr.success('Cadastro realizado com sucesso', 'Serazo');
			} else {
				toastr.error('Erro ao efetuar cadastro', 'Serazo');
			}
		})
	};

});