angular
    //Module export for dependencies
    .module('sponsor.service', [])
    //Service name for calls in other modules
    .factory('SponsorService', function($http, $window, $q, urlConstant) {

        function newSponsor() {
            var xhrParams = {
                method: 'POST',
                url: urlConstant.baseUrl + '/api/admin/sponsor/new'
            }
            return $http(xhrParams);

        }

        function editSponsor(id, sponsor) {
            console.log(sponsor);
            var xhrParams = {
                method: 'PUT',
                url: urlConstant.baseUrl + '/api/admin/sponsor/' + id,
                params: {
                    sponsorName: sponsor.sponsorName,
                    sponsor_desc: sponsor.sponsor_desc

                }
            }
            return $http(xhrParams);

        }

        function getSponsors() {
            var xhrParams = {
                method: 'GET',
                url: urlConstant.baseUrl + '/api/sponsors/'

            }
            return $http(xhrParams);

        }

        function deleteSponsor(id) {
            var xhrParams = {
                method: 'DELETE',
                url: urlConstant.baseUrl + '/api/admin/sponsor/' + id,

            }

            return $http(xhrParams);

        }

        return {
            newSponsor: newSponsor,
            editSponsor: editSponsor,
            getSponsors: getSponsors,
            deleteSponsor: deleteSponsor
        }
    });
