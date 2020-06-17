import React from "react";

const FormInput = ({ label, placeholder, type }) => {
    return(
        <div className="form-group">
            <label className="form-control-label">{label}</label>
            <input 
                type={type}
                placeholder={placeholder} 
                name="firstname" 
                className="form-control"/>
        </div>
    );
};

export default FormInput;