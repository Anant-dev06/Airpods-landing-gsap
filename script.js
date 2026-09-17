gsap.from("#nav", {
    y: -100,
    delay: 0.8,
    duration: 1.4,
    opacity: 0
})

gsap.from("#nav h1", {
    y: -100,
    delay: 1.5,
    duration: 0.8,
    opacity: 0,
    stagger: 0.9
})

// gsap.from("#info", {
//     y: -300,
//     delay: 1.2,
//     duration: 1,
//     opacity: 0
// })

// gsap.from("#info h1", {
//     x: -100,
//     delay: 1,
//     duration: 0.8,
//     opacity: 0,
//     stagger: 1
// })

gsap.from("#m1 img", {
    y: 150,
    delay: 1.2,
    duration: 0.8,
    opacity: 0
})

gsap.from("#right-hro img", {
    x: 100,
    delay: 5,
    duration: 0.8,
    opacity: 0,
    stagger: 0.8
})

gsap.from("#pg2-img", {
    x: -100,
    duration: 1.2,
    opacity: 0,
    scrollTrigger: "#pg2-img"
})

gsap.from("#pg2-head", {
    x: 200,
    duration: 1.8,
    opacity: 0,
    scrollTrigger: "#pg2-head"
})

gsap.from("#pg2-para", {
    x: 200,
    duration: 1.8,
    opacity: 0,
    scrollTrigger: "#pg2-para"
})

gsap.from("#pg2-btn", {
    x: -200,
    duration: 0.8,
    delay: 1,
    opacity: 0,
    scrollTrigger: "#pg2-btn"
})

gsap.from("#pg3-img", {
    x: 200,
    delay: 1,
    duration: 1,
    opacity: 0,
    scrollTrigger: "#pg3-img"
})