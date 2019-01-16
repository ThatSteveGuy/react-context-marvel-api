import React, {useState, useEffect, Suspense} from 'react';
import Character from '../components/Character';
import {fetchCharacter} from '../api';

function CharacterDisplay(props) {
  const [charState, setState] = useState({results:[]});
  const id = props.match.params.id;

  // IIFE
  // add memoize or cache
  // add error handling from API
  const getCharacter = async () => {
    const data = await fetchCharacter(id);

    setState({...charState, character: data});
    console.log('[STATE]', charState);
  }

  // avoid infinite loop, funcs will re-render on props change,
  // which is also when 
  useEffect(() => {
    getCharacter();
  }, []);

  return(
    <section>
      <Character
        id={id}
        data={charState.results[0]}
      />
    </section>
  )
}

export default CharacterDisplay;