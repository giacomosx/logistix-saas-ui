'use client'

import React, {useEffect, useState} from 'react';
import RequestForms from "@/components/ui/requestforms";
import LoadingSpinner from "@/components/loadingspinner/LoadingSpinner";

const NewRequestStepper = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [])

    return (
        loading ? (
            <div className="w-full text-center">
                <LoadingSpinner />
            </div>
        ) : (
            <>
                <RequestForms>
                    <RequestForms.Prospect index={0} />
                    <RequestForms.Items index={1} />
                    <RequestForms.Review index={2} />
                </RequestForms>
            </>
        )
    );
};

export default NewRequestStepper;