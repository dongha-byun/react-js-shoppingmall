import ApiService from "../../axios";
import { headers } from "../login/headers";

const UserService = {
    getGradeInfo: () => {
        return ApiService.get("/users/grade-info", headers());
    }
}

export default UserService;