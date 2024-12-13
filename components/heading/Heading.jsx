import React from 'react';

const colorVariants = {
    'primary': 'text-primary dark:text-orange-600',
    'secondary': 'text-secondary dark:text-white',
    'tertiary': 'text-tertiary dark:text-gray-400',
}

const levelVariants = {
    'l1': {
        'tag': 'h1',
        'style': 'text-5xl'},
    'l2': {
        'tag' : 'h2',
        'style' : 'text-4xl'
    },
    'l3': {
        'tag' : 'h3',
        'style' : 'text-3xl'
    },
    'l4': {
        'tag' : 'h4',
        'style' : 'text-2xl'
    },
    'l5': {
        'tag' : 'h5',
        'style' : 'text-xl'
    },
    'l6': {
        'tag' : 'h6',
        'style' : 'text-lg'
    },

}

const Heading = ({children, className = '', color = colorVariants.primary, level = levelVariants.l2 }) => {
    const colorStyle = colorVariants[color] || colorVariants.primary;
    const levelStyle = levelVariants[level] || levelVariants.l2
    const Tag = levelStyle.tag || 'h1'

    return (
        <Tag className={`${className} ${colorStyle} ${levelStyle.style}`}>{children}</Tag>
    );
};

export default Heading;