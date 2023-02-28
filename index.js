// Random number from 1-6 for the first dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
// Add the source path of the image that we want to display
var imageSource = "images/dice"+randomNumber1+".png";
// Set the attribute at each reload in the corresponding image source
document.querySelectorAll("img")[0].setAttribute("src", imageSource);

// Repeating the same procedure of dice 1 for dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
imageSource = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", imageSource);

// If player 1 wins!
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}

// If player 2 wins!
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML= "Player 2 wins!🚩";
}

// Draw scenario
else{
    document.querySelector("h1").innerHTML = "🏳️Draw🏳️";
}