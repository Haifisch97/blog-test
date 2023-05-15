const allImages = document.querySelectorAll('.content_block-image');

allImages.forEach((image) => {
    gsap.fromTo(
        image,
        { scaleY: 0.1, transformOrigin: 'bottom' },
        { scaleY: 1, duration: 3, ease: 'power1.inOut', repeat: -1 }
      );
});


const overlay = document.querySelector('.chart .bg-white');

gsap.fromTo(
    overlay,
    { scaleX: 1, transformOrigin: 'right' }, 
    { scaleX: 0, duration: 4, ease:"linear", repeat: -1 },
    );