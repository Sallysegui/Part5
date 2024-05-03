import { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/notification'
import LoginForm from './components/loginForm'
import CreateNewBlog from './components/blogForm'
import Togglable from './components/togglableLogin'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [info, setInfo] = useState({ message: null })
  const [refreshBlog, setRefreshBlog] = useState(false)

  const blogFormRef = useRef()
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [blogs])


  useEffect(() => {
    blogService.getAll()
      .then( blogs => {const blogsSorted = blogs.sort((a, b) => b.likes - a.likes );setBlogs(blogsSorted)})
  }, [refreshBlog])

  const sendCreateNew = ({ newBlog }) => {
    blogFormRef.current.toggleVisibility()
    blogService
      .create(newBlog)
      .then(returnedBlog => {
      //setBlogs(blogs.concat(returnedBlog))
        notifyWith(`${newBlog.title} by ${newBlog.author} was added sucessfully`, 'message')
        setRefreshBlog(!refreshBlog)
      })
      .catch(() => { notifyWith(`${newBlog.title} by ${newBlog.author} couln't be added`, 'error')})
  }

  const handleLogin = async ({ username,password }) => {
    console.log(username)
    event.preventDefault()
    try {
      const user = await loginService.login({
        username,password
      })
      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      notifyWith(`${username} logged in`, 'info')
      setTimeout(() => {
        setInfo({ message: null })
      }, 3000)
    } catch (exception) {
      notifyWith('Wrong credentials' ,'error')
      setTimeout(() => {
        setInfo({ message: null })
      }, 3000)
    }
  }
  const blogForm = () => (
    <Togglable buttonLabel='Create New Blog' ref={blogFormRef}>
      <CreateNewBlog sendCreateNew={sendCreateNew} />
    </Togglable>
  )

  const showBlogs = () => (
    <div>
      <h2>Blogs</h2>
      <div>
        {user.name} is logged in
      </div>
      <div>
        {logOut()}
      </div>
      <div>
        {blogForm()}
      </div>
      <ul className='blogcontainer'>
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} updateLikes={updateLikes} removeBlog={removeBlog} user={user} />
        )}
      </ul>
    </div>
  )

  const updateLikes = async (id, blogObject ) => {
    await blogService
      .update(id, blogObject)
      .catch(() => { notifyWith(`${blogObject.title} by ${blogObject.author} couln't be updated`, 'error')})
    // const blogUpdated = { ...blogObject , likes: blogObject.likes + 1 }
    const updatedBlogs = blogs.map(ob => {
      if (ob.id===id){return { ...ob,  likes: ob.likes + 1 }
      } return ob
    })
    setBlogs(updatedBlogs)
    // setRefreshBlog(!refreshBlog)
  }

  const removeBlog = async (id, blogName, blogAuthor) => {
    if (window.confirm(`Remove ${blogName} by ${blogAuthor}`)) {await blogService
      .remove(id)
    const newBlogsWithout = blogs.filter(item => item.id === id)
    setBlogs(newBlogsWithout)
    notifyWith(`${blogName} by ${blogAuthor} it has been removed`, 'message')
    setRefreshBlog(!refreshBlog)}
  }


  const notifyWith = (message, type) => {
    setInfo({
      message, type
    })
    setTimeout(() => {
      setInfo({ message: null } )
    }, 3000)
  }

  const logOut = () => {
    return(
      <div>
        <button onClick={() => {setUser(null); window.localStorage.removeItem('loggedNoteappUser')}  } >
          Log Out
        </button>
      </div>
    )}

  return (
    <div>
      <Notification info={info} />
      <div>
        {user === null ?
          <LoginForm handleLogin = {handleLogin} />
          :
          showBlogs()
        }
      </div>
      <div>
      </div>
    </div>
  )
}
export default App