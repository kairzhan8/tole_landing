
$(document).ready(function () {
  $(".scroll").click(function(event){
    $('html, body').animate({scrollTop: '+=680rem'}, 1000);
    if ($("body").scrollTop() >= 3500) {
      $(".scroll").css('visibility', 'hidden');
    }
  });
  $('body').scroll(function(){
    if ($("body").scrollTop() >= 3500) {
      $(".scroll").css('visibility', 'hidden');
    }
    else{
      $(".scroll").css('visibility', 'visible');
    }
  })
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });

  $(".sidebar-nav").click(function(event) {
    hamburger_cross();
    $('#wrapper').toggleClass('toggled');
  })
  //   $("body").click
  // (
  //   function(e) {
  //     console.log(e.target.id);
  //     if(e.target.id !== "wrapper" && e.target.className !== 'sidebar-nav' && e.target.id !== "sidebar-wrapper" ) {
  //       console.log("XOXO");
  //       $('#wrapper').toggleClass('toggled');
  //     }
  //   }
  // );
  $(document).click(function (e) {
    if (!$(e.target).hasClass("hamburger") 
        && $(e.target).parents(".hamburger").length === 0) 
    {
    }
});

});