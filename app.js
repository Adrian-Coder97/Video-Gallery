var videoPlayer = document.getElementById("videoPlayer")
var myVideo = document.getElementById("myVideo")

var stopVideo = () => {
    videoPlayer.style.display ="none"//ocultar el boton al dar clic en el tache
    myVideo.muted = true;
}

var playVideo = (file) =>{
    myVideo.src = file
    videoPlayer.style.display = "block"
    myVideo.muted = false;

}

videoPlayer.addEventListener("click", stopVideo)