import React from 'react';
import Section from "@/components/section/Section";
import NewProductForm from "@/components/ui/newproductform/NewProductForm";

const NewProduct = () => {
    return (
        <div className="page">
            <Section>
                <NewProductForm />
            </Section>
        </div>
    );
};

export default NewProduct;