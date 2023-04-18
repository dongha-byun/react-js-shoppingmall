import { api } from "../../axios";

const PartnerService = {
    findAllPartners: async() => {
        let response = await api.get("/admin/partners");
        return response.data;
    }
}

export default PartnerService;

export function partnersSignup(signupValue) {
    console.log(signupValue);
    api.post("/providers", signupValue)
    .then(() => {
        alert("판매자격 승인신청이 완료됐습니다.");
        window.location.replace("http://localhost:3000");
    })
    .catch((error) => {
        alert("판매자격 승인신청 중 문제가 발생했습니다. 관리자에게 문의해주세요.");
        console.log(error);
    });
}