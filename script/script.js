let video = document.getElementsByClassName("video")[0];
let menu = document.getElementsByClassName("controles")[0];

function showBtn(){
    menu.className = "controles";
}

function hideBtn(){
    menu.className = "menu-disable";
}

function play(){
    video.play();
}

function pause(){
    video.pause();
}

function stop(){
    video.pause();
    video.currentTime = 0;
}

function back() {
    video.currentTime -= 15;
}

function foward() {
    video.currentTime += 15;
}

