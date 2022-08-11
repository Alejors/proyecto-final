import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';


const estiloImagen = {
    width: '60%',
    height: '60%',
    alignSelf: 'center',
    margin: '8px'
}
const estiloCard = {
    width: '100%',
};


const CardGaming = ({ index, name, description }) => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className='col-3' index={index}>
                <div className="card" style={estiloCard}>
                    <img src="https://www.adverthia.com/wp-content/uploads/2020/02/Servicios-corporativos_icono2.png" className="card-img-top" alt="..." style={estiloImagen} />
                    <div className="card-body" >
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">
                            {description}
                        </p>
                        <Link to={`/gaming/${index}`} className="btn btn-primary">
                            Learn More!
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CardGaming;
