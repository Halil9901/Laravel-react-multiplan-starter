import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        flowbite.content(),
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            primary: '#5c6ac4',
            secondary: '#ecc94b',
            // ...
        }
    },

    plugins: [
         forms,
        //require('daisyui'),
        flowbite.plugin(),
    ],

    // daisyui: {
    //     themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    //     darkTheme: "dark", // name of one of the included themes for dark mode
    //     base: true, // applies background color and foreground color for root element by default
    //     styled: true, // include daisyUI colors and design decisions for all components
    //     utils: true, // adds responsive and modifier utility classes
    //     prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    //     logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    //     themeRoot: ":root", // The element that receives theme color CSS variables
    // },
};
