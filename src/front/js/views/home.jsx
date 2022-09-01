import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';
import "../../styles/home.css";
import Register from "../component/register";


const Home = () => {
	const { store, actions } = useContext(Context);
	const history = useNavigate();

	return (

		<>
			<div className="card mb-4 bg-transparent mx-3 m-3 my-6 border-0 shadow rounded-4 overflow-hidden">
				<div className="row g-0">
					<div className="col-md-4">
						<img
							src="https://images.unsplash.com/photo-1657299143437-b63ce1fc01aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
							className="img-fluid shadow-lg mb-5 opacity-80"
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body text-center">
							<div className='container-title bg-transparent'><h1><strong>Better & Beyond</strong></h1></div>
							<h5 className="card-title ms-1 mt-5">
								Aprovecha tu tiempo al maximo junto a la plataforma mas flexible
								de la web
							</h5>
							<p className="card-text">
								Aprende desde casa con clases particulares online Elige entre
								miles de profesores en línea de todo el mundo y recibe clases
								orientadas a tu objetivo. When an unknown printer took a gallery of type and scrambled it to make a type specimen book.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'
							</p>
							{!store.currentUser &&
								(<p className="card-text">
									<a
										className="btn btn-dark border-0 shadow rounded-3 overflow-hidden"
										href="#register_here"
									>
										Regístrate Aquí
									</a>
								</p>)
							}
						</div>
					</div>
				</div>
			</div>
			{/*  card-group */}
			<div className="row card-group row-cols-md-2 py-5 mx-3 justify-content-center rounded">
				<div className="card mb-3 rounded" style={{ maxWidth: 540 }}>
					<div className="row justify-content-between">
						<div className="col-md-6 ps-0">
							<img
								src="https://picsum.photos/220/260"
								style={{
									backgroundAttachment: "fixed",
									backgroundSize: "cover",
								}}
								className="img-card rounded-start"
								alt="..."
							/>
						</div>
						<div className="col-md-6 pe-0">
							<div className="card-body col-12 text-center">
								<h5 className="card-title pe-0">Tu eliges tus tiempos</h5>
								<p className="card-text">
									Te ayudamos a buscar tu clase, segun tus intereses y
									desarrollamos la mejor lista de clases personalizadas para
									ti, nos adaptamos a tus horarios y nuestros guias te dan una
									evaluacion, solo debes dejar un video mostrando tus
									progresos.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div
					className="card mb-3 ms-5 rounded"
					style={{ maxWidth: 540 }}
				>
					<div className="row card-group justify-content-between">
						<div className="col-md-6 ps-0 rounded">
							<img
								src="https://picsum.photos/230/260"
								style={{
									backgroundAttachment: "fixed",
									backgroundSize: "cover",
								}}
								className="img-card rounded-start"
								alt="..."
							/>
						</div>
						<div className="col-md-6 pe-0">
							<div className="card-body text-center">
								<h5 className="card-title">La primera clase gratis!</h5>
								<p className="card-text">
									Puedes escoger una clase sin costo para ti, asi puedes decidir
									si quieres seguir con la misma clase o cambiarte a otra clase
									de tu interes antes de que se te haga algún cobro adicional.
									No te arrepentiras!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* register */}
			{
				!store.currentUser &&
				<Register />
			}
		</>
	);
};

export default Home;
