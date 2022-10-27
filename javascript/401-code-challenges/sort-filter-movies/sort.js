
'use strict';
const movies = require('./movies');
// write your own comparator function for each function and export THOSE separately for testing as well. You will also use comparators in the three pre-written functions bellow

// examples for demo
const books = ['A Tale of Two Cities', 'Mary Poppins', 'Lord of the Rings'];


// comparator for books:
function bookComparator(a, b){
  const bookA = a.replace('A ', '');
  const bookB = b.replace('A ', '');

  if(bookA < bookB) return -1;
  if(bookA > bookB) return 1;
  return 0;

}

console.log(books);
books.sort(bookComparator);
console.log(books);

const standings = [
  {team: 'Lions', score: 4},
  {team: 'Tigers', score: 1},
  {team: 'Bears', score: 5},
  {team: 'OhMy...', score: 3},
];

//Demo:  stay tuned...

// what is a comparator?
// function that determines sort definitions

let yearComparator = (a, b) => {
  const yearA = a.year;
  const yearB = b.year;

  if (yearA < yearB) {
    return -1;
  }
  if (yearB > yearA) {
    return 1;
  }

  // if years are equal
  return 0;
};

function titleComparator(a, b){
  let titleA = a.title.replace('The ', '');
  let titleB = b.title.replace('The ', '');

  if(titleA < titleB) return -1;
  if(titleB > titleB) return 1;

  return 0;
}


// Complete for Code Challenge 28
function sortYear(movies) {
  return movies.sort(yearComparator);
}

function sortTitle(movies) {
  return movies.sort(titleComparator);
}

function inGenre(movies, genre) {
  return movies.filter(movie => movie.genres.includes(genre));
}

module.exports = { sortYear, sortTitle, inGenre };
