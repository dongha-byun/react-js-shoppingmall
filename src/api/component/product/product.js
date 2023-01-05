import axios from "axios";
import ApiService, { api } from "../../axios";
import { UNAUTHORIZED } from "../../constants";
import { headers } from "../login/headers";
import { getUserAttribute } from "../login/login";


const ProductService = {
    
    getProducts: async (categoryId, subCategoryId) => {
        let response = await api.get("/products?categoryId="+categoryId+"&subCategoryId="+subCategoryId);
        return response.data;
    },
    getProduct: async (productId) => {
        let response = await api.get("/products/"+productId);
        return response.data;
    },
    saveProduct: async(params) => {
        ApiService.post("/products", params, headers()).then(result => {
            alert('상품등록이 완료 되었습니다.');
            window.location.href = "/provide-manage/product";
        });
    }
}

export default ProductService;