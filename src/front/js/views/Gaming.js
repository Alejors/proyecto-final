import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import CardServices from '../component/CardServices.jsx'




const estiloBoton = {
    marginTop: '10px',
    padding: 'none',
    marginBottom: '10px'
};

const estiloShow = {
    marginLeft: '10px'
}

const Gaming = () => {
    const { store } = useContext(Context);
    return (
        <>
            <div className="header-container mb-4 d-flex align-items-center">
                <h1 className="category-title" style={estiloShow}>Gaming</h1>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row'>
                    {!!store.services &&
                        store.services.length > 0 &&
                        store.services[0].individuals.map((item, index) => (
                            <CardServices {...item} key={index} index={index} />
                        ))}
                </div>
            </div>
        </>
    )
};

export default Gaming;