(function(doc) {
  'use strict'

  const $formNewEvent = doc.querySelector('.formNewEvent')

  $formNewEvent.addEventListener('click', event => {
    event.preventDefault()
    
    const $target = event.target

    if ($target.classList.contains('btn--remove')) {
      $target.parentNode.remove()
    }
  })
})(document)