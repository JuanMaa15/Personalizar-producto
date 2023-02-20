export const agregarIngredientes = (nuevo_ingrediente,ingredientes,setIngredientes, i) => {


    let lista_ingredientes = ingredientes;
    lista_ingredientes[i] = nuevo_ingrediente;

    setIngredientes(lista_ingredientes);
    
    
};