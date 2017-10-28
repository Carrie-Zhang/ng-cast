angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      selectVideo: '<'
    },
    
    controller: function() {
    },
    
    template: 
      `<video-list-entry 
      video="vid"
      on-click="$ctrl.selectVideo"
      ng-repeat="vid in $ctrl.videos"
      ></video-list-entry>`
  });
