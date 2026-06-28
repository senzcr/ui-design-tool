const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const billingCycle = document.getElementById("billing-cycle");
const body = document.body;

billingCycle.addEventListener("change", () => {
  /* body.classList.toggle("dark"); */
});
