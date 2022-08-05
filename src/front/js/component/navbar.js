import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark sticky-top">
        <div className="container-fluid justify-content-end">
          <Link className="navbar-brand navbar-right" to="#">
            Navbar
          </Link>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="#" >
                <span className="user-icon text-light" />
              </Link>
            </li>
            <li>
              <Link to="/login" >
                <span className="glyphicon glyphicon-log-in text-light" /></Link>
            </li>
          </ul>
          <button
            className="navbar-toggler position-absolute top-1 start-0 m-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-start text-light bg-dark"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Link
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
