import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo-2.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';


const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success('User logOut Successfully!', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            })
            .catch(error => {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }


    const menu = <>
        <li className='hover:text-red-600'><NavLink to={'/'} className={({ isActive }) => isActive ? "text-red-600" : ""}>Home</NavLink></li>
        <li className='hover:text-red-600'><NavLink to={'/allToys'} className={({ isActive }) => isActive ? "text-red-600" : ""}>All Toys</NavLink></li>
        {
            user && <>
                <li className='hover:text-red-600'><NavLink to={'/addAToy'} className={({ isActive }) => isActive ? "text-red-600" : ""}>Add A Toy</NavLink></li>
                <li className='hover:text-red-600'><NavLink to={'/myToys'} className={({ isActive }) => isActive ? "text-red-600" : ""}>MyToys</NavLink></li>
            </>

        }
        <li className='hover:text-red-600'><NavLink to={'/blogs'} className={({ isActive }) => isActive ? "text-red-600" : ""}>Blogs</NavLink></li>
    </>

    return (
        <div className="navbar bg-black text-white py-7 z-50 sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <div className='flex'>
                    <img src={logo} alt="logo" className='w-20' />
                    <h2 className='text-4xl font-bold'><span className='text-red-600'>Toy</span>Space</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="gap-14  menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <img data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} src={user?.photoURL} alt={user?.displayName} className='rounded-full w-9 h-9 border mr-5' />
                        <Link onClick={handleLogout} to={'/login'} className={`btn-custom`}>Sign Out</Link>
                        <Tooltip id="my-tooltip" />
                    </> :
                        <Link to={'/login'} className={`btn-custom `}>Sign In</Link>
                }
                <ToastContainer />
            </div>
        </div>
    );
};

export default Navbar;