let hiddenElem = document.querySelectorAll('.hidden');


// >>>>>>>>>>>>>>>> Function for Swiper Slider
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});


// >>>>>>>>>>>>>>>>  Scroll Animation
let observer = new IntersectionObserver(entries => {
    // console.log('entries', entries)
    entries.forEach(entry => {
        // console.log('entry', entry)
        if (entry.isIntersecting) {
            setTimeout(() =>{

                entry.target.classList.add('show')
            },200 )

        }
    })
})

hiddenElem.forEach((elem) => observer.observe(elem))
