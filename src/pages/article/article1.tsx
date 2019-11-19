import React from 'react';
import ArticleTemplate from '../../components/articleTemplate'
const content = "I love cheese, especially manchego swiss. ☺ Fromage queso jarlsberg cheesyfeet emmental cottage cheese camembert de normandie bocconcini. Cottage cheeseeveryone loves cauliflower cheese rubber cheese squirty cheese halloumi cowfondue. Bocconcini cheese and biscuits everyone loves fondue red leicesterst. agur blue cheese rubber cheese ricotta. Cheesy grin mozzarella."

const Article1 = () => {
  return (
    <ArticleTemplate url="/images/articles/buildings.jpg" title="Article 1" content={content} />
  )
}

export default Article1;