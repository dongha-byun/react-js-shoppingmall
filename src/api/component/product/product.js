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
    searchProducts: async(searchKeyword, orderType, limit, offset) => {
        let url = "/search-products" + 
                    "?searchKeyword=" + searchKeyword +
                    "&orderType=" + orderType +
                    "&limit=" + limit +
                    "&offset=" + offset;
        let response = await api.get(url);
        return response.data;
    },
    searchMoreProducts: async(searchKeyword, orderType, limit, offset) => {
        let url = "/search-products-more" + 
                    "?searchKeyword=" + searchKeyword +
                    "&orderType=" + orderType +
                    "&limit=" + limit +
                    "&offset=" + offset;
        let response = await api.get(url);
        return response.data;
    }
}

export default ProductService;