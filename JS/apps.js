function displayMessage (){
    document.getElementById("clickedMessage").innerHTML += "You clicked me!";
    document.getElementById("clickedMessage").style.color = "green";
}

function changeColor (){
    document.getElementById("btn").style.backgroundColor = "orange";
}

let button = document.getElementById("btn");
button.addEventListener("click", displayMessage);
button.addEventListener("mouseover", changeColor);

document.addEventListener("keydown", function(e){
    if (e.code == 'Space'){
       alert("You pressed the space bar");
    }
}) 




