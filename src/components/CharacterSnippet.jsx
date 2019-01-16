import React from 'react';
import PropTypes from 'prop-types';

CharacterSnippet.propTypes = {
  data: PropTypes.object.isRequired,
  click: PropTypes.func
};

function CharacterSnippet(data) {
  const {id, name, description, thumbnail} = data.data;
  const {click} = data;

  const buildThumnbailUrl = (thumbnail) => {
    return `${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`;
  }

  return (
    <article className="character-snippet" onClick={(id) => {click(id)}}>
      <img alt={name} src={buildThumnbailUrl(thumbnail)} />
      <header>
        <h3>{name}</h3>
      </header>
      <p>
        {description}
      </p>
    </article>
  )
}

export default CharacterSnippet;