import { randomDelay } from "../../utils/delay";
import * as permissionsApi from "../permissions/api";

let lastId = 0;

let products = [
    { id: lastId, name: "Product 1", price: 20, currency: "USD" },
    { id: ++lastId, name: "Product 2", price: 100, currency: "EUR" }
];

export async function productsGet() {
    const permissions = await permissionsApi.permissionsGet();

    if (!permissions.includes("READ")) {
        throw new Error("You are not allowed to read products");
    }

    await randomDelay();
    return [...products];
}

export async function productsCreate(product) {
    const permissions = await permissionsApi.permissionsGet();

    if (!permissions.includes("CREATE")) {
        throw new Error("You are not allowed to create a product");
    }

    await randomDelay();

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
    products = products.filter(product => product.id !== productToDelete.id);
}
