import gsap from "gsap";

const showToast = () => {
  gsap.to('.toast', {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: 'power4.out',
    onComplete: () => {
      gsap.to('.toast', {
        delay: 2.5,
        y: 0,
        scale: 0.95,
        opacity: 0,
        duration: 0.7,
        ease: 'power.in',
        onComplete: () => {
          setTimeout(showToast, 2500);
        }
      })
    }
  })
}

showToast();