$(document).ready(function () {
  //links click
  $("header a").on("click", function () {
    $(this).parent().addClass("link-active").siblings().removeClass("link-active");
    $("html, body").animate(
      {
        scrollTop: $($(this).data("link")).offset().top
      },
      1000
    );
  });
  // slideShow
  $(".prev-btn").on("click", function () {
    let active = $(".active"),
      prev = $(".previous"),
      next = $(".next");
    active.removeClass("active").addClass("previous");
    prev.removeClass("previous").addClass("next");
    next.removeClass("next").addClass("active");
  });
  $(".next-btn").on("click", function () {
    let active = $(".active"),
      prev = $(".previous"),
      next = $(".next");

    active.removeClass("active").addClass("next");
    prev.removeClass("previous").addClass("active");
    next.removeClass("next").addClass("previous");
  });
});
