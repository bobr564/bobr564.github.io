let btnDetails = document.querySelectorAll('.btn-details');
let divAboutPtah = document.querySelectorAll('.about-ptah');


for (let i = 0; i < btnDetails.length; i++) {
    btnDetails[i].onclick = function () {
        divAboutPtah[i].style.transform = 'translateY(-100%)'
    }
}
for (let i = 0; i < divAboutPtah.length; i++) {
    divAboutPtah[i].onclick = function () {
        divAboutPtah[i].style.transform = 'translateY(0%)'
    }
}



// rfhectkm
let toLeft = document.querySelector('.arrow-left');
let toRight = document.querySelector('.arrow-right');
let slider = document.querySelector('.item-wrap');

 
toLeft.addEventListener('click', function () {
    if (slider.scrollLeft <= 0) {
        slider.scrollLeft += slider.scrollWidth;
    }
    else {
        slider.scrollLeft -= 400;
    }

})


toRight.addEventListener('click', function () {
    let maxScrollRight = slider.scrollWidth - slider.clientWidth;
    if (slider.scrollLeft >= maxScrollRight - 1) {
        slider.scrollLeft -= slider.scrollWidth;
    }
    else {
        slider.scrollLeft += 400;
    }
})


        let preloader =  document.querySelector('.preloader');
        window.addEventListener('load', function () {
            setInterval(() => {
               preloader.style.display = 'none'                
            }, 1000);
        })












          


