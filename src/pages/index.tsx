import React from 'react';

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
        <h1>News</h1>
        <section>
          <div className="img-container left column">
            <img src="../images/home/business.jpg" alt="A person reading the business section of a newspaper" />
          </div>
          <div className="right column">
            <h2 className="headline">Headline</h2>
            <p className="content">
              I love cheese, especially manchego swiss. ☺ Fromage queso jarlsberg cheesy
              feet emmental cottage cheese camembert de normandie bocconcini. Cottage cheese
              everyone loves cauliflower cheese rubber cheese squirty cheese halloumi cow
              fondue. Bocconcini cheese and biscuits everyone loves fondue red leicester
              st. agur blue cheese rubber cheese ricotta. Cheesy grin mozzarella.
            </p>
          </div>
        </section>
        <section>
          <div className="left column">
            <h4 className="list-title">Trending Articles</h4>
            <ul className="vertical-list">
              <li className="list-item"><a href="pages/article1.html" className="post-link">Article 1</a></li>
              <li className="list-item"><a href="pages/article2.html" className="post-link">Article 2</a></li>
              <li className="list-item"><a href="pages/article3.html" className="post-link">Article 3</a></li>
              <li className="list-item"><a href="pages/article4.html" className="post-link">Article 4</a></li>
              <li className="list-item"><a href="pages/article-missing.html" className="post-link">Non-existent article</a></li>
            </ul>
          </div>
          <div className="right column">
            <h4 className="list-title">Archived Posts</h4>
            <ul className="vertical-list">
              <li className="list-item"><a href="pages/post1.html" className="post-link">Archived Post 1</a></li>
              <li className="list-item"><a href="pages/post2.html" className="post-link">Archived Post 2</a></li>
              <li className="list-item"><a href="pages/post3.html" className="post-link">Archived Post 3</a></li>
              <li className="list-item"><a href="pages/post-missing.html" className="post-link">Non-existent Post 4</a></li>
            </ul>
          </div>
        </section>
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