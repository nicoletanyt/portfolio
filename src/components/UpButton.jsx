import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import useIsVisible from '../hooks/useIsVisible';

function UpButton({ heading, wrapperRef }) {

    const buttonRef = useRef();
    const [visible, setVisible] = useState(false);
    const inView = useIsVisible({ refDict: wrapperRef });

    const handleScroll = () => {
        if (inView) {
            const rect = wrapperRef.current.getBoundingClientRect();
            setVisible(rect.top < 0 && rect.bottom >= screen.height);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        document.querySelector(".main").addEventListener("scroll", handleScroll);
    }, [inView]);
        

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