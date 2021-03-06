/**
 * Inicializamos o angular.module com o mesmo nome que definimos na diretiva ng-app
 * E inclu�mos a depend�ncia do ngRoute
 */
var app = angular.module('website', [
    'ngRoute',
    'ngAnimate',
    'toastr'
]);

/**
 * Como possu�mos a variavel app definida acima com a inicializa��o do Angular
 * atrav�s do app.config conseguimos criar as configura��es
 * definimos que essa configura��o depende do $routeProvider e usamos na function($routeProvider)
 */
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider

        // aqui dizemos quando estivernos na url / vamos carregar o conte�do da pagina inicila a home
        // no segundo parametro definimos um objeto contendo o templateUrl da nossa pagina home e o controller que ir�
        // preparar o conteudo e processar outros eventos da p�gina que veremos posteriormente
        .when("/", {templateUrl: "templates/home.html", controller: "HomeCtrl"})
        // configura��o das rotas bem parecidas para as outras paginas
        .when("/cadastro", {templateUrl: "templates/cadastro.html", controller: "CadastroCtrl"})
        .when("/consulta", {templateUrl: "templates/consulta.html", controller: "ConsultaCtrl"})
        .when("/historico", {templateUrl: "templates/historico.html", controller: "HistoricoCtrl"})
        .when("/login", {templateUrl: "templates/login.html", controller: "LoginCtrl"})
        /* aqui voc� pode adicionar rotas para outras paginas que desejar criar */
        // por �ltimo dizemos se nenhuma url digitada for encontrada mostramos a p�gina 404 que n�o existe no nosso servidor
        .when('/404', {templateUrl: "templates/404.html"})
        .otherwise("/404");

        $locationProvider.hashPrefix('');
}]).run(function($rootScope, authServices, $location) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        var pathsDeslogado = ['/cadastro', '/login']
        var pathsAbertos = ['', '/404'];
        var path = next.$$route.originalPath.replace(/\/+$/, '');
        var logado = authServices.estahLogado();
        if (logado && pathsDeslogado.indexOf(path) !== -1) {
            $location.path('');
            return;
        }
        if (!logado && pathsDeslogado.indexOf(path) === -1 && pathsAbertos.indexOf(path) === -1) {
            $location.path('/login');
        }
    })
});