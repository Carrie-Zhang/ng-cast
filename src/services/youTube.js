angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(query, callback) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {'maxResults': 5,
          'part': 'snippet',
          'q': query,
          'type': 'video',
          'key': window.YOUTUBE_API_KEY,
          'videoEmbeddable': true}  
      }).then(
        function successCallback(response) {
          callback(response);
          console.log(response);
        }
      );
    };
  });
