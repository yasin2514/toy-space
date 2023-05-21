import { useEffect } from 'react';
import img1 from '../../../../assets/b-1.jpg'
import img2 from '../../../../assets/b-2.jpg'
import img3 from '../../../../assets/b-3.jpg'
import AOS from 'aos';
import { Link } from 'react-router-dom';

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="carousel w-full h-[600px] ">

            {/* slide-1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute h-full flex items-center bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0)]">
                    <div data-aos="zoom-in-right"
                        data-aos-duration="1000" className='text-white space-y-7 ms-12   w-2/4 bg-black rounded-xl p-10 bg-opacity-50  '>
                        <h2 className='text-6xl font-bold'>Affordable Price For All Sports CarToy</h2>
                        <p className='font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <Link to={'/upcoming'} className="btn btn-error btn-outline mr-5">Discover More</Link>
                        </div>
                    </div>

                </div>

                <div className="absolute flex justify-center gap-10 transform -translate-y-1/2 inset-x-1/2 bottom-0">
                    <a href="#slide3" className="btn btn-error btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-error">❯</a>
                </div>
            </div>

            {/* slide-2 */}

            <div id="slide2" className="carousel-item relative w-full ">
                <img src={img2} className="w-full " />
                <div className="absolute h-full flex items-center  bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0)]">
                    <div data-aos="zoom-in-right"
                        data-aos-duration="1000" className='text-white space-y-7 ms-12  w-2/4 bg-black rounded-xl p-10 bg-opacity-50  '>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <Link to={'/upcoming'} className="btn btn-outline btn-error mr-5">Discover More</Link>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-center gap-10 transform -translate-y-1/2 inset-x-1/2 bottom-0">
                    <a href="#slide1" className="btn btn-circle btn-error">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-error">❯</a>
                </div>
            </div>

            {/* slide-3 */}

            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full " />
                <div className="absolute h-full flex items-center  bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0)]">
                    <div data-aos="zoom-in-right"
                        data-aos-duration="1000" className='text-white space-y-7 ms-12  w-2/4 bg-black rounded-xl p-10 bg-opacity-50  '>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <Link to={'/upcoming'} className="btn btn-error  btn-outline mr-5">Discover More</Link>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-center gap-10 transform -translate-y-1/2 inset-x-1/2 bottom-0">
                    <a href="#slide2" className="btn btn-circle btn-error">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-error">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;