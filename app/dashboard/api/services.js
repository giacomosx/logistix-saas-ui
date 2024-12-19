import AxiosApi from "@/utils/axiosApi";

export const addNewRequest = async (data) => {
    const api = new AxiosApi()

    if(!data.prospect) {
        throw new Error("Main data is missing")
    }

    try {
        const res = await api.post('/rfq/create', data)
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

export const changeStatusRequest = async (itemId, value) => {
    const api = new AxiosApi()

    if(!itemId) {
        throw new Error("Main data is missing")
    }

    try {
        const res = await api.patch(`/rfq/change-status/${itemId}`, {status : value});
        return {
            ok: true,
            data: res.status,
        }
    } catch (error) {
        console.error(e.message);
        return {
            error: e.message,
        };
    }
}