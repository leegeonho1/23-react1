import React from "react";
import { useState } from "react";

function ConfirmButton(params) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };
    
    return (
        <button onClick={handleConfirm} disable={isConfirmed}>
            {isConfirmed ? "확인됨":"확인하기"}
        </button>
    );
}

export default ConfirmButton;