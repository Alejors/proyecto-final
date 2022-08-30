import React from "react";


const estiloLetra = {
    fontSize: "10px",
    marginLeft: "42px"
}

const PasswordRequisito = ({ checkMayus, checkNumero, checkLargo, checkCaracterEspecial }) => {

    return (
        <div>
            <p className={checkMayus} style={estiloLetra}>Debe contener al menos 1 mayúscula</p>
            <p className={checkNumero} style={estiloLetra}>Debe contener al menos 1 número</p>
            <p className={checkLargo} style={estiloLetra}>Debe contener al menos 8 caracteres</p>
            <p className={checkCaracterEspecial} style={estiloLetra}>Debe contener al menos 1 caracter especial</p>
        </div>
    )
};

export default PasswordRequisito