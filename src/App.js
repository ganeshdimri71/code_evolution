import React, { Component } from 'react'
import PostForm from './components/PostForm'
import PostList from './components/PostList'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <PostForm />
      </div>
    )
  }
}

export default App