angular.module('video-player')
  .component('app', {
    templateUrl: '/src/templates/app.html',
    controller(youTube) {
      this.searchVideo = '',
      this.videos = window.exampleVideoData,
      this.currentVideo = window.exampleVideoData[0],
      this.selectVideo = (video) => {
        console.log('in selectVideo function');
        this.currentVideo = video;
      },
      
      this.searchResults = (query) => {
        youTube.search(query, results => {
          this.videos = results.data.items;
          this.currentVideo = this.videos[0];
          //this.selectVideo(results.data.items));
        });
      };
      //this.searchResults('cats');
    }   
  });
  
  