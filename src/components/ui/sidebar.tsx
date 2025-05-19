import React from "react";
import {
  Home,
  Upload,
  BookOpen,
  Lightbulb,
  Zap,
  Calendar,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: <Home size={20} /> },
  { label: "Uploads", icon: <Upload size={20} />, active: true },
  { label: "Study", icon: <BookOpen size={20} /> },
  { label: "Quiz", icon: <Lightbulb size={20} /> },
  { label: "Flashcard", icon: <Zap size={20} /> },
  { label: "Planner", icon: <Calendar size={20} /> },
  { label: "Slides", icon: <FileText size={20} /> },
];

const bottomItems = [
  { label: "Settings", icon: <Settings size={20} /> },
  { label: "Sign out", icon: <LogOut size={20} /> },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gradient-to-b from-purple-100 to-purple-200 text-gray-600 p-6 w-64 h-screen flex flex-col justify-between shadow-lg">
      <div>
        <div className="flex items-center gap-2 mb-10">
          <span className="text-2xl text-purple-500">✴️</span>
          <span className="text-2xl font-bold text-purple-700">StudySync</span>
        </div>
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer transition 
                ${item.active ? "bg-white text-purple-600 font-semibold shadow" : "hover:bg-purple-100"}
                ${item.active ? "shadow-md" : ""}
              `}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-2 mb-2">
        {bottomItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer hover:bg-purple-100 transition"
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;