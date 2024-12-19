'use client'

import {Breadcrumb, BreadcrumbItem} from "flowbite-react";
import {HiHome} from "react-icons/hi";
import {usePathname} from "next/navigation";
import {customTheme} from "./theme";

export function BreadCrumb() {
    const path = usePathname();

    return (
        <Breadcrumb aria-label="Default breadcrumb example" theme={customTheme}>
            <BreadcrumbItem href="/dashboard" icon={HiHome}>
                Dashboard
            </BreadcrumbItem>
            {path.split('/').slice(2, path.length - 1).map((item, idx) => (
                <BreadcrumbItem key={idx} href={`/dashboard/${item}`}>
                    {item.charAt(0).toUpperCase() + item.split('').slice(1).join('').replaceAll('-', ' ')}
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
}