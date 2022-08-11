import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import CardServices from '../component/CardServices.jsx'
import CardCourses from '../component/CardOutdoor.jsx'
import CardSpirituality from '../component/CardSpirituality.jsx'
import CardHealthy from '../component/CardHealthy.jsx'



const estiloBoton = {
    marginTop: '10px',
    padding: 'none'
};

const estiloShow = {
    marginLeft: '10px'
}

const Services = () => {
    const { store } = useContext(Context);
    let j = [1, 2, 3, 4]
    return (
        <>
            <div className="header-container mb-4 d-flex align-items-center">
                <h1 className="category-title" style={estiloShow}>Services</h1>
                <Link className="btn btn-primary" to="/" role="button" style={estiloShow}>Show all!</Link>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row'>
                    {!!store.parametros &&
                        j.filter((index) => index < 5).map((index) => (
                            <CardServices key={index} index={index} />
                        ))}
                </div>
            </div>
            <div className="header-container mb-4 d-flex align-items-center">
                <h1 className="category-title" style={estiloShow}>Courses</h1>
                <Link className="btn btn-primary" to="/" role="button" style={estiloShow}>Show all!</Link>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row'>
                    {!!store.parametros &&
                        j.filter((index) => index < 5).map((index) => (
                            <CardCourses key={index} index={index} />
                        ))}
                </div>
            </div>
            <div className="header-container mb-4 d-flex align-items-center">
                <h1 className="category-title" style={estiloShow}>Find Yourself</h1>
                <Link className="btn btn-primary" to="/" role="button" style={estiloShow}>Show all!</Link>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row'>
                    {!!store.parametros &&
                        j.filter((index) => index < 5).map((index) => (
                            <CardSpirituality key={index} index={index} />
                        ))}
                </div>
            </div>
            <div className="header-container mb-4 d-flex align-items-center">
                <h1 className="category-title" style={estiloShow}>Healthy</h1>
                <Link className="btn btn-primary" to="/" role="button" style={estiloShow}>Show all!</Link>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row'>
                    {!!store.parametros &&
                        j.filter((index) => index < 5).map((index) => (
                            <CardHealthy key={index} index={index} />
                        ))}
                </div>
            </div>
        </>
    );
};

export default Services;