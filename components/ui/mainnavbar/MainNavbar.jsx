"use client";

import {Navbar, DarkThemeToggle, Avatar, Dropdown} from "flowbite-react";
import Logo from "@/components/logo/Logo";
import {navbarTheme} from "@/components/ui/mainnavbar/theme";
import Button from "@/components/button/Button";
import Link from "next/link";
import React from "react";
import {createClient} from "@/utils/supabase/client";
import {redirect} from "next/navigation";
import UserDropdown from "@/components/userdropdown/UserDropdown";

export function MainNavbar({user}) {
    const supaBaseClient = createClient()

    const signOut = async () => {
        const { error } = await supaBaseClient.auth.signOut();
        if (!error) {
            redirect("/login");
        }
    }

    console.log(user)

    return (
        <Navbar fluid theme={navbarTheme}>
            <Navbar.Brand href="/">
                <Logo size={'medium'}/>
                <span className="text-secondary ms-2 self-center whitespace-nowrap text-3xl font-semibold dark:text-white">Logistix</span>
            </Navbar.Brand>
            <div className="flex md:order-2 gap-2">
                <DarkThemeToggle />
                {!user ? (
                    <Button size={'md'}><Link href={'/dashboard'}>Login</Link></Button>
                ) : (
                    <UserDropdown user={user} />
                )}

                <Navbar.Toggle/>
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="/" >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/about">About</Navbar.Link>
                <Navbar.Link href="/services">Services</Navbar.Link>
                <Navbar.Link href="/pricing">Pricing</Navbar.Link>
                <Navbar.Link href="/contacts">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
