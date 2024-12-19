"use client";

import { Toast } from "flowbite-react";
import { HiExclamation } from "react-icons/hi";
import {useState} from "react";

export function HelperToolTip( {className = '', setError, text = 'All fields are requirement!'}) {
    const [showToast, setShowToast] = useState(true);

    return (
        <div className={`${className} `}>
            <Toast duration={300}>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                    <HiExclamation className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">{text}</div>
                <Toast.Toggle onDismiss={() => {
                    setShowToast(!showToast)
                    setError(null);
                }} />
            </Toast>
        </div>
    );
}
