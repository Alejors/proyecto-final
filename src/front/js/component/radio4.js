import React from "react";

const Radio4 = () => {

    const [formData4, setFormData4] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
            emotion: ""
        }
    )
    console.log(formData4.emotion)
    
    function handleChange(event) {
        const {name, value} = event.target
        setFormData4(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <div className="position4">
            <div id="radios4">
                <label htmlFor="input14"></label>
                <input 
                id="input14" 
                name="emotion" 
                type="radio"
                value= "supersad"
                onChange={handleChange}
                checked={formData4.emotion === "supersad"}
                />
                <label htmlFor="input24"></label>
                <input 
                id="input24" 
                name="emotion" 
                type="radio"
                value= "sad"
                onChange={handleChange}
                checked={formData4.emotion === "sad"}
                />
                <label htmlFor="input34"></label>
                <input 
                id="input34" 
                name="emotion" 
                type="radio"
                value= "undifferent"
                onChange={handleChange}
                checked={formData4.emotion === "undifferent"} 
                />
                <label htmlFor="input44"></label>
                <input 
                id="input44" 
                name="emotion" 
                type="radio"
                value= "happy"
                onChange={handleChange}
                checked={formData4.emotion === "happy"}
                />
                <label htmlFor="input54"></label>
                <input 
                id="input54" 
                name="emotion"
                type="radio"
                value= "superhappy"
                onChange={handleChange}
                checked={formData4.emotion === "superhappy"}
                />
                <span id="slider4"></span>
            </div>
        </div>
    )
}

export default Radio4