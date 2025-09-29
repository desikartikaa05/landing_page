$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#mainNavbar').addClass('scrolled shadow-sm');
        } else {
            $('#mainNavbar').removeClass('scrolled shadow-sm');
        }
    });

    $('a.nav-link[href^="#"]').on('click', function (event) {
        var target = $(this.hash);
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - $('#mainNavbar').outerHeight()
            }, 800);

            $('.nav-link').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.feature-box').on('click', function () {
        let album = $(this).find('h5').text();

        $(this).toggleClass('active').animate({
            opacity: 0.7
        }, 200).animate({
            opacity: 1
        }, 200);

        showToast("Kamu memilih: " + album);
    });

    $('body').append('<button id="scrollTopBtn" class="btn btn-success"><i class="fas fa-arrow-up"></i></button>');
    $('#scrollTopBtn').hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#scrollTopBtn').fadeIn();
        } else {
            $('#scrollTopBtn').fadeOut();
        }
    });

    $('#scrollTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    function showToast(msg) {
        let toast = $(`<div class="toast-message">${msg}</div>`);
        $('body').append(toast);

        toast.fadeIn(400).delay(2000).fadeOut(400, function () {
            $(this).remove();
        });
    }
});
