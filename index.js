var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var choosenImage1 = "./images/dice" + randomNumber1 + ".png";
//var choosenImage2 = ".dice" + randomNumber1 + "png";
// img1.src = choosenImage1;
//img2.src = choosenImage2;
document.querySelector(".img1").src = choosenImage1;
