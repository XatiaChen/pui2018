//quantity plus and minus
var action_map      = {
  delete: (index) => {
    var local_cart = getShoppingCart()
    local_cart.splice(index, 1)
    setShoppingCart(local_cart)
    renderList()
	//local_cart.splice
  },
  add   : (index) => {
    var local_cart = getShoppingCart()
    local_cart[index].quantity++
    setShoppingCart(local_cart)
    renderList()
  },
  reduce: (index) => {
    var local_cart = getShoppingCart()
    local_cart[index].quantity--
    setShoppingCart(local_cart)
    renderList()
  }
}


var init            = () => {
  document.body.addEventListener('click', event => {
    var { dataset } = event.target
    if (dataset && dataset.action) {
      action_map[dataset.action](dataset.value)
    }
  }, false)
  renderList()
} //???


var getShoppingCart = () => JSON.parse(localStorage.getItem('shoppingCart')) || []
var setShoppingCart = (shoppingCart) => localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
var renderList      = () => {
  document.getElementById('cart-list-container').innerHTML = getShoppingCart()
      .map(({ quantity, size, color }, index) => {
        return getItemString({ quantity, size, color, index })
      })
      .join('')
}
document.addEventListener('DOMContentLoaded', init, false)
var getItemString = ({ price = 29.99, quantity, size, color, index }) => `

		



