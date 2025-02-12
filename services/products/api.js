import axiosApi from "@/utils/axiosApi";


export const addNewProduct = async (data) => {
    const api = new axiosApi()

    if(!data) {
        throw new Error("Main data is missing")
    }

    try {
        const res = await api.post('/product/create', data)
        return {
            ok: true,
            data: res,
        }

    } catch (e) {
        console.error(e.message);
        return {
            error: e.message,
        };
    }
}

export const editProduct = async (itemId, value) => {
    const api = new AxiosApi()

    if(!itemId) {
        throw new Error("Main data is missing")
    }

    try {
        const res = await api.patch(`/product/${itemId}`, );
        return {
            ok: true,
            data: res.status,
        }
    } catch (error) {
        console.error(error.message);
        return {
            error: error.message,
        };
    }
}