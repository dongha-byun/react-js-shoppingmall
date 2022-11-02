import React from "react";
import { useState } from "react";
import CommonForm from "./CommonForm";

function LoginModal(props){
    const {isOpen, handleClose} = props;
    const [viewType, setViewType] = useState("LOGIN");
    
    const handleViewType = (e) => {
        setViewType(e.target.value);
    }

    return (
        <div className={isOpen ? 'openModal modal' : 'modal'}>
            { isOpen ? (
                <CommonForm 
                    handleViewType={handleViewType}
                    format={
                        viewType == 'LOGIN' ? loginProps : signUpProps
                    }    
                />
            ) : null
            }
        </div>
    );
}

const loginProps = {
    type: 'LOGIN',
    text: '로그인',
    data: [
        {
            type: 'text',
            text: '아이디'
        },
        {
            type: 'password',
            text: '비밀번호'
        }
    ]
}

const signUpProps = {
    type: 'SIGNUP',
    text: '회원가입',
    data: [
        {
            type: 'text',
            text: '이름'
        },
        {
            type: 'text',
            text: '아이디'
        },
        {
            type: 'password',
            text: '비밀번호'
        },
        {
            type: 'password',
            text: '비밀번호 확인'
        },
        {
            type: 'text',
            text: '연락처'
        }
    ]
}

export default LoginModal;