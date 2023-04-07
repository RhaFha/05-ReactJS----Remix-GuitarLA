import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server";
import { Outlet } from "@remix-run/react";

import styles from '../styles/blog.css';
import ListadoPosts from "~/components/listado-posts";

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles,
    }
  ]
}

function Blog() {

  return (
    <main className='contenedor'>
      <Outlet />
    </main>
  )
}

export default Blog
