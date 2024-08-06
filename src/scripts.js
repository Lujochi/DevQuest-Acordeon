const itemsLi = document.querySelectorAll(".item");

itemsLi.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedCurrent = document.querySelector(".selected");

    if (selectedCurrent) {
      selectedCurrent.classList.remove("selected");
    }

    item.classList.add("selected");
  });
});
