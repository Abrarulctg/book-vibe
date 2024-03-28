
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
            </div>
        </div>
    );
};




SingleBlog.propTypes = {
    book: PropTypes.object
}


export default SingleBlog;