import { NavLink, Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
const MainLayout = () => {
    return (
        <>
        <ToastContainer />
        <nav className='nav '>
            <div className="container flex flex-col border border-black border-solid ">
            <NavLink to="/" >
            <span>Home</span>
            </NavLink>
            <NavLink to="/search" >
            <span>Search</span>
            </NavLink>
            <NavLink to="/explore" >
            <span>Explore</span>
            </NavLink>
            <NavLink to="/reels" >
            <span>Reels</span>
            </NavLink>
            <NavLink to="/messages" >
            <span>Messages</span>
            </NavLink>
            <NavLink to="/notifications" >
            <span>Notifications</span>
            </NavLink>
            </div>
        </nav>
        <Outlet />
        </>
    );
}

export default MainLayout;
