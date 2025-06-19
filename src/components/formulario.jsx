import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Formulario() {
    const [nombre, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [guardar, setGuardar] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre.trim() || !mensaje.trim) {
            Swal.fire({
                icon: "error",
                title: "Error campos vacios",
                text: "Los campos deben de llenarse para poder subir el ticket",
                timer: 2000,
                showConfirmButton: false
            })
            return;
        }


        const confirmacion = Swal.fire({
            icon: 'success',
            title: "Formulario subido",
            text: 'Actividad subida correctamente'
        })

        const nuevaActividad = {
            id: Date.now(),
            nombre,
            mensaje
        }
        setNombre('')
        setMensaje('');
        setGuardar([...guardar, nuevaActividad])
    }
    return (
        <section>
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

                <button type='submit' className="bg-amber-700 text-white rounded-2xl mt-5 p-2"> Enviar datos</button>
            </form>

            <h1 className="mt-20 text-center font-extrabold text-4xl ">Actividades</h1>
            <table className="min-w-full table-auto border border-gray-300 rounded-md shadow-md mt-5">
                <thead className="bg-amber-800 text-white text-left">
                    <tr>
                        <th className="px-4 py-2">Id</th>
                        <th className="px-4 py-2">Nombre</th>
                        <th className="px-4 py-2">Actividad</th>
                    </tr>
                </thead>
                <tbody>
                    {guardar.map((mostrar) => (
                        <tr key={mostrar.id} className="border-t hover:bg-blue-50">
                            <td className="px-4 py-2">{mostrar.id}</td>
                            <td className="px-4 py-2">{mostrar.nombre}</td>
                            <td className="px-4 py-2">{mostrar.mensaje}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}