import React from 'react'
import { Link } from "react-router-dom";

const ServiceLink = ({ content }) => {
    return (
        <li>
            <Link to={'/'+content}><span style={{'textTransform': 'capitalize'}}>{content}</span></Link>
        </li>
    )
}

export default ServiceLink;