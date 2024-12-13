"use client";

import React, {useState} from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import {RequestProvider} from "@/components/ui/requestforms/RequestContext";

function RequestForms({children, defaultIndex = 0}) {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);
    const [value, setValue] = useLocalStorage("requestInfo", null);

    const contextValue = {
        activeIndex,
        setActiveIndex,
        value,
        setValue,
    }

    return (
        <RequestProvider value={contextValue}>
            <div
                className="w-full mx-auto bg-white border border-gray-200 p-4 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-600">
                {children}
            </div>
        </RequestProvider>
    );
}

export default RequestForms;