import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server";

import styles from '../styles/blog.css';
import ListadoPosts from "~/components/listado-posts";


export async function loader(){
  const posts = await getPosts();
  return posts.data;
}

export function meta(){
  return[
    {
      title: 'GuitarLA - Blogs',
    }
  ]
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles,
    }
  ]
}

function Blog() {

  const posts = useLoaderData();

  return (
    <main className='contenedor'>
      <ListadoPosts posts={posts} />
    </main>
  )
}

export default Blog
