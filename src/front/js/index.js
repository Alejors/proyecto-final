import React from "react";
import ReactDOM from "react-dom";


//include your index.scss file into the bundle
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./layout";

ReactDOM.render(<Layout />, document.querySelector("#app"));