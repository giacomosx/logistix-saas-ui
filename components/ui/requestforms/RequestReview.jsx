'use client'

import React, from 'react';
import {useRequestContext} from "@/components/ui/requestforms/RequestContext";
import Button from "@/components/button/Button";
import {Label, Table, Textarea} from "flowbite-react";
import Heading from "@/components/heading/Heading";
import LoadingSpinner from "@/components/loadingspinner/LoadingSpinner";

const RequestReview = ({className = '', index = 0}) => {
    const {activeIndex, setActiveIndex, value, isPending, error, setValue} = useRequestContext()

    const handleBack = () => {
        setActiveIndex(activeIndex - 1);
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    }

    return (
        activeIndex === index && (
            <div className={`${className} flex flex-col gap-8`}>
                <Heading level={'l4'} color={'secondary'}>Review Details</Heading>
                <dl className="w-full text-secondary dark:text-white grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col border-b dark:border-gray-600">
                        <dt className="mb-1 text-tertiary dark:text-gray-400">Prospect</dt>
                        <dd className="font-semibold">{value?.prospect}</dd>
                    </div>
                    <div className="flex flex-col border-b dark:border-gray-600 ">
                        <dt className="mb-1 text-tertiary dark:text-gray-400">Local Unit</dt>
                        <dd className="font-semibold">{value?.localUnit}</dd>
                    </div>
                    <div className="flex flex-col border-b dark:border-gray-600 ">
                        <dt className="mb-1 text-tertiary dark:text-gray-400">Referent Name</dt>
                        <dd className="font-semibold">{value?.referentName}</dd>
                    </div>
                    <div className="flex flex-col border-b dark:border-gray-600">
                        <dt className="mb-1 text-tertiary dark:text-gray-400">Referent Mail</dt>
                        <dd className="font-semibold">{value?.referentMail}</dd>
                    </div>
                    <div className="flex flex-col ">
                        <dt className="mb-1 text-tertiary dark:text-gray-400">Referent Phone</dt>
                        <dd className="font-semibold">{value?.referentPhone}</dd>
                    </div>
                </dl>
                {value?.items.length > 0 && (
                    <div className="overflow-x-auto">
                        <Table hoverable>
                            <Table.Head>
                                <Table.HeadCell>Cod.</Table.HeadCell>
                                <Table.HeadCell>Description</Table.HeadCell>
                                <Table.HeadCell>Quantity</Table.HeadCell>
                                <Table.HeadCell>Packing</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {value.items.map((item, index) => (
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                                        <Table.Cell
                                            className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{item.cer}</Table.Cell>
                                        <Table.Cell>{item.description}</Table.Cell>
                                        <Table.Cell>{item.qty}</Table.Cell>
                                        <Table.Cell>{item.packing}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                )}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="note" value="Note about the request" />
                    </div>
                    <Textarea placeholder="Type a note..." required rows={4} name="note" onChange={handleInputChange} />
                </div>
                <div
                    className={`flex ${isPending ? 'justify-end' : 'justify-between'} border-t pt-8 w-full dark:border-gray-700`}>
                    {isPending && !error ? (
                        <LoadingSpinner />
                    ) : (
                        <>
                            <Button size={'md'} onClick={handleBack} variant={'outline'}>Back</Button>
                            <Button size={'md'} type={'submit'}>Add</Button>
                        </>
                    )}
                </div>
            </div>
        )
    );
};

export default RequestReview;