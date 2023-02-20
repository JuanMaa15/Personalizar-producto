import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const Detalles = () => {

    const [producto, setProducto] = useState(null);
    const url = useNavigate();

    useEffect(() => {
        traerProducto();
    },[]);

    const {id} = useParams();
    
    const traerProducto = () => {

        let listado_carrito = JSON.parse(localStorage.getItem("carrito"));

        let nueva_lista = listado_carrito.filter(producto => producto.id === parseInt(id));

        if (nueva_lista.length === 0) {
            url("/error");
        }

        setProducto(nueva_lista[0]);
    };

  return (
    <div className="page">
        <section className="detalle">
            <div className="container">
                <div className="row">
                    <div className="col column-100">
                        <h2 className="title">Detalle del producto</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col column-100">
                        <h3 className="subtitle">Nombre: Ancheta personalizada para ocasión</h3>
                        <h3 className="subtitle">Ingredientes:</h3>
                    </div>
                </div>
                <div className="row">
                    { producto !== null && producto.producto.map(ingrediente => {
                        if (ingrediente !== null) {
                            return (
                                <div className="col column-33" key={ingrediente.id}>
                                    <article className="cont-ingredients">
                                        <h3>{ingrediente.nombre}</h3>
                                        <p>{ingrediente.descripcion}</p>
                                        <h4>Valor: {ingrediente.precio} $</h4>
                                    </article>
                                </div>
                            )
                        }
                        
                    })}
                    
                </div>
                <div className='row'>
                    <div className='col column-100'>
                        <div className='info-total'>
                            <Link className="btn btn-orange" to="/carrito"> Volver</Link>
                            <h3 className='subtitle'>Total: {producto !== null && producto.total} $</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
