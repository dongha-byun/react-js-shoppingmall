import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import BuyingProductList from "./BuyingProductList";
import OrderDeliveryInfo from "./OrderDeliveryInfo";
import OrderPaymentInfo from "./OrderPaymentInfo";
import CommonModal from "../../modal/CommonModal";
import PayPopup from "./PayPopup";

export default function OrderConfirmPage() {
    const {state} = useLocation();
    const [orderProductParam, setOrderProductParam] = useState({});
    const [deliveryParam, setDeliveryParam] = useState({});
    
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    useEffect(() => {
        setOrderProductParam({
            "productId": state.productId,
            "productName": state.productName,
            "imgUrl": state.imgUrl,
            "providerName": state.providerName,
            "quantity": state.quantity,
            "price": state.price,
            "deliveryFee": state.deliveryFee
        });

        setDeliveryParam({
            "receiverName" : state.receiverName,
            "zipCode" : state.zipCode,
            "address" : state.address,
            "detailAddress" : state.detailAddress,
            "requestMessage" : state.requestMessage,
        });
    }, []);

    const paying = () => {
        setIsOpen(true);
    }

    return (
        <div>
            <h2>주문정보 확인</h2>
            <BuyingProductList orderProductParam={orderProductParam}/>
            <OrderDeliveryInfo deliveryParam={deliveryParam} />
            <OrderPaymentInfo />
            <Button className="w-100" size="lg" onClick={() => {
                paying();
            }}>결제하기</Button>

            <CommonModal show={isOpen} handleClose={handleClose}>
                <PayPopup/>
            </CommonModal>
        </div>
    );
}