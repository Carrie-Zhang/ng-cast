angular.module('video-player')
  .component('app', {
    controller(youTube) {
      this.videos = window.exampleVideoData,
      this.currentVideo = window.exampleVideoData[0],
      this.selectVideo = (video) => {
        console.log('in selectVideo function');
        this.currentVideo = video;
      },
      this.searchResults = () => {};
      youTube.search(results => {
        this.selectVideo(results.data.items[0]);
        // console.log('hellp', results.data.items);
      });
    },
    
    templateUrl: '/src/templates/app.html'
  });
  
  