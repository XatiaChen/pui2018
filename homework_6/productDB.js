

productList = [
    {
        id: "dog-01",
        name: "High-end Dog GPS",
        type: 'dog',
        size: [{ title: "S", value: "small" }, { title: "M", value: "medium" }, { title: "L", value: "large" }],
        img: "img/item1.png",
        color: [
            { color: "#CE282C", imgurl: "img/doggpsdisplayred.png" },
            { color: "#61105E", imgurl: "img/doggpsdisplaypurple.png", },
            { color: "#17A0AA", imgurl: "img/doggpsdisplaygreen.png", },
        ],
        price: 102.75,
        thumbimg: "img/detailsthumbnail1.png",
        description: "Pawtitas Reflective Padded Dog Harness, Teal, Beautiful and good"

    },
    {
        id: "dog-02",
        name: "Dog bottles combo",
        type: 'dog',
        size: [{ title: "S", value: "small" }, { title: "M", value: "medium" }, { title: "L", value: "large" }],
        img: "img/item2.png",
        color: [
            { color: "#CE282C", imgurl: "img/watercombodisplayred.png" },
            { color: "#61105E", imgurl: "img/watercombodisplaypurple.png", },
            { color: "#17A0AA", imgurl: "img/watercombodisplaygreen.png", },
        ],
        price: 22.75,
        thumbimg: "img/detailsthumbnail1.png",
        description: "Pawtitas Reflective Padded Dog Harness, Teal, Beautiful and good"

    },
    {
        id: "dog-03",
        name: "Dog Food Storage",
        type: 'dog',
        size: [{ title: "S", value: "small" }, { title: "M", value: "medium" }, { title: "L", value: "large" }],
        img: "img/item3.png",
        color: [
            { color: "#CE282C", imgurl: "img/dogfoodstoragedisplayred.png" },
            { color: "#61105E", imgurl: "img/dogfoodstoragepurple.png", },
            { color: "#17A0AA", imgurl: "img/dogfoodstoragedisplaygreen.png", },
        ],
        price: 19.99,
        thumbimg: "img/detailsthumbnail1.png",
        description: "Pawtitas Reflective Padded Dog Harness, Teal, Beautiful and good"

    },
    {
        id: "dog-04",
        name: "A Fancy Dog Harness",
        type: 'dog',
        size: [{ title: "S", value: "small" }, { title: "M", value: "medium" }, { title: "L", value: "large" }],
        img: "img/item4.png",
        color: [
            { color: "#CE282C", imgurl: "img/dogharnessbig.png" },
            { color: "#61105E", imgurl: "img/dogharnessbigpurple.png", },
            { color: "#17A0AA", imgurl: "img/dogharnessbiggreen.png", },
        ],
        price: 20.99,
        thumbimg: "img/detailsthumbnail1.png",
        description: "Pawtitas Reflective Padded Dog Harness, Teal, Beautiful and good"

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