import React from 'react';
import './App.scss';

function Form() {
  return (
    <section className="Form" >
      <form className="formulario" action=""  required>
        <label >Nombres</label>
          <input id="firstName" type="text" required/>
        <label>Apellidos</label>
          <input id="lastName" type="text" required/>
        <label>Correo</label>
          <input id="email" type="email" placeholder="ejemplo@celumobile.com" required />
        <label>Telefono</label>
          <input id="tel" type="tel" title="Por favor solo digitar números" pattern="[0-9]{10}"/>
        <textarea id="comment" type="text" placeholder="Escribe tu mensaje :)" required/>
        <div className="g-recaptcha" data-sitekey="6LeVsrAUAAAAAHxWonFwVh4iLiq-tyCjzSqz-tAG"></div>
        <button >Enviar</button>
      </form>
    </section>
  );
}

export default Form;
