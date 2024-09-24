import { Navbar } from "@/components/Navbar";

const DashboardLayout = ({children}:{children:React.ReactNode}) =>{
    return (
        <div className="min-h-screen bg-neutral-950">
            <Navbar/>
            <main className="pt-20 pb-10">
            {children}
            </main>
        </div>
    );
};

export default DashboardLayout;