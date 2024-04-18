'use strict';

// Fonction de basculement des éléments
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Variables de la barre latérale
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Fonctionnalité de basculement de la barre latérale pour les appareils mobiles
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// Variables de témoignages
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Variables modales
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Fonction de basculement de la modal
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Ajouter un événement de clic à tous les éléments modaux
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// Ajouter un événement de clic au bouton de fermeture de la modal
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Variables de sélection personnalisée


// Sélectionnez les éléments nécessaires
const filterBtns = document.querySelectorAll("[data-filter-btn]"); // Boutons de filtrage
const selectItems = document.querySelectorAll("[data-select-item]"); // Éléments de sélection
const filterItems = document.querySelectorAll("[data-filter-item]"); // Éléments à filtrer
const selectValue = document.querySelector("[data-selecct-value]"); // Élément d'affichage de la valeur sélectionnée

// Ajoutez un écouteur d'événement à chaque bouton de filtrage
filterBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    // Supprimez la classe "active" de tous les boutons de filtrage
    filterBtns.forEach(button => {
      button.classList.remove("active");
    });
    // Ajoutez la classe "active" au bouton de filtrage actuel
    this.classList.add("active");
    // Mettez à jour la valeur affichée dans le sélecteur avec celle du bouton de filtrage actuel
    selectValue.innerText = this.innerText;
    // Obtenez la catégorie sélectionnée
    const selectedCategory = this.innerText.toLowerCase();
    // Filtrez les éléments en fonction de la catégorie sélectionnée
    filterItems.forEach(item => {
      if (selectedCategory === "all" || selectedCategory === item.dataset.category.toLowerCase()) {
        item.style.display = "block"; // Affichez l'élément si la catégorie correspond ou si "all" est sélectionné
      } else {
        item.style.display = "none"; // Masquez l'élément s'il ne correspond pas à la catégorie sélectionnée
      }
    });
  });
});

// Ajoutez un écouteur d'événement à chaque élément de sélection
selectItems.forEach(item => {
  item.addEventListener("click", function () {
    // Mettez à jour la valeur affichée dans le sélecteur avec celle de l'élément de sélection actuel
    selectValue.innerText = this.innerText;
    // Obtenez la catégorie sélectionnée
    const selectedCategory = this.innerText.toLowerCase();
    // Filtrez les éléments en fonction de la catégorie sélectionnée
    filterItems.forEach(item => {
      if (selectedCategory === "all" || selectedCategory === item.dataset.category.toLowerCase()) {
        item.style.display = "block"; // Affichez l'élément si la catégorie correspond ou si "all" est sélectionné
      } else {
        item.style.display = "none"; // Masquez l'élément s'il ne correspond pas à la catégorie sélectionnée
      }
    });
  });
});
// Sélectionnez l'élément de sélection
const select = document.querySelector("[data-select]");
//const filterItems = document.querySelectorAll("[data-filter-item]");

// Ajoutez un écouteur d'événement pour détecter les changements de sélection
select.addEventListener("change", function () {
  // Obtenez la valeur sélectionnée
  const selectedValue = this.value;
  // Filtrez les éléments en fonction de la catégorie sélectionnée
  filterItems.forEach(item => {
    if (selectedValue === "all" || selectedValue === item.dataset.category.toLowerCase()) {
      item.style.display = "block"; // Affichez l'élément si la catégorie correspond ou si "all" est sélectionné
    } else {
      item.style.display = "none"; // Masquez l'élément s'il ne correspond pas à la catégorie sélectionnée
    }
  });
});

// Variables de formulaire de contact
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Ajouter un événement à tous les champs de saisie du formulaire
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // Vérifier la validation du formulaire
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// Variables de navigation de page
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Ajouter un événement à tous les liens de navigation
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
