import gsap from "gsap";

gsap.to(".box", {
  // x: -200,
  opacity: 1,
  rotation: 360,
  background: '#ff6f61',
  duration: 1,
  yoyo: true,
  repeat: -1,
  ease: 'power1.inOut',
  repeatDelay: 0,
  // paused: true,
})