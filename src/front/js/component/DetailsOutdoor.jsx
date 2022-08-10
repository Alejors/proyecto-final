import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';


const estiloDiv = {
    margin: '15px',
};
const estiloDiv2 = {
    marginTop: '30px',
    padding: '2px',
};

const estiloContainer = {
    height: "150px",
    width: "256px"
}
const estiloContainer2 = {
    height: "200px",
    width: "256px"
}


const DetailsOutdoor = () => {
    const { store } = useContext(Context);
    const params = useParams();
    return (
        <>
            <div className='container'>
                <div className="card mb-3" style={estiloDiv}>
                    <div className="row g-0">
                        <div className="col-md-8">
                            <iframe
                                width="850"
                                height="600"
                                src={store?.services[3]?.individuals[params.index]?.urlmedia}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {store?.services[3]?.individuals[params.index]?.name}
                                </h5>
                                <p className="card-text">
                                    {store?.services[3]?.individuals[params.index]?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container" style={estiloDiv2}>
                        <div className="row" style={estiloDiv2}>
                            <div className="container-category">
                                <div className="col-12">
                                    <h5>Especifications</h5>
                                    <div>
                                        {store?.services[3]?.individuals[params.index]?.especification}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsOutdoor;