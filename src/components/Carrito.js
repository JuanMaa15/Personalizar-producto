import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Carrito = () => {

    const [carrito, setCarrito] = useState(""); 
    const [total_pedido, setTotalPedido] = useState(0);

    useEffect( () => {
        traerProductosCarrito();
    }, []);

    const traerProductosCarrito = () => {
        
        let listado_carrito = JSON.parse(localStorage.getItem("carrito"));
        let total = 0;

        if (Array.isArray(listado_carrito)) {

            setCarrito(listado_carrito);

            //Total del pedido
            listado_carrito.forEach( producto => {
                total += producto.total; 
            });

            setTotalPedido(total);

        }

    };

    const removerProducto = (e) => {

        let id = e.target.value;
        let total = 0;

        let listado_carrito = JSON.parse(localStorage.getItem("carrito"));
        let nuevo_listado = listado_carrito.filter(producto => producto.id !== parseInt(id));

        localStorage.setItem("carrito", JSON.stringify(nuevo_listado));
        
        setCarrito(nuevo_listado);

        nuevo_listado.forEach( producto => {
            total += producto.total; 
        });

        setTotalPedido(total);
    } 

  return (
    <div className="page">
        <section className="shopping-cart">
            <div className="container">
                <div className="row">
                    <div className="col column-100">
                        <h2 className="title">Carrito de compras</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col column-66">

                        {carrito.length !== 0 ? 

                            carrito.map((producto) => {
                                return(
                                    <article className="product-cart" key={producto.id}>
                                        <div className="row">
                                            <div className="col column-33">
                                                <h3>Ancheta personalizada para ocasión</h3>
                                            </div>
                                            <div className="col column-66">
                                                <p>
                                                    {producto.producto.map(ingrediente => { 
                                                        if (ingrediente !== null)  return ingrediente.nombre + " - ";
                                                    })}
                                                </p>
                                                <div className='cont-total-options'>
                                                    <h4>Precio: {producto.total} $</h4>
                                                    <div>
                                                        <Link className='btn-transparente' to={`/detalle-producto/${producto.id}`}>Detalle</Link>
                                                        <button className='btn-transparente' value={producto.id} onClick={ removerProducto } >Borrar</button>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>
                                    
                                    </article>           
                                )
                            })
                            
                        : (
                            <div className='row'>
                                <div className='col column-100 center-block'>
                                    <h2>El carrito esta vacío</h2>
                                </div>
                            </div>
                        )}
                        
                    </div>
                    <div className="col column-33">
                        <div className="total">

                            <h3><span>Total:</span> {total_pedido} $</h3>

                            <a className="btn btn-orange">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
