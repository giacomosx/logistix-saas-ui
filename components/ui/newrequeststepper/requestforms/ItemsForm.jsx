import React, {useEffect, useState} from "react";
import {useRequestContext} from "./RequestContext";
import { Table, TextInput, Select} from "flowbite-react";
import SearchInput from "@/components/searchinput/SearchInput";
import {textInputTheme} from "./textInputTheme";
import Button from "@/components/button/Button";
import Heading from "@/components/heading/Heading";
import {HelperToolTip} from "@/components/helpertooltip/HelperToolTip";

const selectTheme = {
    'field': {
        'select': {
            'colors': {
                "gray": "outline-none border-gray-300 bg-gray-50 text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary dark:focus:ring-primary",
            }
        }
    }
}

const ItemsForm = ({index = 0}) => {
    const {activeIndex, setActiveIndex, value, setValue} = useRequestContext();
    const [items, setItems] = useState(value?.items || []);
    const [error, setError] = useState(null);

    const handleBack = () => {
        setActiveIndex(activeIndex - 1);
    }

    const handleItemRemove = (desc) => {
        const updatedItems = items.filter((el) => el.description !== desc);
        setItems(updatedItems);
        setValue(prev => ({...prev, items: updatedItems}));
    };

    const handleSubmit = () => {
        if (items.length <= 0) {
            setError(true);
            return
        }
        setValue(prev => ({
            ...prev,
            items
        }));
        setActiveIndex(activeIndex + 1);
    };

    useEffect(() => {
        setItems(value?.items || []);
    }, [value?.items])


    return (
        activeIndex === index && (
            <>
                <div>
                    <div className="mb-6 relative ">
                        <Heading level={'l4'} color={'secondary'}>Add Items</Heading>
                        {error && <HelperToolTip className={'right-0 top-0 md:absolute z-50'} setAction={setError} text={'Insert at least one item!'}/>}
                    </div>
                    <SearchInput customTheme={textInputTheme} action={setItems} items={items}/>
                </div>
                <div className={'overflow-x-auto mt-4 pt-8 '}>
                    {items.length > 0 && (
                        <div className="overflow-x-auto">
                            <Table hoverable>
                                <Table.Head>
                                    <Table.HeadCell>Cod.</Table.HeadCell>
                                    <Table.HeadCell>Description</Table.HeadCell>
                                    <Table.HeadCell>Quantity</Table.HeadCell>
                                    <Table.HeadCell>Packing</Table.HeadCell>
                                    <Table.HeadCell>Nr.</Table.HeadCell>
                                    <Table.HeadCell>
                                        <span className="sr-only">Remove</span>
                                    </Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    {items.map((item, index) => (
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                                   key={index}>
                                            <Table.Cell
                                                className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {item.cod}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <TextInput theme={textInputTheme} sizing={'sm'}
                                                           defaultValue={item.description || null} onChange={(e) => {
                                                    const updatedItems = items.map((el, idx) =>
                                                        idx === index ? {
                                                            ...el,
                                                            description: e.target.value
                                                        } : el);
                                                    setItems(updatedItems);
                                                    setValue(prev => ({
                                                        ...prev,
                                                        items: updatedItems
                                                    }));
                                                }}/>
                                            </Table.Cell>
                                            <Table.Cell className="flex items-center">
                                                <TextInput theme={textInputTheme} sizing={'sm'} placeholder={'100'}
                                                           onChange={(e) => {
                                                               const updatedItems = items.map((el, idx) =>
                                                                   idx === index ? {
                                                                       ...el,
                                                                       qty: e.target.value
                                                                   } : el);
                                                               setItems(updatedItems);
                                                               setValue(prev => ({
                                                                   ...prev,
                                                                   items: updatedItems
                                                               }));
                                                           }}
                                                           name={'qty'}
                                                           defaultValue={item.qty || null}/>
                                                <span>&nbsp;Kg</span>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Select required sizing={'sm'} onChange={(e) => {
                                                    const updatedItems = items.map((el, idx) =>
                                                        idx === index ? {
                                                            ...el,
                                                            packing: e.target.value
                                                        } : el);
                                                    setItems(updatedItems);
                                                    setValue(prev => ({
                                                        ...prev,
                                                        items: updatedItems
                                                    }));
                                                }} color={'gray'} theme={selectTheme}
                                                        defaultValue={item.packing || null}>
                                                    <option>Choose</option>
                                                    <option>Bulk</option>
                                                    <option>Big-Bags</option>
                                                    <option>Pallet</option>
                                                </Select>
                                            </Table.Cell>
                                            <Table.Cell className="flex items-center">
                                                <TextInput theme={textInputTheme} sizing={'sm'} placeholder={'1'}
                                                           onChange={(e) => {
                                                               const updatedItems = items.map((el, idx) =>
                                                                   idx === index ? {
                                                                       ...el,
                                                                       number: e.target.value
                                                                   } : el);
                                                               setItems(updatedItems);
                                                               setValue(prev => ({
                                                                   ...prev,
                                                                   items: updatedItems
                                                               }));
                                                           }}
                                                           name={'number'}
                                                           defaultValue={item.number || null}/>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Button onClick={() => handleItemRemove(item.description)} variant={'danger'}>
                                                    Remove
                                                </Button>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </div>
                    )}

                </div>
                <div className="flex justify-between border-t mt-4 pt-8 w-full dark:border-gray-700">
                    <Button size={'md'} onClick={handleBack} variant={'outline'}>Back</Button>
                    <Button size={'md'} type={'button'} onClick={handleSubmit} >Next</Button>
                </div>
            </>
        )
    );
};

export default ItemsForm;