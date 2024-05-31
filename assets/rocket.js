document.addEventListener("DOMContentLoaded", function () {
  // Rocket scripts

  // Get the rocket element
  const rocket = document.getElementById("rocket");
  rocket.style.display = "none";

  // Show rocket when scrolled down 100px
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      rocket.style.display = "block";
    } else {
      rocket.style.display = "none";
    }
  });

  // Smooth scroll to top when rocket is clicked
  rocket.addEventListener("click", function () {
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
