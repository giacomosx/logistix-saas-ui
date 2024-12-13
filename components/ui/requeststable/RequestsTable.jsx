
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export function RequestsTable() {
    const customTables = {
        "root": {
            "base": "w-full text-left text-sm text-gray-500 dark:text-gray-400 ",
            "shadow": "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-gray-50  dark:bg-black",
            "wrapper": "relative "
        }
    }

    return (
        <div className="overflow-x-auto bg-white p-4 rounded-md shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-600">
            <Table striped theme={customTables}>
                <TableHead>
                    <TableHeadCell>Date</TableHeadCell>
                    <TableHeadCell>Prospect</TableHeadCell>
                    <TableHeadCell>Status</TableHeadCell>
                    <TableHeadCell>Description</TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">Edit</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {'Apple MacBook Pro 17"'}
                        </TableCell>
                        <TableCell>Sliver</TableCell>
                        <TableCell>Laptop</TableCell>
                        <TableCell>$2999</TableCell>
                        <TableCell>
                            <a href="#" className="font-medium text-primary hover:underline dark:text-orange-500">
                                Edit
                            </a>
                        </TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Microsoft Surface Pro
                        </TableCell>
                        <TableCell>White</TableCell>
                        <TableCell>Laptop PC</TableCell>
                        <TableCell>$1999</TableCell>
                        <TableCell>
                            <a href="#" className="font-medium text-primary hover:underline dark:text-orange-500">
                                Edit
                            </a>
                        </TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
                        <TableCell>Black</TableCell>
                        <TableCell>Accessories</TableCell>
                        <TableCell>$99</TableCell>
                        <TableCell>
                            <a href="#" className="font-medium text-primary hover:underline dark:text-orange-500">
                                Edit
                            </a>
                        </TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Google Pixel Phone
                        </TableCell>
                        <TableCell>Gray</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>$799</TableCell>
                        <TableCell>
                            <a href="#" className="font-medium text-primary hover:underline dark:text-orange-500">
                                Edit
                            </a>
                        </TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple Watch 5</TableCell>
                        <TableCell>Red</TableCell>
                        <TableCell>Wearables</TableCell>
                        <TableCell>$999</TableCell>
                        <TableCell>
                            <a href="#" className="font-medium text-primary hover:underline dark:text-orange-500">
                                Edit
                            </a>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
