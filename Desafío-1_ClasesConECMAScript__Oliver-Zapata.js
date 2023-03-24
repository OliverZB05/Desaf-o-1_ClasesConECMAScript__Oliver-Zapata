let ProductLists = [];

class ProductManager {
    //#############{ Constructor }#############
    constructor(title, description, price, thumbnail, stock) {

        /* ➤ Lanzar un error cuando se crea una instancia en la que faltan cualquiera de estos campos
        (Normalmente se crean las instancias al especificar los datos de sus campos pero si falta alguno 
        de los campos suelta este error) */
        if (!title || !description || !price || !thumbnail || !stock) {
            throw new Error("Todos los campos son obligatorios");
        }


        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.stock = stock;
    }
    //#############{ Constructor }#############


    static code = 1;


    //#############{ Verificar ID e índice }#############
    getProductById = () => {
        ProductLists.forEach((prod) => {
            if(prod.code !== ProductLists.indexOf(prod)){
                console.log("Not found");
            }
        })
    }
    //#############{ Verificar ID e índice }#############

    //#############{ Agregar productos }#############
    addProduct = (title, description, price, thumbnail, stock) => {

        // ➤ Comprobando ya existe el producto
        const existingProduct = ProductLists.find(product => 
            product.title === title
        );


        // ➤ Creando un nuevo producto
        const newProduct = new ProductManager(title, description, price, thumbnail, stock);
        newProduct.code = ProductManager.code++;


        // ➤ Si existe el producto avisa que está repetido y si no existe entonces pon el producto en la lista
        if(existingProduct){
            console.log(`El producto ${newProduct.title} está repetido`);
            return existingProduct;
        }else{
            delete newProduct.addProduct; //En estas 2 líneas de código delete newProduct.addProduct y delete newProduct.getProductById, son para no mostrar las funciones en los objetos
            delete newProduct.getProductById;
            ProductLists.push(newProduct);
            return newProduct;
        }
    }
    //#############{ Agregar productos }#############


    //#############{ Mostrar la lista de productos }#############
    static getProducts = () => {
        console.log(ProductLists);
    }
    //#############{ Mostrar la lista de productos }#############
}


//#############{ Instancias }#############

/* Aquí dejé algunos ejemplos de instancias para mostrar como funciona la clase

(el producto "Silla de oficina" está repetido y muestra un mensaje, lo repetí a propósito 
para que se pueda mostrar como funciona cuando se repiten los datos de un mismo producto 
ya presente en el array "ProductLists") */

const Product1 = new ProductManager("Silla de oficina", "Silla de oficina en excelente estado", 2000, "https://i.ibb.co/P9Ytc2W/1-Silla-de-oficina.png", 20);
Product1.addProduct(Product1.title, Product1.description, Product1.price, Product1.thumbnail, Product1.stock);

const Product2 = new ProductManager("Smartwatch", "reloj digital deportivo", 3000, "https://i.ibb.co/0rzKD6R/23-Smartwatch.png", 15);
Product2.addProduct(Product2.title, Product2.description, Product2.price, Product2.thumbnail, Product2.stock);

const Product3 = new ProductManager("Aro de luz led", "Aro de luz perfecto para grabar vídeos y tomar fotos de alta calidad", 1000, "https://i.ibb.co/HDyLvzT/26-Aro-De-Luz-Led.png", 5);
Product3.addProduct(Product3.title, Product3.description, Product3.price, Product3.thumbnail, Product3.stock);

const Product4 = new ProductManager("Silla de oficina", "Silla de oficina en excelente estado", 2000, "https://i.ibb.co/P9Ytc2W/1-Silla-de-oficina.png", 20);
Product4.addProduct(Product4.title, Product4.description, Product4.price, Product4.thumbnail, Product4.stock);


ProductManager.getProducts();
//#############{ Instancias }#############