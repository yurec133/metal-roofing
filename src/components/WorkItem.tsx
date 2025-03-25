import React from "react";
import { CircleCheckBig } from "lucide-react";

interface WorkItemProps {
  title: string;
  desc: string;
  icon: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ title, desc, icon }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-3 py-5 px-3 bg-white rounded-xl shadow-md border border-gray-200">
      <CircleCheckBig width={24} height={24} className={"text-blue-500"} />
      <div>
        <h3 className="text-base font-semibold text-blue-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default WorkItem;
