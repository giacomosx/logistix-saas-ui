"use client";

import React, {useState} from 'react';
import useLocalStorage from "@/hooks/useLocalStorage";
import {RequestProvider} from "@/components/ui/requestforms/RequestContext";
import {addNewRequest} from "@/app/dashboard/new-request/api/route";

function RequestForms({children, defaultIndex = 0}) {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);
    const [value, setValue, removeItem] = useLocalStorage("requestInfo", null);
    const [isPending, setIsPending] = useState(null);
    const [error, setError] = useState(null);

    const contextValue = {
        activeIndex,
        setActiveIndex,
        value,
        setValue,
        removeItem,
        isPending,
        error,
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsPending(true);
            const {ok, error} = await addNewRequest(value);
            if(error) console.error(error);
            if (ok) {
                removeItem('requestInfo');
                setActiveIndex(0);
            }
        } catch (error) {
            console.error(error);
            setError(error);
        } finally {
            setIsPending(false);
        }
    }

    return (
        <RequestProvider value={contextValue}>
                <form className="gap-4" onSubmit={handleSubmit}>
                    {children}
                </form>
        </RequestProvider>
    );
}

export default RequestForms;