(function(doc) {
  'use strict'

  const $formNewEvent = doc.querySelector('.formNewEvent')
  const $addNewEventButton = doc.querySelector('.addNewEvent__button')
  const $dateTemplate = doc.querySelector('#dateTemplate')

  $formNewEvent.addEventListener('click', event => {
    const $target = event.target
    
    if ($target.classList.contains('addNewEvent__button')) {
      const $clone = $dateTemplate.cloneNode(true)
      const $wrapFormNewEventInformacoes = $formNewEvent.querySelectorAll('.wrap__formNewEvent__informacoes')
      $clone.style.display = 'block'

      $formNewEvent.insertBefore($clone, $formNewEvent.querySelectorAll('.wrap__formNewEvent__informacoes')[1])
    }
  })
})(document)