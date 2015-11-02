//stores the value of the first click into firstCardImage
  var firstCardImage;
//stores the value of the second click into secondCardImage
  var secondCardImage;
//stores the number of clicks into clickCounter
  var clickCounter = 0;
// want to be careful with the above comments. All that lines 2, 4 and 6 are doing is declaring variables nothing is being stored yet. A better comment might be, "declaring variables for storage later"


$("button").on('click', function(){
  $('img').hide();
//  var randomIndex = Math.floor(Math.random()*(i+1));
  for(var i= 1; i <= 20; i++){
      var randomIndex = Math.floor(Math.random()*(20 + 1))
      $('#wrapper').append($('#' + randomIndex))
      // interesting way to randomize. Why might hardcoding this value of 20 for the loop be bad going forward? I think it'd be better instead of coding all of the content in the DOM, I would create an array of strings in the JS that are image sources. In that way your code is more modular and not as reliant on the DOM. You can use jQuery to generate any html elements u need from the array of src's.

//    $("#" + i).insertBefore("#" + (20 - i));
  }
})



//click event listener on the 'floated.img' class
  $(".floated_img").on('click',function(){
//the '$(this).children().eq(0)' refers to the first child of the '.floated_img' being clicked and assigns it to jquery object, image

// it assigns its to the variable image, the thing being assigned to image is a jQuery object.
    var image = $(this).children().eq(0);
//the 'show' method on the image jquery object
    image.show();
//if/else statement to compare the number of clicks
    if(clickCounter % 2 === 0) {
//assigns the jquery object, 'image', to firstCardImage
      firstCardImage = image
      console.log("This is an odd click")
      console.log(firstCardImage)

      // how could we prevent a user from clicking twice?

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

// always try to get rid of any extra code for final project evaluations.
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
