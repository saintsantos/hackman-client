angular
    //Module export for dependencies
    .module('prizes.service', [])
    //Service name for calls in other modules
    .factory('PrizeService', function($http, $window, $q, urlConstant) {

        function newPrize(prize) {
            //console.log(prize);
            var xhrParams = {
                method: 'POST',
                url: urlConstant.baseUrl + '/api/admin/prize/'
            }
            return $http(xhrParams);

        }

        function editPrize(prize, id) {
            var xhrParams = {
                method: 'PUT',
                url: urlConstant.baseUrl + '/api/admin/prize/' + id,
                params: {
                    prizeName: prize.prizeName,
                    prize_desc: prize.prize_desc,
                    sponsor: prize.sponsor

                }
            }
            return $http(xhrParams);

        }

        function getPrizes() {
            var xhrParams = {
                method: 'GET',
                url: urlConstant.baseUrl + '/api/prizes/'

            }
            return $http(xhrParams);

        }

        function deletePrize(id) {
            var xhrParams = {
                method: 'DELETE',
                url: urlConstant.baseUrl + '/api/admin/prize/' + id,

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
