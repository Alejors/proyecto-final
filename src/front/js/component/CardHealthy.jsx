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


const CardServices = ({ index, name, description }) => {
    const { store } = useContext(Context);

    return (
        <>
            <div className='col-3' key={index} index={index}>
                <div className="card" style={estiloCard}>
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/healthy-life-1-1126708.png" className="card-img-top" alt="..." style={estiloImagen} />
                    <div className="card-body" >
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">
                            {description}
                        </p>
                        <Link to={`/healthy/${index}`} className="btn btn-primary">
                            Learn More!
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CardServices;
