$("#check-more").on("click", function() {

let randomNumber1 = Math.floor(Math.random() * 52) + 1;
let randomImage1 = "style" + randomNumber1 + ".jpg";
let randomSourceImage = "image/" + randomImage1;
let changeImage = document.querySelectorAll(".imag")[0];
changeImage.setAttribute("src", randomSourceImage);

let randomNumber2 = Math.floor(Math.random() * 52) + 1;
let randomImage2 = "style" + randomNumber2 + ".jpg";
let randomSourceImage2 = "image/" + randomImage2;
let changeImage2 = document.querySelectorAll(".imag")[1];
changeImage2.setAttribute("src", randomSourceImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector(".heading").innerHTML = "Awesome!";
}else if(randomNumber2 >  randomNumber1) {
    document.querySelector(".heading").innerHTML = "WO So beautiful!";
} else {
    document.querySelector(".heading").innerHTML = "Beautiful!";
}

})


