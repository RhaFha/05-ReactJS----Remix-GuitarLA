import Post from './post'

function ListadoPosts({posts}) {
  return (
    <>
    <h2 className='heading'>Blog</h2>
      <div className='blog'>
        {
          posts?.map( post => (
            <Post post={post} key={post.id}/>
          ))
        }
      </div>
    </>
  )
}

export default ListadoPosts
