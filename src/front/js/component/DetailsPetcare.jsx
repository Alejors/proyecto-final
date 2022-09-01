import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const estiloDiv = {
    margin: '15px',
};
const estiloDiv2 = {
    marginTop: '10px',
    padding: '2px',
};

const estiloDiv3 = {
    textAlign: 'center'
}

const estiloDiv4 = {
    alignSelf: 'center'
}

const estiloText = {
    fontSize: '17px'
}

const estiloText2 = {
    fontSize: '20px',
    marginTop: '5px'
}
const estiloLink = {
    marginRight: '20px'
}



const DetailsPetcare = () => {
    const { store } = useContext(Context);
    useEffect(() => {
        window.scrollTo(0, 0);
        if (store.currentUser == null) history('/login');
    }, [])
    const params = useParams();
    return (
        <>
            <div className='container'>
                <div className="card mb-3" style={estiloDiv}>
                    <div className="col-md-12">
                        <div className="card-body">
                            <h2 className="card-title">
                                {store?.services[7]?.individuals[params.index]?.name}
                            </h2>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-md-12" style={estiloDiv3}>
                            <iframe
                                width="90%"
                                height="450"
                                src={store?.services[7]?.individuals[params.index]?.urlmedia}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </div>
                    </div>
                    <div className="col-md-12" style={estiloDiv4}>
                        <div className="card-body">
                            <p className="card-text" style={estiloText}>
                                {store?.services[7]?.individuals[params.index]?.description}
                            </p>
                        </div>
                    </div>
                    <div className="container" style={estiloDiv2}>
                        <div className="row" style={estiloDiv2}>
                            <div className="container-category">
                                <div className="col-12">
                                    <h2>Detalles de la clase</h2>
                                    <div style={estiloText2}>
                                        {store?.services[7]?.individuals[params.index]?.especification}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-container mb-4 d-flex" style={estiloDiv}>
                        <Link to="/petcare" className="btn btn-primary" style={estiloLink}>Volver</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsPetcare;