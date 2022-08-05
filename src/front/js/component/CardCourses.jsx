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


const CardCourses = ({ index }) => {
    const { store } = useContext(Context);

    return (
        <>
            <div className='col-3' key={index} index={index}>
                <div className="card" style={estiloCard}>
                    <img src="https://aprenderacrecer.cl/wp-content/uploads/2021/04/online-education.png" className="card-img-top" alt="..." style={estiloImagen} />
                    <div className="card-body" >
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <Link to={`/courses/${index}`} className="btn btn-primary">
                            Learn More!
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CardCourses;
