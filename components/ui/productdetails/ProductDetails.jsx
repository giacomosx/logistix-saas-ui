'use client'

import React from 'react';
import Heading from "@/components/heading/Heading";
import {Label, Table} from "flowbite-react";
import StatusBadge from "@/components/statusbadge/StatusBadge";


const ProductDetails = ({data}) => {
    return (
        <>
            <div className={`flex flex-col gap-8 relative`}>
                <div className={'flex items-center gap-2'}>
                    <Heading level={'l4'} color={'secondary'}>Product Details</Heading>
                </div>

                <dl className="w-full text-secondary dark:text-white grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col border-b dark:border-gray-600">
                        <dt className="mb-1 text-tertiary dark:text-gray-400">COD</dt>
                        <dd className="font-semibold">{data?.cod}</dd>
                    </div>
                    <div className="flex flex-col border-b dark:border-gray-600 ">
                        <dt className="mb-1 text-tertiary dark:text-gray-400">Description</dt>
                        <dd className="font-semibold">{data?.description}</dd>
                    </div>
                    <div className="flex flex-col border-b dark:border-gray-600 ">
                        <dt className="mb-1 text-tertiary dark:text-gray-400">Price</dt>
                        <dd className="font-semibold">{data?.price}&nbsp;€</dd>
                    </div>
                    <div className="flex flex-col border-b dark:border-gray-600">
                        <dt className="mb-1 text-tertiary dark:text-gray-400">Label</dt>
                        <dd className="font-semibold">{data?.label}</dd>
                    </div>
                    <div className="flex flex-col ">
                        <dt className="mb-1 text-tertiary dark:text-gray-400">Note</dt>
                        <dd className="font-semibold">{data?.note}</dd>
                    </div>
                </dl>
            </div>
        </>
    );
};

export default ProductDetails;