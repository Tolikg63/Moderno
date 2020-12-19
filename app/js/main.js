$(function() {

   $(".rate-star").rateYo({
      rating: 5,
      readOnly: true,
      normalFill: "#ffa726",
      starWidth: "12px"
   });

   let mixer = mixitup('.products__inner-box');

   $('.product-slider__inner').slick({
      dots: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      autoplay: true
   });

});
