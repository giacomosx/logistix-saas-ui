import React from 'react';
import {RequestsTable} from "@/components/ui/requeststable/RequestsTable";
import Section from "@/components/section/Section";

const Page = () => {
    return (
        <div className="page">
            <Section>
                <RequestsTable />
            </Section>
        </div>
    );
};

export default Page;