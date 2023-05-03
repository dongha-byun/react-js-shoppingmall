import ApiService from "../../axios";
import { headers } from "../login/headers";

const ProductReviewService = {
    saveReview: async(orderId, productId, reviewParam) => {
        return ApiService.post("/orders/"+orderId+"/products/"+productId+"/reviews", reviewParam, headers());
    }
}

export default ProductReviewService;