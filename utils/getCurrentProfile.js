import getToken from "@/utils/getToken";
import {decode} from "jsonwebtoken";

export async function getCurrentProfile() {

    try {
        const decodedToken = decode(await getToken());
        if (!decodedToken) {
            return null
        }
        return decodedToken.user_metadata;

    } catch (error) {
        console.error(error);
        return error.message;
    }
}