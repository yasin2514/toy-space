import { useEffect } from "react";
import Countdown from "./Countdown";
import AOS from 'aos';
import { Link } from "react-router-dom";

const Discount = () => {
    const targetDate = new Date('2023-06-06T15:00:00');
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="zoom-in"
            data-aos-duration="3000" className="offer-toys-bg">
            <div className="bg-black bg-opacity-40 w-full h-full py-24">
                <div className="mb-10 text-center space-y-6 bg-black bg-opacity-5">
                    <h2 className="text-red-600 text-5xl">10% Discount</h2>
                    <h2 className="font-bold text-6xl text-white ">
                        On All Sports Car Toys</h2>
                    <p className="text-red-600 text-2xl">Offer Expires on</p>
                </div>
                <div className="text-6xl w-1/2 mx-auto p-16 rounded-xl font-bold shadow shadow-white text-center bg-black text-white">
                    <Countdown targetDate={targetDate} />
                    <Link to={'/upcoming'} className="btn btn-error btn-outline mt-10">Shop Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Discount;