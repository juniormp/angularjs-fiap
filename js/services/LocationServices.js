app.factory('locationServices', ['$http', function($http) {

        function getLocationAPI(callback) {
            return "http://localhost:8080";
        }

        return {
            getLocationAPI:getLocationAPI
        };
    }])