import { BsCalendarDate } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFindInPage } from "react-icons/md";
import { SiBookmeter } from "react-icons/si";
import { Link } from "react-router-dom";


const ListedBookSingle = ({ book }) => {

    const { bookId, image, bookName, author, category, rating, tags, totalPages, publisher, yearOfPublishing } = book;
    return (
        <div>
            <div className="flex flex-col lg:flex-row border rounded-xl p-5 gap-6 items-center my-4">
                <div className="w-full lg:w-3/12 border flex justify-center bg-[#1313130d] rounded-xl">
                    <img className="p-7 rounded-xl" src={image} alt="" />
                </div>
                <div className="w-full lg:w-9/12 space-y-4">
                    <h1 className="text-2xl font-bold text-[#131313]">{bookName}</h1>
                    <p className="text-base font-[#131313cc] font-[500]">By : {author}</p>
                    <div className="flex gap-4">
                        <h4 className="font-bold font-[#191919]">Tag </h4>
                        {
                            tags.map((tag, idx) => <button key={idx} className="px-4 bg-[#23be0a0d] text-[#23BE0A] font-semibold rounded-full mr-2">#{tag}</button>)
                        }
                        <p className="flex items-center"><BsCalendarDate className="mr-2" /> Year of Publishing: {yearOfPublishing}</p>
                    </div>
                    <div className="flex gap-4 text-base text-[#13131399]">
                        <p className="flex items-center"><FiUsers className="mr-2" /> Publisher: {publisher}</p>
                        <p className="flex items-center"><MdOutlineFindInPage className="mr-2" /> Page {totalPages}</p>
                    </div>
                    <hr />
                    <div className="flex gap-4">
                        <p className="px-5 py-1 bg-[#328eff26] text-[#328EFF] rounded-full">Category: {category}</p>
                        <p className="px-5 py-1 bg-[#ffac3326] text-[#ffac33] rounded-full">Rating: {rating}</p>
                        <Link to={`/bookDetails/${bookId}`} className="px-5 py-1 bg-[#23BE0A] text-white rounded-full">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBookSingle;