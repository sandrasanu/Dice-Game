var randomnum1 = Math.floor(Math.random()*6)+1;
var randomimage1="Dice images/dice"+randomnum1+".png";
var randomnum2 = Math.floor(Math.random()*6)+1;
var randomimage2="Dice images/dice"+randomnum2+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage1);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);
if(randomnum1>randomnum2)
{
  document.querySelector("h1").innerText="PLAYER 1 WON!!";
}
else if (randomnum2>randomnum1) {
  document.querySelector("h1").innerText="PLAYER 2 WON!!";
}
else{
  document.querySelector("h1").innerText="Draw!";
}
