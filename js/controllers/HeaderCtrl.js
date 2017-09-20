app.controller('HeaderCtrl', function ($scope, $location, loginServices, $window) {
    $scope.estahLogado = loginServices.estahLogado();

    $scope.logout = function () {
        loginServices.logout();
        $location.url('/');
        $window.location.reload();
    }
});