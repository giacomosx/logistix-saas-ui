import React from 'react';
import {MainFooter} from "@/components/ui/mainfooter/MainFooter";
import DashBoardNav from "@/components/ui/dashboardnav/DashBoardNav";
import {DashboardSidebar} from "@/components/ui/dashboardsidebar/DashBoardSidebar";
import {BreadCrumb} from "@/components/breadcrumb/BreadCrumb";

const Layout = ({children}) => {
    return (
        <div className={`flex flex-col h-screen`}>
            <DashBoardNav />
            <main className={`flex flex-1 dark:bg-gray-900`}>
            <DashboardSidebar />
                <div className="w-full mx-auto max-w-screen-2xl p-4 lg:p-8">
                    <BreadCrumb />
                    {children}
                </div>
            </main>
            <MainFooter/>
        </div>
    );
};

export default Layout;