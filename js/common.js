$(document).ready(function () {

    $(".fancybox").fancybox();

    /* замена слайдера на фото*/
    var varWidth = 319;
    var bodyWidth = $('html').width();
    if (bodyWidth > varWidth) {
        /*        $(".owl-carousel").remove();*/
        $('#change1').html('<div id="carousel1" class="owl-carousel owl-carousel1">' +
            '<div> <img class="img-responsive" src="img/свадьба.jpg" alt="свадьба"> </div>' +
            '<div> <img class="img-responsive" src="img/ходова.jpg" alt="ходова"> </div>' +
            '<div> <img class="img-responsive" src="img/радион.jpg" alt="радион"> </div>' +
            '<div> <img class="img-responsive" src="img/ведущая.jpg" alt="ведущая"> </div>' +
            '</div>');

        $('#change2').html('<div id="carousel2" class="owl-carousel owl-carousel2">' +
            '<div> <img class="img-responsive" src="img/романтика.jpg" alt="романтика"> </div>' +
            '<div> <img class="img-responsive" src="img/звук.jpg" alt="звук"> </div>' +
            '<div> <img class="img-responsive" src="img/фотосессия.jpg" alt="фотосессия"> </div>' +
            '<div> <img class="img-responsive" src="img/развлечения.jpg" alt="развлечения"> </div>' +
            '</div>');

        $('#change3').html('<div id="carousel3" class="owl-carousel owl-carousel3">' +
            '<div> <img class="img-responsive" src="img/музыканты.jpg" alt="музыканты"> </div>' +
            '<div> <img class="img-responsive" src="img/настроение.jpg" alt="настроение"> </div>' +
            '<div> <img class="img-responsive" src="img/праздники.jpg" alt="праздники"> </div>' +
            '<div> <img class="img-responsive" src="img/юбилей.jpg" alt="юбилей"> </div>' +
            '</div>')

    }

//Слайдер

    var owl1 = $("#carousel1");
    owl1.owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
        autoplaySpeed: 1000, /* скорость смены слайда*/
        dragEndSpeed: 500 /* скорость смены при перелистывании*/


        /*        lazyLoad:true,
         autoPlay: 1000,
         slideSpeed: 500,
         rewindSpeed: 1000,
         paginationSpeed: 900,


         autoplayHoverPause: true*/
    });
    scrollSlider(owl1);

    var owl2 = $("#carousel2");
    owl2.owlCarousel({
        autoplaySpeed: 1500,

        items: 1,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true
    });
    scrollSlider(owl2);

    var owl3 = $("#carousel3");
    owl3.owlCarousel({
        autoplaySpeed: 2000,

        items: 1,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,

    });
    scrollSlider(owl3);

    /*    Скролл на слайдере*/

    function scrollSlider(element) {
        element.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY > 0) {
                $(this).trigger('next.owl');
            } else {
                $(this).trigger('prev.owl');
            }
            e.preventDefault();
        });

    }

    /*$(".next_button").click(function () {
     owl.trigger("owl.next");
     });
     $(".prev_button").click(function () {
     owl.trigger("owl.prev");
     });*/
    //при нажатию на ссылку


    $(".nav>li>a,.footer-menu>li>a").on('click', function () {

        $a = $($(this).attr('href'));
        $('html,body').animate({scrollTop: $a.offset().top - 50}, 600);

    });

    $(".nav>li>a").on('click', function (e) {
        if ($(window).width() < 768) {
            /*console.log($(window).innerWidth());*/
            e.preventDefault();
            $('#navbar_up').click();
        }
        return false;
    });


    <!--Звуковой эффект в меню-->
    var soundLink1 = $("#beep-1")[0];
    var soundLink2 = $("#beep-2")[0];
    var soundLink3 = $("#beep-3")[0];


    $(".nav>li>a:eq(0),.footer-menu>li>a:eq(0)").mouseenter(function () {
        soundLink1.play();
    });
    $(".nav>li>a:eq(1),.footer-menu>li>a:eq(1)").mouseenter(function () {

        soundLink2.play();
    });
    $(".nav>li>:eq(2),.footer-menu>li>a:eq(2),.navbar-header>a").mouseenter(function () {

        soundLink3.play();
    });
    $(".nav>li>:eq(3),.footer-menu>li>a:eq(2),.navbar-header>a").mouseenter(function () {

        soundLink1.play();
    });

    //Аякс отправка форм


    function sendPhp() {

        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $("#callback").serialize()
        }).done(function () {
            alert("Спасибо за заявку! Я обязательно в Вами свяжусь в ближайшее время!");
            setTimeout(function () {
                $.fancybox.close();
            }, 1000);
        });
        /*return false;*/
    }


    /*Валидация формы отправки*/
    $('#nameForm').blur(
        function (e) {
            var nameForm = $('#nameForm');
            var name = nameForm.val();
            var ch_name = /^[A-Za-zА-Яа-я0-9 ]{3,20}$/;
            var ch_phone = /^(\d{7,12})$/;
            if (!ch_name.test(name)) {
                nameForm.css('border', 'red 3px solid');
                e.preventDefault();
                /*return;*/
            }
            else {
                nameForm.css('border', 'green 3px solid')
            }
        }
    );
    $('#phoneForm').blur(
        function (e) {
            phoneForm = $('#phoneForm');
            var phone = phoneForm.val();
            var ch_phone = /^(\d{7,12})$/;

            if (!ch_phone.test(phone)) {
                phoneForm.css('border', 'red 3px solid');
                e.preventDefault();
                /*return;*/
            }
            else {
                phoneForm.css('border', 'green 3px solid');

            }
        }
    );

    $("form button").click(
        function (e) {
            var nameForm = $('#nameForm');
            var phoneForm = $('#phoneForm');
            var name = nameForm.val();
            var phone = phoneForm.val();
            var ch_name = /^[A-Za-zА-Яа-я0-9 ]{3,20}$/;
            var ch_phone = /^(\d{7,12})$/;
            if (!ch_name.test(name)) {
                nameForm.css('border', 'red 3px solid');
                e.preventDefault();
                return
            }
            else {
                nameForm.css('border', 'green 3px solid');
            }
            if (!ch_phone.test(phone)) {
                phoneForm.css('border', 'red 3px solid');
                e.preventDefault();
            }
            else {
                phoneForm.css('border', 'green 3px solid');
                sendPhp();
                /* return;*/
            }

        }
    );


});
$(window).load(function () {
    /* preloader*/
    setTimeout(function () {
        $('body').addClass('loaded')
    }, 1000);
});