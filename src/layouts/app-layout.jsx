
import { Outlet } from 'react-router-dom';
import Header from './header';
const AppLayout = () => {
    return <div>
        <div className="grid-background"></div>
        <main className="min-h-screen container">
           <Header  />
            <Outlet />
            </main>
            <div className="p-10 textcenter bg-gray-800 mt-10">Made with ❤️ by Juneth Khan helped by RoadSideCoder</div>
    </div>
};

export default AppLayout; 