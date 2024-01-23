$(function() {

  var lastScrollTop = 0;

  if ( $( ".cfield" ).length) {
    var contact = true;
  }
  if ( $( ".image1" ).length) {
    var index = true;
  }
  if ( $( ".about1" ).length) {
    var about = true;
  }
  if ( $( ".wih1" ).length) {
    var wih = true;
  }
  if ( $( ".old1" ).length) {
    var old = true;
  }

  $.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementTop+($(this).height()/2) >= viewportTop && elementBottom-($(this).height()/2) <= viewportBottom;
  };


  $(window).scroll(function() {
    if(index) {
      for (var i = 1; i < 5; i++) {

        if($(".image"+i).isInViewport()) {
          $(".image"+i).removeClass("bg_img_f");
        } else {
          $(".image"+i).addClass("bg_img_f");
        }
      }
    } else if(about) {
        for (var i = 1; i < 4; i++) {

          if($(".about"+i).isInViewport()) {
            $(".about"+i).removeClass("bg_img_f");
          } else {
            $(".about"+i).addClass("bg_img_f");
          }
        }
    } else if(wih) {
        if($(".wih1").isInViewport()) {
           $(".wih1").removeClass("bg_img_f");
        } else {
            $(".wih1").addClass("bg_img_f");
        }
    } else if(old) {
        if($(".old1").isInViewport()) {
           $(".old1").removeClass("bg_img_f");
        } else {
            $(".old1").addClass("bg_img_f");
        }
    } else if(contact) {
      if($(".contact").isInViewport()) {
        $(".contact").removeClass("bg_img_f");
      } else {
        $(".contact").addClass("bg_img_f");
      }

      for(i = 1; i < 20; i++) {

          if (! $( "#cfield" + i).length) {
            break;
          }

        if(window.pageYOffset*2.3 + 200 - (i*370) > 0) {
          $("#cfield" + i).css("width", window.pageYOffset*2.3 + 200 - (i*370));
        } else {
          $("#cfield" + i).css("width", "0");
        }
      }
    }

    if($(".bottom").isInViewport()) {
      $(".bottom").removeClass("bg_img_f");
    } else {
      $(".bottom").addClass("bg_img_f");
    }

    if ($(document).scrollTop() <= 100) {
      $("#header").addClass("h_big");
      $("#header").removeClass("h_small");
      $("#header").removeClass("h_small_up");
      $(".sh_button, .sh_dropdown_btn").addClass("sh_btn_big");
      $(".sh_button, .sh_dropdown_btn").removeClass("sh_btn_small");
      $(".menubar").addClass("m_big");
      $(".menubar").removeClass("m_small");
      $(".sidenav").addClass("sn_big");
      $(".sidenav").removeClass("sn_small");
      $(".logo").css("visibility", "visible");
    } else {

      var st = $(this).scrollTop();
      if($(window).width() < 700 && $("#sidebar").width() <= 0) {
        if (st < lastScrollTop){
          $("#header").removeClass("h_small");
          $("#header").addClass("h_small_up");
          $(".logo").css("visibility", "visible");
        } else {
          $("#header").removeClass("h_small_up");
          $("#header").addClass("h_small");
          $(".logo").css("visibility", "hidden");

        }
      } else {
        $("#header").addClass("h_small_up");
      }

      lastScrollTop = st;

      $("#header").removeClass("h_big");
      $(".sh_button, .sh_dropdown_btn").addClass("sh_btn_small");
      $(".sh_button, .sh_dropdown_btn").removeClass("sh_btn_big");
      $(".menubar").addClass("m_small");
      $(".menubar").removeClass("m_big");
      $(".sidenav").addClass("sn_small");
      $(".sidenav").removeClass("sn_big");
    }
  });

  $(".content").on('click',
  function() {
      if($("#sidebar").width() > 0) {
        $("#sidebar").css("width", "0");
        $("#menu").toggleClass("sh_menu sh_menu_b");
        $("#menu").toggleClass("change");
      }
  });

  $(".sh_menu").on('click',
  function() {
      if ($(document).scrollTop() > 100) {
        $("#header").removeClass("h_small");
        $("#header").addClass("h_small_up");
        $(".logo").css("visibility", "visible");
      }
      if($("#sidebar").width() < 250) {
        $("#sidebar").css("width", "250px");
        $("#menu").toggleClass("sh_menu sh_menu_b");
        $("#menu").toggleClass("change");
      }
  });
});
