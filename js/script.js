/**
 * Part of fullinn_b2b project.
 *
 * @copyright  Copyright (C) 2018 {ORGANIZATION}. All rights reserved.
 * @license    GNU General Public License version 2 or later.
 */

$(document).ready(function () {
    var body = $('body');

    if (body.hasClass('view-home') && $(window).width() > 767.98) {
        if ($(window).scrollTop() > 0) {
            $('.main-menu').removeClass('home-menu');
        } else {
            $('.main-menu').addClass('home-menu');
        }

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 0) {
                $('.main-menu').removeClass('home-menu');
            } else {
                $('.main-menu').addClass('home-menu');
            }
        });
    } else {
        $('.main-menu').removeClass('home-menu');
    }

    $('.faq .tab-link').on('click', function (e) {
        e.preventDefault();

        if ($(window).width() > 767.98) {
            var href = $(this).attr('href');

            $('html, body').animate({
                scrollTop: $(href).offset().top - 130
            }, 500);
        } else {
            $(this).tab('show');
        }
    });

    if (body.hasClass('view-faq') && $(window).width() > 767.98) {
        $(window).on('scroll', function () {
            var sub_menu = $('.sub-menu');

            if ($(window).scrollTop() > $('.faq-items').offset().top - 90) {
                if (!sub_menu.hasClass('fixed-top')) {
                    sub_menu.addClass('fixed-top');
                }
            } else {
                if (sub_menu.hasClass('fixed-top')) {
                    sub_menu.removeClass('fixed-top');
                }
            }
        });
    }

    $('.compare .tab-link').on('click', function (e) {
        e.preventDefault();

        $('.compare .tab-link').removeClass('active').removeClass('show');

        $(this).tab('show');

        var href = $(this).attr('href');

        $('.tab-link[href="' + href + '"]').each(function (index) {
            if (!$(this).hasClass('active')) {
                $(this).addClass('active').addClass('show');
            }
        })
    });

    $('.solution .tab-link').on('click', function (e) {
        e.preventDefault();

        $('.solution .tab-link').removeClass('active').removeClass('show');

        $(this).tab('show');

        var href = $(this).attr('href');

        $('.tab-link[href="' + href + '"]').each(function (index) {
            if (!$(this).hasClass('active')) {
                $(this).addClass('active').addClass('show');
            }
        })
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    if ($(window).width() < 768) {
        $('.compare .btn-link').attr('data-toggle', 'collapse');
    } else {
        $('.compare .collapse').each(function (index) {
            if (!$(this).hasClass('show')) {
                $(this).addClass('show');
            }
        });
    }
});
