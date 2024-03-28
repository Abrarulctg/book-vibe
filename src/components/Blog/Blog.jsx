import { useLoaderData } from "react-router-dom";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blog = () => {
    const books = useLoaderData();
    console.log(books);

    return (
        <div>
            <div className="flex justify-center my-16">
                <div>
                    <h1 className="text-4xl text-center mb-8 font-bold">Blogs</h1>
                    <div>
                        {
                            books.map((book, idx) => <SingleBlog book={book} key={idx}></SingleBlog>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;