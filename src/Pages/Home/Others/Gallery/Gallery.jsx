import { useEffect, useState } from "react";

const Gallery = () => {
    const [cars, setCars] = useState();
    useEffect(() => {
        fetch('https://toy-marketplace-server-plum.vercel.app/gallery')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className="px-20 my-24">
            <div className="mb-10 text-center">
                <h2 className="text-5xl font-bold text-black ">Gallery for Our shop</h2>
                <p className="mt-2 text-gray-900">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, nobis! Magnam animi, nam distinctio incidunt <br /> accusantium aliquam! Non, voluptatum repellendus.</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {
                    cars && cars.map(car => (
                        <div className="shadow bg-gray-200 rounded-lg relative hover:scale-[1.12] duration-300"
                            key={car._id}>
                            <img src={car.img} alt="" />
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
