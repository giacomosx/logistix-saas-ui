'use client'

import React from 'react';
import {Avatar, Dropdown} from "flowbite-react";

const UserDropdown = ({user, signOut}) => {
    return (
        <Dropdown arrowIcon={false} inline label={<Avatar alt="User settings" placeholderInitials={user?.email.toUpperCase().split('')[0]} img="" rounded />}>
            <Dropdown.Header>
                <span className="block text-sm">{user?.username || null}</span>
                <span className="block truncate text-sm font-medium">{user?.email} </span>
            </Dropdown.Header>
            <Dropdown.Item href={'/dashboard'}>Dashboard</Dropdown.Item>
            <Dropdown.Item href={'/dashboard/user-settings'}>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={signOut}>Sign out</Dropdown.Item>
        </Dropdown>
    );
};

export default UserDropdown;