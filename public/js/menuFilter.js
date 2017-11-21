(function(doc) {
  'use strict'

  const $body = doc.querySelector('body')
  const $wrapHeaderFilter = doc.querySelector('.wrap__header__filter')
  const $wrapMenuFilter = doc.querySelector('#menuFilter')

  $wrapHeaderFilter.addEventListener('click', (event) => {
    event.preventDefault()

    $wrapMenuFilter.classList.toggle('wrap__menuFilter--isActive')
  })

  $body.addEventListener('click', (event) => {
    const $target = event.target

    console.log($target)

    if(!$target.classList.contains('wrap__menuFilter') && 
    !$target.classList.contains('wrap__header__filter') &&
    !$target.classList.contains('header__filter')) {
      $wrapMenuFilter.classList.toggle('wrap__menuFilter--isActive')
    }
  })
})(document)