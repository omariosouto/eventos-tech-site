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

  $formNewEvent.addEventListener('blur', event => {
    const $target = event.target

    console.log($target.getAttribute('required'))
  })
})(document)