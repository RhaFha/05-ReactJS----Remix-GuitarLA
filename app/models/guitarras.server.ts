export async function getGuitarras() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    const resultado = await respuesta.json();
  return resultado
}

export async function getGuitarra(url){
    const ruta = `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`;
    const respuesta = await fetch(ruta);
    const resultado = await respuesta.json();
    return resultado;
}