import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ArticleIndex from './article/index'
import Article1 from './article/article1'
import Article2 from './article/article2'
import Article3 from './article/article3'
import Article4 from './article/article4'
import Post1 from './article/post1'
import Post2 from './article/post2'
import Post3 from './article/post3'

const Index: React.FC = () => {
  return (
    <div>
       <header>
          <ul className="navbar">
            <li><a href="/index.html">Home</a></li>
            <li><a href="#">World</a></li>
            <li><a href="#">Tech</a></li>
            <li><a href="#">Contsact</a></li>
            <li className="profile-icon"><img src="/images/icon/icon.svg" alt="profile icon" /></li>
          </ul>
      </header>
      <article>
      <Router>
          <Switch>
            <Route exact path="/">
              <ArticleIndex />
            </Route>
            <Route exact path="/pages/article1">
              <Article1 />
            </Route>
            <Route exact path="/pages/article2">
              <Article2 />
            </Route>
            <Route exact path="/pages/article3">
              <Article3 />
            </Route>
            <Route exact path="/pages/article4">
              <Article4 />
            </Route>
            <Route exact path="/pages/post1">
              <Post1 />
            </Route>
            <Route exact path="/pages/post2">
              <Post2 />
            </Route>
            <Route exact path="/pages/post3">
              <Post3 />
            </Route>
          </Switch>
        </Router>

      </article>

      <footer>
        <a href="#" className="footer-link">Twitter</a>
        <a href="#" className="footer-link">Facebook</a>
        <a href="#" className="footer-link">Google+</a>
        <a href="#" className="footer-link">Digg</a>
      </footer>

    </div>
  )
}

export default Index;