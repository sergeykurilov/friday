const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            primary: '#5c6ac4',
            white: '#fff',
        },
        borderColor: (theme) => ({
            ...theme('colors'),
            DEFAULT: theme('colors.gray.300', 'currentColor'),
            'primary': '#3490dc',
            'secondary': '#ffed4a',
            'danger': '#e3342f',
        }),
        extend: {
            backgroundColor: ['checked'],
            borderColor: ['checked'],
            tableLayout: ['hover', 'focus'],
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
