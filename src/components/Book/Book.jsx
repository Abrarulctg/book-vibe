import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types'; // ES6


const Book = ({ book }) => {
    const { bookId, image, bookName, author, category, rating, tags } = book;
    // console.log(book)
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="border p-6 mb-4 rounded-xl">
                <div className="flex justify-center bg-[#F3F3F3] p-6 rounded-xl mb-4">
                    <img className="w-[50%]" src={image} alt="" />
                </div>
                <div className="mb-4">
                    {
                        tags.map((tag, idx) => <button key={idx} className="px-4 py-1 bg-[#23be0a0d] text-[#23BE0A] font-semibold rounded-full mr-2">{tag}</button>)
                    }
                </div>
                <h1 className="text-2xl font-bold text-[#131313] mb-4"> {bookName}</h1>
                <p className="text-base text-[#131313cc] mb-4 font-semibold">By : {author}</p>
                <hr className="border-2 border-dashed" />
                <div className="flex justify-between text-base mt-4">
                    <p>{category}</p>
                    <p className="flex items-center">{rating} <FaRegStar className="ml-2" />
                    </p>
                </div>
            </div>
        </Link>
    );
};


Book.propTypes = {
    book: PropTypes.object
}

export default Book;