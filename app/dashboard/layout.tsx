import { Navbar } from "@/components/Navbar";

const DashboardLayout = ({children}:{children:React.ReactNode}) =>{
    return (
        <div className="">
            <Navbar/>
            <main className="">
            {children}
            </main>
        </div>
    );
};

export default DashboardLayout;