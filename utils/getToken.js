import {cookies} from "next/headers";

const getToken = async () => {
    try {
        const cookieStore = await cookies()

        if (!cookieStore) {
            throw new Error('Cookie not found');
        }

        return cookieStore.get('token').value

    } catch (error) {
        return error.message;
    }
}

export default getToken;