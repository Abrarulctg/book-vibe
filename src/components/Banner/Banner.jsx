import bannerImg from '../../assets/pngwing 1.png';

const Banner = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row md:flex-row px-[120px] py-[80px] items-center bg-[#1313130d] rounded-xl my-8'>
                <div className='w-full lg:w-8/12'>
                    <h1 className="text-[56px] font-bold mb-12">Books to freshen up your bookshelf</h1>
                    <button className="btn rounded bg-[#23BE0A] text-white font-bold">View The List</button>
                </div>
                <div className='w-full lg:w-4/12'>
                    <img className='border-2 border-gray-300 border-dashed' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;