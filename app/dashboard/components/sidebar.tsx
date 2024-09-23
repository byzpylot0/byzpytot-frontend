"use client";

import { Separator } from "@/components/ui/separator";
import { signOut } from "aws-amplify/auth";
import { ChevronLeft, ChevronRight, HomeIcon, Users2Icon, MessageCircle, Send } from "lucide-react"; // Assure-toi d'importer MessageCircle
import React from "react";

export const Sidebar = ({ isCollapsed, onToggle }: { isCollapsed: boolean; onToggle: () => void }) => {
    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
        <div className={`h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm transition-width duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
            <div className="flex items-center justify-between p-4">
                <h2 className={`text-lg font-bold ${isCollapsed ? 'hidden' : 'block'}`}>Dashboard</h2>
                <button onClick={onToggle} className="text-gray-500 p-2 rounded">
                    {isCollapsed ? <ChevronRight /> : <ChevronLeft />} {/* Icônes pour ouvrir/fermer */}
                </button>
            </div>
            <div className="flex flex-col w-full h-full p-4">
                <div className={`mb-2 flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
                    <a href="/dashboard" className={`flex items-center w-full p-2 rounded hover:bg-gray-200 transition duration-200`}>
                        <HomeIcon size={30} className={`${isCollapsed ? 'mx-auto scale-150' : ''}`} />
                        <span className={`ml-4 block text-gray-800 ${isCollapsed ? 'hidden' : 'block'}`}>
                            Home
                        </span>
                    </a>
                </div>
                <div className={`mb-2 flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
                    <a href="/leads" className={`flex items-center w-full p-2 rounded hover:bg-gray-200 transition duration-200`}>
                        <Users2Icon size={30} className={`${isCollapsed ? 'mx-auto scale-150' : ''}`} />
                        <span className={`ml-4 block text-gray-800 ${isCollapsed ? 'hidden' : 'block'}`}>
                            Leads
                        </span>
                    </a>
                </div>
                <div className={`mb-2 flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
                    <a href="/dashboard/conversation" className={`flex items-center w-full p-2 rounded hover:bg-gray-200 transition duration-200`}>
                        <Send size={30} className={`${isCollapsed ? 'mx-auto scale-150' : ''}`} /> {/* Icône Messages */}
                        <span className={`ml-4 block text-gray-800 ${isCollapsed ? 'hidden' : 'block'}`}>
                            Messages
                        </span>
                    </a>
                </div>
                {/* Ajoute d'autres liens ici si nécessaire */}
            </div>
            <Separator className="my-4" />
            <div className="mt-auto mb-4">
                <button onClick={handleSignOut} className="w-full text-red-500 hover:text-red-700">
                    Sign out
                </button>
            </div>
        </div>
    );
};
