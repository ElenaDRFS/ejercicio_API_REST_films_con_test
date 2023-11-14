require('dotenv').config();

const apiKey = process.env.apiKey;

async function fetchFilm(title) {
    let res = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`, {
        method: "GET"});
    let film = await res.json();
    if (film.Response == 'False') {
        return null;
    }
    return film;
}

 async function postFilm (title) {
    let response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(title)
    })
    let answer = await response.json(); 
    return answer;
};



module.exports = {
    fetchFilm,
    postFilm
};

