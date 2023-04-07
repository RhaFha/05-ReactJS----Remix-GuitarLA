import { getGuitarras } from "~/models/guitarras.server"
import { useLoaderData } from "@remix-run/react";

import ListadoGuitarras from "~/components/listado-guitarras";
import styles from '../styles/tienda.css';

export function meta(){
  return[
    {
      title: 'GuitarLA - Tienda de Guitarras'
    }
  ]
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader(){
  const guitarras = await getGuitarras();
  return guitarras.data
}

function Tienda() {
  const guitarras = useLoaderData();
  return (
    <main className="contenedor">
      <ListadoGuitarras guitarras={guitarras} />
    </main>
  )
}

export default Tienda
