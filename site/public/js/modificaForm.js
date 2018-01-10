;(function () {
  "use strict";

  let formDays = document.querySelector(".formNewEvent");
  formDays.addEventListener("click", function(event) {
    if(event.target.classList.contains("formNewEvent__informacoes__input")) {
      onFocus(event);
      event.target.addEventListener("blur" , focusOut)
      event.preventDefault();
    }
  })

  function onFocus(event) {
    var input = event.target
    var label = input.parentNode.querySelector(".formNewEvent__informacoes__label")

    input.classList.add("formNewEvent__informacoes__input--focus")
    label.classList.add("formNewEvent__informacoes__label--focus")
  }


  function focusOut(event) {
    var input = event.target
    var label = input.parentNode.querySelector(".formNewEvent__informacoes__label")

    if (input.value=="") {
      input.classList.remove("formNewEvent__informacoes__input--focus")
      label.classList.remove("formNewEvent__informacoes__label--focus")
    }
  }

}) ()
