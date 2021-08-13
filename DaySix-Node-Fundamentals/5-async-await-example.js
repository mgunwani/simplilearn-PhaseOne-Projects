
/**
 * async/await keywords that provide an alternative syntax when working with promises.
 * While making async or non-blocking request, we define a function with `async` keyword to
 * tell JavaScript that it's an async function that returns a promise.
 * We use await keyword to tell JavaScript to return the result of the promise
 * instead of any other return type.
 *
 *      // Define or Declare Async Function
 *      async function getMovies() {
 *          // Returns the Response as Promise using Await
 *          await [Async Action]
 *      }
 *
 *      // Invoking Async Function
 *      getMovies();
 *
 */

const axios = require('axios');
const fs = require('fs').promises;

// async function getMovies() {
//     let response = await axios.get('https://ghibliapi.herokuapp.com/films');
//     response.data.forEach(movie => {
//         console.log(`${movie.title} : ${movie.producer}`);
//     });
// }
// async function getUsers() {
//     let response = await axios.get('https://jsonplaceholder.typicode.com/users');
//     response.data.forEach(user => {
//         console.log(`${user.name} : ${user.email}`);
//     });
// }
// getMovies();
// getUsers();


async function saveMovies() {
    try {
        let response = await axios.get('https://ghibliapi.herokuapp.com/films');
        let movieList = '';
        response.data.forEach(movie => {
            movieList += `${movie.title} : ${movie.producer}\n`;
        });
        await fs.writeFile('asyncawaitMovies.csv', movieList);
    } catch (error) {
        console.log(`Could not save movies to a file : ${error}`);
    }
}

saveMovies();