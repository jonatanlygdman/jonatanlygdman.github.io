{
var dataInfo = null;
var hidden = true;
var playing = true;

function getContent(){
$.getJSON("https://lygdmaj1.firebaseio.com/.json", function(data) {
    console.log(data);
    dataInfo = data;
});
}

var loopNews = setInterval(function(){
$("#teksti").html(choose());
$("#teksti").html(current).hide().fadeIn(1000);
    }, 7000)


window.onload = getContent();


function playpause(){
    if(!playing){
    loopNews = setInterval(function(){
        $("#teksti").html(choose());
        $("#teksti").html(current).hide().fadeIn(1000);
    }, 7000);
    setVisibleButton();
    } else {
    clearInterval(loopNews);
    setVisibleButton();
    }
    playing = !playing;
}

function next(){
    clearInterval(loopNews);
    $("#teksti").html(choose());
    hidden = true;
    setVisibleButton();
    playing = false;
}

function previous(){
    clearInterval(loopNews);
    $("#teksti").html(choose());
    $("#teksti").html(choose());
    hidden = true;
    setVisibleButton();
    playing = false;
}

var current = localStorage.getItem("lastseen");

function choose() {
    var eka = dataInfo.uutiset[0].otsikko + "</br>" + dataInfo.uutiset[0].päivämäärä + "</br>" + dataInfo.uutiset[0].sisältö;
    var toka = dataInfo.uutiset[1].otsikko + "</br>" + dataInfo.uutiset[1].päivämäärä + "</br>" + dataInfo.uutiset[1].sisältö;
    var kolmas = dataInfo.uutiset[2].otsikko + "</br>" + dataInfo.uutiset[2].päivämäärä + "</br>" + dataInfo.uutiset[2].sisältö;
    if(current == eka){
        localStorage.setItem("lastseen", current);
        current = toka;
    } else if(current == toka) {
        localStorage.setItem("lastseen", current);
        current = kolmas;
    } else {
        localStorage.setItem("lastseen", current);
        current = eka;
    }
    return current;
}

function setVisibleButton(){
    if(hidden){
    document.getElementById("pause").textContent="Play";
    } else {
    document.getElementById("pause").textContent="Pause";
    }
    hidden = !hidden;
}
}
/*TODO
fix delay
*/