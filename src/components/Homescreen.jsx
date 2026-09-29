import React from "react";
import WordCloud from "./WordCloud";
import { FaAngleDoubleDown } from "react-icons/fa";

function Homescreen({ elRef }) {
    return (
        <div ref={elRef} className="homescreen" id="homepage">
            <WordCloud />
            <h1 className="name">
                hi, i'm <span className="italic">nicole tan</span>
            </h1>
            <p>
                IT & Business student, DSTA Polytechnic Digital Scholar, and
                math enthusiast who loves turning ideas into things that work.
            </p>
            <FaAngleDoubleDown className="down-icon animate__bounce animate__animated animate__infinite" />
        </div>
    );
}

export default Homescreen;
