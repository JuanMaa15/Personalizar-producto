import React from 'react'
import { bases } from '../../data/bases'
import { agregarIngredientes } from '../../helpers/agregarIngredientes'

export const Base = ({ingredientes, setIngredientes, setTotal}) => {

  
    const guardarIngrediente = (e) => {
      
        let id = e.target.value;
        let total = 0;

        let base = bases.filter(base => base.id === parseInt(id));

        agregarIngredientes(base[0], ingredientes, setIngredientes, 0);
        

        ingredientes.map ( ingrediente => {
          total += ingrediente.precio;
        });
        
        setTotal(total);

     
    }

  return (
    <>
      {
        bases.map( base => {
          return (
            <div className="col column-33" key={base.id}>
              <article className="cont-ingredients">
                  <input type="radio" name='base' value={base.id} onChange={ (e) => guardarIngrediente(e) } />
                  <h3>{base.nombre}</h3>
                  <p>{base.descripcion}</p>
                  <h4>Valor: {base.precio} $</h4>
              </article>
          </div>
          )
        })
      }
    </>
  )
}
