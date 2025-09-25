document.addEventListener("DOMContentLoaded", function () {
  const exercice1 = document.querySelector("#exercice-1");
  const exercice2 = document.querySelector("#exercice-2");
  const exercice3 = document.querySelector("#exercice-3");

  if (exercice1) {
    // Ecrire ici tout le code pour l'exercice 1: Sélecteurs JavaScript
    document.querySelector(".broccoli").remove();
    document.querySelector("#green-veggie").remove();
    document.querySelector('[data-vegetable="broccoli"]').remove();
    document.querySelector(".steamed").remove();
    document.querySelector(".raw-food").remove();
  }

  if (exercice2) {
    // Ecrire ici tout le code pour l'exercice 2: Modification des classes
    document.querySelector(".raw").classList.add("cooked");
    document.querySelector(".hot").classList.remove("burned");
    document.querySelector("#pizza-special").classList.toggle("highlighted");
    document.querySelector(".basic").classList.add("premium", "deluxe");
    document.querySelector(".reheated").classList.remove("cold");
    document.querySelector(".reheated").classList.add("hot");
  }

  if (exercice3) {
    // Ecrire ici tout le code pour l'exercice 3: Ecouteurs d'événement
  }
});
