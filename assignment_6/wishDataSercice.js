
wishDataSercie = {
    WishItem: function (id, name, size, color, price, thumbnail) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.color = color;
        this.price = price;
        this.thumbnail = thumbnail;
    },

    /**
     *  save shoppingcart data
     */
    saveWishList: function (data) {
        localStorage.setItem("WishListStorage", JSON.stringify(data));
    },

    getWishList: function () {
        var WishList = JSON.parse(localStorage.getItem("WishListStorage"));
        return WishList || [];
    },

    count: function () {
        var WishList = JSON.parse(localStorage.getItem("WishListStorage")) || [];
        return WishList.length;
    },
    // clear the cart //where's the button?
    cleanShoppingCar: function () {
        localStorage.removeItem(WishListStorage);
    }


};