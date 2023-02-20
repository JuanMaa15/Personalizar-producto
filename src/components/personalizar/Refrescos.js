import React from 'react'
import { refrescos } from '../../data/refrescos'
import { agregarIngredientes } from '../../helpers/agregarIngredientes';

export const Refrescos = ({ingredientes, setIngredientes, setTotal}) => {

  

  const guardarIngrediente = (e) => {

    let id = e.target.value;
    let total = 0;
    let refresco = refrescos.filter(elemento => elemento.id === parseInt(id));

    agregarIngredientes(refresco[0], ingredientes, setIngredientes, 3);

    ingredientes.map ( ingrediente => {
      total += ingrediente.precio;
    });
    
    setTotal(total);

  }

  return (
    <>
      {
        refrescos.map( refresco => {
          return (
            <div className="col column-33" key={refresco.id}>
              <article className="cont-ingredients">
                  <input type="radio" name='refresco' value={refresco.id} onChange={ guardarIngrediente } />
                  <h3>{refresco.nombre}</h3>
                  <p>{refresco.descripcion}</p>
                  <h4>Valor: {refresco.precio} $</h4>
              </article>
          </div>
          )
        })
      }
    </>
  )
}
