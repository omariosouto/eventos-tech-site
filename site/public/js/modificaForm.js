;(function () {
  "use strict";

  let formularioDeDias = document.querySelector(".formNewEvent--day");
  formularioDeDias.addEventListener("click", function(event) {
    if(event.target.classList.contains("formNewEvent__informacoes__input")) {
      comFoco(event);
      event.target.addEventListener("blur" , semFoco)
    }
    event.preventDefault();
  })

  function comFoco(event) {
    var input = event.target
    var label = input.parentNode.querySelector(".formNewEvent__informacoes__label")

    input.classList.add("formNewEvent__informacoes__input--focus")
    label.classList.add("formNewEvent__informacoes__label--focus")
  }


  function semFoco(event) {
    var input = event.target
    var label = input.parentNode.querySelector(".formNewEvent__informacoes__label")

    if (input.value=="") {
      input.classList.remove("formNewEvent__informacoes__input--focus")
      label.classList.remove("formNewEvent__informacoes__label--focus")
    }
  }

}) ()
