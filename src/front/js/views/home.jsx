import React from "react";

import Register from "../component/register";
import Test from "../component/test";
import Info2 from "../component/info2";
import About from "../component/about";


const Home = () => {
	return (
		<div className="text-center">
			<Info2 />
			<About />
			<Register />
			<Test />
		</div>
	);
};

export default Home;
