import React from 'react';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import "../../styles/private_teacher.css";

export default function () {
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
                                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                        alt="User"
                                    />
                                </div>
                                <div className="user-data">
                                    <h4>Daniel Adams</h4>
                                    <span>Joined February 06, 2017</span>
                                </div>
                            </div>
                        </aside>
                        <nav className="list-group">
                            <a className="list-group-item" href="/profile">
                                <i className="fa fa-map" />
                                Datos personales
                            </a>
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
                                        type="title"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Escribe un titulo aqui"
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
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows={3}
                                        defaultValue=""
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
                                Agregar URL de un video de tu clase:
                            </label>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon3">
                                    https://www.youtube.com/
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="basic-url"
                                    aria-describedby="basic-addon3"
                                />
                            </div>
                        </div>
                        <div className="comment col-md-6">
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
                        <div className="container">
                            <h1>Selecciona una categoria</h1>
                        </div>
                        <div className="form-floating my-4 ">
                            <Form.Select aria-label="Default select example">
                                <option>Abre para ver las opciones</option>
                                <option value="1">Espiritualidad</option>
                                <option value="2">Gamming</option>
                                <option value="3">Salud y autocuidado</option>
                                <option value="4">Outdoor</option>
                                <option value="5">Beauty & Fashion</option>
                                <option value="6">Habilidades sociales</option>
                                <option value="7">Cuidado de mascotas</option>
                                <option value="8">Cuidado del hogar</option>
                                <option value="9">Hobbies</option>
                                <option value="10">Sustentabilidad</option>
                            </Form.Select>
                            <label htmlFor="floatingSelect">Selecciona un servicio</label>
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
                        </div>
                        <form>


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
