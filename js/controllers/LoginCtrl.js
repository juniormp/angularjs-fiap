app.controller('LoginCtrl', function ($scope, $location, loginServices, $window) {
    $scope.login = {
        login: "",
        senha: ""
    };

    $scope.fazerLogin = function() {
        loginServices.login($scope.login)
            .then(function(token) {
                $location.url('/');
                $window.location.reload();
            });
    }
});