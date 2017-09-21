app.controller('HistoricoCtrl', function ($scope, consultaServices) {

	consultaServices.consultarHistorico(function(historico) {
		$scope.historico = historico.data;
	});

});