document.getElementById("forma").style.display="none";
document.getElementById("aiziet").style.display="none";

function sakt_speli(){
    document.getElementById("sakt").style.display="none";
    document.getElementById("forma").style.display="block";
    document.getElementById("aiziet").style.display="block";
}

function aiziet(){
    let logs;
   logs= window.open("spele.html");
    
}

function ttt(){
let x="cc", y=0;

const mas1=["S","K","O","L","A"];

for(let i=0; i<5;i++){
   y= Math.floor(Math.random() * 5);
   document.getElementById("pirmaisB").innerHTML=mas1[y];

}



}