import React from 'react';
import {ProductsTable} from "@/components/ui/productstable/ProductsTable";
import Section from "@/components/section/Section";

const Products = () => {
    return (
        <div className="page">
            <Section>
                <ProductsTable />
            </Section>
        </div>
    );
};

export default Products;