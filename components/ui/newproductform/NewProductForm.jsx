'use client'

import React, {useState} from 'react';
import Heading from "@/components/heading/Heading";
import {HelperToolTip} from "@/components/helpertooltip/HelperToolTip";
import {Label, TextInput} from "flowbite-react";
import {textInputTheme} from "@/components/ui/newrequeststepper/requestforms/textInputTheme";
import Button from "@/components/button/Button";
import {addNewProduct} from "@/services/products/api";
import LoadingSpinner from "@/components/loadingspinner/LoadingSpinner";

const NewProductForm = ({className = '', }) => {
    const [error, setError] = useState(null);
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        e.preventDefault()
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await addNewProduct(product);
            if (res.error) {
                setError(res.error);
            } else {
                setSuccess(true);
            }
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div
            className={`${className} flex flex-col md:grid gap-4 grid-cols-2  `}>
            <div className="mb-2 col-span-2 md:flex md:justify-between relative">
                <Heading level={'l4'} color={'secondary'}>New Product</Heading>
                {error && (<HelperToolTip className={'right-0 md:absolute'} setAction={setError} text={error} />)}
            </div>
            <div>
                <div className="mb-2">
                    <Label htmlFor="cod" value="Unique Code"/>
                </div>
                <TextInput theme={textInputTheme} id="cod" type="text" placeholder="170405" required name="cod" onChange={handleChange}/>
            </div>
            <div>
                <div className="mb-2">
                    <Label htmlFor="description" value="Description"/>
                </div>
                <TextInput theme={textInputTheme} id="description" type="text" required placeholder="Ferro e acciaio" name="description" onChange={handleChange}/>
            </div>
            <div className={'border-t mt-4 pt-4 md:mt-0 md:pt-0 dark:border-gray-700 md:border-none'}>
                <div className="mb-2">
                    <Label htmlFor="price" value="Price"/>
                </div>
                <TextInput theme={textInputTheme} id="price" type="text" placeholder="200" name="price" onChange={handleChange}/>
            </div>
            <div>
                <div className="mb-2">
                    <Label htmlFor="label" value="Label"/>
                </div>
                <TextInput theme={textInputTheme} id="label" type="text" placeholder="Cool" name="label" onChange={handleChange} />
            </div>
            <div>
                <div className="mb-2">
                    <Label htmlFor="note" value="Note"/>
                </div>
                <TextInput theme={textInputTheme} id="note" type="text" required placeholder="Danger..." name="note" onChange={handleChange} />
            </div>
            <div className={`flex ${success ? 'justify-between' : 'justify-end'} border-t mt-4 pt-8 w-full dark:border-gray-700 col-span-2`}>
                {success && <span className={'text-green-500 dark:text-green-700'}>Product successfully added</span>}
                <Button size={'md'} onClick={handleSubmit} type={'text'}>
                    {loading ? <LoadingSpinner /> : 'Add Product' }
                </Button>
            </div>
        </div>
    );
};

export default NewProductForm;