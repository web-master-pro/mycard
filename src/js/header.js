//= ../libs/bideo/bideo.js

(function () {

    // VIDEO BACKGROUND

    var currentVideoName,
        firstVideoIndex = 0;
        lastVideoIndex = localStorage.getItem("video"),
        currentVideoIndex = 0,
        videosQuantity = backgroundVideos.length;

    if (lastVideoIndex == null) {
        lastVideoIndex = +firstVideoIndex - 1;
    };

    if (lastVideoIndex < videosQuantity - 1){
        currentVideoIndex = +lastVideoIndex + 1;
    };

    currentVideoName = backgroundVideos[currentVideoIndex];
    localStorage.setItem("video", currentVideoIndex);

    var widthWin = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var showBgVideo = (widthWin > 999);
    if (showBgVideo) {
        var bv = new Bideo();
        bv.init({
            // Video element
            videoEl: document.querySelector('.header__video'),

            // Container element
            container: document.querySelector('.header'),

            // Resize
            resize: true,

            // Array of objects containing the src and type
            // of different video formats to add
            src: [
                {
                    src: 'assets/video/' + currentVideoName +'.mp4',
                    type: 'video/mp4'
                },
                {
                    src: 'assets/video/' + currentVideoName +'.webm',
                    type: 'video/webm'
                },
                {
                    src: 'assets/video/' + currentVideoName +'.ogv',
                    type: 'video/ogv'
                },

            ],

            // What to do once video loads (initial frame)
            onLoad: function () {
                document.querySelector('.header__video-cover').style.display = 'none';
                document.querySelector('.volume').style.display = 'block';
                // document.querySelector('.header__video-overlay').style.display = 'block';
                var d = document.querySelector(".header");
                d.className += " video-on";
            }
        });
    };
}());

