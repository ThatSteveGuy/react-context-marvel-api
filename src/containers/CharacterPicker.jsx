import React, {useState, useEffect, Suspense} from 'react';
import PropTypes from 'prop-types';
import CharacterSnippet from '../components/CharacterSnippet';
import {fetchCharacters} from '../api';
import {Link} from 'react-router-dom';

function CharacterPicker(props) {
  const [charState, setState] = useState({characters:[], searchTerm:''});

  // IIFE
  // add memoize or cache
  // add error handling from API
  const getCharacters = async () => {
    const search = charState.searchTerm;
    const data = await fetchCharacters(search);
    setState({...charState, characters: data});
  }

  useEffect(() => {
    getCharacters();
  }, [charState.searchTerm]);
  
  const updateSearch = () => {
    // for the time being
    const newTerm = document.querySelector('#searchBox').value;
    setState({...charState, searchTerm: newTerm});
  }

  const viewDetail = (id) => {
    console.log(`${id} clicked`);
  }

 // TODO: Get Next 20 affordance
 // TODO: Add startsWith affordance

  return (
    <section>
      <div id="searchPanel">
        <label>Only show characters who's name start with: <input id="searchBox" type="text"/></label>
        <button
          onClick={updateSearch}
        >
        Make it so</button>
      </div>
      <ul className="character-list">
        {charState.characters.map((char) => {
          return (
            <Link key={char.id} to={{pathname:`/character/${char.id}`}}>
              <CharacterSnippet key={char.id} data={char} click={viewDetail} />
            </Link>
          );
        })}
      </ul>
    </section>
    
  );
}

export default CharacterPicker;