function PlayAndShow(audioSound, textDiv, audioImage) {
    var myText = document.getElementById(textDiv);
    var myAudio = document.getElementById(audioSound);
    var myButton = document.getElementById(audioImage);

     if(myAudio.paused) {
        myAudio.play();
        myText.style.display = "flex";
        myButton.src= "./nav-images/stop-g55029e04a_1280.png";
        myAudio.onended = ResetPlayAndShow(myAudio, myText, myButton);
     }
    else {
        myAudio.pause();
        myAudio.currentTime = 0;
        myText.style.display = "none";
        myButton.src= "nav-images/play-g79150a13d_1280.png";
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



function playHoverSoundOnClass(className) {
    const elements = document.getElementsByClassName(className);
    const hoverSound = document.getElementById("hover-sound");

    Array.from(elements).forEach(element => {
        element.addEventListener("mouseover", () => {
            hoverSound.play();
        });
    });
}

function playClickSoundOnClass(className) {
    const elements = document.getElementsByClassName(className);
    const hoverSound = document.getElementById("click-sound");

    Array.from(elements).forEach(element => {
        element.addEventListener("click", () => {
            hoverSound.play();
        });
    });
}