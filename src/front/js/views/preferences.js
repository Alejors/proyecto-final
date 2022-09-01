import React, { useContext, useEffect } from "react";
import Questions from "../component/questions";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";

const Preferences = () => {
    const { store, actions } = useContext(Context);
    const history = useNavigate();

    let allQuestions = store.topicQuestions.map((question, i) => {
        return <Questions key={i} id={i} title={question.title} topicname={question.topicname} />
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <div className="container-fluid">
            <h2 className="mt-3">Con las siguientes preguntas podremos personalizar tus preferencias:</h2>
            <div className="row d-flex flex-column text-center">
                <form onSubmit={e => actions.updatePreferences(e, history)}>
                    {allQuestions}
                    <br/>
                    <div>
                        {
                            store.currentUser?.user?.profile?.services &&
                            store.currentUser.user.profile.services.length > 0 &&
                            <Link to='/update'><button className="btn btn-danger mb-3 me-2">Cancelar</button></Link>
                        }
                        
                        <input type='submit' className="btn btn-success mb-3" value='Guardar preferencias'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Preferences;