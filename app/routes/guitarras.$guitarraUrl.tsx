import { useState } from "react";
import { useOutletContext } from '@remix-run/react';
import { getGuitarra } from "~/models/guitarras.server";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";

export function meta({data}){
  if(!data){
    return[
      {
        title: `Guitara no encontrada`
      }
    ]
  }
  return [
    {
      title: `GuitarLA - ${data.data[0].attributes.nombre}`
    }
  ]
}

export async function loader({request, params}){
  const {guitarraUrl} = params;
  const guitarra = await getGuitarra(guitarraUrl);console.log(guitarra)
  
  if(guitarra.data.length === 0){
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada',
    })
  }
  
  return guitarra;
}

function GuitarrasVenta() {

  const {agregarCarrito} = useOutletContext();
  const guitarra = useLoaderData();
  const { id,attributes:{nombre, imagen, url, precio, descripcion}} = guitarra.data[0];
  const [ cantidad, setCantidad]= useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      if(cantidad < 1){
        alert('Debes selecionar una cantidad')
        return;
      }

      const guitarraSeleccionada = {
        id, 
        imagen: imagen.data.attributes.url,
        nombre,
        precio,
        cantidad,
      };

      agregarCarrito(guitarraSeleccionada);
  }
  
  return (
    <div className="guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={'guitarra'} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>

        <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="cantidad">Cantidad</label>
          <select 
            id="cantidad" 
            value={cantidad}
            onChange={e => setCantidad(parseInt(e.target.value))}
          >
            <option value=''>---Selecione una cantidad---</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
          <input type="submit" value={'Agregar al carrito'} />
        </form>
      </div>
    </div>
  )
}

export default GuitarrasVenta
