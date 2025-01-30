import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
        <nav>
            <h1>MainLayout</h1>
        </nav>
        <Outlet />
        </>
    );
}

export default MainLayout;
