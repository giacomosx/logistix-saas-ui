'use client'

import React, {useEffect, useRef, useState} from 'react';
import {TextInput} from "flowbite-react";
import {HiSearch} from "react-icons/hi";
import cer from '../../lib/cer.json'


const SearchInput = ({customTheme, action, items}) => {
    const [suggestions, setSuggestions] = useState(null);
    const dropdownRef = useRef(null);

    const handleChange = (e) => {
        if (e.target.value.length >= 3 && e.target.value.trim() !== '') {
            setSuggestions(cer.filter(item => item.description.toLocaleLowerCase().includes(e.target.value.toLowerCase())));
        } else {
            setSuggestions(null)
        }
    }

    const handleKeyDown = (e, item) => {
        if (!suggestions) {return;}
        if (e.key === 'Enter') {
            action([...items, item]);
            setSuggestions([]);
        }
    }

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setSuggestions(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div className="search-input relative">
            <TextInput type={'search'} placeholder={'Search items...'} icon={HiSearch} theme={customTheme}
                       onChange={handleChange} name={'items'}/>

            {suggestions && suggestions.length > 0 && (
                <div
                    className="absolute left-0 w-full bg-white border border-gray-200 rounded-md p-2 shadow-sm z-50 mt-2.5 dark:bg-gray-800 dark:border-gray-600" ref={dropdownRef}>
                    <ul className={'divide-y dark:divide-gray-600'}>
                        {suggestions.slice(0, 5).map((item, index) => (
                            <li className={'text-base py-2.5 ps-2 hover:bg-gray-100 rounded-sm text-tertiary cursor-pointer dark:text-gray-400 dark:hover:bg-gray-600 outline-primary  focus:ring-1 focus:ring-primary'}
                                onKeyDown={(event) => {
                                    handleKeyDown(event, item);
                                }}
                                tabIndex={0}
                                aria-selected={true}
                                key={index} onClick={() => {
                                action([...items, item])
                                setSuggestions(null)
                            }}>
                                <span className={'text-secondary font-semibold dark:text-gray-300'}>{item.cer}</span>
                                <p>
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchInput;