import React from "react";
import { Link } from "react-scroll";

const Scroll = () => {
    return (
        <h1 id="one">First step <span onClick={() => console.log("hello world!")} className="badge bg-secondary">
                    <Link to="two" spy={true} smooth={true} offset={-80} duration={1000} >New</Link></span></h1>
    )
}

export default Scroll