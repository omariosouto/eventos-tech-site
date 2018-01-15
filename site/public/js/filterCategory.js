(function(doc) {
  'use strict'

  const $menuFilter = doc.querySelector('.menuFilter')
  const $menuFilterCategory = $menuFilter.querySelector('.menuFilter__category')
  const $menuFilterPayment = $menuFilter.querySelector('.menuFilter__payment')

  $menuFilterCategory.addEventListener('click', selectInputAll)
  $menuFilterPayment.addEventListener('click', selectInputAll)

  function selectInputAll(event) {
    const $target = event.target

    if ($target.classList.contains('menuFilter__label--all')) {
      const $menuFilterCheckebox = this.querySelectorAll('.menuFilter__checkbox')
      const $all = this.querySelector('.menuFilter__checkbox--all')

      Array.prototype.forEach.call($menuFilterCheckebox, $item => {
        if (!$item.classList.contains('menuFilter__checkbox--all')) {
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