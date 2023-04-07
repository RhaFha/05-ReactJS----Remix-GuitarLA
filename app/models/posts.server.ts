export async function getPosts() {
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
    const resultado = await respuesta.json();
  return resultado
}

export async function getPost(url){
    const ruta = `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`;console.log(ruta);
    const respuesta = await fetch(ruta);
    const resultado = await respuesta.json();
    return resultado;
}