'use client'
import React, {useState} from 'react';

const SearchForm = ({variants}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <form className={`w-full  ${variants ? variants : ''}` }>
            <div className="flex relative">
                <label htmlFor="search-dropdown"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only">Search Anything</label>
                <button id="dropdown-button" data-dropdown-toggle="dropdown"
                        onClick={handleOpen}
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 transition-all"
                        type="button">Categorie <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none"
                                                     viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="m1 1 4 4 4-4"/>
                </svg></button>
                <div id="dropdown"
                     className={`z-10 ${open ? 'visible' : 'hidden'} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 top-0 left-0 translate-y-11 dark:bg-gray-700`}>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                        <li>
                            <button type="button"
                                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ">Preventivi
                            </button>
                        </li>
                        <li>
                            <button type="button"
                                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ">Clienti
                            </button>
                        </li>
                        <li>
                            <button type="button"
                                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white "> Fornitori
                            </button>
                        </li>
                        <li>
                            <button type="button"
                                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white "> Progetti
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="relative w-full">
                    <input type="search" id="search-dropdown"
                           className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500"
                           placeholder="Cerca preventivi, clienti, fornitori... " required/>
                    <button type="submit"
                            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-primary rounded-e-lg border border-primary hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary dark:bg-orange-600 dark:hover:bg-primary dark:focus:ring-primary transition-all">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>

    );
};

export default SearchForm;
