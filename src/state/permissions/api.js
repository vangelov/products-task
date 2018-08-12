import { randomDelay } from "../../utils/delay";

const PERMISSIONS = ["CREATE", "UPDATE", "READ", "DELETE"];

export async function permissionsGet() {
    await randomDelay();

    // Uncomment to simulate an error
    // throw new Error("Cannot get products");

    return PERMISSIONS;
}
