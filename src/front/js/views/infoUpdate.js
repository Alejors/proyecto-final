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
                    <h3>My Personal Information</h3>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            Name
                        </span>
                        <input type="text" className="form-control" name='name' value={store.name} onChange={e => actions.handleChange(e)} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">
                            Lastname
                        </span>
                        <input type="text" className="form-control" name='lastname' value={store.lastname} onChange={e => actions.handleChange(e)} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">
                            Email
                        </span>
                        <input type="email" className="form-control" name='email' id="basic-url" value={store.email} onChange={e => actions.handleChange(e)} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">
                            Phonenumber
                        </span>
                        <input type="text" className="form-control" name='phonenumber' id="basic-url" value={store.phonenumber} onChange={e => actions.handleChange(e)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" name='picture' id="inputGroupFile02" onChange={e => actions.handlePicture(e)}/>
                        <label className="input-group-text" htmlFor="inputGroupFile02">Profile picture</label>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">
                            facebook
                        </span>
                        <input type="text" className="form-control" name='facebook' id="basic-url" value={store.facebook} onChange={actions.handleChange} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">
                            instagram
                        </span>
                        <input type="text" className="form-control" name='instagram' id="basic-url" value={store.instagram} onChange={actions.handleChange} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">
                            twitter
                        </span>
                        <input type="text" className="form-control" name='twitter' id="basic-url" value={store.twitter} onChange={actions.handleChange} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">
                            linkedin
                        </span>
                        <input type="text" className="form-control" name='linkedin' id="basic-url" value={store.linkedin} onChange={actions.handleChange} />
                    </div>
                    <input type={'submit'} className="btn btn-primary" value="submit" />
                </form>
                <h3 className="mt-3">Category: <strong>{store.rol}</strong></h3>
                <span className='btn btn-primary mt-3' onClick={actions.switchCategory}> Cambiar categoría de usuario</span>
                <div className="input-group my-3 flex-column">
                    <span className="input-group-text">My Topics</span>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Gaming</li>
                        <li className="list-group-item">Spirituality</li>
                        <li className="list-group-item">Health</li>
                        <li className="list-group-item">Outdoor-living</li>
                    </ul>
                    <Link to='/preferences'><button className="btn btn-primary mt-3">Update preferences</button></Link>
                </div>
            </div>
        </div>
    )
}

export default InfoUpdate;