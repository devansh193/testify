import { TestimonialDialog } from "@/components/testimonial-dialog";

const Dashboard = () => {
  return (
    <div className="max-w-screen-lg mx-auto text-white">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Testies</h1>
        <TestimonialDialog/>
      </div>
    </div>
  );
};

export default Dashboard;
