if (window.matchMedia("(min-width: 768px)").matches){
  $('#new-carousel').addClass('owl-carousel')
  $('#new-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots: false,
      responsive:{
        500:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  })
  owl = $('#new-carousel').owlCarousel();

  $("#prev-btn-new").click(function () {
    $(this).closest('.item-block').find(owl).trigger('prev.owl.carousel');
  });

  $("#next-btn-new").click(function () {
      $(this).closest('.item-block').find(owl).trigger('next.owl.carousel');
  });
}

$('#brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
      0:{
          items:1
      },
      450:{
        items: 2
      },
      767:{
        items: 4
      },
      991:{
          items:5
      },
      1200:{
          items:6
      }
  }
})

owl2 = $('#brand-carousel').owlCarousel();

$(".prev-btn-brand").click(function () {
  $(this).closest('.item-block').find(owl2).trigger('prev.owl.carousel');
});

$(".next-btn-brand").click(function () {
    $(this).closest('.item-block').find(owl2).trigger('next.owl.carousel');
});

$('.sidebar-toggle').click(function(e) {
  e.preventDefault();
  var menu = $(this).next();
  if(menu.is(':hidden')){
    menu.slideDown(250);
    $(this).addClass('active');
  }
  else{
    menu.slideUp(250);
    $(this).removeClass('active');
  }
});

$('.sidebar-filter__btn').click(function(e) {
  e.preventDefault();
  var menu = $(this).next();
  if(menu.is(':hidden')){
    menu.slideDown(250);
    $(this).addClass('active');
  }
  else{
    menu.slideUp(250);
    $(this).removeClass('active');
  }
});

$('#card-slider').bxSlider({
  pagerCustom: '#card-thumb',
  controls: false
});

if (window.matchMedia("(max-width: 767px)").matches){
  $('.cat-btn').click(function(e) {
    e.preventDefault();
    var menu = $('#cat-modile')
    if(menu.is(':hidden')){
      menu.slideDown(250);
    }
    else{
      menu.slideUp(250);
    }
  });
}




