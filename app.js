const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#close");


// Open sidebar
menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});


// Close sidebar
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});


// Close sidebar using Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        sidebar.classList.remove("active");
    }
});