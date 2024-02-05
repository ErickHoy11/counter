//when decrement is clicked...
document.getElementById("decrement").onclick = function(){
    document.getElementById("count").innerHTML--;
}

//when reset is clicked...
document.getElementById("reset").onclick = function(){
    document.getElementById("count").innerHTML = 0;
}

//when increment is clicked...
document.getElementById("increment").onclick = function(){
    document.getElementById("count").innerHTML++;
}