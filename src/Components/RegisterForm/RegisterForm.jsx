import React from 'react'
import './RegisterForm.css'
import { FaUserCircle } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdOutlinePassword } from "react-icons/md";
import { HiIdentification } from "react-icons/hi2";





export const RegisterForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Hubby</h1>
            <span>Regístrate para tener acceso a actividades y ampliar tus hobbies.</span>
            <div className='input-box'>
                <input type="text" placeholder='Correo electrónico' />
                
            </div>
            <div className='input-box'>
                <input type="text" placeholder='Nombre completo' />
                
            </div>
            <div className='input-box'>
                <input type="text" placeholder='Nombre de usuario' />
                
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Contraseña' />
                
            </div>
            <div className='condiciones'>
                <p>Al registrarte, aceptas nuestras Condiciones, la Política de privacidad y la Política de cookies.</p>
            </div>
            
           <div className='boton-registro'>
                <button type='submit'>Registrarse</button>
           </div>
            
            <div className='cuenta-creada'>
                <p>¿Ya tienes una cuenta? <a href="">Inicia sesión</a></p>
            </div>
        </form>
    </div>
  )
}
