require('dotenv').config();

const apiKey = process.env.apiKey;

async function fetchFilm(title) {
    let res = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`)    
    let film = await res.json();
    if (film.Response == 'False') {
        return null;
    }
    return film;
}

 



module.exports = {
    fetchFilm,
  
};

