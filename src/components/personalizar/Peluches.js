import React from 'react'
import { peluches } from '../../data/peluches'
import { agregarIngredientes } from '../../helpers/agregarIngredientes';

export const Peluches = ({ingredientes, setIngredientes, setTotal}) => {


  const guardarIngrediente = (e) => {
    let id = e.target.value;
    let total = 0;

    let peluche = peluches.filter(elemento => elemento.id === parseInt(id));

    agregarIngredientes(peluche[0], ingredientes, setIngredientes, 5);

    ingredientes.map ( ingrediente => {
      total += ingrediente.precio;
    });
    
    setTotal(total);


  }

  return (
    <>
      {
        peluches.map( peluche => {
          return (
            <div className="col column-33" key={peluche.id}>
              <article className="cont-ingredients">
                  <input type="radio" name='peluche' value={peluche.id} onChange={ guardarIngrediente } />
                  <h3>{peluche.nombre}</h3>
                  <p>{peluche.descripcion}</p>
                  <h4>Valor: {peluche.precio} $</h4>
              </article>
          </div>
          )
        })
      }
    </>
  )
}
