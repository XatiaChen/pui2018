var DIMENSIONS     = [
  { img: 'img/smallgray.png', value: 'small' },
  { img: 'img/mediumgray.png', value: 'medium' },
  { img: 'img/largegray.png', value: 'large' }
]
var COLORS         = [
  { class_name: 'detailcolorone', value: 'color_one' },
  { class_name: 'detailcolortwo', value: 'color_two' },
  { class_name: 'detailcolorthree', value: 'color_three' }
]



var selected_item  = {}
var init           = () => {
  document.body.addEventListener('click', event => {
    var { dataset } = event.target
    if (dataset && dataset.action) {
      action_map[dataset.action](dataset.value)
    }
  }, false)
  
  var localShoppingCart = localStorage.getItem('shoppingCart')
  if (localShoppingCart) {
    renderCartTips(JSON.parse(localShoppingCart).length)
  }
  
}
var quantityChange = (event) => {
  selected_item.quantity = event.target.value
}
var action_map     = {
  selectSize : (size) => {
    selected_item.size = size
    renderAllDimensions()
  },
  selectColor: (color) => {
    selected_item.color = color
    renderAllColors()
  },
  addToCart  : () => {
    if (!selected_item.size) {
      return alert('not select size')
    }
    if (!selected_item.color) {
      return alert('not select color')
    }
    var localShoppingCart = localStorage.getItem('shoppingCart') ?
        JSON.parse(localStorage.getItem('shoppingCart')) :
        []
    renderCartTips(localShoppingCart.length + 1);
	var t = localShoppingCart.concat(selected_item);
    localStorage.setItem('shoppingCart', JSON.stringify(t));
  },
  add        : () => {
    let quantity = (parseInt(document.getElementById('quantity').value) || 0) + 1
    
    document.getElementById('quantity').value = quantity
    
    selected_item.quantity = quantity
    
  },
  reduce     : () => {
    if (!document.getElementById('quantity').value || document.getElementById('quantity').value <= '1') return
    
    let quantity = parseInt(document.getElementById('quantity').value) - 1
    
    document.getElementById('quantity').value = quantity
    
    selected_item.quantity = quantity
  }
}

var renderCartTips = (value) => document.getElementById(
    'cart-tips-wrapper').innerHTML = `<div class="cart-tips">${value}</div>`

var renderAllDimensions = () => {
  var container     = document.getElementById('all_dimensions')
  var html          = DIMENSIONS.map(({ img, value }) => {
    return `<img src=${img} width="27" height="27" alt="size" data-action="selectSize" data-value=${value} class="${selected_item.size ===
    value ? 'size-active' : ''}" />`
  }).join(' ')
  container.innerHTML = html
}
var renderAllColors     = () => {
  var container     = document.getElementById('all_colors')
  var html          = COLORS.map(({ class_name, value }) => {
    return `<div class="styleandcolor ${class_name} ${selected_item.color === value ?
        'color-active' :
        ''}" data-action="selectColor" data-value=${value}></div>`
  }).join(' ')
  container.innerHTML = html
}


if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', init, false)
}


function subtotalCart() {//return overall total cost
	var subtotalCost = 0;
	for (var i in shoppingCart) {
		subtotalCost += shoppingCart[i].price * shoppingCart[i].quantity;
	}
	return subtotalCost;
}

