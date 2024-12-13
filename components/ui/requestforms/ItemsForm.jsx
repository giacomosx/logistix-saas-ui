import React, {useEffect, useState} from "react";
import {useRequestContext} from "@/components/ui/requestforms/RequestContext";
import {Label, Table, TextInput, Select} from "flowbite-react";
import SearchInput from "@/components/searchinput/SearchInput";
import {textInputTheme} from "@/components/ui/requestforms/textInputTheme";
import Button from "@/components/button/Button";

const selectTheme = {
    'field': {
        'select': {
            'colors': {
                "gray": "outline-none border-gray-300 bg-gray-50 text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary dark:focus:ring-primary",
            }
        }
    }
}

const ItemsForm = ({className = '', index = 0}) => {
    const {activeIndex, setActiveIndex, value, setValue} = useRequestContext();
    const [items, setItems] = useState(value?.items || []);

    const handleBack = () => {
        setActiveIndex(activeIndex - 1);
    }

    const handleItemRemove = (cer) => {
        const updatedItems = items.filter(el => el.cer !== cer);
        setItems(updatedItems);
        setValue(prev => ({...prev, items: updatedItems}));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
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
            <form className={`${className} gap-4`}
                  onSubmit={handleSubmit}>
                <div>
                    <div className="mb-2">
                        <Label htmlFor="items" value="Items"/>
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
                                                {item.cer}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <TextInput theme={textInputTheme} sizing={'sm'}
                                                           defaultValue={item.description || null} onChange={(e) => {
                                                    const updatedItems = items.map((el) =>
                                                        el.cer === item.cer ? {
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
                                                               const updatedItems = items.map((el) =>
                                                                   el.cer === item.cer ? {
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
                                                    const updatedItems = items.map((el) =>
                                                        el.cer === item.cer ? {
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
                                                    <option>Bulk</option>
                                                    <option>Big-Bags</option>
                                                    <option>Pallet</option>
                                                </Select>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Button onClick={() => handleItemRemove(item.cer)} variant={'danger'}>
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
                    <Button size={'md'} type={'submit'}>Next</Button>
                </div>
            </form>
        )
    );
};

export default ItemsForm;