
;(function () {
  "use strict";

  let form = document.querySelector(".formNewEvent")
  form.addEventListener("click", function(event) {
    const target = event.target;
    if(target.hasAttribute("data-number")) {
      target.addEventListener("input" , validacaoNumber);
    }
  })

  function validacaoNumber (event) {
    event.target.value = event.target.value.replace(/[^:\/0-9]/g,"")
  }

}) ()
