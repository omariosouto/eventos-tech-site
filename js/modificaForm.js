;(function () {
  "use strict";

  var listaDeInputs = document.querySelectorAll(".formNewEvent__informacoes__input")

  for (var i=0 ; i<listaDeInputs.length ; i++) {
    listaDeInputs[i].addEventListener("focus" , comFoco)
    listaDeInputs[i].addEventListener("blur" , semFoco)
  }


  function comFoco(event) {
    var input = event.target
    var label = input.parentNode.querySelector(".formNewEvent__informacoes__label")

    input.classList.add("formNewEvent__informacoes__input--focus")
    label.classList.add("formNewEvent__informacoes__label--focus")
  }


  function semFoco() {
    var input = event.target
    var label = input.parentNode.querySelector(".formNewEvent__informacoes__label")

    if (input.value=="") {
      input.classList.remove("formNewEvent__informacoes__input--focus")
      label.classList.remove("formNewEvent__informacoes__label--focus")
    }
  }

  window.comFoco = comFoco
  window.semFoco = semFoco
}) ()
