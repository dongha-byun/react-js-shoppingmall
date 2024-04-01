import { api } from "../axios";

const AdminPartnerService = {
    findAllPartners: async() => {
        let response = await api.get("/admin/partners");
        return response.data;
    },
    approve: async(partnerId) => {
        return api.put("/admin/partners/"+partnerId+"/approve");
    },
    stop: async(partnerId) => {
        return api.put("/admin/partners/"+partnerId+"/stop");
    }
}

export default AdminPartnerService;