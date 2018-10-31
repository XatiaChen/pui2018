
$(document).ready(function () {
    changeShoppingCartQuantity();
    changeWishListNumber();

    renderProductList();



});


function changeShoppingCartQuantity() {
    $("#count-visualcue").text(getProductNumber());
}
function changeWishListNumber() {
    $("#wish-visualcue").text(wishDataSercie.count);
  }

function renderProductList() {
    var contaner = $("#product_list");

    var html = "";
    $.each(getProductList(), function (index, element) {
        html += `
        <div class="columns shoppingitems">
        <a href="detail.html?prodctId=${element.id}"><img src="${element.img}" width="246" height="250" alt="item" /></a>
        <a href="detail.html?prodctId=${element.id}">
            <h4>${element.name}</h4>
        </a>
        <p>${element.description}</p>
        <div><img src="img/colorsdetail.png" alt="item" /></div>
        <span>$${element.price}</span>
        </div>
         `
    });

    contaner.empty();
    contaner.append(html);

}
