// if (window.innerWidth > 768) {
//     gsap.from("#nav", {
//         y: -100,
//         delay: 0.8,
//         duration: 1.4,
//         opacity: 0
//     })

//     gsap.from("#nav h1", {
//         y: -100,
//         delay: 1.5,
//         duration: 0.8,
//         opacity: 0,
//         stagger: 0.9
//     })

//     gsap.from("#m1 img", {
//         y: 150,
//         delay: 1.2,
//         duration: 0.8,
//         opacity: 0
//     })

//     gsap.from("#right-hro img", {
//         x: 100,
//         delay: 5,
//         duration: 0.8,
//         opacity: 0,
//         stagger: 0.8
//     })

//     gsap.from("#pg2-img", {
//         x: -100,
//         duration: 1.2,
//         opacity: 0,
//         scrollTrigger: "#pg2-img"
//     })

//     gsap.from("#pg2-head", {
//         x: 200,
//         duration: 1.8,
//         opacity: 0,
//         scrollTrigger: "#pg2-head"
//     })

//     gsap.from("#pg2-para", {
//         x: 200,
//         duration: 1.8,
//         opacity: 0,
//         scrollTrigger: "#pg2-para"
//     })

//     gsap.from("#pg2-btn", {
//         x: -200,
//         duration: 0.8,
//         delay: 1,
//         opacity: 0,
//         scrollTrigger: "#pg2-btn"
//     })

//     gsap.from("#pg3-img", {
//         x: 200,
//         delay: 1,
//         duration: 1,
//         opacity: 0,
//         scrollTrigger: "#pg3-img"
//     })
// }


//hover change effect
let mimage = document.querySelector("#main");
let all_image = document.querySelectorAll(".m-img")
let image1 = document.querySelector("#image1");
let image2 = document.querySelector("#image2");
let image3 = document.querySelector("#image3");
let image4 = document.querySelector("#image4");
let image5 = document.querySelector("#image5");
let image6 = document.querySelector("#image6");

let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");
let img5 = document.querySelector("#img5");
let img6 = document.querySelector("#img6");

// Image-1 effect
img1.addEventListener("mouseover", () => {
    mimage.style.display = "none";
    image1.style.display = "block";
    all_image.style.display = "none";
    image1.style.transition = "ease 1s";
});
img1.addEventListener("mouseleave", () => {
    mimage.style.display = "block";
    image1.style.display = "none";
    all_image.style.display = "none";
    image1.style.transition = "ease 1s";
});

// Image-2 effect
img2.addEventListener("mouseover", () => {
    mimage.style.display = "none";
    image2.style.display = "block";
    all_image.style.display = "none";
    image2.style.transition = "ease 1s";
});
img2.addEventListener("mouseleave", () => {
    mimage.style.display = "block";
    image2.style.display = "none";
    all_image.style.display = "none";
    image2.style.transition = "ease 1s";
});


img3.addEventListener("mouseover", () => {
    mimage.style.display = "block";
    image3.style.display = "none";
    all_image.style.display = "none";
    image3.style.transition = "ease 1s";
});
img3.addEventListener("mouseleave", () => {
    mimage.style.display = "block";
    image3.style.display = "none";
    all_image.style.display = "none";
    image3.style.transition = "ease 1s";
});


img4.addEventListener("mouseover", () => {
    mimage.style.display = "none";
    image4.style.display = "block";
    all_image.style.display = "none";
    image4.style.transition = "ease 1s";
});
img4.addEventListener("mouseleave", () => {
    mimage.style.display = "block";
    image4.style.display = "none";
    all_image.style.display = "none";
    image4.style.transition = "ease 1s";
});


img5.addEventListener("mouseover", () => {
    mimage.style.display = "none";
    image5.style.display = "block";
    all_image.style.display = "none";
    image5.style.transition = "ease 1s";
});
img5.addEventListener("mouseleave", () => {
    mimage.style.display = "block";
    image5.style.display = "none";
    all_image.style.display = "none";
    image5.style.transition = "ease 1s";
});


img6.addEventListener("mouseover", () => {
    mimage.style.display = "none";
    image6.style.display = "block";
    all_image.style.display = "none";
    image6.style.transition = "ease 1s";
});
img6.addEventListener("mouseleave", () => {
    mimage.style.display = "block";
    image6.style.display = "none";
    all_image.style.display = "none";
    image6.style.transition = "ease 1s";
});


