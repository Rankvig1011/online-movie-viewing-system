/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            gray: {
                100: 'var(--gray-100)',
                200: 'var(--gray-200)',
                300: 'var(--gray-300)',
            },
            primary: 'var(--primary)',
            secondary: 'var(--secondary)',
            tertiary: 'var(--tertiary)',
            white: 'var(--white)',
        },
        extend: {},
    },
    variants: {
        extend: {
            display: ['group-hover'],
        },
    },
    plugins: [
        plugin(
            function ({ matchUtilities, addUtilities, theme, variants }) {
                const values = theme('lineClamp');
                matchUtilities(
                    {
                        'line-clamp': (value) => ({
                            overflow: 'hidden',
                            display: '-webkit-box',
                            '-webkit-box-orient': 'vertical',
                            '-webkit-line-clamp': `${value}`,
                        }),
                    },
                    { values }
                );
                addUtilities(
                    [
                        {
                            '.line-clamp-none': {
                                '-webkit-line-clamp': 'unset',
                            },
                        },
                    ],
                    variants('lineClamp')
                );
            },
            {
                theme: {
                    lineClamp: {
                        1: '1',
                        2: '2',
                        3: '3',
                        4: '4',
                        5: '5',
                        6: '6',
                    },
                },
                variants: {
                    lineClamp: ['responsive'],
                },
            }
        ),
    ],
};
