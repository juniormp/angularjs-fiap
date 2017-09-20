app.controller('LoginCtrl', function ($scope, $location, loginServices) {
    $scope.login = {
        login: "",
        senha: ""
    };

    $scope.fazerLogin = function() {
        loginServices.login($scope.login);
    }
});