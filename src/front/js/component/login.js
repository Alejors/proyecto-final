import React from "react";
import { Link } from "react-router-dom";

export default function login() {
  return (
    <>
      <div className="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
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
                        <Link
                          to="index.html"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </Link>
                        <hr />
                        <Link
                          to="index.html"
                          className="btn btn-google btn-user btn-block"
                        >
                          <i className="fab fa-google fa-fw" /> Login with
                          Google
                        </Link>
                        <Link
                          to="index.html"
                          className="btn btn-facebook btn-user btn-block"
                        >
                          <i className="fab fa-facebook-f fa-fw" /> Login with
                          Facebook
                        </Link>
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link className="small" to="forgot-password.html">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link className="small" to="register.html">
                          Create an Account!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bootstrap core JavaScript*/}
      {/* Core plugin JavaScript*/}
      {/* Custom scripts for all pages*/}
    </>
  );
}
