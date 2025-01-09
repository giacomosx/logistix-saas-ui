'use client'

import React, {useEffect, useState} from 'react';
import {navbarTheme} from "@/components/ui/dashboardnav/theme";
import {Avatar, DarkThemeToggle, Dropdown, Navbar} from "flowbite-react";
import Logo from "@/components/logo/Logo";
import SearchForm from "@/components/ui/searchform/SearchForm";
import {createClient} from "@/utils/supabase/client";
import {redirect} from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import UserDropdown from "@/components/userdropdown/UserDropdown";

const DashBoardNav = ({user}) => {
    const supaBaseClient = createClient()

    const signOut = async () => {
        const { error } = await supaBaseClient.auth.signOut();
        if (!error) {
            redirect("/login");
        }
    }

    return (
        <Navbar fluid theme={navbarTheme}>
            <Navbar.Brand href="/">
                <Logo size={'medium'}/>
                <span className=" text-secondary ms-2 self-center whitespace-nowrap text-3xl font-semibold dark:text-white">Logistix</span>
            </Navbar.Brand>
                <SearchForm variants={'order-last md:order-none mt-2 md:max-w-md md:mt-0 lg:max-w-xl'} />
            <div className={'flex'}>
                <DarkThemeToggle />
                <UserDropdown user={user} signOut={signOut} />
            </div>
        </Navbar>
    );
};

export default DashBoardNav;