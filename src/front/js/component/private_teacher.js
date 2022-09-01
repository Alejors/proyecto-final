import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import "../../styles/private_teacher.css";
import { Context } from '../store/appContext';

const Private_teacher = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container padding-bottom-3x mb-2">
                <div className="row">
                    <div className="col-lg-4">
                        <aside className="user-info-wrapper">
                            <div
                                className="user-cover"
                                style={{
                                    backgroundImage:
                                        "url(https://bootdey.com/img/Content/bg1.jpg)",
                                }}
                            ></div>
                            <div className="user-info">
                                <div className="user-avatar">
                                    <a className="edit-avatar" href="#" />
                                    <img
                                        src={(store.picture == "") ? "https://bootdey.com/img/Content/avatar/avatar1.png" : store.picture}
                                        alt="User"
                                    />
                                </div>
                                <div className="user-data">
                                    <h4>{store.name} {store.lastname}</h4>
                                    <span>Joined February 06, 2017</span>
                                </div>
                            </div>
                        </aside>
                        <nav className="list-group">
                            <Link className="list-group-item" to="/profile">
                                <i className="fa fa-map" />
                                Datos personales
                            </Link>
                            <a className="list-group-item with-badge" href="!#">
                                <i className="fas fa-glasses"></i>
                                Feed-back
                                <span className="badge badge-primary badge-pill">4</span>
                            </a>
                            <a className="list-group-item with-badge" href="#">
                                <i className="fas fa-graduation-cap"></i>
                                Estudiantes
                                <span className="badge badge-primary badge-pill">43</span>
                            </a>
                            <a className="list-group-item" href="#">
                                <i className="fa fa-map" />
                                Agregar/Eliminar clase
                            </a>
                            <a className="list-group-item with-badge" href="#!">
                                <i className="fa fa-dollar-sign"></i>
                                Mis ganancias
                                <span className="badge badge-primary badge-pill">4</span>
                            </a>
                        </nav>
                    </div>
                    <div className="col-lg-8">
                        <form onSubmit={e => { actions.handleIndividual(e) }}>
                            <div className="container">
                                <h1>Agrega una clase a tu perfil</h1>
                            </div>
                            <div className="padding-top-2x mt-2 hidden-lg-up" />
                            <div className="comment">
                                <div className="comment-author-ava">
                                    <img
                                        src="https://www.pinpng.com/pngs/m/207-2077375_png-libros-book-emoji-transparent-png.png"
                                        alt="Avatar"
                                    />
                                </div>
                                <>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleFormControlInput1"
                                            className="form-label"
                                        >
                                            Titulo de la clase:
                                        </label>
                                        <input
                                            name='nameIndividual'
                                            type="title"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="Escribe un titulo aqui"
                                            onChange={e => actions.handleChange(e)}
                                            value={store.nameIndividual}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleFormControlTextarea1"
                                            className="form-label"
                                        >
                                            Describe la clase que quieres realizar
                                        </label>
                                        <textarea
                                            name='descriptionIndividual'
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows={3}
                                            onChange={e => actions.handleChange(e)}
                                            value={store.descriptionIndividual}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleFormControlTextarea1"
                                            className="form-label"
                                        >
                                            Enumera especificaciones respecto a la clase que vas a agregar
                                        </label>
                                        <textarea
                                            name='especificationIndividual'
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows={6}
                                            onChange={e => actions.handleChange(e)}
                                            value={store.especificationIndividual}
                                        />
                                    </div>
                                </>
                            </div>
                            <div className="comment">
                                <div className="comment-author-ava">
                                    <img
                                        src="https://images.emojiterra.com/twitter/v13.1/512px/1f4fc.png"
                                        alt="Avatar"
                                    />
                                </div>
                                <label htmlFor="basic-url" className="form-label">
                                    Agregar URL de un video de tu clase (debe ser la url completa embed de youtube)
                                </label>
                                <div className="input-group mb-3">
                                    <input
                                        name='urlmediaIndividual'
                                        type="text"
                                        className="form-control"
                                        id="basic-url"
                                        aria-describedby="basic-addon3"
                                        onChange={e => actions.handleChange(e)}
                                        value={store.urlmediaIndividual}
                                    />
                                </div>
                            </div>

                            <div className="container">
                                <h1>Selecciona un tema:</h1>
                            </div>
                            <div className="form-floating my-4 ">
                                <Form.Select aria-label="Default select example" name='services_idIndividual' onChange={e => actions.handleChange(e)} value={store.services_idIndividual}>
                                    <option>Abre para ver las opciones</option>
                                    <option value="1">Gamming</option>
                                    <option value="2">Salud y autocuidado</option>
                                    <option value="3">Espiritualidad</option>
                                    <option value="4">Vida al aire libre</option>
                                    <option value="5">Belleza & Moda</option>
                                    <option value="6">Habilidades sociales</option>
                                    <option value="7">Sustentabilidad</option>
                                    <option value="8">Cuidado de mascotas</option>
                                    <option value="9">Cuidado del hogar</option>
                                    <option value="10">Hobbies</option>
                                </Form.Select>
                                <label htmlFor="floatingSelect">Selecciona un servicio</label>
                            </div>
                            {/*<div className="comment col-md-6">
                                <label htmlFor="basic-url" className="form-label">
                                    Agregar un precio tu clase:
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text">$</span>
                                    <input
                                        type="text-end"
                                        className="form-control"
                                        aria-label="Dollar amount (with dot and two decimal places)"
                                    />
                                </div>
                            </div>
                            <div className="comment">
                                <div className="comment-author-ava">
                                    <img
                                        src="https://w7.pngwing.com/pngs/844/613/png-transparent-computer-keyboard-emoji-symbol-emoticon-character-emoji-pencil-computer-keyboard-orange.png"
                                        alt="Avatar"
                                    />
                                </div>
                                <div className="comment-body">
                                    <p className="comment-text">Yoga (principiantes)</p>
                                    <p className="comment-text">Hikking (senderismo preparado)</p>
                                    <p className="comment-text">Meditacion (respiracion equilibrada)</p>
                                </div>
                            </div>*/}
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Private_teacher;