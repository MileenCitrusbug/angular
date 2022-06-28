$(document).ready(function () {
  $(".cf_eye_green").on("click", function () {
    $(this).toggleClass("cf_eye_green_close");
    var fieldType = $(this).siblings("input[type='password']").attr("type");
    if (fieldType == "password") {
      $(this).siblings("input[type='password']").attr("type", "text");
    } else {
      $(this).siblings("input[type='text']").attr("type", "password");
    }
  });

  $(".cf_submenu_block > a").on("click", function (e) {
    e.stopPropagation();
    if ($(this).siblings(".cf_sidebar_submenu").hasClass("active")) {
      $(this).removeClass("active");
      $(this).parents(".cf_submenu_block").removeClass("active");
      $(this).siblings(".cf_sidebar_submenu").removeClass("active");
      $(this).siblings(".cf_sidebar_submenu").slideUp(0);
    } else {
      $(".cf_submenu_block > a").removeClass("active");
      $(".cf_submenu_block").removeClass("active");
      $(this).addClass("active");
      $(this).parents(".cf_submenu_block").addClass("active");
      $(".cf_sidebar_submenu.active").removeClass("active");
      $(".cf_sidebar_submenu").slideUp(0);
      $(this).siblings(".cf_sidebar_submenu").addClass("active");
      $(this).siblings(".cf_sidebar_submenu.active").slideDown(0);
    }
  });
  //Info
  $(".trial_block .info").on("click", function (e) {
    e.stopPropagation();
    if ($(this).children(".info_content").hasClass("active")) {
      $(this).children(".info_content").removeClass("active");
    } else {
      $(".info_content").removeClass("active");
      $(this).children(".info_content").toggleClass("active");
    }
  });
  $(document).on("click", function (e) {
    if ($(e.target).is(".info_content") === false) {
      $(".info_content").removeClass("active");
    }
  });
  if ($(window).width() < 992) {
    $(".cf_subnav_list > a").on("click", function (e) {
      e.stopPropagation();
      if ($(this).siblings(".cf_subnav").hasClass("active")) {
        $(this).removeClass("active");
        $(this).parents(".cf_subnav_list").removeClass("active");
        $(this).siblings(".cf_subnav").removeClass("active");
        $(this).siblings(".cf_subnav").slideUp(0);
      } else {
        $(".cf_subnav_list > a").removeClass("active");
        $(".cf_subnav_list").removeClass("active");
        $(this).addClass("active");
        $(this).parents(".cf_subnav_list").addClass("active");
        $(".cf_subnav.active").removeClass("active");
        $(".cf_subnav").slideUp(0);
        $(this).siblings(".cf_subnav").addClass("active");
        $(this).siblings(".cf_subnav.active").slideDown(0);
      }
    });
    $(".cf_landing_logo .cf_bar").on("click", function (e) {
      e.stopPropagation();
      $(".cf_landing_nav").toggleClass("active");
    });
    $(".cf_landing_nav .cf_close").on("click", function (e) {
      e.stopPropagation();
      $(".cf_landing_nav").removeClass("active");
    });
    $(".cf_landing_nav").on("click", function (e) {
      e.stopPropagation();
    });
  }

  $(".cf_form_field")
    .focus(function () {
      $(this).parents(".cf_edit_profile_form_block").addClass("cf_inp_focus");
    })
    .blur(function () {
      $(this)
        .parents(".cf_edit_profile_form_block")
        .removeClass("cf_inp_focus");
    });

  $(".cf_edit_profile_form_block .cf_form_field").on("click", function (e) {
    if (
      $(this).parents(".cf_edit_profile_form_block").hasClass("field_active")
    ) {
      e.stopPropagation();
      $(this).addClass("field_active");
    }
    $(".cf_dashboard_header_nav").removeClass("active");
    // $(".cf_dashboard_header").addClass("sidebar_closed");
    // $(".cf_dashboard_main_wrapper").addClass("sidebar_closed_main");
    e.stopPropagation();
    $(".cf_edit_profile_form_block").removeClass("field_active");
    $(this).parents(".cf_edit_profile_form_block").addClass("field_active");
  });
  $(".sidebar_toggle").on("click", function (e) {
    e.stopPropagation();
    $(".cf_dashboard_header_nav").removeClass("active");
    $(".cf_dashboard_header").toggleClass("sidebar_closed");
    $(".cf_dashboard_main_wrapper").toggleClass("sidebar_closed_main");
  });
  $(".cf_dashboard_header_nav").on("click", function (e) {
    e.stopPropagation();
  });
  $(".menu_toggle").on("click", function (e) {
    e.stopPropagation();
  });
  $(".cf_dashboard_sidebar_wrapper").on("click", function (e) {
    e.stopPropagation();
  });
  $(".cf_form_block .cf_icon").on("click", function (e) {
    e.stopPropagation();
    $(".cf_dashboard_header_nav").removeClass("active");
    $(".cf_dashboard_header").addClass("sidebar_closed");
    $(".cf_dashboard_main_wrapper").addClass("sidebar_closed_main");
  });

  var w_wid = $(window).width();
  if (w_wid < 992) {
    $(".cf_dashboard_main_wrapper").addClass("sidebar_closed_main");
    $(".cf_dashboard_header").addClass("sidebar_closed");

    $(".menu_toggle").on("click", function () {
      $(".cf_dashboard_header_nav").toggleClass("active");
    });

    $(document).on("click", function () {
      $(".cf_dashboard_header_nav").removeClass("active");
      $(".cf_dashboard_header").addClass("sidebar_closed");
      $(".cf_dashboard_main_wrapper").addClass("sidebar_closed_main");
    });

    $(".cf_edit_profile_form_block .cf_form_field").on("click", function (e) {
      $(".cf_dashboard_header").addClass("sidebar_closed");
      $(".cf_dashboard_main_wrapper").addClass("sidebar_closed_main");
    });
  }

  var height = $(window).height();
  var width = $(window).width();
  if (width <= 950) {
    if (width > height) {
      $(".cf_dashboard_main_wrapper").addClass("sidebar_closed_main");
      $(".cf_dashboard_header").addClass("sidebar_closed");
      $(".menu_toggle").on("click", function () {
        $(".cf_dashboard_header_nav").toggleClass("active");
      });
    }
  }

  var swiper = new Swiper(".cf_landing_banner_inner .mySwiper", {
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".cf_testimonial_slider .mySwiper", {
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  $(".cf_overview_listWrapper ul li a").on("click", function () {
    $(".cf_overview_listWrapper ul li").removeClass("active");
    $(this).parents("li").addClass("active");
  });
  $(".cf_overview_listWrapper ul li a").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).attr("data-jump") + "").offset().top - 150,
      },
      0
    );
  });
});

$(document).on("click", function () {
  $(".cf_dashboard_header_nav").removeClass("active");
  $(".cf_edit_profile_form_block").removeClass("field_active");
  $(".cf_landing_nav").removeClass("active");
});
$(window).resize(function () {});

/* R js */

function check(elem) {
  if (elem.value == "Other") {
    document.getElementById("your_role").style.display = "block";
  } else {
    document.getElementById("your_role").style.display = "none";
  }
}
function check1(elem) {
  if (elem.value == "Other") {
    document.getElementById("company_type").style.display = "block";
  } else {
    document.getElementById("company_type").style.display = "none";
  }
}
$(".menu_scrl").click(function () {
  var scrl = $(this);
  $(".cf_dashboard_sidebar_wrapper").animate(
    { scrollTop: $(scrl).offset().top },
    1500
  );
});

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $(".cf_landing_header_wrapper").addClass("active");
  } else {
    $(".cf_landing_header_wrapper").removeClass("active");
  }

  if ($(this).scrollTop() > 10) {
    $(".header_wrapper").addClass("sticky");
  } else {
    $(".header_wrapper").removeClass("sticky");
  }

  var topScrollMenu = $(window).scrollTop();
  if (topScrollMenu >= 100) {
    $(".cf_product_overview_mainWrapper > .cf_scroll_section").each(function (
      i
    ) {
      if ($(this).position().top <= topScrollMenu + 130) {
        if ($(this).attr("data-scroll")) {
          // $(".cf_overview_listWrapper ul li.active").removeClass("active");
          // $('.cf_overview_listWrapper ul li a[data-jump="' + $(this).attr("data-scroll") + '"').addClass("active");
          // $('.cf_overview_listWrapper ul li a[data-jump="' + $(this).attr("data-scroll") + '"').focus();
        }
      }
    });
  } else {
    // $(".cf_overview_listWrapper ul li:first").addClass("active");
  }
});
