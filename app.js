let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function() {
    let slide = document.querySelector(".slide");
    let items = document.querySelectorAll(".item");
    slide.appendChild(items[0]);
});

prev.addEventListener("click", function() {
    let slide = document.querySelector(".slide");
    let items = document.querySelectorAll(".item");
    slide.insertBefore(items[items.length - 1], items[0]);
});
