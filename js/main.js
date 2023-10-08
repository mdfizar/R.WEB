// AOS
AOS.init();

//TYPE JS
var typed = new Typed ('#demo', {
  strings: ['My name is md:fizar.', 'This is my work.'],
  typeSpeed: 60,
  loop: true,
  loopCount: Infinity,
});

// COUNTER JS 
// Select elements with the "data-val" attribute
let valueDisplayElements = document.querySelectorAll("[data-val]");
let interval = 10; // Interval in milliseconds (1 second in this example)

valueDisplayElements.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let currentValue = startValue;

    // Function to update the counter value
    function updateCounter() {
        valueDisplay.textContent = currentValue;
        currentValue++;

        // Stop the counter when it reaches the endValue
        if (currentValue > endValue) {
            clearInterval(counterInterval);
        }
    }

    // Start the counter interval
    let counterInterval = setInterval(updateCounter, interval);

    // Immediately display the initial value
    updateCounter();
});



// SWIPER 
var swiper = new Swiper(".mySwiper", { slidesPerView: "1",
spaceBetween: 0,
autoplay: {
  delay: 2500,
  disableOnInteraction: false,
},
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
