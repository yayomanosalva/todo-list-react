import React, { useState } from "react";

const CardTdL = (props) => {
    // const [array, setArray] = useState([]);
    // setArray([...array, props.list])
    //console.log("masaje", props.list);
    const styles = {
        with: "18rem"
    };

    const yy = {
        marginLeft: 5,
    };

    const divstyle = (
        <style jsx>
            {`
        ol {
          counter-reset: item;
          list-style-type: none;
          line-height: 2.2;
          margin-left: -40px;
        }

        ol li {
          display: block;
          position: relative;
        }

        ol li span {
          margin-left: 3rem;
            margin-right: 2rem;
        }

        ol li buttom {
          margin-left: 60px;
        }

        ol li:before {
          content: counter(item) " ";
          counter-increment: item;
          color: #7eb4e2;
          position: absolute;
          top: 50%;
          margin-top: -1em;
          background: #f9dd94;
          height: 2em;
          width: 2em;
          line-height: 2em;
          text-align: center;
          border-radius: 2em;
          font-weight: 700;
        }
      `}
        </style>
    );

    return (
        <>
            <div className="card" style={styles}>
                <div className="card-body">
                    <h2 className="card-title">Lista de Tareas</h2>
                    <ol className="list-group list-group-flush" style={yy}>
                        {props.list.map((item, id) => (
                            <li key={id} className="list-group-item">
                                <span>{item}</span>
                                <button title="Borrar" className="btn btn-danger">
                                    Borrar
                                </button>
                            </li>
                        ))}
                    </ol>

                    {/* <ol>
                        <li className="list-item">
                            <span>
                                "NOMBRE DE LA TAREA !!!"
                            </span>
                            <button
                                title="Borrar"
                                className=""
                            >
                                Borrar
                            </button>
                        </li>
                    </ol> */}
                </div>
            </div>
            {divstyle}
        </>
    );
};

export default CardTdL;
