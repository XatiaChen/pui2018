//javascript document
//group the color and sizes together

var currentCart = {};
var shoppingCart = [];
$(document).ready(function () {
  //global var

  var id = getQueryString("prodctId");

  var currentProduct = findProductById(id);
  renderProduct(currentProduct);
  //load a shopping list
  shoppingCart = getShoppingCart();




  //商品数量加减按钮
  $('.quantity-action').on('click', function () {
    var action = $(this).attr('data-action');
    var currentValue = +$('#quantity').val();
    if (action == "reduce") {
      if (currentValue > 1) {
        currentValue--;
      }
    }
    if (action == "add") {
      currentValue++;
    }

    $('#quantity').val(currentValue);
  });


  changeShoppingCartQuantity();

  changeWishListNumber();


  //when click the add to cart button, call addItemToCart function
  $("#addtocart").on("click", function () {
    var name = currentProduct.name;
    var size = currentCart["size"];
    if (!size) {
      alert('Please select the size');
      return;
    }

    var color = currentCart["color"];
    if (!color) {
      alert('Please select the color');
      return;
    }
    var price = currentProduct.price;
    var quantity = +document.getElementById("quantity").value;
    var thumbnail = document.getElementById("displayimg").getAttribute("src");
    addItemToCart(currentProduct.id, name, size, color, price, quantity, thumbnail);
  });




  $("#addtowish").on('click', function () {

    var name = currentProduct.name;
    var size = currentCart["size"];
    if (!size) {
      alert('Please select the size');
      return;
    }

    var color = currentCart["color"];
    if (!color) {
      alert('Please select the color');
      return;
    }
    var price = currentProduct.price;
    var thumbnail = document.getElementById("displayimg").getAttribute("src");

    var wishList = wishDataSercie.getWishList();


    for (var i in shoppingCart) {
      if (
        shoppingCart[i].id === id &&
        shoppingCart[i].size === size &&
        shoppingCart[i].color === color
      ) {
        return;
      }
    }
    var item = new wishDataSercie.WishItem(currentProduct.id, name, size, color, price, thumbnail); //create a new item
    wishList.push(item); //add to local storage of detail page
    wishDataSercie.saveWishList(wishList);
    changeWishListNumber();
  });



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


//pass in to the object Item
function addItemToCart(id, name, size, color, price, quantity, thumbnail) {

  isnew = true;

  for (var i in shoppingCart) {
    if (
      shoppingCart[i].id === id &&
      shoppingCart[i].size === size &&
      shoppingCart[i].color === color
    ) {
      shoppingCart[i].quantity += quantity;
      isnew = false;
    }
  }
  if (isnew) {
    var item = new Item(id, name, size, color, price, quantity, thumbnail); //create a new item
    shoppingCart.push(item); //add to local storage of detail page
  }

  // var shoppingCartStorage = localStorage.setItem("shoppingCartStorage", JSON.stringify(shoppingCart)); //save the object at locat storage
  saveShoppingCart(shoppingCart);
  changeShoppingCartQuantity();
}



function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}



function changeShoppingCartQuantity() {
  $("#count-visualcue").text(getProductNumber());
}

function changeWishListNumber() {
  $("#wish-visualcue").text(wishDataSercie.count);
}


function renderProduct(product) {

  //name
  $("#product_name").text(product.name);

  //price
  $("#price").text("$" + product.price);


  // displayImg
  $("#displayimg").attr("src", product.img);

  $("#detailslides").attr("src", product.thumbimg)



  // size
  renderSize(product.size);

  // color
  renderColor(product.color);


}


function renderSize(sizeList) {
  var contaner = $('#all_sizes');
  contaner.empty();
  $.each(sizeList, function (index, element) {
    var item = $(`<div class="sizeItem" data-value="${element.value}">${element.title}</div>`)
    item.on('click', function () {
      currentCart["size"] = $(this).attr('data-value');
      $("#all_sizes div").attr('class', "sizeItem");
      $(this).attr('class', "sizeItem size_active");


    })
    contaner.append(item);
  });
}



function renderColor(ColorList) {
  var contaner = $('#all_colors');
  contaner.empty();
  $.each(ColorList, function (index, element) {

    var item = $(`<div class="styleandcolor" style="background-color:${element.color}" data-img="${element.imgurl}" data-value="${element.color}"></div>`)
    item.on('click', function () {
      currentCart["color"] = $(this).attr('data-value');
      $('#displayimg').attr("src", $(this).attr('data-img'));
    })
    contaner.append(item);
  });
}