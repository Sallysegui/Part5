
import { useState } from 'react'


const CreateNewBlog = ({ sendCreateNew }) => {
  const [newBlog, setNewBlog] = useState ({ title:'', author:'', url:'' })



  const addBlog = (event) => {
    event.preventDefault()
    sendCreateNew({
      newBlog
    })
    setNewBlog({ title: '', author:'', url:'' })
  }


  return(<div>
    <form onSubmit={ addBlog} >
      <div className='addTitle'>
        Title:
        <input
          id="title"
          value={newBlog.title}
          name="newBlog.title"
          placeholder ='title'
          onChange={({ target }) => setNewBlog({ ...newBlog, title:target.value })}
          className='title'
        />
      </div>
      <div>
      Author:
        <input
          id="author"
          value={newBlog.author}
          name="newBlog.author"
          onChange={({ target }) => setNewBlog({ ...newBlog, author:target.value })}
        />
      </div>
      <div>
      Url:
        <input
          id="url"
          value={newBlog.url}
          name="newBlog.url"
          onChange={({ target }) => setNewBlog({ ...newBlog, url:target.value })}
        />
      </div>
      <br/>
      <button id="createBlog_button" type="submit">create</button>
    </form>
  </div>
  ) }

export default CreateNewBlog