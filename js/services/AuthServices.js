app.factory('authServices', function ($window) {
        var TOKEN_KEY = 'auth';

        function login(token) {
            return $window.localStorage.setItem(TOKEN_KEY, token);
        }

        function getToken() {
            return $window.localStorage.getItem(TOKEN_KEY);
        }
    
        function estahLogado() {
            return getToken() !== null;
        }
    
        function logout() {
            $window.localStorage.removeItem(TOKEN_KEY);
        }
    
        return {
            login: login,
            getToken: getToken,
            estahLogado: estahLogado,
            logout: logout
        };
    });