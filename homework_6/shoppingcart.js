// JavaScript Document

var shoppingCartData = [];

$(document).ready(function () {



  refreshData();



  // // update Cart Data
  // $('#update_cart').on('click', function () {
  //   refreshData();
  // });


  // marquee
  var oDiv = document.getElementById('wish_product');
  var oUl = document.getElementById('marqueeList');
  var speed = -2;//Initial speed

  oUl.innerHTML += oUl.innerHTML;
  var oLi = document.getElementsByTagName('li');
  oUl.style.width = oLi.length * 256 + 'px';

  function move() {
    if (oUl.offsetLeft < -(oUl.offsetWidth / 2)) {
      oUl.style.left = 0;
    }

    if (oUl.offsetLeft > 0) {
      oUl.style.left = -(oUl.offsetWidth / 2) + 'px';
    }

    oUl.style.left = oUl.offsetLeft + speed + 'px';
  }

  var timer = setInterval(move, 30);

  oDiv.addEventListener('mouseout', function () {
    timer = setInterval(move, 30);
  }, false);
  oDiv.addEventListener('mousemove', function () {
    clearInterval(timer);
  }, false);


  $('.wishAction').on('mouseout', function () {
    timer = setInterval(move, 30);
  });

  $('.wishAction').on('mousemove', function () {
    clearInterval(timer);
  });


  //
  $('.wishAction').on('click', function () {

    var action = $(this).attr('data-action');
    var oUl = document.getElementById('marqueeList');



    if (oUl.offsetLeft < -(oUl.offsetWidth / 2)) {
      oUl.style.left = 0;
    }

    if (oUl.offsetLeft > 0) {
      oUl.style.left = -(oUl.offsetWidth / 2) + 'px';
    }
    leftpx = oUl.style.left;
    if (action == "left") {
      leftpx = oUl.offsetLeft - 256 + "px";
      if (oUl.offsetLeft < -(oUl.offsetWidth / 2)) {
        oUl.style.left = 0;
      }
    }
    if (action == "right") {
      leftpx = oUl.offsetLeft + 256 + "px";
    }
    oUl.style.left = leftpx;
  });


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
  //$("#trTemplate").tmpl(shoppingCartData).appendTo("#cart-list-container");

  renderList(shoppingCartData);

  // regist Click Event to quantity Action button
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


// $(".list_table tr:last").after("
//	<tr>
//		<td>'+shoppingCart.key(thumbnail)+'</td>
//		<td>'+shoppingCart.key(name)+'</td>
//	 </tr>
//
//	"
//});

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
					<div><b>${element.size},${element.color}</b></div>
					<img src="img/reviewstars.png" alt="Harness" />
				</div>

				<div>
					<div class="quantity-wrapper">
						<div class="quantity-action" data-action="reduce" data-value="${index}">-</div>
						<input type="text" class="quantity-input" id="quantity" value="${element.quantity}" />
						<div class="quantity-action" data-action="add" data-value="${index}">+</div>
					</div>

					<div>
						total : <span>$${element.price * element.quantity}</span>
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


