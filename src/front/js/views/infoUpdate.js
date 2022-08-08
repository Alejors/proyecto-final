import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const InfoUpdate = () => {
    const { store, actions } = useContext(Context);
    const history = useNavigate();

    useEffect(() => {
        if(store.currentUser == null) history('/login');
        actions.loadProfile();
    }, [])

    return (
        <form onSubmit={(e) => actions.updateInfo(e, history)}>
            <div className="container-fluid d-flex justify-content-center">
                <div className="col-md-6 my-3">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            Name
                        </span>
                        <input type="text" className="form-control" name='name' value={store.name} onChange={actions.handleChange} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">
                            Lastname
                        </span>
                        <input type="text" className="form-control" name='lastname' value={store.lastname} onChange={actions.handleChange} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">
                            Email
                        </span>
                        <input type="email" className="form-control" name='email' id="basic-url" value={store.email} onChange={actions.handleChange} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">
                            Phonenumber
                        </span>
                        <input type="text" className="form-control" name='phonenumber' id="basic-url" value={store.phonenumber} onChange={actions.handleChange} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" id="inputGroupFile02" />
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
                    <div className="input-group mb-3 flex-column">
                        <span className="input-group-text">My Topics</span>
                        <div className="form-check form-switch mt-2 ms-2">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                defaultChecked="true"
                            />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                                Outdoor-living
                            </label>
                        </div>
                        <div className="form-check form-switch ms-2">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                defaultChecked="true"
                            />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                                Gaming
                            </label>
                        </div>
                        <div className="form-check form-switch ms-2">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                defaultChecked="true"
                            />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                                Spirituality
                            </label>
                        </div>
                        <div className="form-check form-switch m-2">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                defaultChecked="true"
                            />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                                Health
                            </label>
                        </div>
                    </div>
                    <input type={'submit'} className="btn btn-primary" value="submit" />
                </div>
            </div>
        </form>
    )
}

export default InfoUpdate;