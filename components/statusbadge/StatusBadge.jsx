'use client'

import React from 'react';

const colorVariants = {
    'Pending': 'border-gray-300 bg-gray-50 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 ',
    'In progress': 'border-yellow-300 bg-yellow-50 text-yellow-900 dark:border-yellow-600 dark:bg-yellow-700 dark:text-white dark:placeholder-yellow-400 ',
    'Resolved': 'border-green-300 bg-green-50 text-green-900 dark:border-green-600 dark:bg-green-700 dark:text-white dark:placeholder-green-400 ',
    'Rejected': 'border-red-300 bg-red-50 text-red-900 dark:border-red-600 dark:bg-red-700 dark:text-white dark:placeholder-red-400 ',
}

const StatusBadge = ({status = 'Pending', className = '' }) => {
    const baseStyle = 'block w-fit h-fit items-center gap-1 font-semibold p-1 text-xs border'
    const colorVariant = colorVariants[status] || colorVariants.Pending;

    return (
        <span className={`${colorVariant} ${baseStyle} ${className}`}>{status}</span>
    );
};

export default StatusBadge;