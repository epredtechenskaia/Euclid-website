$("#accordionGroup").accordion({
    heightStyle: "content",
    active: true,
    collapsible: true,
});

$('.questions__item').click(function() {
    jQuery(this).find(".questions__plus").toggleClass('active');
    $(".questions__plus").not(jQuery(this).find(".questions__plus")).removeClass('active');
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {

        const path = e.currentTarget.dataset.path;

        document.querySelectorAll('.tabs-nav__btn').forEach(function(btn) {
            btn.classList.remove('tabs-nav__btn--active')
        });

        e.currentTarget.classList.add('tabs-nav__btn--active');

        document.querySelectorAll('.tabs-item').forEach(function(tabsBtn) {
            tabsBtn.classList.remove('tabs-item--active')
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
});

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector(".search-input");
const headerOpen = document.querySelector('.header__open')
headerOpen.onclick = () => {
    searchBox.classList.add("active");
    searchInput.classList.add("active");
    searchBtn.classList.add("active");
    cancelBtn.classList.add("active");
    headerOpen.classList.add("active");
}
cancelBtn.onclick = () => {
    searchBox.classList.remove("active");
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
    cancelBtn.classList.remove("active");
    headerOpen.classList.remove("active");
}


$(function() {
    $('.questions__item__one').hover(function() {
        $('.questions__item__one').css('border-color', 'var(--bg-color-order-btn)');
        $('.questions__item__two').css('border-color', 'var(--bg-color-order-btn)');
    }, function() {
        $('.questions__item__one').css('border-color', 'var(--border-color)');
        $('.questions__item__two').css('border-color', 'var(--border-color)');
    });
});

$(function() {
    $('.questions__item__two').hover(function() {
        $('.questions__item__two').css('border-color', 'var(--bg-color-order-btn)');
        $('.questions__item__three').css('border-color', 'var(--bg-color-order-btn)');
    }, function() {
        $('.questions__item__two').css('border-color', 'var(--border-color)');
        $('.questions__item__three').css('border-color', 'var(--border-color)');
    });
});

$(function() {
    $('.questions__item__three').hover(function() {
        $('.questions__item__three').css('border-color', 'var(--bg-color-order-btn)');
        $('.questions__item__four').css('border-color', 'var(--bg-color-order-btn)');
    }, function() {
        $('.questions__item__three').css('border-color', 'var(--border-color)');
        $('.questions__item__four').css('border-color', 'var(--border-color)');
    });
});

$(function() {
    $('.questions__item__four').hover(function() {
        $('.questions__item__four').css('border-color', 'var(--bg-color-order-btn)');
        $('.questions__item__five').css('border-color', 'var(--bg-color-order-btn)');
    }, function() {
        $('.questions__item__four').css('border-color', 'var(--border-color)');
        $('.questions__item__five').css('border-color', 'var(--border-color)');
    });
});

$(function() {
    $('.questions__item__five').hover(function() {
        $('.questions__item__five').css('border-color', 'var(--bg-color-order-btn)');
        $('#accordionGroup').css('border-color', 'var(--bg-color-order-btn)');
    }, function() {
        $('.questions__item__five').css('border-color', 'var(--border-color)');
        $('#accordionGroup').css('border-color', 'var(--border-color)');
    });
});