document.addEventListener("DOMContentLoaded", function () {
  const exercice1 = document.querySelector("#exercice-1");
  const exercice2 = document.querySelector("#exercice-2");
  const exercice3 = document.querySelector("#exercice-3");

  if (exercice1) {
    document.querySelector(".broccoli").remove();
    document.querySelector("#green-veggie").remove();
    document.querySelector('[data-vegetable="broccoli"]').remove();
    document.querySelector(".steamed").remove();
    document.querySelector(".raw-food").remove();
  }

  if (exercice2) {
    document.querySelector(".raw").classList.add("cooked");
    document.querySelector(".hot").classList.remove("burned");
    document.querySelector("#pizza-special").classList.toggle("highlighted");
    document.querySelector(".basic").classList.add("premium", "deluxe");
    document.querySelector(".reheated").classList.remove("cold");
    document.querySelector(".reheated").classList.add("hot");
  }

  if (exercice3) {
    // Ecrire ici tout le code pour l'exercice 3: Ecouteurs d'événement
    const exercice31 = document.querySelector("#exercice-3-1");
    exercice31.addEventListener("click", function () {
      exercice31.classList.add("highlight");
    });

    const exercice32 = document.querySelector("#exercice-3-2");
    const exercice32button = document.querySelector("#exercice-3-2 button");
    exercice32button.addEventListener("click", function () {
      exercice32.classList.toggle("highlight");
    });

    const exercice33 = document.querySelector("#exercice-3-3");
    exercice33.addEventListener("mouseenter", function () {
      exercice33.classList.add("highlight");
    });
    exercice33.addEventListener("mouseleave", function () {
      exercice33.classList.remove("highlight");
    });

    const exercice34 = document.querySelector("#exercice-3-4");
    window.addEventListener("mousemove", function () {
      exercice34.classList.add("highlight");
    });

    const exercice35 = document.querySelector("#exercice-3-5");
    window.addEventListener("scroll", function () {
      exercice35.classList.add("highlight");
    });

    const exercice36 = document.querySelector("#exercice-3-6");
    document.addEventListener("keydown", function () {
      exercice36.classList.add("highlight");
    });

    const exercice37 = document.querySelector("#exercice-3-7");
    window.addEventListener("resize", function () {
      exercice37.classList.add("highlight");
    });

    const exercice38 = document.querySelector("#exercice-3-8");
    document.addEventListener("keydown", function (event) {
      if (event.key === "f") exercice38.classList.add("highlight");
    });

    const exercice39 = document.querySelector("#exercice-3-9");
    const exercice39date = document.querySelector("#exercice-3-9 input");
    exercice39date.addEventListener("focus", function () {
      exercice39.classList.add("highlight");
    });
    exercice39date.addEventListener("blur", function () {
      exercice39.classList.remove("highlight");
    });

    const exercice310 = document.querySelector("#exercice-3-10");
    const exercice310text = document.querySelector("#exercice-3-10 input");
    exercice310text.addEventListener("input", function () {
      exercice310.classList.add("highlight");
    });

    const exercice311 = document.querySelector("#exercice-3-11");
    const exercice311range = document.querySelector("#exercice-3-11 input");
    exercice311range.addEventListener("input", function () {
      exercice311.classList.add("highlight");
    });

    const exercice312 = document.querySelector("#exercice-3-12");
    const exercice312color = document.querySelector("#exercice-3-12 input");
    exercice312color.addEventListener("input", function (event) {
      console.log(exercice312color.value);
      if (exercice312color.value === "#ff0000") {
        exercice312.classList.add("highlight");
      } else {
        exercice312.classList.remove("highlight");
      }
    });

    //fin
  }
});
