console.log("check");



document.getElementById("main").style.display = "none";

// function showPage() {
//   $("#loader").fadeOut("slow");
//   $("#main").fadeIn("slow");
// }

// setTimeout(() => {
//   showPage();
// }, "3000")

$(window).load(function(){
  $("#loader").fadeOut("slow");
  $('#loader').hide();
  $("#main").fadeIn("slow");
})


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      margin: 20,
      items: 3,
      dots: true,
      responsive: {
        0: {
          items: 1
        },
        768 : {
          items: 2
        },
        1366 : {
          items: 3
        }
      }
  });
});

$(document).ready(function(){

  $("#ex1-tab-1").click(function(){
    $("#ex1-tab-1").addClass("active")
    $("#ex1-tab-2").removeClass("active")
    $("#ex1-tab-3").removeClass("active")
    $("#ex1-pills-1").addClass("show")
    $("#ex1-pills-1").addClass("active")
    $("#ex1-pills-2").removeClass("show")
    $("#ex1-pills-2").removeClass("active")
    $("#ex1-pills-3").removeClass("show")
    $("#ex1-pills-3").removeClass("active")
  })

  $("#ex1-tab-2").click(function(){
    $("#ex1-tab-2").addClass("active")
    $("#ex1-tab-1").removeClass("active")
    $("#ex1-tab-3").removeClass("active")
    $("#ex1-pills-1").removeClass("show")
    $("#ex1-pills-1").removeClass("active")
    $("#ex1-pills-2").addClass("show")
    $("#ex1-pills-2").addClass("active")
    $("#ex1-pills-3").removeClass("show")
    $("#ex1-pills-3").removeClass("active")
  })

  $("#ex1-tab-3").click(function(){
    $("#ex1-tab-3").addClass("active")
    $("#ex1-tab-1").removeClass("active")
    $("#ex1-tab-2").removeClass("active")
    $("#ex1-pills-1").removeClass("show")
    $("#ex1-pills-1").removeClass("active")
    $("#ex1-pills-2").removeClass("show")
    $("#ex1-pills-2").removeClass("active")
    $("#ex1-pills-3").addClass("show")
    $("#ex1-pills-3").addClass("active")
  })
})

window.onload=function(){

  document.getElementById("ex1-pills-1").addEventListener("click", clicker)
  function clicker(){
    console.log("abc")
  }
}

AOS.init({
  easing: 'ease-in-out-sine'
});

