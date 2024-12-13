import {MainNavbar} from "@/components/ui/mainnavbar/MainNavbar";
import {MainFooter} from "@/components/ui/mainfooter/MainFooter";
import React from 'react';

const Layout = ({children}) => {
    return (
        <div className={`flex flex-col min-h-screen `}>
            <MainNavbar/>
            <main className={`flex-1 p-4 lg:p-8 dark:bg-gray-900`}>
                {children}
            </main>
            <MainFooter/>
        </div>
    );
};

export default Layout;