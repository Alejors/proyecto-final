import React from "react";
import { Link } from "react-router-dom";

export default function login() {
  return (
    <>
      <>
        {/* Section: Design Block */}
        <section className="text-center text-lg-start">
          {/* Jumbotron */}
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
                    <h2 className="fw-bold mb-5">Sign up now</h2>
                    <form>
                      {/* 2 column grid layout with text inputs for the first and last names */}
                      <div className="row">

                      </div>
                      {/* Email input */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Email address
                        </label>
                      </div>
                      {/* Password input */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label>
                      </div>
                      {/* Checkbox */}
                      <div className="form-check d-flex justify-content-center mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example33"
                          defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="form2Example33">
                          Subscribe to our newsletter
                        </label>
                      </div>
                      {/* Submit button */}
                      <button
                        type="submit"
                        className="btn btn-info btn-block mb-4"
                      >
                        Sign up
                      </button>
                      {/* Register buttons */}
                      <div className="text-center">
                        <p>or sign up with:</p>
                        <a
                          role="button"
                          className="btn btn-link btn-floating mx-1"
                          href="https://www.facebook.com/login/"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a
                          role="button"
                          className="btn btn-link btn-floating mx-1"
                          href="https://accounts.google.com/login"
                        >
                          <i className="fab fa-google" />
                        </a>
                        <a
                          role="button"
                          className="btn btn-link btn-floating mx-1"
                          href="https://twitter.com/i/flow/login"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                        <a
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                          href="https://github.com/login"
                        >
                          <i className="fab fa-github" />
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-5 mb-lg-0">
                <img
                  src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                  className="w-100 rounded-4 shadow-4"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Jumbotron */}
        </section>
        {/* Section: Design Block */}
      </>

      {/* Bootstrap core JavaScript*/}
      {/* Core plugin JavaScript*/}
      {/* Custom scripts for all pages*/}
    </>
  );
}
