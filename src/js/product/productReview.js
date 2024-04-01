import ApiService from "../axios";
import { headers } from "../login/headers";

const ProductReviewService = {
    saveReview: async(orderId, orderItemId, productId, reviewParam) => {
        return ApiService.post(
            "/orders/"+orderId+"/"+orderItemId+"/products/"+productId+"/reviews", 
            reviewParam, 
            headers()
        );
    }
}

export default ProductReviewService;