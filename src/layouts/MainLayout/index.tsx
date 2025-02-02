import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Sidebar from '../../components/Sidebar';
const MainLayout = () => {
    return (
        <>
        <ToastContainer />
        <Sidebar />
        <Outlet />
        </>
    );
}

export default MainLayout;
