const casrtaosaraivaFirstAccordion = document.querySelector('.casrtaosaraiva-first-accordion')
const casrtaosaraivaSecondAccordion = document.querySelector('.casrtaosaraiva-second-accordion')

casrtaosaraivaFirstAccordion.addEventListener('click', e => {
  e.preventDefault()

  const element = document.querySelector('.casrtaosaraiva-accordion-content')
  const arrow = document.querySelector('.casrtaosaraiva-arrow-svg')
  element.classList.toggle('product-blockaccordion-content-visible')
  arrow.classList.toggle('arrow-svg-rotate')
})

casrtaosaraivaSecondAccordion.addEventListener('click', e => {
  e.preventDefault()

  const element = document.querySelector('.casrtaosaraiva-accordion-content-second')
  const arrow = document.querySelector('.casrtaosaraiva-arrow-svg-second')
  element.classList.toggle('product-blockaccordion-content-second-visible')
  arrow.classList.toggle('arrow-svg-second-rotate')
})