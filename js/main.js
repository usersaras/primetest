$(document).ready(function () {


  AOS.init();

  $(".owl-carousel").owlCarousel({
    margin: 20,
    items: 3,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1366: {
        items: 3
      }
    }
  });

  $(".owl-carousel-2").owlCarousel({
    margin: 20,
    items: 3,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1366: {
        items: 3
      }
    }
  });
});

$(document).ready(function () {

  $("#ex1-tab-1").click(function () {
    $("#ex1-tab-1").addClass("active")
    $("#ex1-tab-2").removeClass("active")
    $("#ex1-tab-3").removeClass("active")
    $("#ex1-tab-4").removeClass("active")

    $("#ex1-pills-1").addClass("show")
    $("#ex1-pills-1").addClass("active")
    $("#ex1-pills-2").removeClass("show")
    $("#ex1-pills-2").removeClass("active")
    $("#ex1-pills-3").removeClass("show")
    $("#ex1-pills-3").removeClass("active")
    $("#ex1-pills-4").removeClass("show")
    $("#ex1-pills-4").removeClass("active")
  })

  $("#ex1-tab-2").click(function () {
    $("#ex1-tab-2").addClass("active")
    $("#ex1-tab-1").removeClass("active")
    $("#ex1-tab-3").removeClass("active")
    $("#ex1-tab-4").removeClass("active")

    $("#ex1-pills-1").removeClass("show")
    $("#ex1-pills-1").removeClass("active")
    $("#ex1-pills-2").addClass("show")
    $("#ex1-pills-2").addClass("active")
    $("#ex1-pills-3").removeClass("show")
    $("#ex1-pills-3").removeClass("active")
    $("#ex1-pills-4").removeClass("show")
    $("#ex1-pills-4").removeClass("active")
  })

  $("#ex1-tab-3").click(function () {
    $("#ex1-tab-3").addClass("active")
    $("#ex1-tab-1").removeClass("active")
    $("#ex1-tab-2").removeClass("active")
    $("#ex1-tab-4").removeClass("active")

    $("#ex1-pills-1").removeClass("show")
    $("#ex1-pills-1").removeClass("active")
    $("#ex1-pills-2").removeClass("show")
    $("#ex1-pills-2").removeClass("active")
    $("#ex1-pills-3").addClass("show")
    $("#ex1-pills-3").addClass("active")
    $("#ex1-pills-4").removeClass("show")
    $("#ex1-pills-4").removeClass("active")
  })

  $("#ex1-tab-4").click(function () {
    $("#ex1-tab-1").addClass("active")
    $("#ex1-tab-2").removeClass("active")
    $("#ex1-tab-3").removeClass("active")

    $("#ex1-tab-4").addClass("active")
    $("#ex1-pills-4").addClass("show")
    $("#ex1-pills-4").addClass("active")

    $("#ex1-tab-1").removeClass("active")
    $("#ex1-tab-2").removeClass("active")
    $("#ex1-pills-1").removeClass("show")
    $("#ex1-pills-1").removeClass("active")
    $("#ex1-pills-2").removeClass("show")
    $("#ex1-pills-2").removeClass("active")
    $("#ex1-pills-3").removeClass("show")
    $("#ex1-pills-3").removeClass("active")
    
  })
})


