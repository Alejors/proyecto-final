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


const CardMeditation = ({ index }) => {
    const { store } = useContext(Context);

    return (
        <>
            <div className='col-3' key={index} index={index}>
                <div className="card" style={estiloCard}>
                    <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/c7/98/a9/c798a9ac-386b-5c0f-38e8-7a742c96336d/source/256x256bb.jpg" className="card-img-top" alt="..." style={estiloImagen} />
                    <div className="card-body" >
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <Link to={`/meditation/${index}`} className="btn btn-primary">
                            Learn More!
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CardMeditation;
