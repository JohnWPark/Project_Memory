//stores the value of the first click into firstCardImage
  var firstCardImage;
//stores the value of the second click into secondCardImage
  var secondCardImage;
//stores the number of clicks into clickCounter
  var clickCounter = 0;

$("button").on('click', function(){
  $('img').hide();
//  var randomIndex = Math.floor(Math.random()*(i+1));
  for(var i= 1; i <= 20; i++){
      var randomIndex = Math.floor(Math.random()*(20 + 1))
      $('#wrapper').append($('#' + randomIndex))

//    $("#" + i).insertBefore("#" + (20 - i));
  }
})



//click event listener on the 'floated.img' class
  $(".floated_img").on('click',function(){
//the '$(this).children().eq(0)' refers to the first child of the '.floated_img' being clicked and assigns it to jquery object, image
    var image = $(this).children().eq(0);
//the 'show' method on the image jquery object
    image.show();
//if/else statement to compare the number of clicks
    if(clickCounter % 2 === 0) {
//assigns the jquery object, 'image', to firstCardImage
      firstCardImage = image
      console.log("This is an odd click")
      console.log(firstCardImage)

    } else {
//assigns the jquery object, 'image', to secondCardImage
      secondCardImage = image
      console.log("this is an even Click")
      console.log(secondCardImage)
//compares firstCardImage to secondCardImage. The ".attr('src')" grabs the image held in the 'src'. If the cards are the same, nothing happens.
      if(firstCardImage.attr('src') === secondCardImage.attr('src')){
      }
//if the cards are different, the following code runs. setTimeout function flips the non-matching cards back over after 2 seconds.
      else{
        setTimeout(function(){
          firstCardImage.hide();
          secondCardImage.hide();

        }, 700)
      }
    }
//clickCounter increases by 1 with every click.
    clickCounter++;
  });

/*
  Array.prototype.shuffle = function() {
      var input = this;

      for (var i = input.length-1; i >=0; i--) {

          var randomIndex = Math.floor(Math.random()*(i+1));
          var itemAtIndex = input[randomIndex];

          input[randomIndex] = input[i];
          input[i] = itemAtIndex;
      }
      return input;
  }
*/
