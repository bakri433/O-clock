//the time
var today =setInterval(function getdate(){
    var time = document.querySelector(".time");
var history = document.querySelector(".date");
var date = new Date(); 

;   time.innerHTML= date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
    history.innerHTML = date.getDate()+ " - " + "12"+ " - " + date.getFullYear(); 
},1000);
onload = today;
