angular
    //Module export for dependencies
    .module('prizes.service', [])
    //Service name for calls in other modules
    .factory('PrizeService', function($http, $window, $q) {

        function newPrize(prize) {
            //console.log(prize);
            var xhrParams = {
                method: 'POST',
                url: 'http://localhost:3000/api/admin/prize/' + prize.name,
                params: {
                    desc: prize.desc,
                    sponsor: prize.sponsor
                }
            }
            return $http(xhrParams);

        }

        function editPrize(id) {
            var xhrParams = {
                method: 'PUT',
                url: 'http://localhost:3000/api/admin/prize' + id,
                params: {

                }
            }
            return $http(xhrParams);

        }

        function getPrizes() {
            var xhrParams = {
                method: 'GET',
                url: 'http://localhost:3000/api/prizes/'

            }
            return $http(xhrParams);

        }

        function deletePrize(id) {
            var xhrParams = {
                method: 'DELETE',
                url: 'http://localhost:3000/api/admin/prize' + id,

            }

            return $http(xhrParams);

        }

        return {
            newPrize: newPrize,
            editPrize: editPrize,
            getPrizes: getPrizes,
            deletePrize: deletePrize
        }
    });
