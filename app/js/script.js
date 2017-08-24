$(document).ready(function () {

    //mobile menu button--------------------------------------------------
    $(document).on('click', '.nav__menu-btn', function () {
        $(this).toggleClass('nav__menu-btn_active');
        var list = $('.nav__menu');
        if (list.is(':visible')) {
            list.slideUp();
        } else {
            list.slideDown();
            list.css('display', 'flex');
        }
    });
    //!mobile menu button--------------------------------------------------


    //header form tabs-----------------------------------------------------
    $(document).on('click', '.header__form--tab', function () {
        event.preventDefault();
        var tabId = $(this).attr('href');
        $('.header__form--tab').removeClass('active-tab');
        $(this).addClass('active-tab');
        $('.header__form--content').hide();
        $(tabId).fadeIn();
    });
    //!header form tabs-----------------------------------------------------


    //show comments in mobile
    $(document).on('click', '.show-comment', function () {
        event.preventDefault();
        if ($('.reviews__bottom').is(':visible')) {
            $('.reviews__bottom').slideUp('slow');
            $(this).removeClass('rotate180');
        } else {
            $('.reviews__bottom').slideDown('slow');
            $('.reviews__bottom').css('display', 'flex');
            $(this).addClass('rotate180');
        }


    });
    //!show comments in mobile
});