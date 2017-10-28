angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<'
    },
    
    template: 
      `<video-list-entry 
      video="vid"
      ng-repeat="vid in $ctrl.videos"
      ></video-list-entry>`
  });
