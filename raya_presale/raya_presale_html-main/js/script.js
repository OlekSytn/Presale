/*

Script  : Main JS
Version : 1.0
Author  : Surjith S M
URI     : http://themeforest.net/user/surjithctly

Copyright © All rights Reserved
Surjith S M / @surjithctly

*/

$(function () {

    "use strict";

    /*---------------------------------------------------
      Countdown JS
    ---------------------------------------------------*/

    var $countdownClass = $('.countdown-clock');

    if ($countdownClass.length > 0) {
        var datetime = $countdownClass.data('datetime'); //Month Days, Year HH:MM:SS
        var date = new Date(datetime);
        var now = new Date();
        var diff;
        if (datetime == "" || datetime == null || date < now) {
            diff = 3600 * 24 * 3.1; // default fallback date 
        } else {
            diff = (date.getTime() / 1000) - (now.getTime() / 1000);
        }

        var clock = $countdownClass.FlipClock(diff, {
            // ... your options here
            clockFace: 'DailyCounter',
            countdown: true,
        });
    }

    /*---------------------------------------------------
      Donut Chart 01
    ---------------------------------------------------*/

    var ctx = $("#distChart");
    // And for a doughnut chart
    var distChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Token Distribution", "Advisors & Partners", "Company Reserve", "Bounty", "Team"],
            datasets: [{
                label: "Token Distribution",
                data: [300, 50, 100, 75, 34],
                backgroundColor: ["#665fff", "#f89c5a", "#d95af8", "#5aa5f8", "#d7a7ff"],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            aspectRatio: 1,
            legend: {
                display: false,
            },
            cutoutPercentage: 60
        }
    });
    $("#dist_legend").html(distChart.generateLegend());

    /*---------------------------------------------------
      Donut Chart 02
    ---------------------------------------------------*/

    var cty = $("#alloChart");
    // And for a doughnut chart
    var alloChart = new Chart(cty, {
        type: 'doughnut',
        data: {
            labels: ["Marketing & Sales", "Product Development", "Legal Expenses", "Admin & Operations", "Overhead Expenses"],
            datasets: [{
                label: "Allocation of Funds",
                data: [50, 80, 120, 250, 30],
                backgroundColor: ["#51ffd0", "#ffe56a", "#f89c5a", "#ff5fae", "#8e51ff"],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            aspectRatio: 1,
            legend: {
                display: false,
            },
            cutoutPercentage: 60
        }
    });
    $("#allo_legend").html(alloChart.generateLegend());


});

/*---------------------------------------------------
     Owl Carousel
   ---------------------------------------------------*/

var $testimonalSlider = $('.testimonial-slider');

if ($testimonalSlider.length && $.fn.owlCarousel) {
    $testimonalSlider.owlCarousel({
        loop: false,
        autoplay: false,
        autoHeight: true,
        items: 1,
        navText: [
            "<img src=\"images/arrow-left.svg\" class=\"dark\"><img src=\"images/arrow-left-black.svg\" class=\"light\">",
            "<img src=\"images/arrow-right.svg\" class=\"dark\"><img src=\"images/arrow-right-black.svg\" class=\"light\">"
        ],
        responsive: {
            0: {
                dots: true,
                nav: false,
            },
            768: {
                dots: false,
                nav: true,
            }
        }
    });
}

/*
 * // End $ Strict Function
 * ------------------------ */