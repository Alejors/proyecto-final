import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import CardGaming from '../component/CardGaming.jsx'

const estiloBoton = {
    marginTop: '10px',
    padding: 'none',
    marginBottom: '30px'
};

const estiloShow = {
    marginLeft: '10px'
}

const estiloLink = {
    marginRight: '20px'
}

const estiloDiv = {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '30px'
}

const Gaming = () => {
    const { store } = useContext(Context);
    return (
        <>
            <div className="header-container mb-4 d-flex align-items-center" style={estiloDiv}>
                <h1 className="category-title" style={estiloShow}>Gaming</h1>
                <Link to="/services" className="btn btn-primary" style={estiloLink}>Back</Link>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row'>
                    {!!store.services &&
                        store.services.length > 0 &&
                        store.services[0].individuals.map((item, index) => (
                            <CardGaming {...item} key={index} index={index} />
                        ))}
                </div>
            </div>
        </>
    )
};

export default Gaming;