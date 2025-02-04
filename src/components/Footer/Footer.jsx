

const Footer = () => {
    return (
        <div>
            <footer className="mt-20 bg-[#12132d0a]">
                <div className="flex justify-items-center">
                    <div className="max-w-6xl mx-auto py-24 text-center">
                        <div className="flex justify-center">
                            <h1 className="text-4xl font-extrabold italic mb-4 text-[#12132d]">Book Vibe</h1>
                        </div>
                        <p className="text-[#12132db3]">Book Vibe is an Online Book selling website allows users to purchase books online, offering a vast selection of titles, simple search functions, secure transactions, and features such as reviews and recommendations for an effortless shopping experience.
                        </p>
                        {/* <!-- social icon container --> */}
                        <div className="flex justify-center my-8 gap-8">
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-github"></i>
                        </div>
                        <hr />
                        <p className="text-[#12132d80] mt-8">© 2024, All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;