import React, {useState, useEffect, Suspense} from 'react';
import Character from '../components/Character';
import {fetchCharacter} from '../api';

function CharacterDisplay(props) {
  const [charState, setState] = useState({results:[{id:-1}]});
  const id = props.match.params.id;

  // IIFE
  // add memoize or cache
  // add error handling from API
  const getCharacter = async () => {
    const data = await fetchCharacter(id);

    console.log('[DATA]', data.results);
    console.log('[PRE]', charState);
    setState({results: data.results});
    console.log('[STATE]', charState);
  }

  // avoid infinite loop, funcs will re-render on props change,
  // which is also when 
  useEffect(() => {
    getCharacter();
  }, [charState.results[0].id]);

  return(
    <section>
      {<Character
        id={id}
        data={charState.results[0]}
      />}
    </section>
  )
}

export default CharacterDisplay;