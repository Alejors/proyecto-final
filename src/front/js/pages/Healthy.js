import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import CardHealthy from '../component/CardHealthy.jsx'




const estiloBoton = {
    marginTop: '10px',
    padding: 'none',
    marginBottom: '10px'
};

const estiloShow = {
    marginLeft: '10px'
}

const Healthy = () => {
    const { store } = useContext(Context);
    let j = [1, 2, 3, 4,]
    let l = [5, 6, 7, 8,]
    return (
        <>
            <div className="header-container mb-4 d-flex align-items-center">
                <h1 className="category-title" style={estiloShow}>Healthy</h1>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row'>
                    {!!store.parametros &&
                        j.filter((index) => index < 5).map((index) => (
                            <CardHealthy key={index} index={index} />
                        ))}
                </div>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row'>
                    {!!store.parametros &&
                        l.filter((index) => index < 9).map((index) => (
                            <CardHealthy key={index} index={index} />
                        ))}
                </div>
            </div>
        </>
    )
};

export default Healthy;