import React from 'react';

const sizeVariants = {
    'sm': 'h-7 w-7',
    'md': 'h-8 w-8',
    'lg': 'h-12 w-12',
}

const LoadingSpinner = ({size = 'md'}) => {
    const sizeVariant = sizeVariants[size] || sizeVariants.md;
    return (
        <span className={`${sizeVariant} inline-block border-2 border-primary dark:border-orange-600 border-b-transparent animate-spin rounded-full`}></span>
    );
};

export default LoadingSpinner;