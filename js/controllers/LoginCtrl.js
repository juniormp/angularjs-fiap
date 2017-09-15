app.controller('LoginCtrl', function ($scope, $location) {
    $scope.login = {
        usuario: "",
        senha: ""
    };

    $scope.fazerLogin = function() {
        console.log($scope.login);
    }
});