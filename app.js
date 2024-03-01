const navUl = document.getElementById("nav-ul")
const lineOne = document.getElementById("line-one")
const lineTwo = document.getElementById("line-two")
const lineThree = document.getElementById("line-three")
function ToggleNav() {
    navUl.classList.toggle("start-0")
    document.body.classList.toggle("overflow_hidden")
    lineOne.classList.toggle("rotate-45")
    lineTwo.classList.toggle("d-none")
    lineThree.classList.toggle("rotate-n45")
}

$('.responsive').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.responsive-two').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
const Preloader = document.getElementById("preloader")
setTimeout(() => {
    document.body.classList.remove("overflow-hidden")
    Preloader.classList.add("d-none")
}, 4000);

const movement = () => {
    // document.body.classList.remove("overflow_hidden")
    !ToggleNav()
    // navUl.classList.remove("start-0")

}