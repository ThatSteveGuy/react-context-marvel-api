import CryptoJS from 'crypto-js';

const privateKey = process.env.REACT_APP_PRIVATE_KEY || null;
const publicKey = process.env.REACT_APP_PUBLIC_KEY || null;
const characterListAPI = 'http://gateway.marvel.com/v1/public/characters';
const characterAPI = 'http://gateway.marvel.com/v1/public/characters/';
const storiesAPI = 'http://gateway.marvel.com/v1/public/stories/';

const getHash = (string) => {
  return CryptoJS.MD5(string);
}

const getUrl = (url) => {
  if (!privateKey || !publicKey) {
    throw Error('Public Key and Private Key are required to call Marvel');
  }
  const timestamp = Date.now();
  const hash = getHash(timestamp + privateKey + publicKey);
  return `${url}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
}

const fetchCharacters = async (startsWith) => {
  try {
    const url = startsWith
      ? getUrl(characterListAPI)+'&nameStartsWith='+startsWith 
      : getUrl(characterListAPI);
    const response = await fetch(url);
    const json = await response.json();
    
    if(json.code !== 200) { 
      console.log('[DEBUG CALL', fetch(getUrl(characterListAPI)));
      throw Error('Network Request Failed:', response.statusText);
    }

    return json.data.results;
  } catch(err) {
    console.log('[DEBUG CALL', fetch(getUrl(characterListAPI)));
    return err.message;
  }
}

const fetchCharacter = async (characterId) => {
  try {
    const response = await fetch(getUrl(characterAPI + characterId));
    const json = await response.json();

    if(json.code !== 200) { 
      console.log('[DEBUG CALL', fetch(getUrl(characterListAPI)));
      throw Error('Network Request Failed:', response.statusText);
    }
console.log('[API]', json.data);
    return json.data;
  } catch(err) {
    console.log('[DEBUG CALL', fetch(getUrl(characterListAPI)));
    return err.message;
  }
}

const fetchStories = async (storyId) => {
  const response = await fetch(getUrl(storiesAPI + storyId));
  const json = response.json();
  return json;
}

export {
  fetchCharacters,
  fetchCharacter,
  fetchStories
}