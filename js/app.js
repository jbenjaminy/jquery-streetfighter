$(document).ready(function() {
  // Hids all ryu images and shows ryu ready gif when
  // cursor enters .ryu div
  $('.ryu').mouseenter(function() {
      $('.ryu-character').hide();
      $('.ryu-ready').show();
    })
    // Hides all ryu images and shows the still image 
    // when cursor leaves the .ryu div.
    .mouseleave(function() {
      $('.ryu-character').hide();
      $('.ryu-still').show();
    })
    // Plays Hadouken mp3 clip, annimates hadouken image so 
    // it moves accross the screen, and shows the ryu throwing 
    // image when mouse is pressed down in .ryu div
    .mousedown(function() {
      playHadouken();
      $('.ryu-character').hide();
      $('.ryu-throwing').show();
      $('.hadouken').finish().show()
        .animate({ 'left': '1232px' },
          750,
          function() {
            $(this).hide();
            $(this).css('left', '470px');
          }
        );
    })
    // Hides the throwing ryu image and shows the ready image 
    // when the mouse button is released
    .mouseup(function() {
      $('.ryu-character').hide();
      $('.ryu-ready').show();
    });

  // When 'x' is pressed all ryu images are hidden and the
  // cool pose image is shown.
  $('body').keydown(function(event) {
      if (event.keyCode == 88) {
        $('.ryu-character').hide();
        $('.ryu-cool').show();
      }
    })
    // When 'x' is released all ryu images are hidden and the
    // still image is shown.
    .keyup(function(event) {
      if (event.keyCode == 88) {
        $('.ryu-character').hide();
        $('.ryu-still').show();
      }
    });

  // Hids all ryu-angry images and shows ryu-angry ready gif when
  // cursor enters .ryu-angry div
  $('.ryu-angry').mouseenter(function() {
      $('.ryu-character-angry').hide();
      $('.ryu-ready-angry').show();
    })
    // Hides all ryu-angry images and shows the still image 
    // when cursor leaves the .ryu-angry div.
    .mouseleave(function() {
      $('.ryu-character-angry').hide();
      $('.ryu-still-angry').show();
    })
    // Plays Hadouken mp3 clip, annimates hadouken-angry image so 
    // it moves accross the screen, and shows the ryu-angry throwing 
    // image when mouse is pressed down in .ryu-angry div
    .mousedown(function() {
      playHadouken();
      $('.ryu-character-angry').hide();
      $('.ryu-throwing-angry').show();
      $('.hadouken-angry').finish().show()
        .animate({ 'right': '1317px' },
          750,
          function() {
            $(this).hide();
            $(this).css('right', '560px');
          }
        );
    })
    // Hides all ryu-angry images and shows the ready image 
    // when the mouse button is released
    .mouseup(function() {
      $('.ryu-character-angry').hide();
      $('.ryu-ready-angry').show();
    });

  // When 'z' is pressed all ryu-angry images are hidden and the
  // cool pose image is shown.
  $('body').keydown(function(event) {
      if (event.keyCode == 90) {
        $('.ryu-character-angry').hide();
        $('.ryu-cool-angry').show();
      }
    })
    // When 'z' is released all ryu-angry images are hidden and the
    // still image is shown.
    .keyup(function(event) {
      if (event.keyCode == 90) {
        $('.ryu-character-angry').hide();
        $('.ryu-still-angry').show();
      }
    });

  // When called the function plays the hadouken.mp3 file
  function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }
});
