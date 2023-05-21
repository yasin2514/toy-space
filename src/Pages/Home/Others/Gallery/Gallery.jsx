import { useEffect, useState } from "react";
import LazyLoad from 'react-lazy-load';
import AOS from 'aos';

const Gallery = () => {
    const [cars, setCars] = useState();
    const url = 'https://toy-marketplace-server-plum.vercel.app/gallery'
    useEffect(() => {
        AOS.init();
        fetch(url)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [url])
    return (
        <div data-aos="fade-right"
            data-aos-duration="1000"
            className="px-5 lg:px-20 my-24">
            <div className="mb-10 text-center">
                <h2 className="text-5xl font-bold text-black mb-3">Toys Gallery</h2>
                <p className="text-red-600 text-2xl">Top Collection</p>

            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 px-3 md:px-0 lg:grid-cols-5 gap-5">
                {
                    cars && cars.map(car => (
                        <div className="shadow bg-gray-200 rounded-lg relative hover:scale-[1.12] duration-300"
                            key={car._id}>
                            <LazyLoad threshold={0.90}>
                                <img src={car.img} alt="" />
                            </LazyLoad>
                            <div className="absolute rounded-lg hover:overflow-hidden bg-black top-0 h-full w-full flex items-center justify-center opacity-0 hover:opacity-75 hover:ease-in duration-300 ">
                                <p className="text-white text-2xl font-bold">{car.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Gallery;  
