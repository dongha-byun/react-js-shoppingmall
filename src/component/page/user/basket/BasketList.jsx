import React from "react";
import Basket from "./BasketItem";

function BasketList(props){
    const items=[0,1,2,3,4];

    return (
        <div>
            {items.map((item, index) => {
                return (
                <Basket 
                    key={index} 
                />)
            } )}
        </div>
    );
}

export default BasketList;