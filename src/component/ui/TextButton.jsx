import React from "react";
import { Button } from "react-bootstrap";

function TextButton(props){
    const {value, onClick, size} = props;

    return (
        <Button onClick={onClick} size={size}>
            {value}
        </Button>
    );
}

export default TextButton;