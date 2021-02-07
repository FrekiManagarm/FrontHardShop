const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        'src/**/*.js',
        'src/**/*.jsx',
        'src/**/*.ts',
        'src/**/*.tsx',
        'public/**/*.html',
    ],
    theme: {
        spacing: {
            px: '1px',
            0: '0',
            0.5: '0.125rem',
            1: '0.25rem',
            1.5: '0.375rem',
            2: '0.5rem',
            2.5: '0.625rem',
            3: '0.75rem',
            3.5: '0.875rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
            11: '2.75rem',
            12: '3rem',
            14: '3.5rem',
            16: '4rem',
            20: '5rem',
            24: '6rem',
            28: '7rem',
            32: '8rem',
            36: '9rem',
            40: '10rem',
            44: '11rem',
            48: '12rem',
            52: '13rem',
            56: '14rem',
            60: '15rem',
            64: '16rem',
            72: '18rem',
            80: '20rem',
            96: '24rem',
        },
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        gray: {
            100: '#f7fafc',
            300: '#',
            500: '#',
            700: '#',
            900: '#1a202c',
        },
        fontFamily: {
            'sans': ['Montserrat', 'sans-serif']
        },
        sreens: {
            'sm': {'min': '480px', 'max': '767px'},
            'md': { 'min': '768px', 'max': '1023px'},
            'lg': {'min': '1024px', 'max': '1279px'},
            'xl': {'min': '1280px', 'max': '1535px'},
            '2xl': { 'min': ' 1536px' },
            'portrait': {'raw': '(orientation: portrait)'},
        },
        colors: {
            gray: colors.coolGray,
            blue: colors.lightBlue,
            red: colors.rose,
            pink: colors.fuchsia
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        opacity: {
            '0': '0',
            '20': '0.2',
            '40': '0.4',
            '60': '0.6',
            '80': '0.8',
            '100': '1',
        },
        extend: {
            screens: {
                '3xl': '1600px',
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                'none': '0',
                'sm': '.125rem',
                DEFAULT: '.25rem',
                'lg': '.5rem',
                'full': '1440px',
            },
        },
    },
    variants: {
        extend: {}
    },
    plugins: [],
};