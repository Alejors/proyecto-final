import React from "react";

const Radio2 = () => {

    const [formData2, setFormData2] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
            emotion: ""
        }
    )
    console.log(formData2.emotion)
    
    function handleChange(event) {
        const {name, value} = event.target
        setFormData2(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <div className="position2">
            <div id="radios2">
                <label htmlFor="input12"></label>
                <input 
                id="input12" 
                name="emotion" 
                type="radio"
                value= "supersad"
                onChange={handleChange}
                checked={formData2.emotion === "supersad"}
                />
                <label htmlFor="input22"></label>
                <input 
                id="input22" 
                name="emotion" 
                type="radio"
                value= "sad"
                onChange={handleChange}
                checked={formData2.emotion === "sad"}
                />
                <label htmlFor="input32"></label>
                <input 
                id="input32" 
                name="emotion" 
                type="radio"
                value= "undifferent"
                onChange={handleChange}
                checked={formData2.emotion === "undifferent"} 
                />
                <label htmlFor="input42"></label>
                <input 
                id="input42" 
                name="emotion" 
                type="radio"
                value= "happy"
                onChange={handleChange}
                checked={formData2.emotion === "happy"}
                />
                <label htmlFor="input52"></label>
                <input 
                id="input52" 
                name="emotion"
                type="radio"
                value= "superhappy"
                onChange={handleChange}
                checked={formData2.emotion === "superhappy"}
                />
                <span id="slider2"></span>
            </div>
        </div>
    )
}

export default Radio2