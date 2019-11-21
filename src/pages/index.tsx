import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import ScrollTop from '../components/scrollToTop'
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
            {/* eslint-disable-next-line */}
            <li><a href="#">World</a></li>
            {/* eslint-disable-next-line */}
            <li><a href="#">Tech</a></li>
            {/* eslint-disable-next-line */}
            <li><a href="#">Contsact</a></li>
            <li className="profile-icon"><img src="/images/icon/icon.svg" alt="profile icon" /></li>
          </ul>
      </header>
      <article>
          <Router>
              <ScrollTop>
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
                  <section>
                    <div className="left column">
                      <h4 className="list-title">Trending Articles</h4>
                      <ul className="vertical-list">
                        {/* eslint-disable-next-line */}
                        <li className="list-item"> <Link to="/pages/article1"  className="post-link">Article 1</Link></li>
                        {/* eslint-disable-next-line */}
                        <li className="list-item"> <Link to="/pages/article2"  className="post-link">Article 2</Link></li>
                        {/* eslint-disable-next-line */}
                        <li className="list-item"> <Link to="/pages/article3"  className="post-link">Article 3</Link></li>
                        {/* eslint-disable-next-line */}
                        <li className="list-item"> <Link to="/pages/article4"  className="post-link">Article 4</Link></li>
                        {/* eslint-disable-next-line */}
                        <li className="list-item"> <Link to="/pages/article-missing"  className="post-link">Non-existent article</Link></li>
                      </ul>
                    </div>
                    <div className="right column">
                      <h4 className="list-title">Archived Posts</h4>
                      <ul className="vertical-list">
                        {/* eslint-disable-next-line */}
                        <li className="list-item"><Link to="/pages/post1" className="post-link">Archived Post 1</Link></li>
                        {/* eslint-disable-next-line */}
                        <li className="list-item"><Link to="/pages/post2" className="post-link">Archived Post 2</Link></li>
                        {/* eslint-disable-next-line */}
                        <li className="list-item"><Link to="/pages/post3" className="post-link">Archived Post 3</Link></li>
                      </ul>
                    </div>
                  </section>
              </ScrollTop>
            </Router>

      </article>

      <footer>
        {/* eslint-disable-next-line */}
        <a href="#" className="footer-link">Twitter</a>
        {/* eslint-disable-next-line */}
        <a href="#" className="footer-link">Facebook</a>
        {/* eslint-disable-next-line */}
        <a href="#" className="footer-link">Google+</a>
        {/* eslint-disable-next-line */}
        <a href="#" className="footer-link">Digg</a>
      </footer>

    </div>
  )
}

export default Index;