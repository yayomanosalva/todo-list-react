import React from 'react'

const AddTdL = () => {
    return (
        <>
            <h1 className="text-2xl text-black">Agregar tarea</h1>
            <br />
            <form
            >
                <input
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 text-2xl focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    type="text"
                    placeholder="Nombre de la tarea"
                    autoComplete="off"
                />
                <button
                    type="submit"
                    title="Agregar"
                    class="btn btn-primary"
                >
                    Agregar
                </button>
            </form>

        </>
    )
}

export default AddTdL
