import { useLoaderData } from 'react-router-dom';
import { getStoredBooks } from '../utility/LocalStorage';
import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import PropTypes from 'prop-types';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'purple', 'violet', 'green'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PageToRead = () => {
    const [displayReadListedBooks, setDisplayReadListedBooks] = useState([]);
    // const [bookPages, setBookPages] = useState([]);
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
    }, []);
    // console.log(displayReadListedBooks);

    return (
        <div>
            <div className='bg-[#0d0d0d08] rounded-xl mt-6 p-5 flex justify-center'>
                <BarChart className="w-auto"
                    width={1000}
                    height={400}
                    data={displayReadListedBooks}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {displayReadListedBooks.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>



        </div>
    );
};


TriangleBar.propTypes = {
    props: PropTypes.object
}


export default PageToRead;