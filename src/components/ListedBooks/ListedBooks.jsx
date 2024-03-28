import { useLoaderData } from "react-router-dom";
import { getStoredBooks, getWishListedBooks } from "../utility/LocalStorage";
import { useEffect, useState } from "react";
import ListedBookSingle from "../ListedBookSingle/ListedBookSingle";
import { IoIosArrowDown } from "react-icons/io";


const ListedBooks = () => {
    const [readListedBooks, setReadListedBooks] = useState([]);
    const [displayReadListedBooks, setDisplayReadListedBooks] = useState([]);

    // handling Wishlist Books
    const [wishListedBooks, setWishListedBooks] = useState([]);
    const [displayWishListedBooks, setDisplayWishListedBooks] = useState([]);

    const books = useLoaderData();

    useEffect(() => {
        const readListBookId = getStoredBooks();
        const readListedBooks = [];
        for (const book of books) {
            // console.log(book)
            for (const id of readListBookId) {
                if (id === book.bookId) {
                    readListedBooks.push(book);
                }
            }
        }
        setDisplayReadListedBooks(readListedBooks);
        setReadListedBooks(readListedBooks);
    }, []);
    // console.log("displaying from state read list", displayReadListedBooks)

    useEffect(() => {
        const wishListedBooksId = getWishListedBooks();
        const wishListedBooks = [];
        for (const book of books) {
            for (const id of wishListedBooksId) {
                if (id === book.bookId) {
                    wishListedBooks.push(book);
                }
            }
        }
        setWishListedBooks(wishListedBooks);
        setDisplayWishListedBooks(wishListedBooks);
    }, []);
    // console.log("Displaying from state wishlist", displayWishListedBooks);




    //////////// Sorting try start  || this code will not effect to main code
    // this ids are called for sorting list
    const readListBookIds = getStoredBooks();
    const wishlistedBookIds = getWishListedBooks();
    console.log("before sort:", readListBookIds)

    const sortedReadListBookIds = readListBookIds.sort(function (a, b) { return b - a });
    console.log("after sort:", sortedReadListBookIds)

    const sortedBooks = [];
    const wishListedBooksSort = [];
    for (const book of books) {
        for (const id of readListBookIds) {
            if (id === book.bookId) {
                wishListedBooksSort.push(book);
            }
        }
    }
    const { rating } = wishListedBooksSort;
    console.log(wishListedBooksSort, rating)
    // for (const book of books) {
    //     if (book.totalPages > book[0].totalPages) {
    //         sortedBooks.push(book);
    //     }
    // }
    // console.log(sortedBooks);

    // Function to Sort Data
    const handleSortBooks = sort => {
        console.log('btn clicked', sort)
        if (sort === 'all') {
            setDisplayReadListedBooks(readListedBooks)
        }
        else if (sort === 'rating') {

            // const descendingBooksByRating = readListedBooks.rating.sort(function (a, b) { return b - a });
            // const remoteJobs = readListedBooks.filter(job => job.remote_or_onsite === "Remote")
            setDisplayReadListedBooks(descendingBooksByRating);
            console.log(descendingBooksByRating)
        }
        else if (sort === 'numberOfPages') {
            const onsiteJobs = readListedBooks.filter(job => job.remote_or_onsite === "Onsite")
            setDisplayReadListedBooks(onsiteJobs);
        }


        // else {
        //     setAppliedJobs(appliedJobs)
        // }
    }

    ////// sorting end ///////




    return (
        <div>
            <div className="bg-[#1313130d] py-8 text-center rounded-xl my-6">
                <h1 className="text-3xl font-bold text-[#131313]">Books</h1>
            </div>
            <div className="text-center">
                {/* <button>Sort By</button> */}
                {/* <select className="select select-bordered bg-[#23BE0A] text-white font-semibold">
                    <option onChange={() => handleSortBooks('All')} className="bg-white text-black" selected>All</option>
                    <option onClick={() => handleSortBooks('Rating')} className="bg-white text-black">Rating</option>
                    <option className="bg-white text-black">Number of Pages</option>
                    <option className="bg-white text-black">Published Year</option>
                </select> */}
            </div>

            <div className="text-center">
                <div className="dropdown w-40">
                    <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-white font-semibold flex justify-between"><p>Sort By:</p> <IoIosArrowDown /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSortBooks('all')}><a>All</a></li>
                        <li onClick={() => handleSortBooks('rating')} className="bg-white text-black"><button>Rating</button></li>
                        <li onClick={() => handleSortBooks('numberOfPages')} className="bg-white text-black"><button>Number of Pages</button></li>
                        <li onClick={() => handleSortBooks('publishedYear')} className="bg-white text-black"><button>Published Year</button></li>
                    </ul>
                </div>
            </div>
            {/* Listed Book */}
            <div role="tablist" className="tabs tabs-lifted">

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        displayReadListedBooks.map((book, idx) => <ListedBookSingle book={book} key={idx}></ListedBookSingle>)
                    }

                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        wishListedBooks.map((book, idx) => <ListedBookSingle book={book} key={idx}></ListedBookSingle>)
                    }
                </div>

            </div>
        </div>
    );
};

export default ListedBooks;