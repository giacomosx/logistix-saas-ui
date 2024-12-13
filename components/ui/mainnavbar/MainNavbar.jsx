"use client";

import {Navbar, DarkThemeToggle} from "flowbite-react";
import Logo from "@/components/logo/Logo";
import {navbarTheme} from "@/components/ui/mainnavbar/theme";
import Button from "@/components/button/Button";
import Link from "next/link";

export function MainNavbar() {

    return (
        <Navbar fluid theme={navbarTheme}>
            <Navbar.Brand href="/">
                <Logo size={'medium'}/>
                <span className="text-secondary ms-2 self-center whitespace-nowrap text-3xl font-semibold dark:text-white">Logistix</span>
            </Navbar.Brand>
            <div className="flex md:order-2 gap-2">
                <DarkThemeToggle />
                <Button size={'md'}><Link href={'/dashboard'}>Login</Link></Button>
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
