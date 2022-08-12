import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import CardGeneral from '../component/CardGeneral.jsx'

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

const Spirituality = () => {
    const { store } = useContext(Context);
    let j = [1, 2, 3, 4,]
    let l = [5, 6, 7, 8,]
    return (
        <>
            <div className="header-container mb-4 d-flex" style={estiloDiv}>
                <h1 className="category-title" style={estiloShow}>Spirituality</h1>
                <Link to="/private" className="btn btn-primary" style={estiloLink}>Back</Link>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row'>
                    {!!store.services &&
                        store.services.length > 0 &&
                        store.services[2].individuals.map((item, index) => (
                            <CardGeneral {...item} key={index} index={index} />
                        ))}
                </div>
            </div>
        </>
    )
};

export default Spirituality;