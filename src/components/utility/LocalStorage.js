const getStoredBooks = () => {
    const storedBookId = localStorage.getItem('reads-book');
    if (storedBookId) {
        return JSON.parse(storedBookId);
    }
    return [];
}

const markAsRead = bookId => {
    const storedBookIds = getStoredBooks();
    const exists = storedBookIds.find(bId => bId === bookId);
    if (!exists) {
        storedBookIds.push(bookId);
        localStorage.setItem('reads-book', JSON.stringify(storedBookIds))
    }
}
const getWishListedBooks = () => {
    const storedBookId = localStorage.getItem('wishlist');
    if (storedBookId) {
        return JSON.parse(storedBookId);
    }
    return [];
}

const addToWishList = bookId => {
    const storedBookIds = getWishListedBooks();
    const exists = storedBookIds.find(bId => bId === bookId);
    if (!exists) {
        storedBookIds.push(bookId);
        localStorage.setItem('wishlist', JSON.stringify(storedBookIds))
    }
}


export { getStoredBooks, markAsRead, getWishListedBooks, addToWishList }