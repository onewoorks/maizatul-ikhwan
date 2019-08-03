

var pushValue = [];

var root = document.getElementsByTagName('html')[0]; // '0' to assign the first (and only `HTML` tag)
root.className += ' animation ';
window.addEventListener("DOMContentLoaded", function () {

    if (root.className.indexOf('this-is-tag') !== -1) {
        root.classList.remove('hide-caption');
        root.classList.remove('hide-post-nav');
    }

    if (root.className.indexOf('mobile-version') !== -1) {
        root.classList.add('use-hidden-menu');
    }
    /** image fix on mobile **/
    /** image fix on mobile **/
    /** append to the left menu **/
    /** get how much menus are **/
    var countMenu = Math.ceil(document.querySelector('#right-header-menu').querySelectorAll('li').length / 2);
    /** get how much menus are **/
    for (var menuRepo = 1; menuRepo < countMenu + 1; menuRepo++) {
        pushValue.push('<li>' + document.querySelectorAll('#right-header-menu li:nth-child(' + menuRepo + ')')[0].innerHTML + '</li>');
        document.querySelectorAll('#right-header-menu li:nth-child(' + menuRepo + ')')[0].style.display = 'none';
    }

    /** concat all values and append **/
    document.getElementById('left-header-menu').innerHTML = pushValue.join('');
    /** concat all values and append **/
    /** append to the left menu **/
    window.onresize = function () {
        resizeTitle();
        themeElement();
    };

    /** check if exists **/
    var element = document.getElementById('posts').getElementsByClassName('post-container');
    if (typeof (element) === 'undefined' && element === null) {
        root.className += ' landing-page ';
    }
    /** check if exists **/

    /** function image fadein **/
    if (root.className.indexOf('mobile-version') !== -1) {
        if (root.className.indexOf('mobile-header') !== -1) {
            document.getElementById('header-overlay').innerHTML = '<div style="background-image:url(' + document.getElementById('header-overlay').getAttribute('mobile-header-image') + ')" id="ani-overlay" class="active"></div>';
        } else {
            document.getElementById('header-overlay').innerHTML = '<div style="background-image:url(' + document.getElementById('header-overlay').getAttribute('header-image') + ')" id="ani-overlay" class="active"></div>';
        }
    } else {
        document.getElementById('header-overlay').innerHTML = '<div style="background-image:url(' + document.getElementById('header-overlay').getAttribute('header-image') + ')" id="ani-overlay" class="active"></div>';
    }

    if (root.className.indexOf('mobile-version') === -1 || root.className.indexOf('mobile-header') === -1 && root.className.indexOf('mobile-version') !== -1) {
        if (countImages = document.getElementById('overlay-content').children.length >= 2) {
            animationTwo();
        }
    }
}, false);

/** header fade-in effect **/
function animationTwo() {
    var overlay = document.getElementById('header-overlay');
    var i = 0;
    var backgroundImage = 0;
    var countImages = document.getElementById('overlay-content').children.length;
    var timerHeader = setInterval(function () {
        countImages = document.getElementById('overlay-content').children.length;
        var countOverlay = document.querySelectorAll('#header-overlay #ani-overlay').length;
        i++;
        backgroundImage = document.querySelectorAll('#overlay-content img:nth-child(' + i + ')')[0].src;
        document.querySelectorAll('#ani-overlay.active')[0].setAttribute('class', '');
        overlay.innerHTML += '<div style="background-image:url(' + backgroundImage + ')" id="ani-overlay" class="active"></div>';
        if (i === countImages) {
            clearInterval(timerHeader)
            animationTwo()
        }
        if (countOverlay === 3) {
            var lastThree = document.querySelector('#ani-overlay:nth-last-child(3)');
            // var lastFour = document.querySelector('#ani-overlay:nth-last-child(4)');
            lastThree.parentNode.removeChild(lastThree);
            // lastFour.parentNode.removeChild(lastFour);
        }

    }, imageDuration);

}
/** header fade-in effect **/

/** header logo/menu reposition **/
function resizeTitle() {

    /** reposiiton header **/
    var headerContent = document.getElementById('top-header-content');
    var leftMenu = document.getElementById('left-header-menu').offsetWidth;
    var rightMenu = document.getElementById('right-header-menu').offsetWidth;
    if (leftMenu <= rightMenu) {
        headerContent.style.left = (rightMenu - leftMenu) / 2 + 'px';
    } else {
        headerContent.style.left = - (leftMenu - rightMenu) / 2 + 'px';
    }
    /** reposiiton header **/


    if (root.className.indexOf('no-visible-tag') !== -1) {
        document.querySelector('header').style.height = $(window).height() - 109 + 'px';
    } else {
        document.querySelector('header').style.height = $(window).height() + 'px';
    }
    document.querySelector('.max-width-fix').style.minHeight = $(window).height() - 300 + 'px';

}
/** header logo/menu reposition **/


$(document).ready(function () {
    themeElement()
    $('html#per.auto-scroll:not(.this-mobile), html#per.auto-scroll:not(.this-mobile) body, html.this-is-tag:not(.this-mobile) html, html.this-is-tag:not(.this-mobile) body, html#ind.this-is-pagination:not(.this-mobile), html#ind.this-is-pagination:not(.this-mobile) body').animate({
        scrollTop: $(window).height() - 80
    }, 800);
    $('html#per.auto-scroll.tablet-version body,html.this-is-tag.auto-scroll.tablet-version body').animate({
        scrollTop: $(window).height() - 80
    }, 800);

    var timer;
    $(window).scroll(function () {

        /* clear the old timeout */
        clearTimeout(timer);
        /* wait until 400 ms for callback */
        timer = setTimeout(scrollHeaderEvt, 400);
    });
    /** scrolling **/

    if ($('.tmblr-iframe').is('.iframe-controls--phone-mobile')) {
        $(this).addClass('mobile-bar-enabled')
    }

    /** tag box **/

    if (window.location.href.indexOf("tagged") >= 0) {
        $('span.tags-all').css({
            'background-color': TagBoxBackColor
        })

        $('span.tags-all a').css({
            'color': tagBoxColor
        })

    }
    $('span.tags-all').mouseenter(function () {

        if (window.location.href.indexOf("tagged") >= 0) {
            $('span.tags-all').css({
                'background-color': TagBoxOverlayBackColor
            })

            $('span.tags-all a').css({
                'color': TagBoxOverlayColor
            })
        }
    })
    $('span.tags-all').mouseleave(function () {

        if (window.location.href.indexOf("tagged") >= 0) {
            $('span.tags-all').css({
                'background-color': TagBoxBackColor
            })

            $('span.tags-all a').css({
                'color': tagBoxColor
            })
        }
    })

    $('.persona-tags-container span:not(.tags-all)').each(function () {
        var tagURL = $('a', this).attr('href').toLowerCase().replace(/\s+/g, '%20');
        var newClass = $('a', this).text().toLowerCase().replace(/\s+/g, '');
        if (window.location.href.indexOf(tagURL) > -1) {

            $(this).css({
                'background-color': TagBoxOverlayBackColor
            })
            $('a', this).css({
                'color': TagBoxOverlayColor
            })
        }
    })
    $('.persona-tags-container a:not(.lowercased)').each(function () {
        var hrefURL = $(this).attr('href');
        $(this).attr('href', hrefURL.toLowerCase()).addClass('lowercased')
    })

    /** tag box **/

    /**hidden-menu **/
    $('.menu-trigger').click(function () {

        $('html').addClass('html-open').removeClass('html-not-open')

        $('.hidden-overlay').fadeIn()
    })

    $('.close-hidden-menu,.hidden-overlay').click(function () {
        $('html').removeClass('html-open').addClass('html-not-open')
        $('.hidden-overlay').fadeOut()
    })

    /**hidden-menu **/



    $(window).scroll(function () {
        scrollHeaderEvt();
    });
    resizeTitle()
});
/** Bottom Search **/

function themeElement() {
    if (html.is('.use-hidden-menu')) {
        $('html').addClass('overflow-menu')
    } else {
        /** Top Header Responsive **/
        var longest = 0;
        if ($('#left-header-menu').width() < $('#right-header-menu').width()) {
            longest = $('#right-header-menu').width()
        } else {
            longest = $('#left-header-menu').width()
        }
        if ($(window).width() > $('.top-title').width() + 30 + (longest * 2)) {
            $('html').removeClass('overflow-menu')
        } else {
            $('html').addClass('overflow-menu')

        }
    }

    /** Top Header Responsive **/

}

function scrollHeaderEvt() {
    /* scroll actions */
    /** Scroll Header Animation **/
    if ($('#header-search').is(':focus')) {
        if ($(window).height() < $(window).scrollTop()) {
            $('html .top-header').addClass('animated')
            html.addClass('scrolled')
        } else {
        }
    } else {
        if ($(window).height() < $(window).scrollTop()) {
            $('html .top-header').addClass('animated')
            html.addClass('scrolled')
        } else {
            $('html .top-header').removeClass('animated')
            html.removeClass('scrolled')
        }
    }
}
/** takes header jqeuries **/