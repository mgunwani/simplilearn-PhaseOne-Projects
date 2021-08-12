
const request = require('request');
const fs = require('fs');

// request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
//     if (error) {
//         console.error(`Could Not send Request to API: ${error}`);
//         return;
//     }
//     if (response.statusCode != 200) {
//         console.error(`Expected Status Code 200 but I recevied: ${response.statusCode}`);
//         return;
//     }
//     var movies = JSON.parse(body);
//     movies.forEach(movie => {
//         console.log(`${movie.title} : ${movie.producer}`);
//     });
// })

request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
    if (error) {
        console.error(`Could Not send Request to API: ${error}`);
        return;
    }
    if (response.statusCode != 200) {
        console.error(`Expected Status Code 200 but I recevied: ${response.statusCode}`);
        return;
    }
    var movies = JSON.parse(body);
    var movieList = ''
    movies.forEach(movie => {
        movieList += `${movie.title} : ${movie.producer}\n`;
    });
    fs.writeFile('callbackMovies.csv', movieList, (err) => {
        if (err) throw err;
        console.log('Movies written to callbackMovies.csv');
    });
});