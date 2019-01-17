import React from 'react';
import PropTypes from 'prop-types';

Character.propTypes = {
  characterId: PropTypes.string.isRequired
};

function Character(data) {

  // todo: extract story
  console.log('CHAR', data);
  const character = data.data;

  return(
    <article>
      <h1>
        {character.name}
      </h1>
      <p>
        {character.description}
      </p>
      <div>
        <h2>Stories with {character.name} in them</h2>
        <ul>
          {character.stories && character.stories.items.map((story) => {
            return (
              <li>
                <div>
                  {story.name}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}

export default Character;