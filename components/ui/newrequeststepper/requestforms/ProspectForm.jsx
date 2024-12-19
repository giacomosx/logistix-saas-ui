'use client'

import React, { useEffect, useState} from "react";
import {useRequestContext} from "./RequestContext";
import {textInputTheme} from "./textInputTheme";
import {Label, TextInput} from "flowbite-react";
import Button from "@/components/button/Button";
import {
    HiOfficeBuilding,
    HiMap,
    HiUser,
    HiMail,
    HiPhone,
} from "react-icons/hi";
import Heading from "@/components/heading/Heading";
import {RequestSchema} from "@/utils/zod-schemas/RequestSchemas";
import {HelperToolTip} from "@/components/helpertooltip/HelperToolTip";

const ProspectForm = ({className = '', index = 0}) => {
    const {activeIndex, setActiveIndex, value, setValue} = useRequestContext();
    const [prospect, setProspect] = useState({});
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setError(null);
        setProspect({
            ...prospect,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        const result = RequestSchema.safeParse(prospect);

        if (!result.success) {
            setError(true);
            return
        }

        setActiveIndex(activeIndex + 1);
        setValue(prospect);
    }

    useEffect(() => {
        setProspect(value || {});
    }, [value]);

    console.log(error)

    return (
        activeIndex === index && (
            <div
                className={`${className} flex flex-col md:grid gap-4 grid-cols-2  `}>
                <div className="mb-2 col-span-2 md:flex md:justify-between relative">
                    <Heading level={'l4'} color={'secondary'}>New Request</Heading>
                    {error && (<HelperToolTip className={'right-0 md:absolute'} setAction={setError}/>)}
                </div>
                <div>
                    <div className="mb-2">
                        <Label htmlFor="prospect" value="Prospect"/>
                    </div>
                    <TextInput theme={textInputTheme} id="prospect" type="text" placeholder="Acme Spa" required
                               icon={HiOfficeBuilding} name="prospect" onChange={handleChange}
                               defaultValue={value?.prospect || null} />
                </div>
                <div>
                    <div className="mb-2">
                        <Label htmlFor="localUnit" value="Local Unit"/>
                    </div>
                    <TextInput theme={textInputTheme} id="localUnit" type="text" required
                               placeholder="Cagliari, Via San Paolo" icon={HiMap} name="localUnit"
                               onChange={handleChange} defaultValue={value?.localUnit || null}/>
                </div>
                <div className={'border-t mt-4 pt-4 md:mt-0 md:pt-0 dark:border-gray-700 md:border-none'}>
                    <div className="mb-2">
                        <Label htmlFor="referentName" value="Referent name"/>
                    </div>
                    <TextInput theme={textInputTheme} id="referentName" type="text" placeholder="Jhon Snow"
                               icon={HiUser} name="referentName" onChange={handleChange}
                               defaultValue={value?.referentName || null}/>
                </div>
                <div>
                    <div className="mb-2">
                        <Label htmlFor="referentMail" value="Referent mail"/>
                    </div>
                    <TextInput theme={textInputTheme} id="referentMail" type="email"
                               placeholder="jhonsnow@gmail.com" icon={HiMail} name="referentMail"
                               onChange={handleChange} defaultValue={value?.referentMail || null}/>
                </div>
                <div>
                    <div className="mb-2">
                        <Label htmlFor="referentPhone" value="Referent phone"/>
                    </div>
                    <TextInput theme={textInputTheme} id="referentPhone" type="phone" required
                               placeholder="+39 333444555" icon={HiPhone} name="referentPhone"
                               onChange={handleChange} defaultValue={value?.referentPhone || null}/>
                </div>
                <div className="flex justify-end border-t mt-4 pt-8 w-full dark:border-gray-700 col-span-2">
                    <Button size={'md'} type={'button'} onClick={handleSubmit} >Next</Button>
                </div>
            </div>
        )
    )
};

export default ProspectForm;