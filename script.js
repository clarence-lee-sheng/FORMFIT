let processor; 

processor.doLoad = function doLoad() {
    this.video = document.getElementById('video');
    this.c1 = document.getElementById('c1');
    this.ctx1 = this.c1.getContext('2d');
    this.c2 = document.getElementById('c2');
    this.ctx2 = this.c2.getContext('2d');
    let self = this;
    this.video.addEventListener('play', function() {
        self.width = self.video.videoWidth / 2;
        self.height = self.video.videoHeight / 2;
        self.timerCallback();
      }, false);
}

processor.timerCallback = function timerCallback() { 
    if (this.video.paused || this.video.ended) { 
        return 
    }
    this.computeFrame(); 
    let self = this; 
    setTimeout(function(){
        self.timerCallback()
    }, 0); 
}

processor.computeFrame = function computeFrame() {
    this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
    let frame = this.ctx1.getImageData(0, 0, this.width, this.height);
    let l = frame.data.length / 4; 
}
