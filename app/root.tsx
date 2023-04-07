import {
Meta,
Links,
Outlet,
Scripts,
LiveReload,
ScrollRestoration,
useRouteError,
isRouteErrorResponse,
Link,
} from '@remix-run/react';
import styles from './styles/index.css';
import Header from './components/header';
import Footer from './components/footer';

export function meta() {
    return [{
      charset: 'utf-8',
      title: 'GuitarLA - Remix',
      viewport: 'width=device-width,initial-scole=1'
    }];
  }

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'anonymous'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap'
        },
    ]
}

export default function App(){
    return (
    <Document>
        
        <Outlet />
        
    </Document>
    )
}

function Document({children}: IPropsDocument){
    return(
        <html lang="es">
            <head>
              <Meta />
              <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

interface IPropsDocument{
    children: React.ReactNode;
}

/*** Manejo de errores */
  export function ErrorBoundary() {
    const error = useRouteError();
  
    // when true, this is what used to go to `CatchBoundary`
    if (isRouteErrorResponse(error)) {
      return (
        <Document>
          <p className='error'>{error.status} - {error.statusText}</p>
          <Link to='/' className='error-enlace'>Volver a la pagina principal</Link>
        </Document>
      );
    }
  
    // Don't forget to typecheck with your own logic.
    // Any value can be thrown, not just errors!
    //let errorMessage = "Unknown error";
    // if (isDefinitelyAnError(error)) {
    //   errorMessage = error.message;
    // }
  
    return (
        <Document>
        <h1>Uh oh ...</h1>
        <p>Something went wrong.</p>
        {/* <pre>{errorMessage}</pre> */}
        <pre>Unknown error</pre>
      </Document>
    );
  }

  // export function ErrorBoundary({ error }) {
  //   console.error(error);
  //   return (
  //     <html>
  //       <head>
  //         <title>Oh no!</title>
  //         <Meta />
  //         <Links />
  //       </head>
  //       <body>
  //         {/* add the UI you want your users to see */}
  //         Hola
  //         <Scripts />
  //       </body>
  //     </html>
  //   );
  // }
  
