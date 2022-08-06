import React from "react";
import Image1 from "../../img/3a.jpg";
import Image2 from "../../img/2a.jpg";
import Image3 from "../../img/4a.jpg";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Info = () => {
    return (
        <div>
            <div className="Head" id="SecondHead"></div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src= {Image3} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={Image3} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={Image3} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    )
}


export default Info