import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';


const estiloBoton = {
    position: 'absolute',
    bottom: '4px',
    marginBottom: '5px'
}

const estiloCard = {
    height: '104%',
};

const estiloVideo = {
    borderRadius: 'inherit',
};

const CardHomecare = ({ index, name, description, urlmedia }) => {
    const { store } = useContext(Context);

    return (
        <>
            <div className='col-3' key={index} index={index}>
                <div className="card" style={estiloCard}>
                    <iframe
                        width="100%"
                        height="200"
                        src={urlmedia}
                        frameBorder="0"
                        allowFullScreen
                        pointerEvents="none"
                        title="Embedded youtube"
                        style={estiloVideo}
                    />
                    <div className="card-body" >
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">
                            {description}
                        </p>
                        <Link to={`/homecare/${index}`} className="btn btn-primary" style={estiloBoton}>
                            Learn More!
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CardHomecare;
