import { delay } from "../../utils/delay";

const PERMISSIONS = ["CREATE", "UPDATE", "READ", "DELETE"];

export async function permissionsGet() {
    await delay(500);
    return PERMISSIONS;
}
