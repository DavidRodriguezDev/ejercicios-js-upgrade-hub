/*
De nuevo vamos a usar JSON SERVER para simular nuestra api en local. Ejecuta ``json-server --watch exercise-3.json`` y obtendremos de la url `http://localhost:3000` los datos del ejercicio.

En este caso tenemos 2 endpoints, o lo que es lo mismo, dos urls a las que llamar para recibir los datos.

El endpoint `http://localhost:3000/orders` nos devolverá una lista de pedidos de la tienda Mari & Juan y el endpoint `http://localhost:3000/products` que nos devuelve una lista de productos.

La intención es pintar todos los pedidos ordenados por fecha (ultimos pedidos al principio) y en los que pongamos tanto los productos que contiene el pedido como la cantidad pedida de cada uno de los productos.

Si os fijáis, en el endpoint de los pedidos no tenemos la información del producto, si no su id y cantidad pedida. Para obtener el nombre de los productos tendremos que hacer peticiones al endpoint de productos pasando el id del producto, por ejemplo ``http://localhost:3000/products/2``. De esta forma podremos obtener ya toda la información y pintarla en el html.

 */
async function init() {
    const orders = await getOrders();

    completeProductsInfo(sortByDate(orders))
}

async function getOrders() {
    const resOrders = await fetch("http://localhost:3000/orders");
    return resOrders.json();
}

async function getProduct(id) {
    const resProduct = await fetch("http://localhost:3000/products/" + id);
    return await resProduct.json();
}

function sortByDate(array) {
    return array.sort((a, b) => new Date(a.date) - new Date(b.date))
}

async function completeProductsInfo(orders) {
    for (const order of orders) {

        for (let index = 0; index < order.products.length; index++) {
            const product = order.products[index];
            const resProduct = await fetch("http://localhost:3000/products/" + product.productId);
            const productDetail = await resProduct.json();
            order.products[index] = {...product, ...productDetail};
        }
        printOrder(order)
        
    }
}

function printOrder(order) {
    const div$$ = document.createElement("div");
    div$$.innerHTML = `<h2>${order.date}</h2>`

    for (let index = 0; index < order.products.length; index++) {
        const product = order.products[index];
        div$$.innerHTML += `<p>${product.quantity} ${product.name}</p>`
    }
    
    document.body.appendChild(div$$)
}

init();
