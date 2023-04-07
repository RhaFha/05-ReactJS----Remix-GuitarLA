import { getPost } from "~/models/posts.server";
import { useLoaderData } from "@remix-run/react";
import { formatearFecha } from "~/utils/helpers";

export function meta({data}){
    if(!data){
        return[
            {
                title: `GuitarLA - Entrada no encontrada`,
            }
        ]
    }
    const {attributes:{titulo}} = data.data[0];
    console.log();
    return[
        {
            title: `GuitarLA - ${titulo}`,
        }
    ]
}

export async function loader({params}){
    const { postUrl } = params;
    const post = await getPost(postUrl);
    if(post.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'No se encontro el post',
        })
    }
    return post;
}

function Post() {

    const post = useLoaderData();
    const {id, attributes:{contenido, imagen, titulo, url, publishedAt}} = post?.data[0];
  return (
    <article className="post mt-3">
        <img className="imagen" src={imagen?.data?.attributes?.url} alt="Imagen del blog" />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
     
    </article>
  )
}

export default Post;
