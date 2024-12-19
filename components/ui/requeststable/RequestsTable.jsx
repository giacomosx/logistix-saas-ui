"use client";

import {Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow} from "flowbite-react";
import AxiosApi from '@/utils/axiosApi';
import RequestsTableRow from "@/components/ui/requeststable/requeststablerow/RequestsTableRow";
import {useEffect, useState} from "react";
import LoadingSpinner from "@/components/loadingspinner/LoadingSpinner";

const customTables = {
    "root": {
        "base": "w-full text-left text-sm text-gray-500 dark:text-gray-400 ",
        "shadow": "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-gray-50 dark:bg-black",
        "wrapper": "relative "
    }
};

export function RequestsTable() {
    const api = new AxiosApi();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await api.get('/rfq');
            setData(response);
        } catch (e) {
            console.error(e);
            setError(e.message || "An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);


    if (loading) {
        return (
            <div className="w-full text-center">
                <LoadingSpinner />
            </div>
        )
    }

    return (
        <div className="overflow-x-auto">
            <Table striped theme={customTables}>
                <TableHead>
                    <TableHeadCell>Prospect</TableHeadCell>
                    <TableHeadCell>Date</TableHeadCell>
                    <TableHeadCell>Status</TableHeadCell>
                    <TableHeadCell>Description</TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">Edit</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {data && data.length > 0 ? (
                        data.map(item => (
                            <RequestsTableRow key={item._id} item={item} />
                        ))
                    ) : (
                        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell
                                className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                                colSpan={5}
                            >
                                {error || "No available prospects"}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
