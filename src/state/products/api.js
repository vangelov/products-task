import { randomDelay } from "../../utils/delay";
import * as permissionsApi from "../permissions/api";

let lastId = 0;

function createProduct(name, price, currency) {
    lastId++;
    return { id: lastId, name, price, currency };
}

let products = [
    createProduct(
        "Small Great Things: The bestselling novel you won't want to miss",
        6.47,
        "GBP"
    ),
    createProduct("Beneath a Scarlet Sky: A Novel", 15.99, "USD"),
    createProduct(
        "Raven Black: Book One of the Shetland Island Quartet",
        8.0,
        "EUR"
    )
];

export async function productsGet() {
    const permissions = await permissionsApi.permissionsGet();

    if (!permissions.includes("READ")) {
        throw new Error("You are not allowed to read products");
    }

    await randomDelay();

    // Uncomment to simulate an error
    // throw new Error("Cannot get products");

    return [...products];
}

export async function productsCreate(product) {
    const permissions = await permissionsApi.permissionsGet();

    if (!permissions.includes("CREATE")) {
        throw new Error("You are not allowed to create a product");
    }

    await randomDelay();

    // Uncomment to simulate an error
    // throw new Error("Cannot create product");

    const newProduct = { id: ++lastId, ...product };
    products.unshift(newProduct);

    return product;
}

export async function productsUpdate(productId, updatedProduct) {
    const permissions = await permissionsApi.permissionsGet();

    if (!permissions.includes("UPDATE")) {
        throw new Error("You are not allowed to update a product");
    }

    await randomDelay();

    // Uncomment to simulate an error
    // throw new Error("Cannot update product");

    products = products.map(product => {
        if (product.id === productId) {
            return { id: productId, ...updatedProduct };
        }

        return product;
    });
}

export async function productsDelete(productToDelete) {
    const permissions = await permissionsApi.permissionsGet();

    if (!permissions.includes("DELETE")) {
        throw new Error("You are not allowed to delete a product");
    }

    await randomDelay();

    // Uncomment to simulate an error
    // throw new Error("Cannot delete product");

    products = products.filter(product => product.id !== productToDelete.id);
}
