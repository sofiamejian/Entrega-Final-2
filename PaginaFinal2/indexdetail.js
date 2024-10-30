
const params = new URLSearchParams(window.location.search);
const nameFromUrl = params.get("name");


const data = [
    {
        id: 1,
        title: "Super Mario Bros",
        price: 53.00,
        description: "Un clásico juego de aventuras.",
        images: [
            "https://static.wikia.nocookie.net/mario/images/5/58/Super_Mario_Bros.png",
            "https://www.nintendo.com/eu/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_SuperMarioBros.jpg"
        ],
        category: { name: "Juegos" }
    },
    
];


class Product {
    constructor(id, title, price, description, images, category) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.images = images;
        this.category = category;
    }
}

class ProductDetail {
    static getProductByName(name) {
        const productData = data.find((item) => item.title === name);
        return productData ? new Product(
            productData.id,
            productData.title,
            productData.price,
            productData.description,
            productData.images,
            productData.category.name
        ) : null;
    }

    static renderProduct() {
        const product = ProductDetail.getProductByName(nameFromUrl);
        if (product) {
            document.getElementById("product-name").textContent = product.title;
            document.getElementById("price").textContent = "$ " + product.price;
            document.getElementById("description").textContent = product.description;
            document.getElementById("main-img").src = product.images[0];
        } else {
            console.log("Producto no encontrado");
        }
    }
}

ProductDetail.renderProduct();
