import React from 'react';
import PropTypes from 'prop-types';

Character.propTypes = {
  characterId: PropTypes.string.isRequired
};

function Character(characterId, data) {

  // todo: extract story
  console.log('CHAR', data);

  return(
    <article>
      <h1>
        {data.name}
      </h1>
      <p>
        {data.description}
      </p>
      <div>
        <h2>Stories with {data.name} in them</h2>
        <ul>
          {data.stories && data.stories.map((story) => {
            return (
              <li>
                <div>

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