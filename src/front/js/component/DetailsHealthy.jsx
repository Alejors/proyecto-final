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



const DetailsServices = () => {
    const { store } = useContext(Context);
    const params = useParams();
    return (
        <>
            <div className='container'>
                <div className="card mb-3" style={estiloDiv}>
                    <div className="row g-0">
                        <div className="col-md-8">
                            <img
                                src="https://wealthofgeeks.com/wp-content/uploads/2021/11/1242049_HealthyLifestyle_Option2_120721.jpg"
                                className="img-fluid rounded-start"
                                alt="..."
                            ></img>
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {store?.parametros[params.index]}
                                </h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                                    velit beatae qui ab nam saepe tempore assumenda in
                                    necessitatibus tempora quasi voluptates commodi. Eum dolore
                                    dolorem maxime, veniam molestias maiores!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container" style={estiloDiv2}>
                        <div className="row" style={estiloDiv2}>
                            <div className="container-category" style={estiloContainer}>
                                <div className="col-12">
                                    <h5>Lorem</h5>
                                    <div>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    </div>
                                </div>
                            </div>
                            <div className="container-category" style={estiloContainer}>
                                <div className="col-12">
                                    <h5>Lorem</h5>
                                    <div>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br></br>
                                    </div>
                                </div>
                            </div>
                            <div className="container-category" style={estiloContainer}>
                                <div className="col-12">
                                    <h5>Lorem</h5>
                                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                                </div>
                            </div>
                            <div className="container-category" style={estiloContainer}>
                                <div className="col-12">
                                    <h5>Lorem</h5>
                                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                                </div>
                            </div>
                            <div className="container-category" style={estiloContainer}>
                                <div className="col-12">
                                    <h5>Lorem</h5>
                                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={estiloDiv2}>
                            <div className="container-category" style={estiloContainer2}>
                                <div className="col-12">
                                    <h5>Lorem</h5>
                                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                                </div>
                            </div>
                            <div className="container-category" style={estiloContainer2}>
                                <div className="col-12">
                                    <h5>Lorem</h5>
                                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                                </div>
                            </div>
                            <div className="container-category" style={estiloContainer2}>
                                <div className="col-12">
                                    <h5>Lorem</h5>
                                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                                </div>
                            </div>
                            <div className="container-category" style={estiloContainer2}>
                                <div className="col-12">
                                    <h5>Lorem</h5>
                                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsServices;