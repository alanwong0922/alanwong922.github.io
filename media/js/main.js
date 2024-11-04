

navigator.mediaDevices.getUserMedia({
    video: { facingMode: {exact: 'user'}}

}).then(function(stream) {
    const videoTexture = new THREE.videoTexture(video);
    const video = document.getElementById('videoPlane');
    plane.setAttribute('material', 'src', videoTexture);

}).catch (function(error){
    console.error("error accessing the camera: ", error);
});
