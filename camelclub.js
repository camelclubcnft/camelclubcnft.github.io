'use strict';
$(document).ready(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add("show");
      } 
      // else{
      //   entry.target.classList.remove("show");
      // }
    });
  });

  document.addEventListener("touchstart", function(){}, true);

  const hiddenElements = document.querySelectorAll(".hidden1");
  hiddenElements.forEach((el) => observer.observe(el));

  $(window).scroll(function() {
    if($(this).scrollTop() <= $('#scroller').offset().top + $('#scroller').outerHeight(true)){
      $(".scrolling").css("-webkit-animation-play-state", "running");
    } else{
      $(".scrolling").css("-webkit-animation-play-state", "paused");
    }

    if($(this).scrollTop() > 50){
      $(".arrows").css({"display": "none"});
    } else{
      $(".arrows").css({"display": "block"});
    }

  });

  $("button.navbar-toggler.custom-toggler").click(function(){
    $(".bar").toggleClass("x");
  });

  $(".var-season").bind("keydown click", function () {
    const elmID = $(this).attr("id");
    $("#season-img").attr("src", "media/" + elmID + ".png");
    $("#season-img").attr("alt", "Sample " + elmID + " Camel");
    $(".var-season").removeClass("active-OG active-WOF active-3D");
    $(this).addClass("active-" + elmID);
  });

  // $(".grow-button").click(function () {
  //     $(this).css("background", "white");
  //   },function () {
  //     $(this).css("background", "var(--camel)");
  // });

  $('#s1').on('click', function(){
    $('#s1s').toggleClass('showStory')
    $('span#pointer').toggleClass('side')
  })

  $(".var-copy").bind("keydown click", function () {
    const elm = $(this).find("input");
    const v = elm.val();

    elm.select();
    document.execCommand("copy", false);
    elm.val('Copied ✓');

    setTimeout(function(){
    elm.val(v);
    },750); 
  });
});