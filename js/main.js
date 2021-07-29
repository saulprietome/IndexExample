$(document).ready(function(){

  var imgItems = $('.slider li').length;
  var imgPos = 1;

  $('.slider li').hide();
  $('.slider li:first').show();
  
  $('.pagination li:first').css({'color': '#299cd1'});


$('.pagination li').click(pagination);
$('.right span').click(nextSlider);
$('.left span').click(prevSlider);

//FUNCTIONS

function pagination(){
  var paginationPos = $(this).index() + 1;

  $('.slider li').hide();
  $('.slider li:nth-child('+ paginationPos +')').fadeIn();

  $('.pagination li').css({'color': 'gray'});
  $(this).css({'color': '#299cd1'});

  imgPos= paginationPos;


}

function nextSlider (){
  if(imgPos >= imgItems) {
    imgPos = 1;
  } else {
    imgPos++;
  }
  $('.pagination li').css({'color': 'gray'});
  $('.pagination li:nth-child('+ imgPos + ')').css({'color': '#299cd1'});

  $('.slider li').hide();
  $('.slider li:nth-child('+ imgPos +')').fadeIn();

}

function prevSlider (){
  if(imgPos <= 1) {imgPos = imgItems;}
   else {
    imgPos--;
  }
  $('.pagination li').css({'color': 'gray'});
  $('.pagination li:nth-child('+ imgPos + ')').css({'color': '#299cd1'});

  $('.slider li').hide();
  $('.slider li:nth-child('+ imgPos +')').fadeIn();

}

});