"use client";

import { Toast } from "flowbite-react";
import { HiExclamation, HiCheck } from "react-icons/hi";
import { useState } from "react";

const typeVariants = {
    'failure' : {
        'styles' : "bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200",
        'icon' : <HiExclamation className="h-5 w-5" />,
    },
    'success' : {
        'styles' : "bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200",
        'icon' : <HiCheck className="h-5 w-5" />,
    }
};

export function HelperToolTip({ className = '', text = 'All fields are required!', type = 'failure', setAction = null }) {
    const [showToast, setShowToast] = useState(true);
    const typeVariant = typeVariants[type] || typeVariants.failure;

    return (
        <div className={`${className}`}>
            {showToast && (
                <Toast>
                    <div className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${typeVariant.styles}`}>
                        {typeVariant.icon}
                    </div>
                    <div className="ml-3 text-sm font-normal">{text}</div>
                    <Toast.Toggle onDismiss={() => {
                        setShowToast(false);
                        setAction && setAction(null);
                    }} />
                </Toast>
            )}
        </div>
    );
}
