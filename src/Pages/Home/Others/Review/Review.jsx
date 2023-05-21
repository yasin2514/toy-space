import { Rating } from '@smastrom/react-rating';
import img1 from '../../../../assets/client-1.png'
import img2 from '../../../../assets/client-2.png'
import img3 from '../../../../assets/client-3.png'
import AOS from 'aos';
import { useEffect } from 'react';

const Review = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-right"
        data-aos-duration="3000" className="mb-24">
            <div className="mb-10 text-center">
                <h2 className="text-5xl font-bold text-black ">What They Say</h2>
                <p className="mt-3 text-red-600">CUSTOMER REVIEWS</p>
            </div>
            <div className="mx-10 lg:mx-20 grid md:grid-cols-2 lg:grid-cols-3 gap-16 group">
                {/* client -1 */}
                <div className="bg-base-100 rounded-ss-[50px] rounded-ee-[50px]  shadow shadow-black p-8 
                group-hover:blur-sm duration-500 hover:!blur-none group-hover:scale-[0.90] cursor-pointer hover:!scale-100">
                    <div className="flex justify-around items-center">
                        <div className='rounded-full w-24 h-24 bg-gray-300 border border-black'>
                            <img src={img1} alt="customer" className="border rounded-full object-contain" />
                        </div>
                        <span className='space-y-2'>
                            <h4 className='text-xl font-medium'>Al Mamun Khan</h4>
                            <Rating className="" style={{ maxWidth: 100 }}
                                value={5} readOnly />
                        </span>
                    </div>
                    <div className="text-center mt-5">
                        <p>If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel non hic aperiam necessitatibus quo adipisci, dolore tempore reprehenderit dolores exercitationem.</ p>
                    </div>
                </div>
                {/* client -2 */}
                <div className="bg-base-100 rounded-ss-[50px] rounded-ee-[50px]  shadow shadow-black p-8
                 group-hover:blur-sm duration-500 hover:!blur-none group-hover:scale-[0.90] cursor-pointer
                 hover:!scale-100">
                    <div className="flex justify-around items-center">
                        <div className='rounded-full w-24 h-24 bg-gray-300 border border-black'>
                            <img src={img2} alt="customer" className="border rounded-full object-contain" />
                        </div>
                        <span className='space-y-2'>
                            <h4 className='text-xl font-medium'>Yasin Khan Rabbi</h4>
                            <Rating className="" style={{ maxWidth: 100 }}
                                value={5} readOnly />
                        </span>
                    </div>
                    <div className="text-center mt-5">
                        <p>If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel non hic aperiam necessitatibus quo adipisci, dolore tempore reprehenderit dolores exercitationem.</ p>
                    </div>
                </div>
                {/* client -3 */}
                <div className="bg-base-100 rounded-ss-[50px] rounded-ee-[50px]  shadow shadow-black p-8
                 group-hover:blur-sm duration-500 hover:!blur-none group-hover:scale-[0.90] cursor-pointer
                 hover:!scale-100">
                    <div className="flex justify-around items-center">
                        <div className='rounded-full w-24 h-24 bg-gray-300 border border-black'>
                            <img src={img3} alt="customer" className="border rounded-full object-contain" />
                        </div>
                        <span className='space-y-2'>
                            <h4 className='text-xl font-medium'>Reduan Sahariar</h4>
                            <Rating className="" style={{ maxWidth: 100 }}
                                value={5} readOnly />
                        </span>
                    </div>
                    <div className="text-center mt-5">
                        <p>If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel non hic aperiam necessitatibus quo adipisci, dolore tempore reprehenderit dolores exercitationem.</ p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;