document.getElementById("forma").style.display="none";
document.getElementById("aiziet").style.display="none";

function sakt_speli(){
    document.getElementById("sakt").style.display="none";
    document.getElementById("forma").style.display="block";
    document.getElementById("aiziet").style.display="block";
}
let logs, logs1;
function aiziet(){
    
   logs= window.open("spele.html", "_blank");
    
}