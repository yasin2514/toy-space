import logo from '../../../assets/logo-2.png'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className='bg-black text-gray-300 py-16 px-3'>
            <div className="lg:grid grid-cols-[1.3fr_3fr] items-center gap-20 ">
                <div className='flex flex-col gap-1'>
                    <div className='flex mb-10'>
                        <img src={logo} alt="logo" className='w-20' />
                        <h2 className='text-4xl font-bold'><span className='text-red-600'>Toy</span>Space</h2>
                    </div>
                    <p className='text-[1.2rem] text-gray-300'>The
                        ToySpace is a  Dhaka's premier children's car toy e-commerce. Discover a world of joy and excitement with our curated collection of car toys. Shop now for endless fun.</p>
                </div>
                <div className='grid mt-6 lg:mt-0 lg:place-content-start grid-cols-2 lg:grid-cols-4 gap-10  '>
                    <div className='flex flex-col gap-1'>
                        <h4 className="text-White text-[1.4rem] font-medium">Company</h4>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">All Toys</a>
                        <a className="link link-hover">My Toys</a>
                        <a className="link link-hover">Blogs</a>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className="text-White text-[1.4rem] font-medium">Services</h4>
                        <a className="link link-hover">Premium quality</a>
                        <a className="link link-hover">All Toys</a>
                        <a className="link link-hover">Sports car</a>
                        <a className="link link-hover">Mini police car</a>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className="text-White text-[1.4rem] font-medium">Terms</h4>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className="text-White text-[1.4rem] font-medium">Contact</h4>
                        <a className="link link-hover">Dhaka,Bangladesh</a>
                        <a className="link link-hover">017-000-9999</a>

                        <span className='flex gap-4 mt-4 text-xl'>
                            <a className='bg-white rounded-full text-blue-500' href=""><FaFacebook className='text-xl '></FaFacebook></a>
                            <a className='text-blue-500' href=""><FaTwitter></FaTwitter></a>
                            <a className='bg-white  text-blue-500' href=""><FaLinkedin></FaLinkedin></a>
                            <a className='bg-white  text-red-500' href=""><FaInstagramSquare></FaInstagramSquare></a>
                        </span>

                    </div>
                </div>
            </div>
            <hr className='my-8 border-gray-700' />
            <div className='flex justify-between'>
                <small>&copy;2023 The <span className='text-bolder text-white'><span className='text-red-500'>Toy</span>Space</span>  All Rights Reserved</small>
                <small>Develop By <span className='text-red-500'>Yasin Khan Rabbi</span></small>

            </div>
        </footer>
    );
};

export default Footer;
