function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

 function getBooksBorrowedCount(books) {
    let numOfBooksOut = 0;
    books.forEach((book) => {
      book.borrows.forEach((borrow) => {
        (!borrow.returned) ? numOfBooksOut += 1 : numOfBooksOut += 0; 
      }); }); 
    return numOfBooksOut;
  }
////HELPER FUNCTION/////////
function shortSort(sourceArray) {
  const sA = sourceArray;
sA.sort((first, next) => (first.name < next.name ? 1 : -1));
sA.sort((first, next) => (first.count < next.count ? 1 : -1));
return sA.slice(0, 5)
};
////////////

function getMostCommonGenres(books) {
  const finalGenres = [];
  let genreObj = {};
  let genreList = books.map((book) => book.genre)
  const genresWCounts = genreList.reduce((count, genre) => {
    (!count[genre]) ? count[genre] = 1 : count[genre] = count[genre] + 1;
    return count;
  }, {})
  for (const genreItem in genresWCounts) {
  genreObj = {
    name: genreItem,
    count: genresWCounts[genreItem] 
  }
  finalGenres.push(genreObj);
}
return shortSort(finalGenres);
}

function getMostPopularBooks(books) {
  const howPopular = [];
  let borrowObj = {};
books.forEach((book) => {
  borrowObj = {
    name: book.title,
    count: book.borrows.length
  }
  howPopular.push(borrowObj);
})
  return shortSort(howPopular);
};

function getMostPopularAuthors(books, authors) {
  const borrowList = [];
  const authorList = [];
  let borrowObj = {};
  let authorObj = {};
books.forEach((bk) => {
  borrowObj = {
    authorId: bk.authorId,
    count: bk.borrows.length
  }
  borrowList.push(borrowObj);
})
authors.forEach((auth) => {
  authorObj = {
    name: auth.name.first +' '+ auth.name.last,
    authorId: auth.id,
    count: 0
  }
  authorList.push(authorObj)
})
  let aL = authorList;
  let bL = borrowList;
  aL.forEach((auth) => {
      bL.forEach((bk) => {
            if (auth.authorId === bk.authorId) {
      auth.count = auth.count + bk.count;
      delete auth.authorId;
    }
  }); });
 return shortSort(authorList);  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};