import React from 'react';

interface Props {
  url: string;
  title: string;
  content: string
}

const ArticleTemplate: React.FC<Props> = (props: Props) => {
  const {
    url,
    title,
    content
  } = props;
  return (
    <section>

      <div className="img-container left column">
        <img src={url} alt="Looking up at skyscrapers" />
      </div>

      <div className="right column">
  <h2 className="headline">{title}</h2>
        <p className="content">
         {content}
        </p>
      </div>

    </section>
  )
}

export default ArticleTemplate;