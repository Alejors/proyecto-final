import React from "react";
import { Link } from 'react-scroll';
import Radio from "./radio";
import Radio2 from "./radio2";
import Radio3 from "./radio3";
import Radio4 from "./radio4";

const Test = () => {
    return (
        <div className="test">
            
            <div>
                <h1 id="one">You regularly make new friends. <span onClick={() => console.log("hello world!")} className="badge bg-secondary">
                    <Link to="two" spy={true} smooth={false} offset={-200} duration={500} >Next</Link></span></h1>
                <div className="Head">
                    <Radio />
                </div>
            </div>
            <div>
                <h1 id="two">You spend time exploring topics that pique your interest. <span onClick={() => console.log("hello world!")} className="badge bg-secondary">
                    <Link to="three" spy={true} smooth={false} offset={-200} duration={1000} >Next</Link></span></h1>
                <div className="Head">
                    <Radio2 />
                </div>
            </div>
            <div>
                <h1 id="three">Seeing other people cry makes you feel like crying too. <span onClick={() => console.log("hello world!")} className="badge bg-secondary">
                    <Link to="four" spy={true} smooth={false} offset={-200} duration={1000} >Next</Link></span></h1>
                <div className="Head">
                    <Radio3 />
                </div>
            </div>
            <div>
                <h1 id="four">You usually stay calm, even under a lot of pressure. <span onClick={() => console.log("hello world!")} className="badge bg-secondary">
                    <Link to="one" spy={true} smooth={false} offset={-200} duration={500} >Next</Link></span></h1>
                <div className="Head">
                    <Radio4 />
                </div>
                <div className="card">
                    <div className="card-header">
                        @something
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go to Top</a>
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}

export default Test