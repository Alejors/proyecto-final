import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

export default function login() {

  const { store, actions } = useContext(Context);
  const history = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (store.currentUser !== null) history('/private');
  }, [])

  return (
    <>
      <section className="text-center text-lg-start ms-5">
        <div className="container py-3 ms-5">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="card cascading-right"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)"
                }}
              >
                <div className="card-body p-4 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Sign in</h2>
                  <form className="user" onSubmit={(e) => actions.handleLogin(e, history)}>
                    <div className="form-group my-3 mx-3">
                      <input
                        type="email"
                        className="form-control form-control-user my-1"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                        name='email'
                        onChange={(e) => actions.handleChange(e)} />
                    </div>
                    <div className="d-flex form-group my-3 mx-3">
                      <input
                        type={!show ? "password" : "text"}
                        className="form-control form-control-user my-1"
                        id="exampleInputPassword"
                        placeholder="Password"
                        name='password'
                        onChange={(e) => actions.handleChange(e)}
                      />
                      <span className='btn btn-light my-1 ms-1 btn-md float' onClick={() => setShow(!show)}>{
                        !show ? (
                          <i className="fas fa-eye"></i>) : (
                          <i className="fas fa-eye-slash"></i>
                        )
                      }
                      </span>
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox small my-1">
                        <input
                          type="checkbox"
                          className="custom-control-input me-1"
                          id="customCheck"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck"
                        >
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <button type='submit' className="btn btn-info btn-user btn-block">Login!</button>
                    <hr />
                    <Link
                      to="#"
                      className="btn btn-google btn-user btn-block"
                    >
                      <i className="fab fa-google fa-fw" /> Login with
                      Google
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-facebook btn-user btn-block"
                    >
                      <i className="fab fa-facebook-f fa-fw" /> Login with
                      Facebook
                    </Link>
                  </form>
                  <hr />
                  <div className="text-center">
                    <Link className="small" to="/forgot">
                      Forgot Password?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                className="img-login rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>

  );
}
