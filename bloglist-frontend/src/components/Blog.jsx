import { useState } from 'react'
//import blogService from '../services/blogs'

const Blog = ({ blog, updateLikes, removeBlog, user }) => {
  const [visibleDet, setVisibleDet] = useState(false)

  const hideWhenVisible = { display: visibleDet ? 'none' : '' }
  const showWhenVisible = { display: visibleDet ? '' : 'none' }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5

  }

  const toggleVisibilityDet = () => {
    setVisibleDet(!visibleDet)
  }


  const addLike = () => {
    updateLikes(blog.id, blog)
  }

  const deleteBlog = () => {
    removeBlog(blog.id, blog.title, blog.author)
  }

  ////////add blogkey
  return(<li style={blogStyle}  className='bloging'>
    <div className='blogTitle'>
      {blog.title} {blog.author}
    </div>
    <div style={hideWhenVisible}>
      <button onClick={toggleVisibilityDet}>show more</button>
    </div>
    <button  style={showWhenVisible} onClick={toggleVisibilityDet}>Hide</button>
    <div style={showWhenVisible}  className='togglableContent'>
      Details:
      <div>{blog.url}</div>
      <div  id="likesshow" >likes:{blog.likes}<button onClick={addLike} >like</button></div>
      <div>
        user:{blog.user.name}
      </div>
      <div>
        {blog.user.name===user.name? <button onClick={deleteBlog}>
          remove
        </button>:null}
      </div>
    </div>
  </li>)}

export default Blog