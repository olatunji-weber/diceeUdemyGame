
var dice1 = document.querySelector(".dice .img1");
var dice2 = document.querySelector(".dice .img2");
var player1Roll = 0;
var player2Roll = 0;

function randomDiceRoll(){
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var choosenImage = "./images/dice" + randomNumber + ".png";
  return [choosenImage, randomNumber];
}

function checkWinner(player1, player2){
  if(player1 > player2){
    return "Player 1 Wins!";
  }else if(player1 < player2){
    return "Player 2 Wins!";
  }else{
    return "Draw!";
  }
}

//var choosenImage2 = ".dice" + randomNumber1 + "png";
// img1.src = choosenImage1;
//img2.src = choosenImage2;
// document.querySelector(".img1").src = choosenImage1;
// document.querySelector(".dice .img2").src = choosenImage2;

dice1.addEventListener('click', function(){
  var play1 = randomDiceRoll();
  document.querySelector(".dice .img1").src = play1[0];
  player1Roll = play1[1];
  document.querySelector("h1").textContent = checkWinner(player1Roll, player2Roll);
})

dice2.addEventListener('click', function(){
  var play2 = randomDiceRoll();
  document.querySelector(".dice .img2").src = play2[0];
  player2Roll = play2[1];
  // console.log( checkWinner(player1Roll, player2Roll) );
  document.querySelector("h1").textContent = checkWinner(player1Roll, player2Roll);
})
