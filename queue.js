function myCallback (el) {
    el.classList.add('bg-red-500');
}

ScrollReveal().reveal('.js-item', { 
    afterReveal: myCallback,
    useDelay: 'onload',
    interval: 5000,
    delay:    1,
    distance: 0,
    duration: 0,
    scale:    1,
    opacity:  null,
    rotate:   { x: 0, y: 0, z: 0, },
    viewOffset: {
        bottom: 20
    },
    reset: true,  
});
