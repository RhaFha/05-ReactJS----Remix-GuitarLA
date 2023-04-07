import imagen from '../../public/img/nosotros.jpg';
import styles from '../styles/nosotros.css';

export function meta(){
  return [
    {
      title: 'GuitarLA - Nosotros'
    }
  ]
}

export function links(){
  return[
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel:'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

export default function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">
        Nosotros
      </h2>
      <div className="contenido">
          <img src={imagen} alt='imagen nosotros' />
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam in nunc eu bibendum. Vivamus ut eros hendrerit, semper mauris eget, elementum nunc. Donec varius placerat viverra. Phasellus dictum fringilla urna, eget tincidunt ligula varius vel. Phasellus consectetur, nisl ac feugiat tristique, ante felis blandit purus, ut consequat lectus nisi quis massa. In venenatis euismod nibh, ut efficitur nibh. Duis vestibulum, lacus a egestas bibendum, odio nibh dapibus arcu, a eleifend diam nisi ut leo.</p>
            <p>Ut ut ipsum facilisis, volutpat lacus eget, rhoncus mauris. Morbi eget dui et tortor imperdiet hendrerit. Cras lorem libero, sagittis eu commodo vel, porttitor quis lectus. Pellentesque non condimentum odio. Curabitur dignissim felis lacus, at tincidunt sem sodales vitae. Sed et metus a justo gravida ornare. Aenean arcu odio, pulvinar sed vulputate vestibulum, porttitor in nisl.</p>
          </div>
      </div>
    </main>
  )
}