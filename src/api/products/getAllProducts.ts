import { IProduct, IResponseData } from "@/types";
import { api } from "../base";
import { QUERY_KEYS } from "../queryKeys";

export interface IProductData extends IResponseData {
    products: IProduct[]
}

const getAllProducts = async (): Promise<IProductData> => {
    try {
        const response = await api.get(`${QUERY_KEYS.PRODUCTS}?limit=100`);
        return response.data;
    } catch (err: any) {
        throw new Error(err);
    }
}

export default getAllProducts;