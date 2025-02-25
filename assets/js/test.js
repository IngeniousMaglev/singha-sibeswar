const downloadBtn = document.getElementById("download_cv"),
    cv_modal = document.getElementById("funky_cv");
downloadBtn.addEventListener("click", function (e) {
    e.preventDefault(), $(cv_modal).modal("show");
});
const consoleOutput = document.getElementById("console-output"),
    consoleCursor = document.getElementById("console-cursor"),
    consoleText =
        "Connection established to hrishi-Desktop\n> wget hrishi-Desktop\\Hrishikesh7665_CV.pdf\n> Waiting for response ......Ohh... no.... Looks like the matrix agents have intercepted my resume. But fear not, you can still access it on my LinkedIn profile\n>";
let intervalId,
    index = 0;
const speed = 68;
function resetAnimation() {
    clearInterval(intervalId), (index = 0), (consoleOutput.innerHTML = ""), (consoleCursor.style.opacity = 1), (consoleOutput.innerText = "");
}
function sleep(e) {
    return new Promise((t) => setTimeout(t, e));
}
const funkyCvModal = document.getElementById("funky_cv");
funkyCvModal.addEventListener("hidden.bs.modal", resetAnimation),
    funkyCvModal.addEventListener("shown.bs.modal", () => {
        (intervalId = setInterval(async () => {
            index <= consoleText.length
                ? ("\n" === consoleText[index]
                    ? (consoleOutput.innerHTML += "<br> ")
                    : (107 == index
                        ? await sleep(1100)
                        : 108 == index
                            ? await sleep(900)
                            : 109 == index
                                ? await sleep(900)
                                : 110 == index
                                    ? await sleep(900)
                                    : 111 == index
                                        ? await sleep(900)
                                        : 112 == index
                                            ? await sleep(900)
                                            : 113 == index
                                                ? await sleep(1100)
                                                : 114 == index && (consoleOutput.innerHTML += "<br> > "),
                        console.log(consoleText[index], index),
                        null != consoleText[index] && (consoleOutput.innerHTML += consoleText[index])),
                    index++)
                : (clearInterval(intervalId), (consoleOutput.innerHTML += ""));
        }, 68)),
            setTimeout(() => {
                setInterval(() => {
                    consoleCursor.style.opacity = 0 == consoleCursor.style.opacity ? 1 : 0;
                }, 500);
            }, 50 * consoleText.length + 500);
    }),
    (function (e) {
        "use strict";
        e(window).on("load", function () {
            e(".lds-ellipsis").fadeOut(),
                e(".preloader").delay(333).fadeOut("slow"),
                e("body").delay(333),
                setTimeout(function () {
                    document.getElementsByTagName("BODY")[0].style.overflow = "visible";
                }, 335);
        }),
            e(window).on("scroll", function () {
                var t = e("#header.sticky-top .bg-transparent"),
                    a = e("#header.sticky-top-slide");
                e(this).scrollTop() > 1
                    ? (t.addClass("sticky-on-top"), t.find(".logo img").attr("src", t.find(".logo img").data("sticky-logo")))
                    : (t.removeClass("sticky-on-top"), t.find(".logo img").attr("src", t.find(".logo img").data("default-logo"))),
                    e(this).scrollTop() > 180
                        ? (a.find(".primary-menu").addClass("sticky-on"), a.find(".logo img").attr("src", a.find(".logo img").data("sticky-logo")))
                        : (a.find(".primary-menu").removeClass("sticky-on"), a.find(".logo img").attr("src", a.find(".logo img").data("default-logo")));
            }),
            e("body").hasClass("side-header")
                ? e(".smooth-scroll").on("click", function () {
                    event.preventDefault();
                    var t = e(this).attr("href");
                    e("html, body")
                        .stop()
                        .animate({ scrollTop: e(t).offset().top }, 1500, "easeInOutExpo");
                })
                : e(".smooth-scroll").on("click", function () {
                    event.preventDefault();
                    var t = e(this).attr("href");
                    e("html, body")
                        .stop()
                        .animate({ scrollTop: e(t).offset().top - 50 }, 1500, "easeInOutExpo");
                }),
            e(".navbar-toggler").on("click", function () {
                e(this).toggleClass("show");
            }),
            e(".navbar-nav a").on("click", function () {
                e(".navbar-collapse, .navbar-toggler").removeClass("show");
            }),
            e(".navbar-side-open .collapse, .navbar-overlay .collapse").on("show.bs.collapse hide.bs.collapse", function (e) {
                e.preventDefault();
            }),
            e('.navbar-side-open [data-bs-toggle="collapse"], .navbar-overlay [data-bs-toggle="collapse"]').on("click", function (t) {
                t.preventDefault(), e(e(this).data("bs-target")).toggleClass("show");
            }),
            e(".owl-carousel").each(function (t) {
                var a = e(this);
                if ("rtl" == e("html").attr("dir")) var o = !0;
                else o = !1;
                e(this).owlCarousel({
                    rtl: o,
                    autoplay: a.data("autoplay"),
                    center: a.data("center"),
                    autoplayTimeout: a.data("autoplaytimeout"),
                    autoplayHoverPause: a.data("autoplayhoverpause"),
                    loop: a.data("loop"),
                    speed: a.data("speed"),
                    nav: a.data("nav"),
                    dots: a.data("dots"),
                    autoHeight: a.data("autoheight"),
                    autoWidth: a.data("autowidth"),
                    margin: a.data("margin"),
                    stagePadding: a.data("stagepadding"),
                    slideBy: a.data("slideby"),
                    lazyLoad: a.data("lazyload"),
                    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
                    animateOut: a.data("animateout"),
                    animateIn: a.data("animatein"),
                    video: a.data("video"),
                    items: a.data("items"),
                    responsive: { 0: { items: a.data("items-xs") }, 576: { items: a.data("items-sm") }, 768: { items: a.data("items-md") }, 992: { items: a.data("items-lg") } },
                });
            }),
            e(".popup-img-gallery").each(function () {
                e(this).magnificPopup({
                    delegate: ".popup-img:visible",
                    type: "image",
                    tLoading: '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
                    closeOnContentClick: !0,
                    mainClass: "mfp-fade",
                    gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
                });
            }),
            e(".popup-ajax-gallery").each(function () {
                e(this).magnificPopup({
                    delegate: ".popup-ajax:visible",
                    type: "ajax",
                    tLoading: '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
                    mainClass: "mfp-fade",
                    closeBtnInside: !0,
                    midClick: !0,
                    gallery: { enabled: !0 },
                    callbacks: {
                        ajaxContentAdded: function () {
                            e(".owl-carousel").each(function (t) {
                                var a = e(this);
                                if ("rtl" == e("html").attr("dir")) var o = !0;
                                else o = !1;
                                e(this).owlCarousel({
                                    rtl: o,
                                    autoplay: a.data("autoplay"),
                                    center: a.data("center"),
                                    autoplayTimeout: a.data("autoplaytimeout"),
                                    autoplayHoverPause: a.data("autoplayhoverpause"),
                                    loop: a.data("loop"),
                                    speed: a.data("speed"),
                                    nav: a.data("nav"),
                                    dots: a.data("dots"),
                                    autoHeight: a.data("autoheight"),
                                    autoWidth: a.data("autowidth"),
                                    margin: a.data("margin"),
                                    stagePadding: a.data("stagepadding"),
                                    slideBy: a.data("slideby"),
                                    lazyLoad: a.data("lazyload"),
                                    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
                                    animateOut: a.data("animateOut"),
                                    animateIn: a.data("animateIn"),
                                    video: a.data("video"),
                                    items: a.data("items"),
                                    responsive: { 0: { items: a.data("items-xs") }, 576: { items: a.data("items-sm") }, 768: { items: a.data("items-md") }, 992: { items: a.data("items-lg") } },
                                });
                            });
                        },
                    },
                });
            }),
            e(".popup-youtube, .popup-vimeo, .popup-gmaps").each(function () {
                e(this).magnificPopup({ type: "iframe", mainClass: "mfp-fade" });
            }),
            e(window).on("load", function () {
                e(".portfolio-filter").each(function () {
                    var t = e(this);
                    t.imagesLoaded(function () {
                        if ("rtl" == e("html").attr("dir")) var a = !1;
                        else a = !0;
                        var o = t.isotope({ layoutMode: "masonry", originLeft: a });
                        e(".portfolio-menu")
                            .find("a")
                            .on("click", function () {
                                var t = e(this).attr("data-filter");
                                return e(".portfolio-menu").find("a").removeClass("active"), e(this).addClass("active"), o.isotope({ filter: t }), !1;
                            });
                    });
                });
            }),
            e(".parallax").each(function () {
                e(this).parallaxie({ speed: 0.5 });
            }),
            e(".counter").each(function () {
                e(this).appear(function () {
                    e(this).countTo({ speed: 3555 });
                });
            }),
            e(".typed").each(function () {
                new Typed(".typed", { stringsElement: ".typed-strings", loop: !0, typeSpeed: 100, backSpeed: 85, backDelay: 2785 });
            }),
            e(".player").each(function () {
                e(this).mb_YTPlayer();
            });
        [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (e) {
            return new bootstrap.Tooltip(e);
        });
        e(function () {
            e(window).on("scroll", function () {
                e(this).scrollTop() > 400 ? e("#back-to-top").fadeIn() : e("#back-to-top").fadeOut();
            }),
                e("#back-to-top").on("click", function () {
                    return e("html, body").animate({ scrollTop: 0 }, "slow"), !1;
                });
        });
        var t = e("#contact-form"),
            a = e("#submit-btn");
        t.on("submit", function (o) {
            o.preventDefault(),
                void 0 !== e("#google-recaptcha-v3").val()
                    ? grecaptcha.ready(function () {
                        var o = e("#google-recaptcha-v3").attr("src").split("render=")[1];
                        grecaptcha.execute(o, { action: "contact" }).then(function (o) {
                            var i = t.serialize() + "&g-recaptcha-response=" + o;
                            e.ajax({
                                url: "php/mail.php",
                                type: "POST",
                                dataType: "json",
                                data: i,
                                beforeSend: function () {
                                    a.attr("disabled", "disabled");
                                    var e = '<span role="status" aria-hidden="true" class="spinner-border spinner-border-sm align-self-center me-2"></span>Sending.....';
                                    a.html() !== e && (a.data("original-text", a.html()), a.html(e));
                                },
                                success: function (o) {
                                    a.before(o.Message).fadeIn("slow"),
                                        a.html(a.data("original-text")),
                                        a.removeAttr("disabled", "disabled"),
                                        "success" == o.response && t.trigger("reset"),
                                        setTimeout(function () {
                                            e(".alert-dismissible").fadeOut("slow", function () {
                                                e(this).remove();
                                            });
                                        }, 3e3);
                                },
                                error: function (e) {
                                    console.log(e);
                                },
                            });
                        });
                    })
                    : e.ajax({
                        url: "php/mail.php",
                        type: "POST",
                        dataType: "json",
                        data: t.serialize(),
                        beforeSend: function () {
                            a.attr("disabled", "disabled");
                            var e = '<span role="status" aria-hidden="true" class="spinner-border spinner-border-sm align-self-center me-2"></span>Sending.....';
                            a.html() !== e && (a.data("original-text", a.html()), a.html(e));
                        },
                        success: function (o) {
                            a.before(o.Message).fadeIn("slow"),
                                a.html(a.data("original-text")),
                                a.removeAttr("disabled", "disabled"),
                                "success" == o.response && t.trigger("reset"),
                                setTimeout(function () {
                                    e(".alert-dismissible").fadeOut("slow", function () {
                                        e(this).remove();
                                    });
                                }, 3500),
                                void 0 !== e("#recaptcha-v2").val() && grecaptcha.reset();
                        },
                        error: function (e) {
                            console.log(e);
                        },
                    });
        });
    })(jQuery);
