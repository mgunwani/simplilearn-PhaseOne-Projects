
const axios = require('axios');
const fs = require('fs').promises;

// axios.get('https://ghibliapi.herokuapp.com/films')
//     .then((response) => {
//         response.data.forEach(movie => {
//             console.log(`${movie.title} : ${movie.producer}`);
//         });
//     })
//     .catch((error) => {
//         console.log(`Could Not send Request to API: ${error}`)
//     })

axios.get('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
        let movieList = '';
        response.data.forEach(movie => {
            movieList += `${movie.title} : ${movie.producer}\n`;
        });
        return fs.writeFile('promiseMovies.csv', movieList);
    })
    .then(() => {
        console.log('Movies written to promiseMovies.csv');
    })
    .catch((error) => {
        console.log(`Could Not send Request to API: ${error}`)
    })