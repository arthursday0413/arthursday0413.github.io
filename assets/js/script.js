// $(document).ready(function() {
// var animation = lottie.loadAnimation({
//     container: document.getElementById('button'),
//     renderer: 'svg',
//     autoplay: false,
//     loop: false,
//     path: 'assets/js/data.json'
// });

// $('#button').click(function() {
//     $('.hidden').toggleClass('showHidden');
//     animation.play();

//     if ($('.hidden').hasClass('showHidden')){
//         lottie.setDirection(1);
//         console.log(animation.currentRawFrame)
//     }
//     else{
//         lottie.setDirection(-1);
//         console.log(animation.currentRawFrame)
//     }
// });

document.addEventListener("DOMContentLoaded", function(event) {
  //do work
  var windowWidth = $(window).width();
  $(window).resize(function() {
    windowWidth = $(window).width();
  });

  // scroll
  $(window).scroll(function(event){
    scrollingText = $('.scroll img');
    st = $(this).scrollTop();
    scrollspeed = st / 5;
    scrollingText.css({ 
        '-webkit-transform':'rotate('+scrollspeed+'deg)',
        '-moz-transform':'rotate('+scrollspeed+'deg)',
        '-ms-transform':'rotate('+scrollspeed+'deg)',
        'transform':'rotate('+scrollspeed+'deg)'
    })
});

  //this bit shows the name of project on hover
  $(".showcase-image").hover(
    function(event) {
      if (windowWidth > 640) {
        $(this).mousemove(function(event) {
          var x = event.pageX;
          var y = event.pageY;
          //or $(this).offset(); if you really just want the current element's offset
          // var msg = "Handler for .mousemove() called at ";
          $(".showcase-caption-hover").css({
            // "position":"fixed",
            opacity: "1",
            left: x - 20,
            top: y - 20
          });
        });

        var name = $(this)
          .parent()
          .find(".showcase-caption")
          .html();

        $(".showcase-title-hover").html(name);
      }
    },
    function() {
      if (windowWidth > 640) {
        $(".showcase-caption-hover").css({
          opacity: "0"
        });
      }
    }
  );


  // $("#target").mousemove(function(event) {
  //     var msg = "Handler for .mousemove() called at ";
  //     msg += event.pageX + ", " + event.pageY;
  //     $("#log").append("<div>" + msg + "</div>");
  // });
});
