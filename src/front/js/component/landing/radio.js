import React from "react";

const Radio = () => {

    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
            emotion: ""
        }
    )
    console.log(formData.emotion)
    
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <div className="position">
            <div id="radios">
                <label htmlFor="input1"></label>
                <input 
                id="input1" 
                name="emotion" 
                type="radio"
                value= "supersad"
                onChange={handleChange}
                checked={formData.emotion === "supersad"}
                />
                <label htmlFor="input2"></label>
                <input 
                id="input2" 
                name="emotion" 
                type="radio"
                value= "sad"
                onChange={handleChange}
                checked={formData.emotion === "sad"}
                />
                <label htmlFor="input3"></label>
                <input 
                id="input3" 
                name="emotion" 
                type="radio"
                value= "undifferent"
                onChange={handleChange}
                checked={formData.emotion === "undifferent"} 
                />
                <label htmlFor="input4"></label>
                <input 
                id="input4" 
                name="emotion" 
                type="radio"
                value= "happy"
                onChange={handleChange}
                checked={formData.emotion === "happy"}
                />
                <label htmlFor="input5"></label>
                <input 
                id="input5" 
                name="emotion"
                type="radio"
                value= "superhappy"
                onChange={handleChange}
                checked={formData.emotion === "superhappy"}
                />
                <span id="slider"></span>
            </div>
        </div>
    )
}

export default Radio