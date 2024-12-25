import { MessageSquare, Package2, Star, User } from "lucide-react";
import { motion } from "framer-motion";
const data = [
  {
    label: "Total boards",
    total: 12,
    lastMonth: "+2",
    icon: Package2,
    color: "blue",
  },
  {
    label: "Total testimonials",
    total: 248,
    lastMonth: "+20",
    icon: MessageSquare,
    color: "green",
  },
  {
    label: "Average rating",
    total: 4.8,
    lastMonth: "672",
    icon: Star,
    color: "red",
  },
  {
    label: "Total customers",
    total: 567,
    lastMonth: "+52",
    icon: User,
    color: "black",
  },
];

export const DashboardContent = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
          {data.map((item) => (
            <div
              className="col-span-1 flex flex-col p-6 rounded-lg bg-[#FFFFFF] shadow-md gap-y-2 transition-shadow duration-300 hover:shadow-xl"
              key={item.label}
            >
              <div className="flex items-center justify-between">
                <h1 className="font-sans font-medium text-md">{item.label}</h1>
                <div>
                  <item.icon className="size-4" color={item.color} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-sans font-semibold">
                  {item.total}
                </h1>
              </div>
              <div>
                <h1 className="text-sm">+2 from last month</h1>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
