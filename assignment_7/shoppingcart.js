// JavaScript Document

var shoppingCartData = [];

$(document).ready(function () {



  refreshData();


	
});



function remove(index) {
  debugger;
  shoppingCartData.splice(index, 1);
  saveShoppingCart(shoppingCartData)
  refreshData();
}


// refresh UI

function refreshData() {
  shoppingCartData = getShoppingCart();
  $("#cart-list-container").empty();

  renderList(shoppingCartData);

  // when user clicks quantity Action button
  $(".quantity-action").on('click', function () {
    var action = $(this).attr('data-action');
    var index = +$(this).attr('data-value')
    var currentValue = shoppingCartData[index].quantity;
    if (action == "reduce") {
      if (currentValue > 1) {
        currentValue--;
      }
    }
    if (action == "add") {
      currentValue++;
    }
    shoppingCartData[index].quantity = currentValue;
    saveShoppingCart(shoppingCartData)
    refreshData();
  });

  //update Total 
  $("#totalpay").text(getTotalPay().toFixed(2));
  $("#must_pay").text(getTotalPay().toFixed(2) - 0);
}


function renderList(collection) {
  $("#cart-list-container").empty();
  var html = "";
  $.each(collection, function (index, element) {
    html += `
			<li class="cart-list-item">
				<div>
					<a href="detail.html?prodctId=${element.id}"><img src="${element.thumbnail}" alt="" width="77"></a>
				</div>

				<div class="cart-list-item-info">
					<div><span class="item-price"></span></div>
					<div><a href="detail.html?prodctId=${element.id}">${element.name}</a></div>
					<div><b>${element.size},</b><b> ${element.color}</b></div>
					<img src="img/reviewstars.png" alt="Harness" />
				</div>

				<div>
					<div class="quantity-wrapper">
						<div class="quantity-action" data-action="reduce" data-value="${index}">-</div>
						<input type="text" class="quantity-input" id="quantity" value="${element.quantity}" />
						<div class="quantity-action" data-action="add" data-value="${index}">+</div>
					</div>

					<div>
						total : <span>$${(element.price * element.quantity).toFixed(2)}</span>
					</div>
				</div>

				<div class="cart-list-item-close-wrapper">
					<img onclick="remove(${index})" style="cursor:pointer" src="img/deletebutton.png" alt="deletebutton" data-action="delete" data-value="${index}" />
				</div>
			</li>
			` //content
  });
  $("#cart-list-container").append(html);
}


