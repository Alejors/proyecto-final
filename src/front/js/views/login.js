import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export default function login() {

  const { store, actions } = useContext(Context)
  const history = useNavigate();

  useEffect(() => {
    if(store.currentUser !== null) history('/private');
  },[])

  return (
    <>
      <section className="text-center text-lg-start">
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="card cascading-right"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)"
                }}
              >
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Sign in</h2>
                  <form className="user" onSubmit={(e) => actions.handleLogin(e, history)}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user my-1"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                        name='email'
                        onChange={(e) => actions.handleChange(e, history)} />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-user my-1"
                        id="exampleInputPassword"
                        placeholder="Password"
                        name='password'
                        onChange={(e) => actions.handleChange(e, history)}
                      />
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
                    <button type='submit' className="btn btn-primary btn-user btn-block">Login!</button>
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
                    <Link className="small" to="#">
                      Forgot Password?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                className="h-50 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>

  );
}
