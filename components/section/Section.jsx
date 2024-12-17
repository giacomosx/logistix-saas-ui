import React from 'react';

const Section = ({children, className = ''}) => {
    return (
        <section className={`${className} w-full mx-auto bg-white border border-gray-200 p-4 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-600`}>
            {children}
        </section>
    );
};

export default Section;