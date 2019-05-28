$(document).ready(function(){
    $(".nav-bar-main-menus>ul>li").mouseenter(function(){
      $(this).find(".nav-bar-main-menus-dropdown").slideToggle();
    });
    $(".nav-bar-main-menus>ul>li").mouseleave(function(){
      $(this).find(".nav-bar-main-menus-dropdown").slideToggle();
    });
  
    /* for hamburger menu toggle */
    $(".nav-bar-ham-burger-menu>a").click(function(){
      $(".nav-var-ham-burger-items").slideToggle();
    });
    // $(".nav-bar-ham-burger-menu>a").click(function(){
    //   $(".nav-var-ham-burger-items").slideToggle();
    // });

    $(".nav-var-ham-burger-items>ul>li>a").click(function(){
      $(this).parent().find(".nav-var-ham-burger-dropdown").slideToggle();
    });
  });
  