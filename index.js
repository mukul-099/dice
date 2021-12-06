var rand_num1= Math.floor(Math.random()*6) + 1;
var rand_img1="dice" + rand_num1 + ".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", rand_img1);

var rand_num2= Math.floor(Math.random()*6) + 1;
var rand_img2="dice" + rand_num2 + ".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", rand_img2);

if(rand_num1>rand_num2){
  document.querySelector("h1").innerHTML="Player 1 won!!";
}
else if(rand_num1<rand_num2){
  document.querySelector("h1").innerHTML="Player 2 won!!";
}
else{
  document.querySelector("h1").innerHTML="Its a tie, try again!!";
}
