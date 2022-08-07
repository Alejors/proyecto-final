import React from 'react';
import { Link } from 'react-scroll';
import InfoImage from '../../../img/landing/6a.jpg';

const About = () => {
    return (

        <div className="ThirdHead">
            <button id='signup' className="btn btn-dark">
                <Link to="Reg" spy={true} smooth={false} offset={-200} duration={500} >Sign up</Link>
            </button>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={InfoImage} className="InfoImage" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About