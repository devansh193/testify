import { DashboardLayout } from "@/components/dashboard-layout";
import { MyProducts } from "@/components/my-product";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="">
        <MyProducts />
      </div>
    </DashboardLayout>
  );
}
