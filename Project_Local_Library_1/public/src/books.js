function findAuthorById(authors, id) {
  return (authors.find((author) => author.id === id));
};

function findBookById(books, id) {
  let inCaseOfMultiples = (books.filter((book) => book.id === id));
  return inCaseOfMultiples[0];
};

function partitionBooksByBorrowedStatus(books) {
const booksOut = [];
    const booksReturned = [];
      books.forEach((book) => {
      book.borrows.forEach((borrow) => {
              if (!borrow.returned) {
            booksOut.push(book);
          } else if (!booksReturned.includes(book) && !booksOut.includes(book)) {
    booksReturned.push(book)
            }
      });
    });
   return [booksOut, booksReturned];
}

function getBorrowersForBook(book, accounts) {
  const borrowers = [];
  let newBorrower = {};
  const borrowInfo = book.borrows;
  accounts.forEach((acct) => {
    borrowInfo.forEach((bk) => {
        if (bk.id === acct.id) {
           newBorrower = {
                id: bk.id, 
                returned: bk.returned, 
                picture: acct.picture, 
                age: acct.age, 
                name: acct.name, 
                company: acct.company, 
                email: acct.email, 
                registered: acct.registered
            }
            borrowers.push(newBorrower);
        }
    }); });
    return(borrowers.slice(0,10))
  };

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};