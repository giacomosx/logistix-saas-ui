"use client";

import {customTheme} from "./theme";
import {Drawer, Sidebar } from "flowbite-react";
import {useEffect, useState} from "react";
import {
    HiChartPie, HiDatabase,
    HiInbox, HiSearch,
} from "react-icons/hi";

export function DashboardSidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isMounted && !isMobile) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [isMounted, isMobile]);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            {isMobile && (
                <div className="absolute top-1/3 -left-2.5 lg:hidden animate-pulse z-20">
                    <button onClick={() => setIsOpen(true)} className={'bg-gray-500 dark:bg-gray-400 hover:bg-gray-900 rounded'}>
                        <svg className="w-8 h-8  text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 6h8m-8 4h12M6 14h8m-8 4h12"/>
                        </svg>
                    </button>
                </div>
            )}
            <Drawer open={isOpen} onClose={() => setIsOpen(false)} theme={customTheme}>
                <Drawer.Header title={'MENU'}/>
                <Drawer.Items>
                    <Sidebar aria-label="Sidebar with multi-level dropdown example"
                             className="[&>div]:bg-transparent [&>div]:p-0">
                        <div className="flex flex-col justify-between py-2">
                            <div>
                                <Sidebar.Items>
                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item href="/dashboard" icon={HiChartPie}>Dashboard</Sidebar.Item>
                                        <Sidebar.Collapse icon={HiInbox} label='Quote Requests' className={'mt-6'}>
                                            <Sidebar.Item href="/dashboard/quote-requests">All requests</Sidebar.Item>
                                            <Sidebar.Item href="/dashboard/new-request">New requests</Sidebar.Item>
                                        </Sidebar.Collapse>
                                    </Sidebar.ItemGroup>
                                    <Sidebar.ItemGroup>
                                        <Sidebar.Collapse icon={HiDatabase} label='Products'>
                                            <Sidebar.Item href="/dashboard/products">All products</Sidebar.Item>
                                            <Sidebar.Item href="/dashboard/new-product">New product</Sidebar.Item>
                                        </Sidebar.Collapse>
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
