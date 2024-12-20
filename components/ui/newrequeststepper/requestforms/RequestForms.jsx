"use client";

import React, {useState} from 'react';
import useLocalStorage from "@/hooks/useLocalStorage";
import {RequestProvider} from "./RequestContext";
import {addNewRequest} from "@/app/dashboard/api/quote-requests/services";
import {HelperToolTip} from "@/components/helpertooltip/HelperToolTip";

function RequestForms({children, defaultIndex = 0}) {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);
    const [value, setValue, removeItem] = useLocalStorage("requestInfo", null);
    const [isPending, setIsPending] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

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
                setSuccess(true);
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
                <form className="gap-4 relative" onSubmit={handleSubmit}>
                    {success && (
                        <HelperToolTip className={'absolute right-0 top-0 z-50'} setAction={setSuccess} type={'success'} text={'Request successfully added!'} />
                    )}
                    {children}
                </form>
        </RequestProvider>
    );
}

export default RequestForms;