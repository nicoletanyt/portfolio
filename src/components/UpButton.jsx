import React, { useEffect, useRef } from 'react'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

function UpButton({ heading, visible }) {

    const buttonRef = useRef();

    useEffect(() => {
        if (visible === false) {
            // add exit animation
            buttonRef.current.classList.add("animate__slideOutRight");
        } else {
            buttonRef.current.classList.remove("animate__slideOutRight");
        }
    }, [visible])

    return (
        <a
            href={heading}
            className={
                "up-button animate__slideInRight animate__animated"
            }
            ref={buttonRef}
            style={{visibility: visible}}
        >
            <MdOutlineKeyboardDoubleArrowUp />
        </a>
    );
}

export default UpButton