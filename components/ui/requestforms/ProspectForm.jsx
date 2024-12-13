import React, { useEffect, useState} from "react";
import {useRequestContext} from "@/components/ui/requestforms/RequestContext";
import {textInputTheme} from "@/components/ui/requestforms/textInputTheme";
import {Label, TextInput} from "flowbite-react";
import Button from "@/components/button/Button";
import {
    HiOfficeBuilding,
    HiMap,
    HiUser,
    HiMail,
    HiPhone,
} from "react-icons/hi";

const ProspectForm = ({className = '', index = 0}) => {
    const {activeIndex, setActiveIndex, value, setValue} = useRequestContext();
    const [prospect, setProspect] = useState({});

    const handleChange = (e) => {
        setProspect({
            ...prospect,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setActiveIndex(activeIndex + 1);
        setValue(prospect);
    }

    useEffect(() => {
        setProspect(value || {});
    }, [value]);

    return (
        activeIndex === index && (
            <form
                className={`${className} flex flex-col md:grid gap-4 grid-cols-2  `} onSubmit={handleSubmit}>
                <div>
                    <div className="mb-2">
                        <Label htmlFor="prospect" value="Prospect"/>
                    </div>
                    <TextInput theme={textInputTheme} id="prospect" type="text" placeholder="Acme Spa" required
                               icon={HiOfficeBuilding} name="prospect" onChange={handleChange}
                               defaultValue={value?.prospect || null}/>
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
                    <TextInput theme={textInputTheme} id="referentName" type="text" required placeholder="Jhon Snow"
                               icon={HiUser} name="referentName" onChange={handleChange}
                               defaultValue={value?.referentName || null}/>
                </div>
                <div>
                    <div className="mb-2">
                        <Label htmlFor="referentMail" value="Referent mail"/>
                    </div>
                    <TextInput theme={textInputTheme} id="referentMail" type="email" required
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
                    <Button size={'md'} type={'submit'}>Next</Button>
                </div>
            </form>
        )
    )
};

export default ProspectForm;