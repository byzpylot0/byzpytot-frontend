"use client";

import AuthProvider from "../authProvider";
import { Sidebar } from "./components/sidebar";
import React, { useState } from "react";
import Navbar from "./components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <div>
            <AuthProvider>
                <div className="h-screen bg-white flex">
                    <div className={`hidden md:flex h-full flex-col fixed inset-y-0 z-50 transition-width duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
                        <Sidebar isCollapsed={isCollapsed} onToggle={toggleSidebar} />
                    </div>
                    <main className={`flex-1 h-full transition-all duration-300 ${isCollapsed ? 'ml-16' : 'ml-64'}`}>
                        <Navbar />
                        {children}
                    </main>
                </div>
            </AuthProvider>
        </div>
    );
};

export default DashboardLayout;
