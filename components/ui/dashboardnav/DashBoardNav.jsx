'use client'

import React from 'react';
import {navbarTheme} from "@/components/ui/dashboardnav/theme";
import {Avatar, DarkThemeToggle, Dropdown, Navbar} from "flowbite-react";
import Logo from "@/components/logo/Logo";
import SearchForm from "@/components/ui/searchform/SearchForm";

const DashBoardNav = () => {
    return (
        <Navbar fluid theme={navbarTheme}>
            <Navbar.Brand href="/">
                <Logo size={'medium'}/>
                <span className=" text-secondary ms-2 self-center whitespace-nowrap text-3xl font-semibold dark:text-white">Eco Saas</span>
            </Navbar.Brand>
                <SearchForm variants={'order-last md:order-none mt-2 md:max-w-md md:mt-0 lg:max-w-xl'} />
            <div className={'flex'}>
                <DarkThemeToggle />
                <Dropdown arrowIcon={false} inline label={<Avatar alt="User settings" placeholderInitials={'GB'} img="" rounded />}>
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
            </div>
        </Navbar>
    );
};

export default DashBoardNav;