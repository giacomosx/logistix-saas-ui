'use client'

import React from 'react';
import RequestForms from "@/components/ui/requestforms";

const NewRequestStepper = () => {
    return (
        <>
            <RequestForms>
                <RequestForms.Prospect index={0} />
                <RequestForms.Items index={1} />
                <RequestForms.Review index={2} />
            </RequestForms>
        </>
    );
};

export default NewRequestStepper;