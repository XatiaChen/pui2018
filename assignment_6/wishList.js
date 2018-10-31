
var wishList = [];
var shoppingCart = [];

$(document).ready(function () {
    wishList = wishDataSercie.getWishList();
    //load a shopping list
    shoppingCart = getShoppingCart();

    renderWishData();

    changeShoppingCartQuantity();
    changeWishListNumber();
});





function renderWishData() {

    var contaner = $('#wish_table');
    contaner.empty();
    $.each(wishList, function (index, element) {
        contaner.append(
            `  <tr class="wishTableRow">
            <td><a href="detail.html?prodctId=${element.id}"><img src="${element.thumbnail}" width="77" ></a></td>
                <td><a href="detail.html?prodctId=${element.id}">${element.name}</a></td>
                <td>${element.size}</td>
                <td>${element.color}</td>
                <td>${element.price}</td>
                <td><p class="wishAddToCart" onclick="addTCart(${index})">add to cart</p></td>
                <td>
                    <img onclick="remove(${index})" style="cursor:pointer" src="img/deletebutton.png" alt="deletebutton"
                        data-action="delete" data-value="${index}" /></td>
        </tr>`
        );
    });
}

function remove(index) {
    wishList.splice(index, 1);
    wishDataSercie.saveWishList(wishList)
    renderWishData();
    changeWishListNumber();
}


function addTCart(index) {
    wishItem = wishList[index];
    isnew = true;

    for (var i in shoppingCart) {
        if (
            shoppingCart[i].id === wishItem.id &&
            shoppingCart[i].size === wishItem.size &&
            shoppingCart[i].color === wishItem.color
        ) {
            shoppingCart[i].quantity += 1;
            isnew = false;
        }
    }
    if (isnew) {
        var item = new Item(wishItem.id, wishItem.name, wishItem.size, wishItem.color, wishItem.price, 1, wishItem.thumbnail); //create a new item
        shoppingCart.push(item); //add to local storage of detail page
    }

    // var shoppingCartStorage = localStorage.setItem("shoppingCartStorage", JSON.stringify(shoppingCart)); //save the object at locat storage
    saveShoppingCart(shoppingCart);
    changeShoppingCartQuantity();

}



function changeShoppingCartQuantity() {
    $("#count-visualcue").text(getProductNumber());
}

function changeWishListNumber() {
    $("#wish-visualcue").text(wishDataSercie.count);
}
