import {Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow} from "flowbite-react";
import Link from "next/link";
import React from "react";
import {getAllProducts} from "@/app/api/products/services";
import {cookies} from "next/headers";

const customTables = {
    "root": {
        "base": "w-full text-left text-sm text-gray-500 dark:text-gray-400 ",
        "shadow": "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-gray-50 dark:bg-black",
        "wrapper": "relative "
    }
};




export async function ProductsTable() {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')

    const { data } = await getAllProducts(token.value);


    return (
        <div className="overflow-x-auto">
            <Table striped theme={customTables}>
                <TableHead>
                    <TableHeadCell>COD.</TableHeadCell>
                    <TableHeadCell>Description</TableHeadCell>
                    <TableHeadCell>Price</TableHeadCell>
                    <TableHeadCell>Note</TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">View</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {data && data.length > 0 ? (
                        data.map(item => (
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800" key={item._id}>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {item.cod || null}
                                </TableCell>
                                <TableCell>{item.description || null}</TableCell>
                                <TableCell>{item.price + ' €' || null}</TableCell>
                                <TableCell>{item.note || null}</TableCell>
                                <TableCell>
                                    <Link href={`/dashboard/all-products/${item._id}`}
                                          className="font-medium text-primary hover:underline dark:text-orange-500">
                                        View
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell
                                className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                                colSpan={5}
                            >
                                {"No available products"}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
