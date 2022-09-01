import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";

const InfoUpdate = () => {
    const { store, actions } = useContext(Context);
    const history = useNavigate();

    useEffect(() => {
        if (store.currentUser == null) history('/login');
        actions.loadProfile();
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="col-md-6 my-3">
                <form onSubmit={(e) => actions.updateInfo(e, history)}>
                    <h3>Mi Información Personal</h3>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            Nombre
                        </span>
                        <input type="text" className="form-control" name='name' value={store.name} onChange={e => actions.handleChange(e)} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">
                            Apellido
                        </span>
                        <input type="text" className="form-control" name='lastname' value={store.lastname} onChange={e => actions.handleChange(e)} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">
                            Correo Electrónico
                        </span>
                        <input type="email" className="form-control" name='email' value={store.email} onChange={e => actions.handleChange(e)} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">
                            Número de Teléfono
                        </span>
                        <input type="text" className="form-control" name='phonenumber' value={store.phonenumber} onChange={e => actions.handleChange(e)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" name='picture' id="inputGroupFile02" onChange={e => actions.handlePicture(e)}/>
                        <label className="input-group-text" htmlFor="inputGroupFile02">Foto de Perfil</label>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">
                            Facebook
                        </span>
                        <input type="text" className="form-control" name='facebook' value={store.facebook} onChange={actions.handleChange} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">
                            Instagram
                        </span>
                        <input type="text" className="form-control" name='instagram' value={store.instagram} onChange={actions.handleChange} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">
                            Twitter
                        </span>
                        <input type="text" className="form-control" name='twitter' value={store.twitter} onChange={actions.handleChange} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">
                            LinkedIn
                        </span>
                        <input type="text" className="form-control" name='linkedin' value={store.linkedin} onChange={actions.handleChange} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">
                            Contraseña
                        </span>
                        <input type="password" placeholder="xxxxxx" className="form-control" name='password' value={store.password} onChange={actions.handleChange} />
                    </div>
                    <input type={'submit'} className="btn btn-primary" value="Actualizar" />
                </form>
                <h3 className="mt-3">Categoría: <strong>{store.rol}</strong></h3>
                <button className='btn btn-primary mt-3' onClick={() => actions.switchCategory(history)}> Cambiar categoría de usuario</button>
                <div className="input-group my-3 flex-column">
                    <span className="input-group-text">Mis Temas</span>
                    <ul className="list-group list-group-flush">
                        {
                      !!store.currentUser &&
                      store.currentUser?.user?.profile?.services.length > 0 &&
                      store.currentUser.user.profile.services.map((ele, i) => {
                        return <li key={i} className="list-group-item" style={{'textTransform': 'capitalize'}}>{ele}</li>
                      })
                    }
                    </ul>
                    <Link to='/preferences'><button className="btn btn-primary mt-3">Actualizar Preferencias</button></Link>
                    <Link to='/profile'><button className="btn btn-danger mt-3">Cancelar</button></Link>
                </div>
            </div>
        </div>
    )
}

export default InfoUpdate;