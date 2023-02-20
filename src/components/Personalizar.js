import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Listado } from './Listado';

export const Personalizar = ({ingredientes,setIngredientes,total, setTotal}) => {

    /* Nota: Al no tener algun estado (useState) que cambie en la interfaz (vista de usuario) no permitira que la lista de 
    los ingredientes que se van seleccionando se actualicen 
    Ejemplo: En la seccion base, los ingredientes base de plastico grande y base de icopor pequeña no actualizaran en listado de 
    ingredientes ya que el total(Que es un estado) no cambia desde la interfaz. */

    const [pagePersonalizar, setPagePersonalizar] = useState("");
    const [respuesta, setRespuesta] = useState("")
    let url = useNavigate();

    const navLink = (isActive, url) => {
        if (isActive) {
            setPagePersonalizar(url);
            return "active"; 
        }
        return "";
    }

    const eliminarIngrediente = (id) => {

        let total_local = total;
        let lista_ingredientes = ingredientes;

        /* let index = lista_ingredientes.findIndex(ingrediente => ingrediente.id === id);
        lista_ingredientes[index] = null; */

        let nueva_lista = lista_ingredientes.filter(ingrediente => ingrediente.id !== id);
        let ingrediente = lista_ingredientes.filter(ingrediente => ingrediente.id === id);

        setIngredientes(nueva_lista);         
        
        total_local -= ingrediente[0].precio;
            
        setTotal(total_local);
        
        console.log(ingredientes);

    }

    const guardarLocalstorage = () => {

        if (ingredientes.length !== 0) {
            setRespuesta("");
            
            let listado_carrito = JSON.parse(localStorage.getItem("carrito"));
            let producto = {
                "id": new Date().getTime(),
                "producto": ingredientes,
                "total": total
            };
            
            if (Array.isArray(listado_carrito)) {

                listado_carrito.push(producto);
              
                localStorage.setItem("carrito", JSON.stringify(listado_carrito));

            }else{
                localStorage.setItem("carrito", JSON.stringify([producto]));
                
            }
            
            setRespuesta("agregado");
            setIngredientes([]);
            setTotal(0);

            setTimeout(() => {
                url("/carrito");
            }, 3000);

        }else{
            setRespuesta("error");
        }

    }
    

  return (
    <div className="page">
        <section className="personalize">
            <div className="container">
                <div className="row">
                    <div className="col column-100">
                        <h2 className="title">Personalizar producto</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col column-25">
                        <div className="nav-lateral">
                            <ul>
                                <li><NavLink to="base" className={ ({isActive}) => navLink(isActive, "pasabocas") }>Base</NavLink></li>
                                <li><NavLink to="pasabocas" className={ ({isActive}) => navLink(isActive, "dulces") }>Pasabocas</NavLink></li>
                                <li><NavLink to="dulces" className={ ({isActive}) => navLink(isActive, "refrescos") }>Dulces</NavLink></li>
                                <li><NavLink to="refrescos" className={ ({isActive}) => navLink(isActive, "bombas") }>Refrescos</NavLink></li>
                                <li><NavLink to="bombas" className={ ({isActive}) => navLink(isActive, "peluches") }>Bombas</NavLink></li>
                                <li><NavLink to="peluches" className={ ({isActive}) => navLink(isActive, "add") }>Peluches</NavLink></li>
                            </ul>
                        </div>
                        <div className='lista-ingredientes'>
                            <h3>Cantidad: { ingredientes.length }</h3>
                            {ingredientes && ingredientes.length > 0 && (
                                
                                    ingredientes.map( ingrediente => {
                                        return(
                                            <div className='ingrediente' key={ingrediente.id}>
                                                <h4> {ingrediente.nombre} - {ingrediente.precio} $ </h4>
                                                <button className='btn-transparente' onClick={ (e) => eliminarIngrediente(ingrediente.id) }> &times; </button>
                                            </div>               
                                            
                                        )
                                    })
                                    
                            )}
                        </div>
                    </div>
                    <div className="col column-75">
                        <div className="row">
                    
                            <Outlet />
  
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col column-100 center-block">
                        { pagePersonalizar !== "add" ?  (
                         <Link to={ pagePersonalizar } className="btn btn-orange">Siguiente</Link>
                        ) : (
                            <button className="btn btn-orange" onClick={ guardarLocalstorage }>Añadir al carrito</button>
                        )}
                        <h3 className='text-total'>Total: {total} $ </h3>
                    </div>
                    { respuesta === "error" && (
                        <div className='col column-100 center-block'>
                            <p className='text-red'>El listado de ingredientes esta vacío</p>
                        </div>
                    )}
                    { respuesta === "agregado" && (
                       
                        <div className='col column-100 center-block'>
                            <p className='text-green'>El producto se agregó corretamente al carrito</p>
                        </div>
                        
                    )}
                </div>
            </div>
        </section>
    </div>
  )
}
