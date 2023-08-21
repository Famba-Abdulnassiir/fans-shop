import { Link, Outlet } from "react-router-dom";
function Dashboard() {
    return (
        <>
            <div>
                <nav className="flex sm:justify-center lg:justify-center space-x-4 bg-black h-14">
                    
                    {[
                        ['Home', '/dashboard'],
                        [' About Us', '/dashboard/aboutus'],
                        ['Contact Us', '/dashboard/contactus'],
                        ['Services', '/dashboard/services'],
                    ].map(([title, url]) => (
                        <Link to={url} className="px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900 text-center">{title}</Link>
                    ))}
               
                </nav> 
            </div>
            <Outlet/>
        </>
    )

}
export default Dashboard;