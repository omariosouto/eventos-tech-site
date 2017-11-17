((doc) => {
  'use strict'

  const $date = doc.querySelector('.date')
  let $dateItemIsActive = doc.querySelector('.date__item--isActive')

  $date.addEventListener('click', (event) => {
    event.preventDefault()

    const $target = event.target.closest('.date__item')

    $dateItemIsActive.classList.remove('date__item--isActive')
    $target.classList.add('date__item--isActive')
    $dateItemIsActive = $target
  })
})(document)