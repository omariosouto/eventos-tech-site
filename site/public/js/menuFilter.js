(function(doc) {
  'use strict'

  const $body = doc.querySelector('body')
  const $wrapHeaderFilter = doc.querySelector('.wrap__header__filter')
  const $wrapMenuFilter = doc.querySelector('#menuFilter')
  const $wrapEvent = doc.querySelector('.wrap__event')
  const $menuFilterCategory = $wrapMenuFilter.querySelector('.menuFilter__category')
  const $menuFilterPayment = $wrapMenuFilter.querySelector('.menuFilter__payment')
  
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

  $menuFilterCategory.addEventListener('click', selectInputAll)
  $menuFilterPayment.addEventListener('click', selectInputAll)

  function selectInputAll(event) {
    const $target = event.target

    if ($target.classList.contains('menuFilter__label--all')) {
      const $menuFilterCheckebox = this.querySelectorAll('.menuFilter__checbox')
      const $all = this.querySelector('.menuFilter__checbox--all')

      Array.prototype.forEach.call($menuFilterCheckebox, $item => {
        if (!$item.classList.contains('menuFilter__checbox--all')) {
          if ($all.checked) {
            $item.checked = false
          } else {
            $item.checked = true
          }
        }
      })
    }
  }
})(document)