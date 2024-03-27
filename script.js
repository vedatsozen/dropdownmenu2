$(document).ready(function() {

      $("ul.submenu").hide();

      $("nav ul li").mouseover(function() {
          $(this).find("ul.submenu").show();
      });
      
      $("nav ul li").mouseleave(function() {
          $(this).find("ul.submenu").hide();
      });
      
  });
  