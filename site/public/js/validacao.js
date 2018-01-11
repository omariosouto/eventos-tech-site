
;(function () {
  "use strict";

  var listaDeInputsNumber = document.querySelectorAll("[data-number]")

  for (let i=0; i<listaDeInputsNumber.length; i++) {
    listaDeInputsNumber[i].addEventListener("input" , validacaoNumber)

    function validacaoNumber () {
      listaDeInputsNumber[i].value = listaDeInputsNumber[i].value
                                        .replace(/[^:\/0-9]/g,"")
    }
  }

  let form = document.querySelector(".formNewEvent")
  form.addEventListener("click", function(event) {
    const target = event.target;
    if(target.classList.contains("formNewEvent__informacoes__input") && target.hasAttribute("required")) {
      target.addEventListener("blur" , focusOut)
    }
  })

  function focusOut(event) {
    var input = event.target
    var label = input.parentNode.querySelector(".formNewEvent__informacoes__label")

    if (input.value.trim() == "") {
      input.classList.add("required")
      label.classList.add("required")
    } else {
      input.classList.remove("required")
      label.classList.remove("required")
    }
  }

}) ()
