"use client";

import {customTheme} from "./theme";
import {Drawer, Sidebar } from "flowbite-react";
import {useEffect, useState} from "react";
import {
    HiChartPie,
    HiClipboard,
    HiCollection,
    HiInformationCircle,
    HiLogin,
    HiPencil,
    HiShoppingBag,
    HiUsers,
} from "react-icons/hi";
import {useWindowSize} from "@/hooks/useWindowSize";

export function DashboardSidebar() {
    const windowSize = useWindowSize();
    const isMobile = windowSize < 1024;
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);

    useEffect(() => {
        setIsOpen(!isMobile);
    }, [isMobile]);


    return (
        <>
            <div className="absolute top-1/3 -left-2.5 lg:hidden animate-pulse z-20">
                <button onClick={() => setIsOpen(true)} className={'bg-gray-500 dark:bg-gray-400 hover:bg-gray-900 rounded'}>
                    <svg className="w-8 h-8  text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M6 6h8m-8 4h12M6 14h8m-8 4h12"/>
                    </svg>
                </button>
            </div>
            <Drawer open={isOpen} onClose={handleClose} theme={customTheme} >
                <Drawer.Header title={'MENU'}/>
                <Drawer.Items>
                    <Sidebar aria-label="Sidebar with multi-level dropdown example"
                             className="[&>div]:bg-transparent [&>div]:p-0">
                        <div className="flex flex-col justify-between py-2">
                            <div>
                                <Sidebar.Items>
                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item href="/dashboard" icon={HiChartPie}>
                                            Dashboard
                                        </Sidebar.Item>
                                        <Sidebar.Collapse icon={HiShoppingBag} label='Quote Requests'>
                                            <Sidebar.Item href="/dashboard/quote-requests">All requests</Sidebar.Item>
                                            <Sidebar.Item href="/dashboard/new-request">New requests</Sidebar.Item>
                                        </Sidebar.Collapse>
                                        <Sidebar.Item href="/users/list" icon={HiUsers}>
                                            Users list
                                        </Sidebar.Item>
                                        <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
                                            Sign in
                                        </Sidebar.Item>
                                        <Sidebar.Item href="/authentication/sign-up" icon={HiPencil}>
                                            Sign up
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>
                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item href="https://github.com/themesberg/flowbite-react/" icon={HiClipboard}>
                                            Docs
                                        </Sidebar.Item>
                                        <Sidebar.Item href="https://flowbite-react.com/" icon={HiCollection}>
                                            Components
                                        </Sidebar.Item>
                                        <Sidebar.Item href="https://github.com/themesberg/flowbite-react/issues" icon={HiInformationCircle}>
                                            Help
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>
                                </Sidebar.Items>
                            </div>
                        </div>
                    </Sidebar>
                </Drawer.Items>
            </Drawer>
        </>
    );
}
