var video = document.getElementById("video");

function play(){
    if(video.paused){
        //play video
        document.getElementById("icon").src = "resources/videoPlayerResources/pause2.png";
        video.play();
    }
    else{
        // pause video
        document.getElementById("icon").src = "resources/videoPlayerResources/play2.png";
        video.pause();
    }

    //get current time
    setInterval(function(){
        document.getElementById("time").innerHTML = video.currentTime.toFixed(2) + " / " + video.duration.toFixed(2);
    }, 100)
}

const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('.container');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const containerRect = container.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () =>{
    question.innerHTML = 'I Love You Sooooo very Much !!!';
});

noBtn.addEventListener('mouseover', () =>{
    // const x = Math.floor(Math.random() * (containerRect.width - noBtnRect.width)) + 1;
    // const y = Math.floor(Math.random() * (containerRect.height - noBtnRect.height)) + 1;
    var x = Math.floor(Math.random() *(wrapperRect.width - noBtnRect.width)) + 100;
    var y = Math.floor(Math.random() *5* (wrapperRect.height - noBtnRect.height)) - 100 ;
    // console.log(wrapperRect.width + " " + wrapperRect.height + " " + x + " " + y);
    y = (-1 * y);
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});