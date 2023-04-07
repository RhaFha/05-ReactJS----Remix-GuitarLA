import { getGuitarra } from "~/models/guitarras.server";
import { useLoaderData } from "@remix-run/react";

export function meta({data}){console.log('data', data)
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

  const guitarra = useLoaderData();
  const { id,attributes:{nombre, imagen, url, precio, descripcion}} = guitarra.data[0];
  return (
    <div className="guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={'guitarra'} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
    </div>
  )
}

export default GuitarrasVenta
