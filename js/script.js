//БУРГЕР
$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger, .header_burger_active").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
$(document).ready(function () {
  $("a").click(function (event) {
    $(".header_burger, .header_burger_active").removeClass("active");
  });
});
//КНОПКА ПРОКРУТКИ ВВЕРХ
var btn = $("#button");
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// ПОЛОСА ПРОКРУТКИ
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//ПЛАВАНАЯ АНИМАЦИЯ НА ЯКОРЯХ
$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

//МОДАЛЬНОЕ ОКНО
var popup = document.getElementById("popup");
var button = document.getElementById("btn");
var span = document.getElementsByClassName("close_popup")[0];

button.onclick = function () {
  popup.style.visibility = "visible";
};
span.onclick = function () {
  popup.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

//МАСКА НОМЕРА
$(function ($) {
  $('[name="phone"]').mask("+38(099) 999-9999");
});


