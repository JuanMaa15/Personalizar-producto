import React from 'react'
import { pasabocas } from '../../data/pasabocas'
import { agregarIngredientes } from '../../helpers/agregarIngredientes';

export const Pasabocas = ({ingredientes, setIngredientes, setTotal}) => {


  const guardarIngrediente = (e) => {
    let id = e.target.value;
    let total = 0;

    let pasaboca = pasabocas.filter(elemento => elemento.id === parseInt(id));

    agregarIngredientes(pasaboca[0], ingredientes, setIngredientes, 1);

    ingredientes.map ( ingrediente => {
      total += ingrediente.precio;
    });
    
    setTotal(total);

    
  }

  return (
    <>
      {
        pasabocas.map( pasaboca => {
          return (
            <div className="col column-33" key={pasaboca.id}>
              <article className="cont-ingredients">
                  <input type="radio" name='pasaboca' value={pasaboca.id} onChange={ guardarIngrediente } />
                  <h3>{pasaboca.nombre}</h3>
                  <p>{pasaboca.descripcion}</p>
                  <h4>Valor: {pasaboca.precio} $</h4>
              </article>
          </div>
          )
        })
      }
    </>
  )
}
