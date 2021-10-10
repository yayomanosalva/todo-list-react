import React, { useState } from "react";
import CardTdL from "./CardTdL";

const AddTdL = () => {
    const [task, setTask] = useState("");
    const [array, setArray] = useState([]);

    const AddTask = (e) => {
        e.preventDefault();
        console.log("task", task);
        setArray([...array, task])
        setTask('')
        //console.log("setArray", array);
    };

    const w3 = {
        width: "70%",
    };

    const StyleFrag = (
        <style jsx>
            {`
                textarea:focus,
                input[type="text"]:focus,
                input[type="password"]:focus,
                input[type="datetime"]:focus,
                input[type="datetime-local"]:focus,
                input[type="date"]:focus,
                input[type="month"]:focus,
                input[type="time"]:focus,
                input[type="week"]:focus,
                input[type="number"]:focus,
                input[type="email"]:focus,
                input[type="url"]:focus,
                input[type="search"]:focus,
                input[type="tel"]:focus,
                input[type="color"]:focus,
                .uneditable-input:focus {
                border-color: rgba(126, 239, 104, 0.8);
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
                    0 0 8px rgba(126, 239, 104, 0.6);
                outline: 0 none;
        }
      `}
        </style>
    );
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <h1 className="display-4">Agregar Tarea</h1>
                <p className="lead">En la siguiente caja de texto puede agendar sus tareas.</p>
            </div>

            <br />
            <form onSubmit={(e) => AddTask(e)} className="form-group">
                <div className="input-group mb-4" style={w3}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre de la tarea"
                        aria-label="Nombre de la tarea"
                        aria-describedby="basic-addon2"
                        autoComplete="off"
                        onChange={(e) => { setTask(e.target.value) }}
                        value={task}
                    />
                    <button
                        type="submit"
                        title="Agregar"
                        className="btn btn-info btn-block"
                    >
                        Agregar Tarea
                    </button>
                </div>
            </form>

            <div className="row">
                <div className="col-sm">
                    <CardTdL list={array} />
                </div>
            </div>
            {StyleFrag}
        </>
    );
};

export default AddTdL;
