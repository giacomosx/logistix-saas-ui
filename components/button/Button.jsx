import React from 'react';

const variants = {
    'primary': 'disabled:opacity-75 disabled:cursor-not-allowed border border-primary bg-primary text-white hover:bg-primary-hover focus:ring-1 focus:ring-primary dark:border-orange-600 dark:bg-orange-600 dark:text-white dark:focus:ring-orange-700 ',
    'outline': 'disabled:opacity-75 disabled:cursor-not-allowed border border-primary bg-white text-primary hover:bg-primary hover:text-white focus:ring-1 focus:ring-primary dark:text-white dark:border-primary dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-orange-700 ',
    'danger': 'disabled:opacity-75 disabled:cursor-not-allowed border border-transparent bg-red-700 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-800 dark:bg-red-600 dark:focus:ring-red-900 dark:enabled:hover:bg-red-700'
}

const sizes = {
    "xs": "px-2 py-1 text-xs",
    "sm": "px-3 py-1.5 text-sm",
    "md": "px-4 py-2 text-sm",
    "lg": "px-5 py-2.5 text-base",
    "xl": "px-6 py-3 text-base"
}

const Button = ({children, variant, className = '', size, onClick, type, formAction, disabled = false}) => {
    const baseStyle = 'rounded flex items-stretch justify-center p-0.5 text-center font-medium transition-all focus:z-10 focus:outline-none'
    const variantStyle = variants[variant] || variants.primary
    const variantSize = sizes[size] || sizes.xs

    return (
        <button className={`${variantSize} ${baseStyle} ${variantStyle} ${className} `} onClick={onClick} type={type || 'button'} formAction={formAction} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;