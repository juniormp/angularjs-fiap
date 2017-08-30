app.controller('CadastroCtrl', function ($scope, $location, cadastroServices, toastr) {

	$scope.empresa = {
		"nome": "",
		"login": "",
		"senha": ""
	};

	$scope.salvar = function (empresa) {
		cadastroServices.salvar(empresa, function (response) {
			console.log(response)
			if (response.status == 200) {
				toastr.success('Cadastro realizado com sucesso', 'Serazo');
			} else {
				toastr.error('Erro ao efetuar cadastro', 'Serazo');
			}
		})
	};

});