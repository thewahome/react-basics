import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import BlogPost from './Pages/BlogPost'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app container">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/post/:id" component={BlogPost} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
