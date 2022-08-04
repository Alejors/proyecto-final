import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>{
				!!store.email &&
				store.email.length > 0 &&
				store.email.map((elem, index) => {
					return <li key={index}>{elem.email}</li>
				})
			}</h1>
		</div>
	);
};

export default Home