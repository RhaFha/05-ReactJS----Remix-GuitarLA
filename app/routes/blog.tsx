import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server";

import styles from '../styles/blog.css';
import Post from "~/components/post";


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
      <h2 className='heading'>Blog</h2>
      <div className='blog'>
        {
          posts?.map( post => (
            <Post post={post} key={post.id}/>
          ))
        }
      </div>
    </main>
  )
}

export default Blog
