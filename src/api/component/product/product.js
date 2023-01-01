import { api } from "../../axios";
import { getUserAttribute } from "../login/login";

const ProductService = {
    getProducts: async (categoryId, subCategoryId) => {
        let response = await api.get("/products?categoryId="+categoryId+"&subCategoryId="+subCategoryId);
        return response.data;
    },
    getProduct: async (productId) => {
        let response = await api.get("/products/"+productId);
        return response.data;
    }
}

export default ProductService;

export function saveProduct(params){
    api.post("/products", params, {
        headers: {
            Authorization: "Bearer" + getUserAttribute("access-token")            
        }
    })
    .then((response) => {
        alert('상품등록이 완료 되었습니다.');
        window.location.href = "/provide-manage/product";
    })
    .catch((error)=>{
        alert('오류가 발생했습니다.');
        console.log(error);
    });
}