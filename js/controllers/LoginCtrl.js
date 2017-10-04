app.controller('LoginCtrl', function ($scope, $location, loginServices, $window, toastr) {
    $scope.login = {
        login: "",
        senha: ""
    };

    $scope.fazerLogin = function() {
        loginServices.login($scope.login)
            .then(function(token) {
                $location.url('/');
                $window.location.reload();
            })
            .catch(function(response) {
                var mensagem = response.status === 401 ? 'Login e/ou senha inválidos' : 'Erro na tentativa de login';
                toastr.error(mensagem);
            });
    }
});