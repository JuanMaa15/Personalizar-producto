import React, { useEffect, useState } from 'react'
import { bases } from '../data/bases';
import { pasabocas } from '../data/pasabocas';
import { dulces } from '../data/dulces';
import { refrescos } from '../data/refrescos';
import { bombas } from '../data/bombas';
import { peluches } from '../data/peluches';

export const Listado = () => {

    const [listaBases, setListaBases] = useState([]);
    const [listaPasabocas, setListaPasabocas] = useState([]);
    const [listaDulces, setListaDulces] = useState([]);
    const [listaRefrescos, setListaRefrescos] = useState([]);
    const [listaBombas, setListaBombas] = useState([]);
    const [listaPeluches, setListaPeluches] = useState([]);

    useEffect(() => {
        traerBases();
        traerPasabocas();
        traerDulces();
        traerRefrescos();
        traerBombas();
        traerPeluches();
    }, []);


    const traerBases = () => {
        setListaBases(bases);
    };

    const traerPasabocas = () => {
        setListaPasabocas(pasabocas);
    };

    const traerDulces = () => {
        setListaDulces(dulces);
    };

    const traerRefrescos = () => {
        setListaRefrescos(refrescos);
    };

    const traerBombas = () => {
        setListaBombas(bombas);
    };

    const traerPeluches = () => {
        setListaPeluches(peluches);
    };

  return (
    <div className="page">
      <section className="listings">
          <div className="container">
              <div className="row">
                  <div className="col column-100">
                      <h2 className="title">Listado de las entidades</h2>
                  </div>
              </div>
              <div className="row">
                  <div className="col column-50">
                      <article className="cont-list">
                          <h3 className="subtitle">Bases</h3>
                          <table>
                              <thead>
                                  <tr>
                                      <th>ID</th>
                                      <th>Nombre</th>
                                      <th>Descripcion</th>
                                      <th>Precio</th>
                                  </tr>    
                              </thead>
                              <tbody>
                                    {listaBases.map(base => {
                                        return(
                                            <tr key={base.id}>
                                                <td>{base.id}</td>
                                                <td>{base.nombre}</td>
                                                <td>{base.descripcion}</td>
                                                <td>{base.precio} $</td>
                                            </tr>
                                        )
                                    })}
                                           
                              </tbody>
                          </table>
                      </article>
                  </div>
                  <div className="col column-50">
                      <article className="cont-list">
                          <h3 className="subtitle">Pasabocas</h3>
                          <table>
                              <thead>
                                  <tr>
                                      <th>ID</th>
                                      <th>Nombre</th>
                                      <th>Descripcion</th>
                                      <th>Precio</th>
                                  </tr>    
                              </thead>
                              <tbody>
                                {listaPasabocas.map(pasabocas => {
                                    return(
                                        <tr key={pasabocas.id}>
                                            <td>{pasabocas.id}</td>
                                            <td>{pasabocas.nombre}</td>
                                            <td>{pasabocas.descripcion}</td>
                                            <td>{pasabocas.precio} $</td>
                                        </tr>
                                    )
                                })}         
                              </tbody>
                          </table>
                      </article>
                  </div>
                  <div className="col column-50">
                      <article className="cont-list">
                          <h3 className="subtitle">Dulces</h3>
                          <table>
                              <thead>
                                  <tr>
                                      <th>ID</th>
                                      <th>Nombre</th>
                                      <th>Descripcion</th>
                                      <th>Precio</th>
                                  </tr>    
                              </thead>
                              <tbody>
                                {listaDulces.map(dulces => {
                                    return(
                                        <tr key={dulces.id}>
                                            <td>{dulces.id}</td>
                                            <td>{dulces.nombre}</td>
                                            <td>{dulces.descripcion}</td>
                                            <td>{dulces.precio} $</td>
                                        </tr>
                                    )
                                })}         
                              </tbody>
                          </table>
                      </article>
                  </div>
                  <div className="col column-50">
                      <article className="cont-list">
                          <h3 className="subtitle">Refrescos</h3>
                          <table>
                              <thead>
                                  <tr>
                                      <th>ID</th>
                                      <th>Nombre</th>
                                      <th>Descripcion</th>
                                      <th>Precio</th>
                                  </tr>    
                              </thead>
                              <tbody>
                                {listaRefrescos.map(refrescos => {
                                    return(
                                        <tr key={refrescos.id}>
                                            <td>{refrescos.id}</td>
                                            <td>{refrescos.nombre}</td>
                                            <td>{refrescos.descripcion}</td>
                                            <td>{refrescos.precio} $</td>
                                        </tr>
                                    )
                                })}         
                              </tbody>
                          </table>
                      </article>
                  </div>
                  <div className="col column-50">
                      <article className="cont-list">
                          <h3 className="subtitle">Bombas</h3>
                          <table>
                              <thead>
                                  <tr>
                                      <th>ID</th>
                                      <th>Nombre</th>
                                      <th>Descripcion</th>
                                      <th>Precio</th>
                                  </tr>    
                              </thead>
                              <tbody>
                                {listaBombas.map(bombas => {
                                    return(
                                        <tr key={bombas.id}>
                                            <td>{bombas.id}</td>
                                            <td>{bombas.nombre}</td>
                                            <td>{bombas.descripcion}</td>
                                            <td>{bombas.precio} $</td>
                                        </tr>
                                    )
                                })}         
                              </tbody>
                          </table>
                      </article>
                  </div>
                  <div className="col column-50">
                      <article className="cont-list">
                          <h3 className="subtitle">Peluches</h3>
                          <table>
                              <thead>
                                  <tr>
                                      <th>ID</th>
                                      <th>Nombre</th>
                                      <th>Descripcion</th>
                                      <th>Precio</th>
                                  </tr>    
                              </thead>
                              <tbody>
                                {listaPeluches.map(peluches => {
                                    return(
                                        <tr key={peluches.id}>
                                            <td>{peluches.id}</td>
                                            <td>{peluches.nombre}</td>
                                            <td>{peluches.descripcion}</td>
                                            <td>{peluches.precio} $</td>
                                        </tr>
                                    )
                                })}         
                              </tbody>
                          </table>
                      </article>
                  </div>
              </div>
          </div>
      </section>
  </div>
  )
}
