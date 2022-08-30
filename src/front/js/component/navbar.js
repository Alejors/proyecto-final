import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";
import React, { useContext, useState } from 'react';


export default function Navbar() {
  const { actions } = useContext(Context);
  const history = useNavigate();

  return (
    <>
      <div className="containerr">
        <div className="header" />
        <span className="right-icons container-fluid">
          <Link className="navbar-brand navbar-right" to="/">
            Better&Beyond
          </Link>
          <ul className="nav navbar-nav navbar-right text-light">
            <li>
              <Link to="/login">
                <span className="user-icon" />
                <i className="fas fa-user fa-lg me-3 mt-1 text-light"></i>
              </Link>
            </li>
          </ul>
        </span>
        <input
          type="checkbox"
          className="openSidebarMenu"
          id="openSidebarMenu"
        />
        <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
          <div className="spinner diagonal part-1" />
          <div className="spinner horizontal" />
          <div className="spinner diagonal part-2" />
        </label>
        <div id="sidebarMenu">
          <ul className="sidebarMenuInner justify-content-end flex-grow-1 pe-3 mt-3 ms-3">
            <form className="d-flex">
              <input
                className="form-control me-2 bg-transparent text-light"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Pagina principal
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/private">
                Mis clases
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/private">
                Actividades
              </Link>
            </li>
            <li className="nav-item dropdown m-3">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="offcanvasNavbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Herramientas
              </Link>
              <ul
                className="dropdown-menu bg-info"
                aria-labelledby="offcanvasNavbarDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Perfil
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/preferences">
                    Preferencias
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/update">
                    Actualizar perfil
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider bg-info" />
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => actions.handleLogout(history)}
                >
                  Logout
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}