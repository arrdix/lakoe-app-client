/** @type {import('tailwindcss').Config} */
export const darkMode = ['class']
export const content = [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
]
export const prefix = ''
export const theme = {
    extend: {
        zIndex: {
            60: '60',
            70: '70',
            80: '80',
            90: '90',
            100: '100',
        },
        spacing: {
            '81.5%': '81.5%',
        },
        colors: {
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
                DEFAULT: 'hsl(var(--primary))',
                foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
                DEFAULT: 'hsl(var(--secondary))',
                foreground: 'hsl(var(--secondary-foreground))',
            },
            destructive: {
                DEFAULT: 'hsl(var(--destructive))',
                foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: {
                DEFAULT: 'hsl(var(--muted))',
                foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
                DEFAULT: 'hsl(var(--accent))',
                foreground: 'hsl(var(--accent-foreground))',
            },
            popover: {
                DEFAULT: 'hsl(var(--popover))',
                foreground: 'hsl(var(--popover-foreground))',
            },
            card: {
                DEFAULT: 'hsl(var(--card))',
                foreground: 'hsl(var(--card-foreground))',
            },
            transparent: 'transparent',
            current: 'currentColor',
            black: '#2e2e2e',
            gray: '#909090',
            lightergray: '#F8F8F8',
            lightgray: '#E3E3E3',
            cyan: '#0086B4',
            lightCyan: '#0891b2',
            error: '#910000',
            dev: '#9e0000',
            pending: '#D8D9DA',
            proccess: '#FFC700',
            success: '#9BEC00',
            rejected: '#FF0000',
        },
        borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
        },
        keyframes: {
            'accordion-down': {
                from: { height: '0' },
                to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
                from: { height: 'var(--radix-accordion-content-height)' },
                to: { height: '0' },
            },
        },
        animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            'spin-fast': 'spin 0.75s linear infinite',
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
    },
}

// eslint-disable-next-line no-undef
export const plugins = [require('tailwind-scrollbar-hide'), require('tailwindcss-animate')]
