import { MessageSquare, Package2, Star, User } from "lucide-react";
import { motion } from "framer-motion";
const data = [
  {
    label: "Active   boards",
    total: 12,
    lastMonth: "+2",
    icon: Package2,
    color: "blue",
    bgColor: "bg-blue-100",
  },
  {
    label: "Total testimonials",
    total: 248,
    lastMonth: "+20",
    icon: MessageSquare,
    color: "green",
    bgColor: "bg-green-100",
  },
  {
    label: "Average rating",
    total: 4.8,
    lastMonth: "672",
    icon: Star,
    color: "red",
    bgColor: "bg-red-100",
  },
  {
    label: "Total customers",
    total: 567,
    lastMonth: "+52",
    icon: User,
    color: "black",
    bgColor: "bg-neutral-100",
  },
];

export const DashboardContent = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.5,
        }}
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
          {data.map((item) => (
            <div
              className="col-span-1 flex flex-col p-6 rounded-lg bg-[#FFFFFF] shadow-sm transition-shadow duration-300 hover:shadow-md"
              key={item.label}
            >
              <div className="flex items-center justify-between">
                <h1 className="font-sans text-sm text-[#4B5563]">
                  {item.label}
                </h1>
                <div className={`p-3 ${item.bgColor} rounded-md`}>
                  <item.icon className="size-4" color={item.color} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-sans font-semibold">
                  {item.total}
                </h1>
              </div>
              <div>
                <h1 className="text-sm text-[#17A34A]">+2 from last month</h1>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
