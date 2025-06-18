import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Formulario() {
    const [nombre, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setNombre('')
        setMensaje('');

        if(!nombre.trim() || !mensaje.trim){
            Swal.fire({
                icon:"error",
                title: "Error campos vacios", 
                text: "Los campos deben de llenarse para poder subir el ticket",
                timer: 2000,
                showConfirmButton: false
            })
            return;
        }


        const confirmacion = Swal.fire({
        icon: 'success',
        title:"Formulario subido",
        text: 'Actividad subida correctamente'
        })
    }
    return (
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                    Ingrese el ticket
                </label>
                <input
                    id="nombre"
                    name="nombre"
                    type="text" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ingrese el título de la actividad..."
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                    Informacion del ticket
                </label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Escriba su mensaje aquí..."
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
            </div>

            <button type= 'submit' className="bg-amber-700 text-white rounded-2xl mt-5 p-2"> Enviar datos</button>
        </form>
    )
}