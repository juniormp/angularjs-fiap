app.controller('HeaderCtrl', function ($scope, $location, authServices, $window) {
    $scope.estahLogado = authServices.estahLogado();

    $scope.logout = function () {
        authServices.logout();
        $location.url('/');
        $window.location.reload();
    }
});