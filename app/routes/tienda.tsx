import { getGuitarras } from "~/models/guitarras.server"
import { useLoaderData } from "@remix-run/react";

import Guitarra from "~/components/guitarra";
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
      <h2 className="heading">Nuestra Colección</h2>
      {
        guitarras?.length && (
          <div className="guitarras-grid">
            {
              guitarras.map(guitarra => (
                <Guitarra guitarra={guitarra} key={guitarra?.id} />
              ))
            }
          </div>
        )
      }
    </main>
  )
}

export default Tienda
