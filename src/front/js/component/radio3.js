import React from "react";

const Radio3 = () => {

    const [formData3, setFormData3] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
            emotion: ""
        }
    )
    console.log(formData3.emotion)
    
    function handleChange(event) {
        const {name, value} = event.target
        setFormData3(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <div className="position3">
            <div id="radios3">
                <label htmlFor="input13"></label>
                <input 
                id="input13" 
                name="emotion" 
                type="radio"
                value= "supersad"
                onChange={handleChange}
                checked={formData3.emotion === "supersad"}
                />
                <label htmlFor="input23"></label>
                <input 
                id="input23" 
                name="emotion" 
                type="radio"
                value= "sad"
                onChange={handleChange}
                checked={formData3.emotion === "sad"}
                />
                <label htmlFor="input33"></label>
                <input 
                id="input33" 
                name="emotion" 
                type="radio"
                value= "undifferent"
                onChange={handleChange}
                checked={formData3.emotion === "undifferent"} 
                />
                <label htmlFor="input43"></label>
                <input 
                id="input43" 
                name="emotion" 
                type="radio"
                value= "happy"
                onChange={handleChange}
                checked={formData3.emotion === "happy"}
                />
                <label htmlFor="input53"></label>
                <input 
                id="input53" 
                name="emotion"
                type="radio"
                value= "superhappy"
                onChange={handleChange}
                checked={formData3.emotion === "superhappy"}
                />
                <span id="slider3"></span>
            </div>
        </div>
    )
}

export default Radio3