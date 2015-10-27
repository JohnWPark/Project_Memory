//stores the value of the first click into firstCardImage
  var firstCardImage;
//stores the value of the second click into secondCardImage
  var secondCardImage;
//stores the number of clicks into clickCounter
  var clickCounter = 0;

//click event listener on the 'floated.img' class
  $(".floated_img").on('click',function(){
//the '$(this).children().eq(0)' refers to the first child of the '.floated_img' being clicked and assigns it to jquery object, image
    image = $(this).children().eq(0);
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
//compares firstCardImage to secondCardImage. The ".attr('src')" grabs the image held in the 'src'
      if(firstCardImage.attr('src') === secondCardImage.attr('src')){
      }
      else{
        setTimeout(function(){
          firstCardImage.hide();
          secondCardImage.hide();

        }, 2000)
      }
    }
    clickCounter++;
  });


//Memory game where players click cards on the board until they come up with a match.  Game ends when all cards are matched together.
//Bronze


//1. Initialize variables.
/*
  var cardArray =[['','','','','']
  ['','','','','']
  ['','','','','']
  ['','','','','']
];
*/




//2. Shuffle cards.
  // Shuffle method

//3. Generate new game board.
  // New gameboard function.


//4. Click on cards to flip them over and see if they match.

/*
var cardClick = document.getElementsByClassName('floated_img');
console.log(cardClick);

for(var i =0; i < cardClick.length; i++){
  cardClick[i].addEventListener('click', function(){
    console.log("card was clicked");
  })
}
*/








  //If both cards match, they stay flipped.


  // If they don't match, they turn back over.
    // Function to flip cards back over if they don't match.
    // 1 second delay before they flip back over.
    //setTimeout(someVar , 1000);
  // else if statement to determine if cards are flipped and if they match.


//5. Once all cards have been matched. Game ends.
  // Option to play again.
    // Cards reshuffle.
/*
-INSERT IMAGES INTO EACH DIV(10 IMAGES X 2)
-SET THEIR 'DISPLAY: NONE' WHEN YOU CLICK ON THEM.
-COMPARE CLICKED IMAGES TO UNCLICKED IMAGES.
*/







//Silver
//1. Add hover pseudo-class.
//2. Cards change color after they match.


//Gold
//1. Default score begins at 100 and ticks away as time goes by.
