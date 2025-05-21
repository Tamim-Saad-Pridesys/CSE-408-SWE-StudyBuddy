import React from "react";
import Uploads from "../pages/Uploads";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
// import { LoginForm } from "../components/auth";
// Update import path to match your Sidebar location
import Sidebar from "../components/ui/Sidebar";

// Placeholder components for each sidebar route
const Dashboard = () => <div>Dashboard</div>;
const Study = () => <div>Study</div>;
const Quiz = () => <div>Quiz</div>;
const Flashcard = () => <div>Flashcard</div>;
const Planner = () => <div>Planner</div>;
const Slides = () => <div>Slides</div>;
const Settings = () => <div>Settings</div>;

const Workspace = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-grow overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export const router = createBrowserRouter([{
  path: "/",
  element: <Workspace />,
  children: [
    {
      index: true,
      element: <Navigate to="/uploads" replace />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "uploads",
      element: <Uploads />,
    },
    {
      path: "study",
      element: <Study />,
    },
    {
      path: "quiz",
      element: <Quiz />,
    },
    {
      path: "flashcard",
      element: <Flashcard />,
    },
    {
      path: "planner",
      element: <Planner />,
    },
    {
      path: "slides",
      element: <Slides />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
  ],
},
]);


export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};