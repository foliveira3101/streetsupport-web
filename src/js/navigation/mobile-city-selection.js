const location = require('../location/locationSelector')
const browser = require('../browser')

const handleClick = (e) => {
  e.preventDefault()
  let city = e.target.parentNode.getAttribute('data-city')
  location.setCurrent(city)
  browser.redirect('/' + city)
}

const init = () => {
  let cityNavItems = document.querySelectorAll('.js-city-nav-item')
  for (let i = 0; i < cityNavItems.length; i++) {
    cityNavItems[i].addEventListener('click', handleClick)
  }
}

module.exports = {
  init: init
}
