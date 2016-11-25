angular
    //Module export for dependencies
    .module('sponsor.service', [])
    //Service name for calls in other modules
    .factory('SponsorService', function($http, $window, $q) {

        function newSponsor(sponsor) {
            console.log(sponsor);
            var xhrParams = {
                method: 'POST',
                url: 'http://localhost:3000/api/admin/sponsor/'
            }
            return $http(xhrParams);

        }

        function editSponsor(id, sponsor) {
            var xhrParams = {
                method: 'PUT',
                url: 'http://localhost:3000/api/admin/sponsor/' + id,
                params: {
                    sponsorName: sponsor.name,
                    sponsor_desc: sponsor.desc

                }
            }
            return $http(xhrParams);

        }

        function getSponsors() {
            var xhrParams = {
                method: 'GET',
                url: 'http://localhost:3000/api/sponsors/'

            }
            return $http(xhrParams);

        }

        function deleteSponsor(id) {
            var xhrParams = {
                method: 'DELETE',
                url: 'http://localhost:3000/api/admin/sponsor/' + id,

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
