function PlayAndShow(audioSound, textDiv, audioImage) {
    var myText = document.getElementById(textDiv);
    var myAudio = document.getElementById(audioSound);
    var myButton = document.getElementById(audioImage);

     if(myAudio.paused) {
        myAudio.play();
        myText.style.display = "flex";
        myButton.src= "nav-images/stop.png";
        myAudio.onended = ResetPlayAndShow(myAudio, myText, myButton);
     }
    else {
        myAudio.pause();
        myAudio.currentTime = 0;
        myText.style.display = "none";
        myButton.src= "nav-images/audio.png";
  }
  
} 

function HideDiv(textDiv) {
    var myText = document.getElementById(textDiv);
    myText.style.display = "none";
}

function ResetPlayAndShow(audioSound, textDiv, audioImage) {
    var myText = document.getElementById(textDiv);
    var myAudio = document.getElementById(audioSound);
    var myButton = document.getElementById(audioImage);

    myAudio.pause();
    myAudio.currentTime = 0;
    myText.style.display = "none";
    myButton.src= "nav-images/audio.png";

}