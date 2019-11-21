import React from 'react'
import {
  Link
} from "react-router-dom";

const ArticleIndex: React.FC = () => {
  return (
    <section>
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
        
    </section>
  )
}

export default ArticleIndex;