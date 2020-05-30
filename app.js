
let wasMoved;
let slider = document.querySelector("#slide");
let value = 0;
let downLister = function () {
  wasMoved = false;
  return wasMoved;
};

slider.addEventListener("mousedown", downLister);

let moveListener = function () {
  wasMoved = true;
  return wasMoved;
};

//console.log(moveListener);
slider.addEventListener("mousemove", moveListener);

let mouseupListener = function (e) {
  value = e.target.value;
  if (value === slider.max && wasMoved) {

    //Changing colors of elements
    $('body').addClass('container-light');
    $('.section1').addClass('container-light');
    $('.username').addClass('dark-blue-txt');
    $('h3').addClass('dark-blue-txt')
    $('.top').addClass('top-bg');
    $('.card').addClass('card-bg');
    $('h1').addClass('title-bk');
    $('input').addClass('slider-bg');
    $('input').removeClass('range-bg');
    $('input').addClass('slide-circle');
    $('.color-theme').addClass('dark-greish-blue-txt');


  
    
    console.log(e.target.value);
  } else {
      //Reverting Back to Origila Color
    $('body').removeClass('container-light');
    $('.section1').removeClass('container-light');
    $('.username').removeClass('dark-blue-txt');
    $('h3').removeClass('dark-blue-txt');
    $('.top').removeClass('top-bg');
    $('.card').removeClass('card-bg');
    $('h1').removeClass('title-bk');
    $('input').removeClass('slider-bg');
    $('input').addClass('range-bg');
    $('input').removeClass('slide-circle');
    $('.color-theme').removeClass('dark-greish-blue-txt');


    console.log(value);
  }
};

slider.addEventListener("mouseup", mouseupListener);


