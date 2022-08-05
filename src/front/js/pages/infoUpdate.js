import React from "react";

const InfoUpdate = () => {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="col-md-6 my-3">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        Name
                    </span>
                    <input type="text" className="form-control" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">
                        Lastname
                    </span>
                    <input type="text" className="form-control" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">
                        Email
                    </span>
                    <input type="email" className="form-control" id="basic-url" />
                </div>
                <div className="input-group mb-3 flex-column">
                    <span className="input-group-text">My Topics</span>
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                            Outdoor-living
                        </label>
                    </div>
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                            Gaming
                        </label>
                    </div>
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                            Spirituality
                        </label>
                    </div>
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                            Health
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoUpdate;