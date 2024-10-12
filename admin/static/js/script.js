document.addEventListener("DOMContentLoaded", function () {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");
  const sign_in_btn2 = document.querySelector("#sign-in-btn2");
  const sign_up_btn2 = document.querySelector("#sign-up-btn2");
  
  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });
  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });
  sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
  });
  sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
  });

  
});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
    const header = accordion.querySelector(".accordion__header");
    const content = accordion.querySelector(".accordion__content");
    const icon = accordion.querySelector(".accordion__icon i");

    header.addEventListener("click", () => {
        const isOpen = content.style.height === `${content.scrollHeight}px`;

        accordions.forEach((a, i) => {
            const c = a.querySelector(".accordion__content");
            const ic = a.querySelector(".accordion__icon i");

            if (i === index) {
                c.style.height = isOpen ? "0px" : `${c.scrollHeight}px`;
                ic.classList.toggle("ri-add-line", isOpen);
                ic.classList.toggle("ri-subtract-fill", !isOpen);
            } else {
                c.style.height = "0px";
                ic.classList.add("ri-add-line");
                ic.classList.remove("ri-subtract-fill");
            }
        });
    });
});