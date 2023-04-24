import ApiService, { api } from "../../axios";
import { partnerHeaders } from "../login/headers";


const ProductService = {
    
    getProducts: async (categoryId, subCategoryId, orderType, limit, offset) => {
        let url = "/products?" + 
                    "categoryId="+categoryId+
                    "&subCategoryId="+subCategoryId+
                    "&orderType="+orderType+
                    "&limit="+limit+
                    "&offset="+offset;

        let response = await api.get(url);
        return response.data;
    },
    moreProducts: async(categoryId, subCategoryId, orderType, limit, offset) => {
        let url = "/products-more?" + 
                "categoryId="+categoryId+
                "&subCategoryId="+subCategoryId+
                "&orderType="+orderType+
                "&limit="+limit+
                "&offset="+offset;

        let response = await api.get(url);
        return response.data;
    },
    getProduct: async (productId) => {
        let response = await api.get("/products/"+productId);
        return response.data;
    },
    saveProduct: async(params) => {
        ApiService.post("/products", params, partnerHeaders()).then(result => {
            alert('상품등록이 완료 되었습니다.');
            window.location.href = "/provide-manage/product";
        });
    }
}

export default ProductService;