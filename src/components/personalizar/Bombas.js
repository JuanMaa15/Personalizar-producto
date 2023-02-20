import React from 'react'
import { bombas } from '../../data/bombas'
import { agregarIngredientes } from '../../helpers/agregarIngredientes';

export const Bombas = ({ingredientes, setIngredientes, setTotal}) => {

  const guardarIngrediente = (e) => {
    let id = e.target.value;
    let total = 0;

    let bomba = bombas.filter(elemento => elemento.id === parseInt(id));

    agregarIngredientes(bomba[0], ingredientes, setIngredientes, 4);

    ingredientes.map ( ingrediente => {
      total += ingrediente.precio;
    });
    
      setTotal(total);


  }

  return (
    <>
      {
        bombas.map( bomba => {
          return (
            <div className="col column-33" key={bomba.id}>
              <article className="cont-ingredients">
                  <input type="radio" name='bomba' value={bomba.id} onChange={ guardarIngrediente } />
                  <h3>{bomba.nombre}</h3>
                  <p>{bomba.descripcion}</p>
                  <h4>Valor: {bomba.precio} $</h4>
              </article>
          </div>
          )
        })
      }
    </>
  )
}
