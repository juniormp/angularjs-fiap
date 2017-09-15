app.factory('locationServices', ['$http', function($http) {

        function getLocationAPI(callback) {
            return "http://localhost:5001";
        }

        return {
            getLocationAPI:getLocationAPI
        };
    }])