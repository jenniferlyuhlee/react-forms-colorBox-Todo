import React, { useState } from "react";
import "./NewBoxForm.css"

function NewBoxForm({addBox}) {
    const initialState = {
        color: "",
        width: "",
        height: ""
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data, 
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { color, width, height } = formData;
        addBox({...formData})
        setFormData(initialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className = "form-input">
                <label htmlFor="color">Color: </label>
                <input id = "color" 
                    type = "text"
                    name = "color" 
                    placeholder = "Ex: red"
                    value = {formData.color}
                    onChange = {handleChange}
                />
            </div>
            <div className = "form-input">
                <label htmlFor="height">Height: </label>
                <input id = "height" 
                    type = "text"
                    name = "height" 
                    placeholder = "Ex: 150"
                    value = {formData.height}
                    onChange = {handleChange}
                />
            </div>
            <div className = "form-input">
                <label htmlFor="width">Width: </label>
                <input id = "width" 
                    type = "text"
                    name = "width" 
                    placeholder = "Ex: 200"
                    value = {formData.width}
                    onChange = {handleChange}
                />
            </div>
            <button>Make a box!</button>
        </form>
    )
}

export default NewBoxForm;
