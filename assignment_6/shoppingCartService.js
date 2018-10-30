
var StorageKey = "shoppingCartStorage";

function Item(id,name, size, color, price, quantity, thumbnail) {
	this.id = id;
	this.name = name;
	this.size = size;
	this.color = color;
	this.price = price;
	this.quantity = quantity;
	this.thumbnail = thumbnail;
}

//  save shoppingcart data
function saveShoppingCart(data) {
	localStorage.setItem(StorageKey, JSON.stringify(data));
}

function getShoppingCart() {
	var productList = JSON.parse(localStorage.getItem(StorageKey));

	return productList || [];
}

function getProductNumber() {
	var productList = JSON.parse(localStorage.getItem(StorageKey));
	var num = 0;
	$.each(productList, function (indexInArray, valueOfElement) {
		num += valueOfElement.quantity;
	});
	return num;
}

// total calculation
function getTotalPay() {
	var productList = JSON.parse(localStorage.getItem(StorageKey));
	var total = 0;
	$.each(productList, function (indexInArray, valueOfElement) {
		total += valueOfElement.quantity * valueOfElement.price;
	});
	return total;
}

