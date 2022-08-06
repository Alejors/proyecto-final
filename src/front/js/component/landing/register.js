import React from 'react';
import { Link } from 'react-scroll';

const Register = () => {

    const [formData, setFormData] = React.useState(
        {username: "", password: "", confirmpassword: "",}
    )

    console.log(formData)

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.confirmpassword) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="Head" id="FirstHead">
                <div className="form" id='Reg'>
                    <input 
                    name='username'
                    className="form-control form-control-sm" 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Username"
                    value={formData.username}
                    />
                    <input
                    name='password'
                    className="form-control form-control-sm" 
                    onChange={handleChange}  
                    type="text" 
                    placeholder="..."
                    value={formData.password}
                    />
                    <input
                    name='confirmpassword'
                    className="form-control form-control-sm"
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Confirm password"
                    value={formData.confirmpassword}
                    />
                </div>
                <div className="button">
                    <button className="btn btn-dark">
                    <Link to="one" spy={true} smooth={false} offset={-200} duration={500} >Something</Link>
                    </button>
                    <button className="btn btn-dark">
                    <Link to="one" spy={true} smooth={false} offset={-200} duration={500} >Something</Link>
                    </button>
                </div>
            </div>
        </form>

    )
}

export default Register