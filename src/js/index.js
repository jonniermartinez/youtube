window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 9,
        slidesToScroll: 3,
        draggable: true,
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
        }
      });
});