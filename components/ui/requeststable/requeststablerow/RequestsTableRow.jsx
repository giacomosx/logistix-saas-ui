'use client'

import React, {useState} from 'react';
import {Table} from "flowbite-react";
import AxiosApi from "@/utils/axiosApi";
import LoadingSpinner from "@/components/loadingspinner/LoadingSpinner";
import {changeStatusRequest} from "@/app/dashboard/api/services";


const colorVariants = {
    'Pending': 'outline-none border-gray-300 bg-gray-50 text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary dark:focus:ring-primary',
    'In progress': 'outline-none border-yellow-300 bg-yellow-50 text-yellow-900 focus:border-primary focus:ring-1 focus:ring-primary dark:border-yellow-600 dark:bg-yellow-700 dark:text-white dark:placeholder-yellow-400 dark:focus:border-primary dark:focus:ring-primary',
    'Resolved': 'outline-none border-green-300 bg-green-50 text-green-900 focus:border-primary focus:ring-1 focus:ring-primary dark:border-green-600 dark:bg-green-700 dark:text-white dark:placeholder-green-400 dark:focus:border-primary dark:focus:ring-primary',
    'Rejected': 'outline-none border-red-300 bg-red-50 text-red-900 focus:border-primary focus:ring-1 focus:ring-primary dark:border-red-600 dark:bg-red-700 dark:text-white dark:placeholder-red-400 dark:focus:border-primary dark:focus:ring-primary',
}

const RequestsTableRow = ({item}) => {
    const [status, setStatus] = useState(item.status);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await changeStatusRequest(item._id, e.target.value);
            setStatus(res.data);
        } catch (error) {
            console.error(error.message);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.prospect || null}
            </Table.Cell>
            <Table.Cell>{new Date(item.createdAt).toLocaleDateString() || null}</Table.Cell>
            <Table.Cell>
                {
                    isLoading ?
                        (
                            <div className="w-full text-center">
                                <LoadingSpinner size={'sm'}/>
                            </div>
                        ) :
                        (error ?
                                (
                                    <span className={'text-red-500 dark:text-red-700'}>{error}</span>
                                ) :
                                (
                                    <select onChange={handleChange} defaultValue={status || null}
                                            className={`${colorVariants[status]} text-sm rounded py-1.5`}>
                                        <option>Pending</option>
                                        <option>In progress</option>
                                        <option>Resolved</option>
                                        <option>Rejected</option>
                                    </select>
                                )

                        )}
            </Table.Cell>
            <Table.Cell>{item.note || null}</Table.Cell>
            <Table.Cell>
                <a href="#"
                   className="font-medium text-primary hover:underline dark:text-orange-500">
                    Edit
                </a>
            </Table.Cell>
        </Table.Row>
    );
};

export default RequestsTableRow;