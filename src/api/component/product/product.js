import ApiService, { api } from "../../axios";
import { headers } from "../login/headers";


const ProductService = {
    
    getProducts: async (categoryId, subCategoryId, orderType) => {
        let response = await api.get("/products?categoryId="+categoryId+"&subCategoryId="+subCategoryId+"&orderType="+orderType);
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