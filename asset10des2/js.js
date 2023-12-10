$('#carouselExampleControls .carousel-item:first').addClass('active');
$('.tabcontent').hide();
$('#tab-1').show();
$('#tabmain01').addClass('active');

$("a[href='#loginbtn'").on('click', function () {
$('#loginModal').modal('show');
});


 $('#tabmain01').on('click', function () {
     $('.tablink').removeClass('active');
     $(this).addClass('active');
    $('.tabcontent').hide();
     $('#tab-1').show();
    });


  $('#tabmain02').on('click', function () {
     $('.tablink').removeClass('active');
     $(this).addClass('active');
    $('.tabcontent').hide();
     $('#tab-2').show();
    });


   $('#tabmain03').on('click', function () {
     $('.tablink').removeClass('active');
     $(this).addClass('active');
    $('.tabcontent').hide();
     $('#tab-3').show();
    });



    $('#tabmain04').on('click', function () {
     $('.tablink').removeClass('active');
     $(this).addClass('active');
    $('.tabcontent').hide();
     $('#tab-4').show();
    });



 $('#tabmain05').on('click', function () {
     $('.tablink').removeClass('active');
     $(this).addClass('active');
    $('.tabcontent').hide();
     $('#tab-5').show();
    });



 $('#tabmain06').on('click', function () {
     $('.tablink').removeClass('active');
     $(this).addClass('active');
    $('.tabcontent').hide();
     $('#tab-6').show();
    });




 $('#tabmain07').on('click', function () {
     $('.tablink').removeClass('active');
     $(this).addClass('active');
    $('.tabcontent').hide();
     $('#tab-7').show();
    });



  $('#tabmain08').on('click', function () {
     $('.tablink').removeClass('active');
     $(this).addClass('active');
    $('.tabcontent').hide();
     $('#tab-8').show();
    });



   $('#tabmain09').on('click', function () {
     $('.tablink').removeClass('active');
     $(this).addClass('active');
    $('.tabcontent').hide();
     $('#tab-9').show();
    });
    $('.overlaysidebar').on('click', function () {
        $('.insidebarleft').toggleClass('active');
        $('.overlaysidebar').toggleClass('active');
        $('.sidebarCollapse').toggleClass('open');
    });
    $('.sidebarCollapse').on('click', function () {
        $('.insidebarleft').toggleClass('active');
        $('.overlaysidebar').toggleClass('active');
        $('.sidebarCollapse').toggleClass('open');
    });


$(window).scroll(function(){
    if($(window).scrollTop() == $(window).height() > $(document).height() - 150) {
        $('.sidebarCollapse').removeClass('sticky');
         $('.top-bar').removeClass('sticky');

    }else{
         $('.top-bar').addClass('sticky');
     $('.sidebarCollapse').addClass('sticky');
 }
});             