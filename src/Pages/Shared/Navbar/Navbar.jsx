import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo-2.png'
const Navbar = () => {
    const user = '';
    const menu = <>
        <li className='hover:text-red-600'><NavLink to={'/'} className={({ isActive }) => isActive ? "text-red-600" : ""}>Home</NavLink></li>
        <li className='hover:text-red-600'><NavLink to={'/allToys'} className={({ isActive }) => isActive ? "text-red-600" : ""}>All Toys</NavLink></li>
        {
            user && <>
                <li className='hover:text-red-600'><NavLink to={'/myToys'} className={({ isActive }) => isActive ? "text-red-600" : ""}>MyToys</NavLink></li>
                <li className='hover:text-red-600'><NavLink to={'/addAToy'} className={({ isActive }) => isActive ? "text-red-600" : ""}>Add A Toy</NavLink></li>
            </>

        }
        <li className='hover:text-red-600'><NavLink to={'/blogs'} className={({ isActive }) => isActive ? "text-red-600" : ""}>Blogs</NavLink></li>
    </>

    return (
        <div className="navbar bg-black text-white py-6">
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
                        <img src="" alt="user" className='rounded-full w-9 h-9 border mr-5' />
                        <NavLink to={'/logout'} className={`btn-custom   ${({ isActive }) => isActive ? "text-red-600" : ""}`}>Sign Out</NavLink>
                    </> :
                        <NavLink to={'/login'} className={`btn-custom   ${({ isActive }) => isActive ? "text-red-600" : ""}`}>Sign In</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;