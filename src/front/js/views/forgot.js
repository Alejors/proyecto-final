import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Forgot = () => {
    const { store, actions } = useContext(Context);
    const history = useNavigate();

    return (
        <>
            <form className="user" onSubmit={(e) => actions.sendEmail(e, history)}>
                <div className="form-group my-3 mx-3">
                    <input
                        type="email"
                        className="form-control form-control-user my-1"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                        name='email'
                        onChange={(e) => actions.handleChange(e)} />
                </div>
                <button type='submit' className="btn btn-info btn-user btn-block ms-3">Reset password</button>
            </form>
            <Link to='/login'><span className='btn btn-danger ms-3 my-3'>Cancel</span></Link>
        </>
    )
}

export default Forgot;