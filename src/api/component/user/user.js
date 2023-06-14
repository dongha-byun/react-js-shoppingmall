import ApiService from "../../axios";
import { headers } from "../login/headers";

const UserService = {
    getGradeInfo: async() => {
        return ApiService.get("/user/grade-info", headers());
    }
}

export default UserService;