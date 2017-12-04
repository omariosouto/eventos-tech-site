(function(doc) {
  'use strict'

  const $formNewEvent = doc.querySelector('.formNewEvent')
  const $addNewEventButton = doc.querySelector('.addNewEvent__button')
  const $dateTemplate = doc.querySelector('#dateTemplate')

  $addNewEventButton.addEventListener('click', event => {
    const $clone = $dateTemplate.cloneNode(true)
    const $wrapFormNewEventInformacoes = $formNewEvent.querySelectorAll('.wrap__formNewEvent__informacoes')
    $clone.style.display = 'block'

    $formNewEvent.insertBefore($clone, $formNewEvent.querySelectorAll('.wrap__formNewEvent__informacoes')[1])
  })
})(document)