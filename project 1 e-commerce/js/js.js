let inputs = document.querySelectorAll(".inp");
let overlay = document.getElementById("overlay");

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    overlay.classList.add("active");
  });

  input.addEventListener("blur", () => {
    overlay.classList.remove("active");
  });
});
