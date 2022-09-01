import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import CardGeneral from '../component/CardGeneral.jsx'


const estiloBoton = {
    marginTop: '10px',
    padding: 'none'
};

const estiloShow = {
    marginLeft: '10px',
    marginTop: '60px'
}

const estiloShow2 = {
    marginLeft: '10px',
    marginTop: '15px'
}


const Services = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        window.scrollTo(0, 0);
        actions.getServicios('http://127.0.0.1:5000/api/allservices')
    }, [])
    return (
        <>
            <div className="header-container mb-4 d-flex align-items-center">
                <h1 className="category-title" style={estiloShow2}>Gaming!</h1>
                <Link className="btn btn-primary" to="/gaming" role="button" style={estiloShow2}>Mostrar todas las clases</Link>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row'>
                    {!!store.services &&
                        store.services.length > 0 &&
                        store.services[0].individuals.map((item, index) => (
                            <CardGeneral {...item} key={index} index={index} />
                        ))}
                </div>
            </div>
            <div className="header-container mb-4 d-flex align-items-center">
                <h1 className="category-title" style={estiloShow}>Salud y autocuidado</h1>
                <Link className="btn btn-primary" to="/health" role="button" style={estiloShow}>Mostrar todas las clases</Link>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row'>
                    {!!store.services &&
                        store.services.length > 0 &&
                        store.services[1].individuals.map((item, index) => (
                            <CardGeneral {...item} key={index} index={index} />
                        ))}
                </div>
            </div>
            <div className="header-container mb-4 d-flex align-items-center">
                <h1 className="category-title" style={estiloShow}>Espiritualidad</h1>
                <Link className="btn btn-primary" to="/spirituality" role="button" style={estiloShow}>Mostrar todas las clases</Link>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row row-cols-1 row-cols-md-4 g-4'>
                    {!!store.services &&
                        store.services.length > 0 &&
                        store.services[2].individuals.map((item, index) => (
                            <CardGeneral {...item} key={index} index={index} />
                        ))}
                </div>
            </div>
            <div className="header-container mb-4 d-flex align-items-center">
                <h1 className="category-title" style={estiloShow}>Vida al aire libre</h1>
                <Link className="btn btn-primary" to="/outdoor" role="button" style={estiloShow}>Mostrar todas las clases</Link>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row'>
                    {!!store.services &&
                        store.services.length > 0 &&
                        store.services[3].individuals.map((item, index) => (
                            <CardGeneral {...item} key={index} index={index} />
                        ))}
                </div>
            </div>
            <div className="header-container mb-4 d-flex align-items-center">
                <h1 className="category-title" style={estiloShow}>Belleza & Moda</h1>
                <Link className="btn btn-primary" to="/fashion" role="button" style={estiloShow}>Mostrar todas las clases</Link>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row'>
                    {!!store.services &&
                        store.services.length > 0 &&
                        store.services[4].individuals.map((item, index) => (
                            <CardGeneral {...item} key={index} index={index} />
                        ))}
                </div>
            </div>
            <div className="header-container mb-4 d-flex align-items-center">
                <h1 className="category-title" style={estiloShow}>Habilidades sociales</h1>
                <Link className="btn btn-primary" to="/socialskills" role="button" style={estiloShow}>Mostrar todas las clases</Link>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row'>
                    {!!store.services &&
                        store.services.length > 0 &&
                        store.services[5].individuals.map((item, index) => (
                            <CardGeneral {...item} key={index} index={index} />
                        ))}
                </div>
            </div>
            <div className="header-container mb-4 d-flex align-items-center">
                <h1 className="category-title" style={estiloShow}>Sustentabilidad</h1>
                <Link className="btn btn-primary" to="/sustainability" role="button" style={estiloShow}>Mostrar todas las clases</Link>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row'>
                    {!!store.services &&
                        store.services.length > 0 &&
                        store.services[6].individuals.map((item, index) => (
                            <CardGeneral {...item} key={index} index={index} />
                        ))}
                </div>
            </div>
            <div className="header-container mb-4 d-flex align-items-center">
                <h1 className="category-title" style={estiloShow}>Cuidado de mascotas</h1>
                <Link className="btn btn-primary" to="/petcare" role="button" style={estiloShow}>Mostrar todas las clases</Link>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row'>
                    {!!store.services &&
                        store.services.length > 0 &&
                        store.services[7].individuals.map((item, index) => (
                            <CardGeneral {...item} key={index} index={index} />
                        ))}
                </div>
            </div>
            <div className="header-container mb-4 d-flex align-items-center">
                <h1 className="category-title" style={estiloShow}>Cuidado del hogar</h1>
                <Link className="btn btn-primary" to="/homecare" role="button" style={estiloShow}>Mostrar todas las clases</Link>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row'>
                    {!!store.services &&
                        store.services.length > 0 &&
                        store.services[8].individuals.map((item, index) => (
                            <CardGeneral {...item} key={index} index={index} />
                        ))}
                </div>
            </div>
            <div className="header-container mb-4 d-flex align-items-center">
                <h1 className="category-title" style={estiloShow}>Hobbies</h1>
                <Link className="btn btn-primary" to="/hobbies" role="button" style={estiloShow}>Mostrar todas las clases</Link>
            </div>
            <div className='container-fluid' style={estiloBoton}>
                <div className='row'>
                    {!!store.services &&
                        store.services.length > 0 &&
                        store.services[9].individuals.map((item, index) => (
                            <CardGeneral {...item} key={index} index={index} />
                        ))}
                </div>
            </div>
        </>
    );
};

export default Services;