import { IProduct } from "@/types";
import { api } from "../base";
import { QUERY_KEYS } from "../queryKeys";

const getProduct = async (id: string): Promise<IProduct> => {
    try {
        const response = await api.get(`${QUERY_KEYS.PRODUCTS}/${id}`);
        return response.data;
    } catch (err: any) {
        throw new Error(err);
    }
}

export default getProduct;