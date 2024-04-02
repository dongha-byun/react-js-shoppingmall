import React, { useEffect } from "react";

export default function PayFailPage() {

    useEffect(() => {
        alert("결제에 실패했습니다. 다시 시도해주세요.");
    }, []);

    return (
        <div></div>
    );
}
