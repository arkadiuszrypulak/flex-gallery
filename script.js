const panels = document.querySelectorAll(".panel");

function handleClick() {
  this.classList.toggle("open");
  this.classList.toggle("full-view");
}

panels.forEach((panel) => panel.addEventListener("click", handleClick));
