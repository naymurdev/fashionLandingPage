

gsap.to('.loader h1', 16, {
   x: innerWidth * -1,
}, 'start')
gsap.to('.loader h2', 16, {
   x: innerWidth * 1,
}, 'start')
gsap.to('.loader', 6, {
   x: innerWidth * -1.3,
   ease: "expo.out",
   delay: 6
}, 'start')

gsap.from('.container', 2, {
   delay: 6,
   ease: 'power4.out',
   scale: 2
})
gsap.from('.container a', 2, {
   delay: 7,
   ease: 'power4.out',
   y: -250,
   stagger: {
      amount: .8
   }
})
gsap.from('.container h1', 2, {
   delay: 9,
   ease: 'power4.out',
   y: 250,
   skewY: 20,
   stagger: {
      amount: .8
   }
})
gsap.to('.news p', 5, {
   delay: 12,
   clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
   ease: "expo.out",
})
gsap.from('.news span', 1, {
   delay: 12.1,
   opacity: 0,
   x: 50
})