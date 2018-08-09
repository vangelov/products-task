import { delay } from "../../utils/delay";
import * as permissionsApi from "../permissions/api";

let lastId = 0;

const PRODUCTS = [
    { id: lastId, name: "p1", price: 20, currency: "USD" },
    { id: ++lastId, name: "p2", price: 100, currency: "BGN" }
];

export async function productsGet() {
    await delay(500);
    return [...PRODUCTS];
}

export async function productsCreate(product) {
    const permissions = await permissionsApi.permissionsGet();

    if (!permissions.includes("CREATE")) {
        throw new Error("You are not allowed to create a product");
    }

    await delay(500);

    const newProduct = { id: ++lastId, ...product };
    PRODUCTS.unshift(newProduct);

    return product;
}
