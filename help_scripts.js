document.addEventListener("DOMContentLoaded", function() {
  const accordionButtons = document.querySelectorAll(".accordion-btn");

  accordionButtons.forEach(button => {
    button.addEventListener("click", function() {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});