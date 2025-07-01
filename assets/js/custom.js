/* ==============
 ========= js documentation ==========================

 * template name: $MUSA 
 * version: 1.0
 * description: Meme coin ICO & Crypto HTML5 Template
 * author: wowtheme7
 * author-url: https://themeforest.net/user/wowtheme7

    ==================================================

     01. preloader
     -------------------------------------------------
     02. background image
     -------------------------------------------------
     03. custom cursor
     -------------------------------------------------
     04. scroll to top with progress
     -------------------------------------------------
     05. add active class to the current link
     -------------------------------------------------
     06. mobile menu
     -------------------------------------------------
     07. fixed header on scroll
     -------------------------------------------------
     08. blog two slider
     -------------------------------------------------
     09. offer item active on hover
     -------------------------------------------------
     10. exchange rate tab
     -------------------------------------------------
     11. market tab
     -------------------------------------------------
     12. exchange chart
     -------------------------------------------------
     13. marquee currency slider
     -------------------------------------------------
     14. marquee currency slider rtl
     -------------------------------------------------
     15. nice select
     -------------------------------------------------
     16. marquee slider
     -------------------------------------------------
     17. countdown
     -------------------------------------------------
     18. odometer counter
     -------------------------------------------------
     19. token allocation tab
     -------------------------------------------------
     20. fund distribution one chart
     -------------------------------------------------
     21. fund distribution two chart
     -------------------------------------------------
     22. advisor slider
     -------------------------------------------------
     23. payment method slider
     -------------------------------------------------
     24. terms tab
     -------------------------------------------------
     25. comment reply
     -------------------------------------------------
     26. copy token number
     -------------------------------------------------
     27. coming soon
     -------------------------------------------------
     28. footer copyright year
     -------------------------------------------------
     29. aos initialization
     -------------------------------------------------
     30. vanilla tilt animation
     -------------------------------------------------
     31. register gsap
     -------------------------------------------------
     32. gsap null config
     -------------------------------------------------
     33. target section with gsap
     -------------------------------------------------
     34. title animation
     -------------------------------------------------
     35. progress bar
     -------------------------------------------------
     36. template options

    ==================================================
============== */

(function ($) {
  "use strict";

  jQuery(function () {
    let device_width = window.innerWidth;
    let initialScroll = $(window).scrollTop();

    /**
     * ======================================
     * 01. preloader
     * ======================================
     */

    if ($(".preloader").length) {
      $(".preloader").delay(500).fadeOut();
    }

    /**
     * ======================================
     * 02. background image
     * ======================================
     */
    $("[data-background]").each(function () {
      var backgroundImages = $(this).attr("data-background").split(",");
      var cssValue = backgroundImages
        .map(function (image) {
          return 'url("' + image.trim() + '")';
        })
        .join(",");

      $(this).css("background-image", cssValue);
    });

    /**
     * ======================================
     * 03. custom cursor
     * ======================================
     */
    if ($(".mouseCursor").length > 0) {
      function itCursor() {
        var myCursor = jQuery(".mouseCursor");
        if (myCursor.length) {
          if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
              t = document.querySelector(".cursor-outer");
            let n,
              i = 0,
              o = !1;
            (window.onmousemove = function (s) {
              o ||
                (t.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (e.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (n = s.clientY),
                (i = s.clientX);
            }),
              $("body").on(
                "mouseenter",
                "button:not(.not-cursor), a:not(.not-cursor), .cursor-pointer",
                function () {
                  e.classList.add("cursor-hover"),
                    t.classList.add("cursor-hover");
                }
              ),
              $("body").on(
                "mouseleave",
                "button, a, .cursor-pointer",
                function () {
                  ($(this).is("a", "button") &&
                    $(this).closest(".cursor-pointer").length) ||
                    (e.classList.remove("cursor-hover"),
                    t.classList.remove("cursor-hover"));
                }
              ),
              (e.style.visibility = "visible"),
              (t.style.visibility = "visible");

            // text view cursor
            $("h1, h2, h3, h4, h5, h6, .cursor-lg").on(
              "mouseenter",
              function () {
                $(".mouseCursor").addClass("cursor-big");
              }
            );

            $("h1, h2, h3, h4, h5, h6, .cursor-lg").on(
              "mouseleave",
              function () {
                $(".mouseCursor").removeClass("cursor-big");
              }
            );

            // drag cursor
            $(".draggable-cursor").on("mouseenter", function () {
              $(".mouseCursor").addClass("drag-cursor");
            });

            $(".draggable-cursor").on("mouseleave", function () {
              $(".mouseCursor").removeClass("drag-cursor");
            });

            // view cursor
            $(".viewable-cursor").on("mouseenter", function () {
              $(".mouseCursor").addClass("view-cursor");
            });

            $(".viewable-cursor").on("mouseleave", function () {
              $(".mouseCursor").removeClass("view-cursor");
            });

            // no cursor
            $(".not-cursor").on("mouseenter", function () {
              $(".mouseCursor").addClass("not-cursor-outer");
            });

            $(".not-cursor").on("mouseleave", function () {
              $(".mouseCursor").removeClass("not-cursor-outer");
            });
          }
        }
      }
      itCursor();
    }

    /**
     * ======================================
     * 04. scroll to top with progress
     * ======================================
     */
    if ($(".progress-wrap").length > 0) {
      var progressPath = document.querySelector(".progress-wrap path");
      var pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
      progressPath.style.strokeDasharray = pathLength + " " + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
      var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
      };
      updateProgress();
      $(window).scroll(updateProgress);
      var offset = 50;
      var duration = 1500;
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > offset) {
          $(".progress-wrap").addClass("active-progress");
        } else {
          $(".progress-wrap").removeClass("active-progress");
        }
      });
      $(".progress-wrap").on("click", function (event) {
        event.preventDefault();
        $("html, body")
          .stop()
          .css("scroll-behavior", "auto")
          .animate(
            {
              scrollTop: 0,
            },
            {
              duration: 1500,
              easing: "swing",
              complete: function () {
                $("html, body").css("scroll-behavior", "smooth");
              },
            }
          );
        return false;
      });

      if (initialScroll >= 50) {
        $(".progress-wrap").addClass("active-progress");
      }
    }

    /**
     * ======================================
     * 05. add active class to the current link
     * ======================================
     */

    function dynamicCurrentMenuClass(selector) {
      const fileName = window.location.href.split("/").pop();

      selector.find("li").removeClass("active");
      selector
        .find(".navbar__dropdown-label")
        .removeClass("navbar__item-active");

      selector.find("li").each(function () {
        const anchor = $(this).find("a");
        if (
          anchor.attr("href") === fileName ||
          (fileName === "" && anchor.attr("href") === "index.html")
        ) {
          $(this).addClass("active");
        }
      });

      const activeDropdownItem = selector
        .find(".navbar__sub-menu .active")
        .parents("li");
      if (activeDropdownItem.length) activeDropdownItem.addClass("active");
    }

    if ($("header").length) {
      dynamicCurrentMenuClass($("header"));
    }

    /**
     * ======================================
     * 06. mobile menu
     * ======================================
     */
    if ($(".mobile-menu").length > 0) {
      var mobileMenuContent = $(".navbar__menu").html();
      $(".mobile-menu__list").append(mobileMenuContent);

      $(".mobile-menu .navbar__dropdown-label").on("click", function () {
        $(this).parent().siblings().find(".navbar__sub-menu").slideUp(500);
        $(this)
          .parent()
          .siblings()
          .find(".navbar__dropdown-label")
          .removeClass("navbar__item-active");
        $(this).siblings(".navbar__sub-menu").slideToggle(500);
        $(this).toggleClass("navbar__item-active");
      });
    }

    $(".open-offcanvas-nav").on("click", function () {
      $(this).addClass("open-offcanvas-nav-active");
      $(".mobile-menu__backdrop").addClass("mobile-menu__backdrop-active");

      $(".mobile-menu").addClass("show-menu");
    });

    $(
      ".close-mobile-menu, .mobile-menu__backdrop, .mobile-menu .navbar__item:not(.navbar__item--has-children) > a, .mobile-menu__social"
    ).on("click", function () {
      $(".open-offcanvas-nav").removeClass("open-offcanvas-nav-active");
      $(".mobile-menu").removeClass("show-menu");
      $(".mobile-menu__backdrop").removeClass("mobile-menu__backdrop-active");

      $(".mobile-menu .navbar__dropdown-label").removeClass(
        "navbar__item-active"
      );
      $(".mobile-menu .navbar__sub-menu").slideUp(0);
    });

    $(".navbar__item.navbar__item--has-children > a").on("click", function (e) {
      e.preventDefault();
    });

    $(window).on("resize", function () {
      // sidebar info
      $(".off-canvas").removeClass("off-canvas-active");
      $(".off-canvas-backdrop").removeClass("off-canvas-backdrop-active");

      // mobile menu
      $(".mobile-menu").removeClass("show-menu");
      $(".mobile-menu__backdrop").removeClass("mobile-menu__backdrop-active");

      $(".mobile-menu .navbar__dropdown-label").removeClass(
        "navbar__item-active"
      );
      $(".mobile-menu .navbar__sub-menu").slideUp(0);
      $(".open-offcanvas-nav").removeClass("open-offcanvas-nav-active");
    });

    /**
     * ======================================
     * 07. fixed header on scroll
     * ======================================
     */
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 160) {
        $(".header").removeClass("sticky-header");
      } else {
        $(".header").addClass("sticky-header");
      }
    });

    if (initialScroll >= 100) {
      $(".header").addClass("sticky-header");
    }

    $(".footer__list a").on("click", function () {
      $(".footer__list a").removeClass("active");
      $(this).addClass("active");
    });

    /**
     * ======================================
     * 08. blog two slider
     * ======================================
     */
    var testimonialSlider = new Swiper(".testimonial-slider", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 24,
      freeMode: true,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: ".testimonial-pagination",
        clickable: true,
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    });

    /**
     * ======================================
     * 09. offer item active on hover
     * ======================================
     */
    $(".offer").each(function () {
      $(this)
        .find(".offer__content-single")
        .on("mouseover", function () {
          $(this)
            .closest(".offer")
            .find(".offer__content-single")
            .removeClass("offer__content-single-active");
          $(this).addClass("offer__content-single-active");
        });
    });

    /**
     * ======================================
     * 10. exchange rate tab
     * ======================================
     */

    $(".hero-two__tab-single").hide();
    $(".hero-two__tab-single:first").show();

    $(".crypto-tab-btn").on("click", function () {
      $(".crypto-tab-btn").removeClass("active");
      var target = $(this).data("target");
      $('.crypto-tab-btn[data-target="' + target + '"]').addClass("active");
      $(".hero-two__tab-single").hide();

      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 11. market tab
     * ======================================
     */

    $(".market__tab-single").hide();
    $(".market__tab-single:first").show();

    $(".market-tab-btn").on("click", function () {
      $(".market-tab-btn").removeClass("active");
      var target = $(this).data("target");
      $('.market-tab-btn[data-target="' + target + '"]').addClass("active");
      $(".market__tab-single").hide();

      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 12. exchange chart
     * ======================================
     */
    var exchangeOptions = {
      series: [
        {
          data: [
            [1327359600000, 30.95],
            [1327446000000, 31.34],
            [1327532400000, 31.18],
            [1327618800000, 31.05],
            [1327878000000, 31.0],
            [1327964400000, 30.95],
            [1328050800000, 31.24],
            [1328137200000, 31.29],
            [1328223600000, 31.85],
            [1328482800000, 31.86],
            [1328569200000, 32.28],
            [1328655600000, 32.1],
            [1328742000000, 32.65],
            [1328828400000, 32.21],
            [1329087600000, 32.35],
            [1329174000000, 32.44],
            [1329260400000, 32.46],
            [1329346800000, 32.86],
            [1329433200000, 32.75],
            [1329778800000, 32.54],
            [1329865200000, 32.33],
            [1329951600000, 32.97],
            [1330038000000, 33.41],
            [1330297200000, 33.27],
            [1330383600000, 33.27],
            [1330470000000, 32.89],
            [1330556400000, 33.1],
            [1330642800000, 33.73],
            [1330902000000, 33.22],
            [1330988400000, 31.99],
            [1331074800000, 32.41],
            [1331161200000, 33.05],
            [1331247600000, 33.64],
            [1331506800000, 33.56],
            [1331593200000, 34.22],
            [1331679600000, 33.77],
            [1331766000000, 34.17],
            [1331852400000, 33.82],
            [1332111600000, 34.51],
            [1332198000000, 33.16],
            [1332284400000, 33.56],
            [1332370800000, 33.71],
            [1332457200000, 33.81],
            [1332712800000, 34.4],
            [1332799200000, 34.63],
            [1332885600000, 34.46],
            [1332972000000, 34.48],
            [1333058400000, 34.31],
            [1333317600000, 34.7],
            [1333404000000, 34.31],
            [1333490400000, 33.46],
            [1333576800000, 33.59],
            [1333922400000, 33.22],
            [1334008800000, 32.61],
            [1334095200000, 33.01],
            [1334181600000, 33.55],
            [1334268000000, 33.18],
            [1334527200000, 32.84],
            [1334613600000, 33.84],
            [1334700000000, 33.39],
            [1334786400000, 32.91],
            [1334872800000, 33.06],
            [1335132000000, 32.62],
            [1335218400000, 32.4],
            [1335304800000, 33.13],
            [1335391200000, 33.26],
            [1335477600000, 33.58],
            [1335736800000, 33.55],
            [1335823200000, 33.77],
            [1335909600000, 33.76],
            [1335996000000, 33.32],
            [1336082400000, 32.61],
            [1336341600000, 32.52],
            [1336428000000, 32.67],
            [1336514400000, 32.52],
            [1336600800000, 31.92],
            [1336687200000, 32.2],
            [1336946400000, 32.23],
            [1337032800000, 32.33],
            [1337119200000, 32.36],
            [1337205600000, 32.01],
            [1337292000000, 31.31],
            [1337551200000, 32.01],
            [1337637600000, 32.01],
            [1337724000000, 32.18],
            [1337810400000, 31.54],
            [1337896800000, 31.6],
            [1338242400000, 32.05],
            [1338328800000, 31.29],
            [1338415200000, 31.05],
            [1338501600000, 29.82],
            [1338760800000, 30.31],
            [1338847200000, 30.7],
            [1338933600000, 31.69],
            [1339020000000, 31.32],
            [1339106400000, 31.65],
            [1339365600000, 31.13],
            [1339452000000, 31.77],
            [1339538400000, 31.79],
            [1339624800000, 31.67],
            [1339711200000, 32.39],
            [1339970400000, 32.63],
            [1340056800000, 32.89],
            [1340143200000, 31.99],
            [1340229600000, 31.23],
            [1340316000000, 31.57],
            [1340575200000, 30.84],
            [1340661600000, 31.07],
            [1340748000000, 31.41],
            [1340834400000, 31.17],
            [1340920800000, 32.37],
            [1341180000000, 32.19],
            [1341266400000, 32.51],
            [1341439200000, 32.53],
            [1341525600000, 31.37],
            [1341784800000, 30.43],
            [1341871200000, 30.44],
            [1341957600000, 30.2],
            [1342044000000, 30.14],
            [1342130400000, 30.65],
            [1342389600000, 30.4],
            [1342476000000, 30.65],
            [1342562400000, 31.43],
            [1342648800000, 31.89],
            [1342735200000, 31.38],
            [1342994400000, 30.64],
            [1343080800000, 30.02],
            [1343167200000, 30.33],
            [1343253600000, 30.95],
            [1343340000000, 31.89],
            [1343599200000, 31.01],
            [1343685600000, 30.88],
            [1343772000000, 30.69],
            [1343858400000, 30.58],
            [1343944800000, 32.02],
            [1344204000000, 32.14],
            [1344290400000, 32.37],
            [1344376800000, 32.51],
            [1344463200000, 32.65],
            [1344549600000, 32.64],
            [1344808800000, 32.27],
            [1344895200000, 32.1],
            [1344981600000, 32.91],
            [1345068000000, 33.65],
            [1345154400000, 33.8],
            [1345413600000, 33.92],
            [1345500000000, 33.75],
            [1345586400000, 33.84],
            [1345672800000, 33.5],
            [1345759200000, 32.26],
            [1346018400000, 32.32],
            [1346104800000, 32.06],
            [1346191200000, 31.96],
            [1346277600000, 31.46],
            [1346364000000, 31.27],
            [1346709600000, 31.43],
            [1346796000000, 32.26],
            [1346882400000, 32.79],
            [1346968800000, 32.46],
            [1347228000000, 32.13],
            [1347314400000, 32.43],
            [1347400800000, 32.42],
            [1347487200000, 32.81],
            [1347573600000, 33.34],
            [1347832800000, 33.41],
            [1347919200000, 32.57],
            [1348005600000, 33.12],
            [1348092000000, 34.53],
            [1348178400000, 33.83],
            [1348437600000, 33.41],
            [1348524000000, 32.9],
            [1348610400000, 32.53],
            [1348696800000, 32.8],
            [1348783200000, 32.44],
            [1349042400000, 32.62],
            [1349128800000, 32.57],
            [1349215200000, 32.6],
            [1349301600000, 32.68],
            [1349388000000, 32.47],
            [1349647200000, 32.23],
            [1349733600000, 31.68],
            [1349820000000, 31.51],
            [1349906400000, 31.78],
            [1349992800000, 31.94],
            [1350252000000, 32.33],
            [1350338400000, 33.24],
            [1350424800000, 33.44],
            [1350511200000, 33.48],
            [1350597600000, 33.24],
            [1350856800000, 33.49],
            [1350943200000, 33.31],
            [1351029600000, 33.36],
            [1351116000000, 33.4],
            [1351202400000, 34.01],
            [1351638000000, 34.02],
            [1351724400000, 34.36],
            [1351810800000, 34.39],
            [1352070000000, 34.24],
            [1352156400000, 34.39],
            [1352242800000, 33.47],
            [1352329200000, 32.98],
            [1352415600000, 32.9],
            [1352674800000, 32.7],
            [1352761200000, 32.54],
            [1352847600000, 32.23],
            [1352934000000, 32.64],
            [1353020400000, 32.65],
            [1353279600000, 32.92],
            [1353366000000, 32.64],
            [1353452400000, 32.84],
            [1353625200000, 33.4],
            [1353884400000, 33.3],
            [1353970800000, 33.18],
            [1354057200000, 33.88],
            [1354143600000, 34.09],
            [1354230000000, 34.61],
            [1354489200000, 34.7],
            [1354575600000, 35.3],
            [1354662000000, 35.4],
            [1354748400000, 35.14],
            [1354834800000, 35.48],
            [1355094000000, 35.75],
            [1355180400000, 35.54],
            [1355266800000, 35.96],
            [1355353200000, 35.53],
            [1355439600000, 37.56],
            [1355698800000, 37.42],
            [1355785200000, 37.49],
            [1355871600000, 38.09],
            [1355958000000, 37.87],
            [1356044400000, 37.71],
            [1356303600000, 37.53],
            [1356476400000, 37.55],
            [1356562800000, 37.3],
            [1356649200000, 36.9],
            [1356908400000, 37.68],
            [1357081200000, 38.34],
            [1357167600000, 37.75],
            [1357254000000, 38.13],
            [1357513200000, 37.94],
            [1357599600000, 38.14],
            [1357686000000, 38.66],
            [1357772400000, 38.62],
            [1357858800000, 38.09],
            [1358118000000, 38.16],
            [1358204400000, 38.15],
            [1358290800000, 37.88],
            [1358377200000, 37.73],
            [1358463600000, 37.98],
            [1358809200000, 37.95],
            [1358895600000, 38.25],
            [1358982000000, 38.1],
            [1359068400000, 38.32],
            [1359327600000, 38.24],
            [1359414000000, 38.52],
            [1359500400000, 37.94],
            [1359586800000, 37.83],
            [1359673200000, 38.34],
            [1359932400000, 38.1],
            [1360018800000, 38.51],
            [1360105200000, 38.4],
            [1360191600000, 38.07],
            [1360278000000, 39.12],
            [1360537200000, 38.64],
            [1360623600000, 38.89],
            [1360710000000, 38.81],
            [1360796400000, 38.61],
            [1360882800000, 38.63],
            [1361228400000, 38.99],
            [1361314800000, 38.77],
            [1361401200000, 38.34],
            [1361487600000, 38.55],
            [1361746800000, 38.11],
            [1361833200000, 38.59],
            [1361919600000, 39.6],
          ],
        },
      ],
      chart: {
        id: "area-datetime",
        type: "area",
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
      },
      annotations: {
        yaxis: [
          {
            y: 30,
            borderColor: "#ffffff50",
            label: {
              show: true,
              text: "Support",
              style: {
                color: "#fff",
                background: "#00E396",
              },
            },
          },
        ],
        xaxis: [
          {
            x: new Date("14 Nov 2012").getTime(),
            borderColor: "#ffffff50",
            yAxisIndex: 0,
            label: {
              show: true,
              text: "Rally",
              style: {
                color: "#fff",
                background: "#ffffff50",
              },
            },
          },
        ],
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: "hollow",
      },
      xaxis: {
        type: "datetime",
        min: new Date("01 Mar 2012").getTime(),
        tickAmount: 6,
        axisTicks: {
          show: false,
        },
      },

      tooltip: {
        x: {
          format: "dd MMM yyyy",
        },
        theme: "dark",
        style: {
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 500,
        },
      },

      fill: {
        type: "gradient",
        colors: ["#FCD535"],
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 1,
          opacityTo: 0.1,
          stops: [0, 100],
        },
      },
    };

    if ($("#chart-timeline").length > 0) {
      var exchangeChart = new ApexCharts(
        document.querySelector("#chart-timeline"),
        exchangeOptions
      );
      exchangeChart.render();
    }

    var exchangeResetCssClasses = function (activeEl) {
      $("button").removeClass("active");
      $(activeEl.target).addClass("active");
    };

    $("#one_month").on("click", function (e) {
      exchangeResetCssClasses(e);
      exchangeChart.zoomX(
        new Date("28 Jan 2013").getTime(),
        new Date("27 Feb 2013").getTime()
      );
    });

    $("#six_months").on("click", function (e) {
      exchangeResetCssClasses(e);
      exchangeChart.zoomX(
        new Date("27 Sep 2012").getTime(),
        new Date("27 Feb 2013").getTime()
      );
    });

    $("#one_year").on("click", function (e) {
      exchangeResetCssClasses(e);
      exchangeChart.zoomX(
        new Date("27 Feb 2012").getTime(),
        new Date("27 Feb 2013").getTime()
      );
    });

    $("#ytd").on("click", function (e) {
      exchangeResetCssClasses(e);
      exchangeChart.zoomX(
        new Date("01 Jan 2013").getTime(),
        new Date("27 Feb 2013").getTime()
      );
    });

    $("#all").on("click", function (e) {
      exchangeResetCssClasses(e);
      exchangeChart.zoomX(
        new Date("23 Jan 2012").getTime(),
        new Date("27 Feb 2013").getTime()
      );
    });

    /**
     * ======================================
     * 13. marquee currency slider
     * ======================================
     */
    if ($(".marquee-currency__inner").length > 0) {
      var marqueeSlider = new Swiper(".marquee-currency__slider", {
        slidesPerView: "auto",
        loop: true,
        speed: 6000,
        spaceBetween: 0,
        centeredSlides: true,
        allowTouchMove: false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
      });
    }

    /**
     * ======================================
     * 14. marquee currency slider rtl
     * ======================================
     */
    if ($(".marquee-currency__slider-three").length > 0) {
      var marqueeSliderThree = new Swiper(".marquee-currency__slider-three", {
        slidesPerView: "auto",
        loop: true,
        speed: 6000,
        spaceBetween: 0,
        centeredSlides: true,
        allowTouchMove: false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
      });
    }

    /**
     * ======================================
     * 15. nice select
     * ======================================
     */
    $("select").niceSelect();

    /**
     * ======================================
     * 16. marquee slider
     * ======================================
     */
    if ($(".marquee__inner").length > 0) {
      var marqueeSlider = new Swiper(".marquee__slider", {
        slidesPerView: "auto",
        loop: true,
        speed: 6000,
        spaceBetween: 0,
        centeredSlides: true,
        allowTouchMove: false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
      });
    }
/**
 * ======================================
 * 17. countdown
 * ======================================
 */
if ($(".time-countdown").length > 0) {
  const countdownElement = document.querySelector(".time-countdown");
  const dayElement = countdownElement.querySelector(".day");
  const hourElement = countdownElement.querySelector(".hour");
  const minuteElement = countdownElement.querySelector(".minute");
  const secondElement = countdownElement.querySelector(".second");

  const endDate = new Date();
  endDate.setHours(endDate.getHours() + 7); // Set countdown for 7 hours

  function updateCountdown() {
    const now = new Date();
    const timeRemaining = endDate - now;

    if (timeRemaining <= 0) {
      endDate.setHours(endDate.getHours() + 7); // Reset every 7 hours
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    dayElement.textContent = days;
    hourElement.textContent = hours < 10 ? `0${hours}` : hours;
    minuteElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
}

    /**
     * ======================================
     * 18. odometer counter
     * ======================================
     */
    $(".odometer").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (
            var i = 0;
            i < document.querySelectorAll(".odometer").length;
            i++
          ) {
            var el = document.querySelectorAll(".odometer")[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });

    /**
     * ======================================
     * 19. token allocation tab
     * ======================================
     */
    $(".allocation__tab-single").hide();
    $(".allocation__tab-single:first").show();
    $(".allocation-tab-btn").on("click", function () {
      $(".allocation-tab-btn").removeClass("active");
      $(this).addClass("active");
      $(".allocation__tab-single").hide();
      var activePlan = $(this).data("target");
      $(activePlan).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 20. fund distribution one chart
     * ======================================
     */

    var fundChartOneOptions = {
      series: [80, 55, 13, 33],
      chart: {
        width: 300,
        type: "donut",
      },
      labels: ["Coin Price", "Hard Cap", "Token Sale", "Token"],
      colors: ["#33BB51", "#F3B123", "#82A412", "#C6E757"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      legend: {
        show: false,
      },
    };

    if ($("#fundChartOne").length > 0) {
      var fundChartOne = new ApexCharts(
        document.querySelector("#fundChartOne"),
        fundChartOneOptions
      );
      fundChartOne.render();
    }

    /**
     * ======================================
     * 21. fund distribution two chart
     * ======================================
     */

    var fundChartTwoOptions = {
      series: [20, 35, 60, 40],
      chart: {
        width: 300,
        type: "donut",
      },
      labels: ["Advisors", "Founders", "Reserved", "Distributed"],
      colors: ["#33BB51", "#F3B123", "#82A412", "#C6E757"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      legend: {
        show: false,
      },
    };

    if ($("#fundChartTwo").length > 0) {
      var fundChartTwo = new ApexCharts(
        document.querySelector("#fundChartTwo"),
        fundChartTwoOptions
      );
      fundChartTwo.render();
    }

    /**
     * ======================================
     * 22. advisor slider
     * ======================================
     */
    var advisorSlider = new Swiper(".advisor-slider", {
      loop: true,
      speed: 2000,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,

      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-advisor",
        prevEl: ".prev-advisor",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    });

    /**
     * ======================================
     * 23. payment methods slider
     * ======================================
     */
    if ($(".payment-slider").length > 0) {
      var paymentSlider = new Swiper(".payment-slider", {
        slidesPerView: "auto",
        loop: true,
        speed: 6000,
        spaceBetween: 30,
        centeredSlides: true,
        allowTouchMove: false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
      });
    }

    if ($(".payment-slider-rtl").length > 0) {
      var paymentSliderRtl = new Swiper(".payment-slider-rtl", {
        slidesPerView: "auto",
        loop: true,
        speed: 6000,
        spaceBetween: 30,
        centeredSlides: true,
        allowTouchMove: false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
      });
    }

    /**
     * ======================================
     * 24. terms tab
     * ======================================
     */

    $(".terms__content-single").hide();
    $(".terms__content-single:first").show();

    $(".terms-tab-btn").on("click", function () {
      $(".terms-tab-btn").removeClass("active");
      var target = $(this).data("target");
      $('.terms-tab-btn[data-target="' + target + '"]').addClass("active");
      $(".terms__content-single").hide();

      $(target).fadeIn(500);
      return false;
    });

    /**
     * ======================================
     * 25. comment reply
     * ======================================
     */
    $(".comment__single").each(function () {
      $(this)
        .find(".reply-button button")
        .on("click", function () {
          var $currentComment = $(this).closest(".comment__single");
          $(".comment__single .reply__comment")
            .not($currentComment.find(".reply__comment"))
            .slideUp();
          $currentComment.find(".reply__comment").slideToggle();
          $(".comment__single .reply-button button")
            .not(this)
            .removeClass("active");
          $(this).toggleClass("active");
        });
    });

    /**
     * ======================================
     * 26. copy token number
     * ======================================
     */

    $(".copy-t i").on("click", function () {
      var textToCopy = $(this).siblings("p").text();
      var $pElement = $(this).siblings("p");

      navigator.clipboard
        .writeText(textToCopy)
        .then(function () {
          $pElement.addClass("quinary-text");
        })
        .catch(function (err) {
          console.error("Error copying text: ", err);
        });
    });

    /**
     * ======================================
     * 27. coming soon
     * ======================================
     */
    if ($(".clock").length > 0) {
      const hourMarkersContainer = document.querySelector(".hour-markers");
      for (let i = 0; i < 12; i++) {
        const marker = document.createElement("div");
        marker.classList.add("hour-marker");
        const rotation = i * 30;
        marker.style.transform = `rotate(${rotation}deg) translateY(-216.25px)`;

        const hourText = document.createElement("span");
        hourText.textContent = i === 0 ? "12" : i;
        hourText.style.transform = `rotate(-${rotation}deg)`;
        marker.appendChild(hourText);

        hourMarkersContainer.appendChild(marker);
      }

      const hourHand = document.querySelector(".hour-hand");
      const minuteHand = document.querySelector(".minute-hand");
      const secondHand = document.querySelector(".second-hand");

      function setClock() {
        const now = new Date();
        const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
        const minutes = now.getMinutes() + seconds / 60;
        const hours = (now.getHours() % 12) + minutes / 60;

        const secondsDeg = (seconds / 60) * 360;
        const minutesDeg = (minutes / 60) * 360;
        const hoursDeg = (hours / 12) * 360;

        hourHand.style.transform = `rotate(${hoursDeg}deg)`;
        minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
        secondHand.style.transform = `rotate(${secondsDeg}deg)`;
      }

      setInterval(setClock, 50);
      setClock();

      const countdownElement = document.querySelector(".time-countdown");
      const dayElement = countdownElement.querySelector(".day");
      const hourElement = countdownElement.querySelector(".hour");
      const minuteElement = countdownElement.querySelector(".minute");
      const secondElement = countdownElement.querySelector(".second");

      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 100);

      function updateCountdown() {
        const now = new Date();
        const timeRemaining = endDate - now;

        if (timeRemaining <= 0) {
          endDate.setDate(endDate.getDate() + 100);
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        dayElement.textContent = days;
        hourElement.textContent = hours < 10 ? `0${hours}` : hours;
        minuteElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
        secondElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
      }

      setInterval(updateCountdown, 1000);
      updateCountdown();
    }

    /**
     * ======================================
     * 28. footer copyright year
     * ======================================
     */
    if ($("#copyrightYear").length > 0) {
      $("#copyrightYear").text(new Date().getFullYear());
    }

    /**
     * ======================================
     * 29. aos initialization
     * ======================================
     */
    AOS.init({
      once: true,
    });

    /**
     * ======================================
     * 30. vanilla tilt animations
     * ======================================
     */

    let Vantilt = document.querySelectorAll(".van-tilt");

    if (Vantilt) {
      VanillaTilt.init(document.querySelectorAll(".van-tilt"), {
        max: 10,
        speed: 3000,
      });
    }

    /**
     * ======================================
     * 31. register gsap
     * ======================================
     */
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    /**
     * ======================================
     * 32. gsap null config
     * ======================================
     */
    gsap.config({
      nullTargetWarn: false,
    });

    /**
     * ======================================
     * 33. target section with gsap
     * ======================================
     */
    $('a[href^="#"]:not([href="#"])').on("click", function (event) {
      event.preventDefault();

      var target = $(this).attr("href");

      gsap.to(window, {
        scrollTo: {
          y: target,
          offsetY: 120,
        },
        duration: 1,
        ease: "sine.inOut",
      });
    });

    /**
     * ======================================
     * 34. title animation
     * ======================================
     */

    if ($(".title-animation").length > 0) {
      let char_come = gsap.utils.toArray(".title-animation");
      char_come.forEach((char_come) => {
        let split_char = new SplitText(char_come, {
          type: "chars, words",
          lineThreshold: 0.5,
        });
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: char_come,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });
        tl2.from(split_char.chars, {
          duration: 0.8,
          x: 40,
          autoAlpha: 0,
          stagger: 0.05,
          ease: "back.out",
        });
      });
    }

    /**
     * ======================================
     * 35. progress bar
     * ======================================
     */

    if ($(".progress-bar-single").length > 0) {
      $("[data-percent]").each(function () {
        $(this)
          .find(".progress-bar-percent")
          .css("width", $(this).attr("data-percent"));
        $(this)
          .find(".percent-value")
          .text($(this).attr("data-percent").replace("%", "m"));
      });

      const ax_progress_bar = document.querySelectorAll(".progress-bar-single");

      ax_progress_bar.forEach((element) => {
        const w = element.querySelector(".progress-bar-percent");
        const progressWrapper = element.querySelector(".progress-bar-wrapper");
        const target = progressWrapper.getAttribute("data-percent");

        const ax_bartl = gsap.timeline({
          defaults: {
            duration: 2,
          },
          scrollTrigger: {
            trigger: element,
          },
        });

        ax_bartl.fromTo(
          w,
          {
            width: 0,
          },
          {
            width: target,
          }
        );

        ax_bartl.fromTo(
          element.querySelector(".percent-value"),
          {
            textContent: "0m",
          },
          {
            textContent: target.replace("%", "m"),
            snap: {
              textContent: 5,
            },
          },
          "<"
        );
      });
    }

    /**
     * ======================================
     * 36. template options
     * ======================================
     */
    $(".open-color").on("click", function () {
      $(this).hide();
      $(".close-color").show();
      $(".color-icon").css("right", "280px");
      $(".color-palate-inner").css({
        right: "0",
      });
    });

    $(".close-color").on("click", function () {
      $(this).hide();
      $(".open-color").show();
      $(".color-icon").css("right", "0px");
      $(".color-palate-inner").css({
        right: "-280px",
      });
    });

    $(".cursor-version li, .rtl-version li").on("click", function () {
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
    });

    $(".animated-cursor").on("click", function () {
      $(".page-wrapper").addClass("a-cursor");
    });

    $(".default-cursor").on("click", function () {
      $(".page-wrapper").removeClass("a-cursor");
    });

    $(".ltr-yes").on("click", function () {
      $(".page-wrapper").removeClass("rtl");
    });

    $(".ltr-no").on("click", function () {
      $(".page-wrapper").addClass("rtl");
    });
  });
})(jQuery);
