import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/login.css";
import "../styles/footer.css";
import "../styles/landing.css";
import "../styles/radio.css";
import "../styles/radio2.css";
import "../styles/radio3.css";
import "../styles/radio4.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./layout";

ReactDOM.render(<Layout />, document.querySelector("#app"));