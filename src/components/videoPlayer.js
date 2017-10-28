angular.module('video-player')

  .component('videoPlayer', {
    // TODO
    bindings: {
      currentVideo: '<'
    },
    
    controller: function() {
      
    },
    
    template:`
    <div class="video-player">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" ng-src="{{'https://www.youtube.com/embed/' + $ctrl.currentVideo.id.videoId}}" allowFullScreen></iframe>
      </div>
      <div class="video-player-details">
        <h3>Video Title: {{$ctrl.currentVideo.snippet.title}}</h3>
        <div>Video Description:{{$ctrl.currentVideo.snippet.description}} </div>
      </div>
    </div>`
  });
