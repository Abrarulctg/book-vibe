import { useLoaderData, useParams } from "react-router-dom";
import './BookDetails.css';
import { addToWishList, getStoredBooks, getWishListedBooks, markAsRead } from "../utility/LocalStorage";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    // console.log(bookId);
    const bookIdInt = parseInt(bookId);
    // console.log(books)

    const selectedBook = books.find(book => book.bookId === bookIdInt)
    // console.log(selectedBook)

    const { image, bookName, author, category, rating, tags, review, totalPages, publisher, yearOfPublishing } = selectedBook;

    //    Success ReadBtn toaster
    const successToast = () => toast.success('Successful, The book added to the Read List!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
    //    Success WishlistBtn toaster
    const successWishListToast = () => toast.success('Successful, The book added to the Wish List!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
    // Error Read Toaster
    const errorToast = () => toast.error('You have already read this book!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
    // Error Wishlist Toaster
    const errorWishlistBtnToast = () => toast.error('Already added to the Wish List!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });

    const handleMarkAsRead = (bookId) => {
        const bookIdInt = parseInt(bookId);
        const storedBookId = getStoredBooks(bookIdInt)
        // console.log(storedBookId);
        const matchedBookId = storedBookId.find(storedBkId => storedBkId === bookIdInt);
        if (matchedBookId === bookIdInt) {
            errorToast();
        }
        else {
            markAsRead(bookIdInt);
            successToast();
        }
    }

    const handleAddToWishlist = (bookId) => {
        // console.log('btn clicked', bookId)
        const bookIdInt = parseInt(bookId);
        const storedBookId = getStoredBooks(bookIdInt)
        // console.log(storedBookId);
        const matchedBookId = storedBookId.find(storedBkId => storedBkId === bookIdInt);
        const wishListedBookId = getWishListedBooks(bookIdInt)
        // console.log('wishlisted Id:', wishListedBookId);
        const matchedWishlistedBookId = wishListedBookId.find(storedWishlistedBookId => storedWishlistedBookId === bookIdInt)
        // console.log('matched id: ', matchedWishlistedBookId);
        if (matchedBookId === bookIdInt || matchedWishlistedBookId === bookIdInt) {
            if (bookIdInt === matchedBookId) {
                errorToast();
            }
            else {
                errorWishlistBtnToast();
            }
        }
        else {
            // markAsRead(bookIdInt);
            successWishListToast();
            addToWishList(bookIdInt)
        }
    }


    return (
        <div>
            <div className="flex my-8 flex-col lg:flex-row items-center">
                <div className="w-5/6 lg:w-2/4">
                    <img className="w-full p-[74px] bg-[#1313130a] rounded-xl" src={image} alt="" />
                </div>
                <div className="w-2/4 space-y-4 p-12">
                    <h1 className="text-4xl font-bold text-[#131313]">{bookName}</h1>
                    <p className="text-xl font-[#13131314] font-semibold">By : {author}</p>
                    <hr />
                    <p className="text-xl font-[#13131314]">{category}</p>
                    <hr />
                    <p><span className="font-bold">Review: </span>{review}</p>
                    {/* Tags */}
                    <div className="flex gap-4">
                        <h4 className="font-bold">Tag </h4>
                        {
                            tags.map((tag, idx) => <button key={idx} className="px-4 py-1 bg-[#23be0a0d] text-[#23BE0A] font-semibold rounded-full mr-2">#{tag}</button>)
                        }
                    </div>
                    <hr className="" />

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* body */}
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>Number of Pages:</td>
                                    <th>{totalPages}</th>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td>Publisher:</td>
                                    <th>{publisher}</th>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td>Year of Publishing:</td>
                                    <th>{yearOfPublishing}</th>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td>Rating:</td>
                                    <th>{rating}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* button */}
                    <div className="space-x-4">
                        <button onClick={() => handleMarkAsRead(bookId)} className="btn bg-white hover:bg-violet-500 hover:text-white border-violet-400">Read</button>
                        <button onClick={() => handleAddToWishlist(bookId)} className="btn bg-[#52d2f3] hover:bg-[#50B1C9]">Wishlist</button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};



export default BookDetails;