import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

const Register = () => {
    const { store, actions } = useContext(Context);
    const history = useNavigate();
    const [show, setShow] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState("");
    const [isError, setIsError] = useState("");

    const checkValidation = (e) => {
        console.log(confirmPassword);
        if (store.password !== confirmPassword) {
            setIsError("La contraseña debe coincidir");
        } else {
            setIsError(<i className="fas fa-check"></i>);
        }
    };
    return (
        <section className="vh-100 bg-transparent my-5 p-3" id="register_here">
            <div className="mask d-flex align-items-center h-70 gradient-custom-3">
                <div className="container h-70">
                    <div className="row d-flex justify-content-center align-items-center h-70">
                        <div className="col-12 col-md-6 col-md-6 col-md-4">
                            <div className="card" style={{ borderRadius: 15 }}>
                                <div className="card-body p-3">
                                    <h2 className="text-uppercase text-center mb-4">
                                        Create an account
                                    </h2>
                                    <div className='form-register'>
                                        <form onSubmit={e => {actions.handleSubmit(e, history)}}>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <input
                                                    name='name'
                                                    type="text"
                                                    id="form3Example1cg"
                                                    className="form-control form-control me-5"
                                                    placeholder="Your Name"
                                                    onChange={e => actions.handleChange(e)}
                                                    value={store.name}
                                                />
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <input
                                                    name='email'
                                                    type="email"
                                                    id="form3Example3cg"
                                                    className="form-control form-control me-5"
                                                    placeholder="E-mail"
                                                    onChange={e => actions.handleChange(e)}
                                                    value={store.email}
                                                />
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <input
                                                    name='password'
                                                    id="form3Example4cg"
                                                    className="form-control form-control"
                                                    placeholder="Password"
                                                    onChange={e => { actions.handleChange(e)}}
                                                    onKeyUp={() => checkValidation()}
                                                    type={!show ? "password" : "text"}
                                                    value={store.password}

                                                />
                                                 <span className='btn btn-light my-1 ms-1 btn-md float me-1' onClick={() => setShow(!show)}>{
                                                    !show ? (
                                                        <i className="fas fa-eye"></i>) : (
                                                        <i className="fas fa-eye-slash"></i>
                                                    )
                                                }
                                                </span>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-3"
                                                data-validate="Confirm data is required">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <input
                                                    name='confirmPassword'
                                                    id="form3Example4cdg"
                                                    className="form-control form-control"
                                                    onChange={(e) => { setConfirmPassword(e.target.value)}}
                                                    onKeyUp={() => checkValidation()}
                                                    type={!show ? "password" : "text"}
                                                    placeholder="Confirm password"

                                                />
                                                <span className='ms-2 me-5'>{isError}</span>  
                                            </div>
                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="form2Example3cg"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="form2Example3cg"
                                                >
                                                    I agree all statements in{" "}
                                                    <a href="#" className="text-body">
                                                        <u>Terms of service</u>
                                                    </a>
                                                </label>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button
                                                    type="submit"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                >
                                                    Register
                                                </button>
                                            </div>
                                            <p className="text-center text-muted mt-5 mb-0">
                                                Have already an account?{" "}
                                                <a href="/login" className="fw-bold text-body">
                                                    <u>Login here</u>
                                                </a>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register