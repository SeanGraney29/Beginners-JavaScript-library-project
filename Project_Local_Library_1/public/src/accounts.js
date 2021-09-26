function findAccountById(accounts, id) {
  return(accounts.find((account) => account.id === id));
};

function sortAccountsByLastName(accounts) {
  return (accounts.sort((acctA, acctB) =>
  acctA.name.last > acctB.name.last ? 1 : -1));
}

function getTotalNumberOfBorrows(account, books) {
    const acctNum = account.id;
    let borrowedSum = 0;
      books.forEach((book) => {
      book.borrows.forEach((borrow) => {
      if (borrow.id === acctNum) {
      borrowedSum += 1;
      }
    }); });
    return borrowedSum;
  }

function getBooksPossessedByAccount(account, books, authors) {
  const acctNum = account.id;
  const booksOut = [];
    books.forEach((book) => {
    book.borrows.forEach((borrow) => {
        if (borrow.id === acctNum) {
            if (!borrow.returned) { booksOut.push(book) }
      }
    }); });
  booksOut.forEach((bk) => {
    authors.forEach((auth) => {
      if (bk.authorId === auth.id) {bk.author = auth};
}); });
  return booksOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};