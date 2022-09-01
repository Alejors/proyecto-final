import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import CardGeneral from '../component/CardGeneral.jsx';

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

const Sustainability = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        if (store.currentUser == null) history('/login');
        actions.getServicios('http://127.0.0.1:5000/api/allservices')
    }, [])
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="header-container mb-4 d-flex" style={estiloDiv}>
                <h1 className="category-title" style={estiloShow}>Sustentabilidad</h1>
                <Link to="/private" className="btn btn-primary" style={estiloLink}>Volver</Link>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row row-cols-1 row-cols-md-4 g-4'>
                    {!!store.services &&
                        store.services.length > 0 &&
                        store.services[6].individuals.map((item, index) => (
                            <CardGeneral {...item} nombre={store.services[6].name} key={index} index={index} />
                        ))}
                </div>
            </div>
        </>
    )
};

export default Sustainability;