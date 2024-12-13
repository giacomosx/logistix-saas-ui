'use client'

import React from 'react';
import RequestForms from "@/components/ui/requestforms";


const Page = () => {
    return (
        <div className="page">
            <RequestForms>
                <RequestForms.Prospect index={0} />
                <RequestForms.Items index={1} />
            </RequestForms>
        </div>
    );
};

export default Page;