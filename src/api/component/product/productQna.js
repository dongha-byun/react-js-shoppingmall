import { api } from "../../axios"
import { headers } from "../login/headers";

const ProductQnaService = {
    getQnaList: async (productId) => {
        let response = await api.get("/products/"+productId+"/qna");
        return response.data;
    },
    createQna: async (productId, contentValue) => {
        let response = await api.post("/products/"+productId+"/qna", {
            content: contentValue
        },headers());
        return response.data;
    }
}

export default ProductQnaService;