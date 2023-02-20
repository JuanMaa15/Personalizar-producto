import React from 'react'
import { dulces } from '../../data/dulces'
import { agregarIngredientes } from '../../helpers/agregarIngredientes';

export const Dulces = ({ingredientes, setIngredientes, setTotal}) => {


  const guardarIngrediente = (e) => {
    let id = e.target.value;
    let total = 0;

    let dulce = dulces.filter(elemento => elemento.id === parseInt(id));

    agregarIngredientes(dulce[0], ingredientes, setIngredientes, 2);

    ingredientes.map ( ingrediente => {
      total += ingrediente.precio;
    });
    
    setTotal(total);


  }
  return (
    <>
      {
        dulces.map( dulce => {
          return (
            <div className="col column-33" key={dulce.id}>
              <article className="cont-ingredients">
                  <input type="radio" name='dulce' value={dulce.id} onChange={ guardarIngrediente } />
                  <h3>{dulce.nombre}</h3>
                  <p>{dulce.descripcion}</p>
                  <h4>Valor: {dulce.precio} $</h4>
              </article>
          </div>
          )
        })
      }
    </>
  )
}
