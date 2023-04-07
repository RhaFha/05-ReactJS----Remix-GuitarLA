import { getGuitarras } from "~/models/guitarras.server"
import { useLoaderData } from "@remix-run/react";

import ListadoGuitarras from "~/components/listado-guitarras";

export function meta(){
    return[
      {
        title: 'GuitarLA - Tienda de Guitarras'
      }
    ]
  }

export async function loader(){
    const guitarras = await getGuitarras();
    return guitarras.data
  }

function Index() {
    const guitarras = useLoaderData();
  return (
    <main className="contenedor">
      <ListadoGuitarras guitarras={guitarras} />
    </main>
  )
}

export default Index
