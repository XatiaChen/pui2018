
productList = [
    {
        id: "dog-01",
        name: "High-end Dog GPS",
        type: 'dog',
        size: [{ title: "S", value: "small" }, { title: "M", value: "medium" }, { title: "L", value: "large" }],
        img: "img/doggpsdisplayred.png",
        color: [
            { color: "Red", imgurl: "img/doggpsdisplayred.png" },
            { color: "Purple", imgurl: "img/doggpsdisplaypurple.png", },
            { color: "Green", imgurl: "img/doggpsdisplaygreen.png", },
        ],
        price: 102.75,
        thumbimg: "img/detailsthumbnail1.png",
        description: "Example descriptions of the product."

    },
    {
        id: "dog-02",
        name: "Dog bottles combo",
        type: 'dog',
        size: [{ title: "S", value: "small" }, { title: "M", value: "medium" }, { title: "L", value: "large" }],
        img: "img/watercombodisplayred.png",
        color: [
            { color: "Red", imgurl: "img/watercombodisplayred.png" },
            { color: "Purple", imgurl: "img/watercombodisplaypurple.png", },
            { color: "Green", imgurl: "img/watercombodisplaygreen.png", },
        ],
        price: 22.75,
        thumbimg: "img/detailsthumbnail1.png",
        description: "Example descriptions of the product."

    },
    {
        id: "dog-03",
        name: "Dog Food Storage",
        type: 'dog',
        size: [{ title: "S", value: "small" }, { title: "M", value: "medium" }, { title: "L", value: "large" }],
        img: "img/dogfoodstoragedisplayred.png",
        color: [
            { color: "Red", imgurl: "img/dogfoodstoragedisplayred.png" },
            { color: "Purple", imgurl: "img/dogfoodstoragepurple.png", },
            { color: "Green", imgurl: "img/dogfoodstoragedisplaygreen.png", },
        ],
        price: 19.99,
        thumbimg: "img/detailsthumbnail1.png",
        description: "Example descriptions of the product."

    },
    {
        id: "dog-04",
        name: "A Fancy Dog Harness",
        type: 'dog',
        size: [{ title: "S", value: "small" }, { title: "M", value: "medium" }, { title: "L", value: "large" }],
        img: "img/dogharnessbig.png",
        color: [
            { color: "Red", imgurl: "img/dogharnessbig.png" },
            { color: "Purple", imgurl: "img/dogharnessbigpurple.png", },
            { color: "Green", imgurl: "img/dogharnessbiggreen.png", },
        ],
        price: 20.99,
        thumbimg: "img/detailsthumbnail1.png",
        description: "Fancy Dog Harness, Teal, Beautiful and good"

    }
]


//get  all product
function getProductList() {
    return productList;
}



//get product by id
function findProductById(id) {

    var productItem = null;
    for (let index = 0; index < productList.length; index++) {
        const element = productList[index];
        if (id == element.id) {
            productItem = element;
            break;
        }
    }
    return productItem;
}