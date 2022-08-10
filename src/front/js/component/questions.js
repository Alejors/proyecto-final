import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Next } from "react-bootstrap/esm/PageItem";
import { Context } from "../store/appContext";

const Questions = (props) => {
    const { actions } = useContext(Context);

    return (
        <>
            <h4 className="mt-5">{props.title}</h4>
            <input
                type="radio"
                className="btn-check"
                id={`yes-${props.topicname}`}
                name={props.topicname}
                value={true}
                onChange={e => actions.handlePreferences(e)}
            />
            <label className="btn btn-outline-success m-4" htmlFor={`yes-${props.topicname}`}>
                Si
            </label>
            <input
                type="radio"
                className="btn-check"
                name={props.topicname}
                id={`no-${props.topicname}`}
                value={false}
                onChange={e => actions.handlePreferences(e)}
            />
            <label className="btn btn-outline-success m-4" htmlFor={`no-${props.topicname}`}>
                No
            </label>
        </>
    )
}

Questions.propTypes = {
    title: PropTypes.string,
    topicname: PropTypes.string
}

export default Questions;