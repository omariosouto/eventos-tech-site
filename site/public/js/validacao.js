
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

}) ()
