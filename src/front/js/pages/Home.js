import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const Home = () => {

	return (
		<div className="container-fluid">
			<div className="row my-2">
				<div>
					<h1 className="text-center">Better&Beyond</h1>
				</div>
			</div>
			<div className="row mt-5">
				<strong className="text-center">AQUI ME IMAGINO IRA UNA FOTO O CARRUSEL</strong>
			</div>
			<div className="row mt-5">
				<div>
					<p className="text-center">Upgrade yourself with the classes that our instructors offer <br/> 
				or <strong>treat yourself</strong> with our services...</p>
				</div>
			</div>
			<div className="row mt-5">
				<div className="d-flex justify-content-center">
					<p className="text-center">Por aquí debería ir el registro</p>
				</div>
				<div className="row">
					<div className="d-flex justify-content-center">
						<Link to="/login"><button className="btn btn-dark my-2">Login!</button></Link>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Home;