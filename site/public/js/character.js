;(function () {
    "use strict";

    let form = document.querySelector(".formNewEvent");
    form.addEventListener("click", function(event) {
        const target = event.target;
        if(target.classList.contains("formNewEvent__informacoes__input") && target.hasAttribute("data-character")) {
            event.target.addEventListener("input" , characterLimit)
        }
    })

    function characterLimit( event ) {
        const target = event.target;
        const limitCharacter = target.getAttribute("data-character")
        const infoQuantityLeft = target.parentElement.querySelector(".formNewEvent__informacoes__caracter")
        const newSizeLeft = limitCharacter - target.value.length
        infoQuantityLeft.innerHTML = newSizeLeft
        if( newSizeLeft < 0 ){
            infoQuantityLeft.classList.add("formNewEvent__informacoes__caracter--limit")
        } else {
            infoQuantityLeft.classList.remove("formNewEvent__informacoes__caracter--limit")
        }
    }

})()