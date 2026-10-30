$(function () {
  $("#github_photo").on({
    mouseenter: function () {
      $(this).attr("src", "img/github_o.png");
    },
    mouseleave: function () {
      $(this).attr("src", "img/github.png");
    }
  });
});
