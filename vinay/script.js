let hours = 0
let minutes = 0
let Seconds = 0

const changeHours = document.getElementById("changeHours");
const changeMinutes = document.getElementById("changeMinutes");
const changeSeconds = document.getElementById("changeSeconds");

function increaceHours(){
    hours=hours+1
    if(hours=== 24 ){
        hours=0;
    }
    if(hours < 10 ){
    changeHours.innerText = "0"+hours+"\u00A0\u00A0\:";
    return;
    }
    changeHours.innerText = hours+"\u00A0\u00A0\:";
    console.log("fbr",changeHours);
}

function decreaceHours(){
    if(hours===0){
        hours=23
        changeHours.innerText = hours+"\u00A0\u00A0\:";
        return;
    }
    hours=hours-1
    if(hours < 10){
    changeHours.innerText = "0"+hours+"\u00A0\u00A0\:";
    return;
    }
    changeHours.innerText= hours+"\u00A0\u00A0\:";
    console.log("hours",hours);
}

function increaceMinutes(){
    minutes=minutes+1
    if(minutes===60){
        minutes=0;
    }
    console.log(changeMinutes);
    
    
    if(minutes < 10){
        console.log(minutes);
        changeMinutes.innerText= "0"+minutes+"\u00A0\u00A0\:";
        return;
    }
    changeMinutes.innerText=minutes+"\u00A0\u00A0\:";
    console.log("minutes",minutes);
}

function decreaceMinutes(){
    if(minutes===0){
        minutes=59
        changeMinutes.innerText= minutes+"\u00A0\u00A0\:";
        return;
    }
    minutes=minutes-1
    console.log(minutes);
    if(minutes < 10){
    changeMinutes.innerText= "0"+minutes+"\u00A0\u00A0\:";
    return;
    }
    changeMinutes.innerText=minutes+"\u00A0\u00A0\:";
}


function increaceSeconds(){
    Seconds=Seconds+1
    if(Seconds===60){
        Seconds=0;
    }
    // console.log(Seconds);

    if(Seconds < 10){
        changeSeconds.innerText= "0"+Seconds
        return
    }
    changeSeconds.innerText= Seconds
    console.log(Seconds);
    
}

function decreaceSeconds(){
    if(Seconds===0){
        Seconds=59
        changeSeconds.innerText=Seconds
        return;
    }
    Seconds=Seconds-1
    console.log(Seconds);
    if(Seconds < 10){
        changeSeconds.innerText="0"+Seconds
        return
    }
    changeSeconds.innerText=Seconds
}

function nextPage(){
    window.location.href = "http://127.0.0.1:5502/superApp/superAppMovies/index.html"
}