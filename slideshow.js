var dataInfo = null;
var hidden = true;

function getContent(){
$.getJSON("https://lygdmaj1.firebaseio.com/.json", function(data) {
    console.log(data);
    dataInfo = data;
});
}

var loopNews = setInterval(function(){
$("#teksti").html(choose());
$("#teksti").html(current).hide().fadeIn(1000);
    }, 10000)


window.onload = getContent();


function stop(){
    clearInterval(loopNews);
    setVisibleButton();
}

function play(){
    loopNews = setInterval(function(){
        $("#teksti").html(choose());
        $("#teksti").html(current).hide().fadeIn(1000);
    }, 10000);
    setVisibleButton();
}

function next(){
    clearInterval(loopNews);
    $(".result").html(choose());
    hidden = true;
    setVisibleButton();
}

function previous(){
    clearInterval(loopNews);
    $(".result").html(choose());
    $(".result").html(choose());
    hidden = true;
    setVisibleButton();
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

window.onload=function(){
  document.getElementById("play").style.visibility="hidden";
}

function setVisibleButton(){
    if(hidden){
    document.getElementById("pause").style.visibility="hidden";
    document.getElementById("play").style.visibility="visible";
    } else {
    document.getElementById("play").style.visibility="hidden";
    document.getElementById("pause").style.visibility="visible";
    }
    hidden = !hidden;
}

/*TODO
fix delay
*/