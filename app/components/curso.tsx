

function Curso({curso}) {
    const {id, attributes:{ titulo, contenido, imagen }} = curso; console.log(imagen.data.attributes.url)
  return (
    <section className="curso" style={{backgroundImage: `linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.data.attributes.url})` }}>
      <div className="contenedor curso-grid">
        <div className="contenido">
            <h2 className="heading">{titulo}</h2>
            <p className="texto">{contenido}</p>
        </div>

      </div>
    </section>
  )
}

export default Curso
