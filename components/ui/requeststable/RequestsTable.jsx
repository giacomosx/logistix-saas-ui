import {Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow} from "flowbite-react";
import AxiosApi from '@/utils/axiosApi'

const customTables = {
    "root": {
        "base": "w-full text-left text-sm text-gray-500 dark:text-gray-400 ",
        "shadow": "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-gray-50  dark:bg-black",
        "wrapper": "relative "
    }
}

export async function RequestsTable() {
    const api = new AxiosApi();
    let data = null
    let error = null

    try {
        const response = await api.get('/rfq')
        data = await response
    } catch (e) {
        console.error(e)
        error = e.message
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
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800" key={item._id}>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {item.prospect}
                                </TableCell>
                                <TableCell>{new Date(item.createdAt).toLocaleDateString()}</TableCell>
                                <TableCell>{item.status}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>
                                    <a href="#"
                                       className="font-medium text-primary hover:underline dark:text-orange-500">
                                        Edit
                                    </a>
                                </TableCell>
                            </TableRow>
                        ))
                    ): (
                        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {error ? error || 'Ops an error occurred' : 'No available prospects'}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
