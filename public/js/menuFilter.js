(function(doc) {
  'use strict'

  const $body = doc.querySelector('body')
  const $wrapHeaderFilter = doc.querySelector('.wrap__header__filter')
  const $wrapMenuFilter = doc.querySelector('#menuFilter')
  const $wrapEvent = doc.querySelector('.wrap__event')
  
  $wrapMenuFilter.addEventListener('click', (event) => {
    event.cancelBubble = true
  })

  $wrapHeaderFilter.addEventListener('click', (event) => {
    event.preventDefault()

    $wrapMenuFilter.classList.toggle('wrap__menuFilter--isActive')

    if ($wrapMenuFilter.classList.contains('wrap__menuFilter--isActive')) {
      $wrapEvent.style.overflow = 'visible'      
    }
  })

  $body.addEventListener('click', (event) => {
    const $target = event.target

    if($wrapMenuFilter.classList.contains('wrap__menuFilter--isActive') &&
    !$target.classList.contains('wrap__menuFilter') && 
    !$target.classList.contains('wrap__header__filter') &&
    !$target.classList.contains('header__filter')) {
      $wrapMenuFilter.classList.toggle('wrap__menuFilter--isActive')
    }
  })
})(document)