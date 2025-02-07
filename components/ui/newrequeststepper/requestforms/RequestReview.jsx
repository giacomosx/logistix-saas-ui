'use client'

import React from 'react';
import {useRequestContext} from "./RequestContext";
import Button from "@/components/button/Button";
import {Label, Table, Textarea} from "flowbite-react";
import Heading from "@/components/heading/Heading";
import LoadingSpinner from "@/components/loadingspinner/LoadingSpinner";

const textAreaTheme = {
    "colors": {
        "gray": "outline-none border-gray-300 bg-gray-50 text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary dark:focus:ring-orange-500",
    }
}

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
            <div className={`${className} flex flex-col gap-8 relative`}>
                <Heading level={'l4'} color={'secondary'}>Review Details</Heading>
                <dl className="w-full text-secondary dark:text-white grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col border-b dark:border-gray-600">
                        <dt className="mb-1 text-tertiary dark:text-gray-400">Company name</dt>
                        <dd className="font-semibold">{value?.prospect}</dd>
                    </div>
                    <div className="flex flex-col border-b dark:border-gray-600 ">
                        <dt className="mb-1 text-tertiary dark:text-gray-400">Local unit</dt>
                        <dd className="font-semibold">{value?.localUnit}</dd>
                    </div>
                    <div className="flex flex-col border-b dark:border-gray-600 ">
                        <dt className="mb-1 text-tertiary dark:text-gray-400">Referent name</dt>
                        <dd className="font-semibold">{value?.referentName}</dd>
                    </div>
                    <div className="flex flex-col border-b dark:border-gray-600">
                        <dt className="mb-1 text-tertiary dark:text-gray-400">Referent e-mail</dt>
                        <dd className="font-semibold">{value?.referentMail}</dd>
                    </div>
                    <div className="flex flex-col ">
                        <dt className="mb-1 text-tertiary dark:text-gray-400">Referent phone</dt>
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
                                <Table.HeadCell>Nr.</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {value.items.map((item, index) => (
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                                        <Table.Cell
                                            className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{item.cod}</Table.Cell>
                                        <Table.Cell>{item.description}</Table.Cell>
                                        <Table.Cell>{item.qty}&nbsp;Kg</Table.Cell>
                                        <Table.Cell>{item.packing}</Table.Cell>
                                        <Table.Cell>{item.number}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                )}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="note" value="Note about the request"/>
                    </div>
                    <Textarea theme={textAreaTheme} placeholder="Type a note..." rows={4} name="note" onChange={handleInputChange} defaultValue={value?.note}/>
                </div>
                <div
                    className={`flex ${isPending ? 'justify-end' : 'justify-between'} border-t pt-8 w-full dark:border-gray-700`}>
                    {isPending && !error ? (
                        <LoadingSpinner/>
                    ) : (
                        <>
                            <Button size={'md'} onClick={handleBack} variant={'outline'}>Back</Button>
                            <Button size={'md'} type={'submit'} >Add</Button>
                        </>
                    )}
                </div>
            </div>
        )
    );
};

export default RequestReview;