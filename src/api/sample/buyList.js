const buys = [
    {
        id: 1,
        productName: "냄비냄비, 요가파이아!",
        buyPrice: 11111,
        deliveryType: "END",
        deliveryTypeName: "배송완료",
        buyDate: "2022-10-25",
        productImgSrc: "/images/pot.jpeg"
    },
    {
        id: 2,
        productName: "후라이팬~, 볼팬~!",
        buyPrice: 13445,
        deliveryType: "CANCEL",
        deliveryTypeName: "주문취소",
        buyDate: "2022-10-28",
        productImgSrc: "/images/pot.jpeg"
    },
    {
        id: 3,
        productName: "월화수목금토일 하우젠은나노~ 로 된 세탁기",
        buyPrice: 730999,
        deliveryType: "ING",
        deliveryTypeName: "배송중",
        buyDate: "2022-11-01",
        productImgSrc: "/images/pot.jpeg"
    },
    {
        id: 4,
        productName: "사각사각 사과보다 달콤한 기계식 키보드",
        buyPrice: 134415,
        deliveryType: "READY",
        deliveryTypeName: "배송 준비중",
        buyDate: "2022-11-03",
        productImgSrc: "/images/pot.jpeg"
    },
    {
        id: 5,
        productName: "조용조용한 소음기보다 조용한 무소음마우스",
        buyPrice: 29093,
        deliveryType: "RETURN_REQ",
        deliveryTypeName: "환불요청",
        buyDate: "2022-11-03",
        productImgSrc: "/images/pot.jpeg"
    },
    {
        id: 6,
        productName: "갬성 끝판왕! 가성비폭망! 존멋맥북2022 M2",
        buyPrice: 2109900,
        deliveryType: "END",
        deliveryTypeName: "배송완료",
        buyDate: "2022-11-04",
        productImgSrc: "/images/pot.jpeg"
    },
    {
        id: 7,
        productName: "어른은 못쓰는 아이패드 프로 2019 10인치",
        buyPrice: 990230,
        deliveryType: "RETURN_END",
        deliveryTypeName: "환불완료",
        buyDate: "2022-11-05",
        productImgSrc: "/images/pot.jpeg"
    },
    {
        id: 8,
        productName: "활어회보다 싱싱한 유기농 경북상주 사과(무농약이라규)",
        buyPrice: 19200,
        deliveryType: "EXCHANGE_REQ",
        deliveryTypeName: "교환신청",
        buyDate: "2022-11-06",
        productImgSrc: "/images/pot.jpeg"
    }
];

export function getBuys(){
    return buys;
}