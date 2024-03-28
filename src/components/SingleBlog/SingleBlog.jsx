
import PropTypes from 'prop-types';

const SingleBlog = ({ book }) => {
    const { bookName, review, author } = book;

    return (
        <div>
            <div className="border w-full mb-10 p-6 rounded-xl shadow-xl">
                <div className="flex justify-between">
                    <h1 className="text-2xl mb-3">{bookName}</h1>

                    <p>By: <a href="#" className="text-blue-600 italic">{author}</a></p>
                </div>
                <p>{review}</p>
                <div className='text-center my-5'>
                    <button className="px-6 py-3 bg-[#23BE0A] text-white rounded-full">View Details</button>
                </div>
            </div>
        </div>
    );
};




SingleBlog.propTypes = {
    book: PropTypes.object
}


export default SingleBlog;