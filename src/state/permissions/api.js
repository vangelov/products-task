import { randomDelay } from "../../utils/delay";

const PERMISSIONS = ["CREATE", "UPDATE", "READ", "DELETE"];

export async function permissionsGet() {
    await randomDelay();
    return PERMISSIONS;
}
