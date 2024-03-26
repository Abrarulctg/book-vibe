import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/book-data.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);
    return (
        <div>
            <h1 className="text-[#131313] text-4xl font-bold text-center mb-10">Books</h1>
            <div>
                <h1>Book : {books.length}</h1>
                <div className="grid lg:grid-cols-3 gap-4">
                    {
                        books.map((book, idx) => <Book
                            key={idx}
                            book={book}
                        ></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Books;