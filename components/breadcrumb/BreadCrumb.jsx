'use client'

import {Breadcrumb, BreadcrumbItem} from "flowbite-react";
import {HiHome} from "react-icons/hi";
import {usePathname} from "next/navigation";
import {customTheme} from "./theme";

export function BreadCrumb() {
    const path = usePathname();
    const pathLength = path.split('/').slice(2, path.length - 1).length;

    return (
        <Breadcrumb aria-label="Default breadcrumb example" theme={customTheme}>
            <BreadcrumbItem href="/dashboard" icon={HiHome}>
                Dashboard
            </BreadcrumbItem>
            {path.split('/').slice(2, path.length - 1).map((item, idx) => {
                if (idx === pathLength - 1 ) {
                    return (
                        <BreadcrumbItem key={idx} >
                            {item.charAt(0).toUpperCase() + item.split('').slice(1).join('').replaceAll('-', ' ')}
                        </BreadcrumbItem>
                    )
                } else {
                    return (
                        <BreadcrumbItem key={idx} href={`/dashboard/${item}`}>
                            {item.charAt(0).toUpperCase() + item.split('').slice(1).join('').replaceAll('-', ' ')}
                        </BreadcrumbItem>
                    )
                }
            })}
        </Breadcrumb>
    );
}