import { api } from "../base"
import { QUERY_KEYS } from "../queryKeys"

const getAllProducts = async () => {
    try {
        const response = await api.get(QUERY_KEYS.PRODUCTS);
        console.log('response', response)
        return response.data;
    } catch (err) {
        console.log('err', err)
    }
}

export default getAllProducts;