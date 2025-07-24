import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				'orbitron': ['Orbitron', 'monospace'],
				'space': ['Space Grotesk', 'sans-serif'],
				'mono': ['JetBrains Mono', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)'
			},
			boxShadow: {
				'glow-primary': 'var(--glow-primary)',
				'glow-accent': 'var(--glow-accent)',
				'shadow-primary': 'var(--shadow-primary)',
				'shadow-accent': 'var(--shadow-accent)',
				'shadow-card': 'var(--shadow-card)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: 'var(--glow-primary)' },
					'50%': { boxShadow: 'var(--glow-accent)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'typewriter': {
					'0%': { width: '0ch' },
					'100%': { width: '100%' }
				},
				'blink': {
					'0%, 50%': { borderColor: 'transparent' },
					'51%, 100%': { borderColor: 'hsl(var(--primary))' }
				},
				'grid-in': {
					'0%': { 
						transform: 'scale(0.8) rotateY(40deg)',
						opacity: '0',
						filter: 'blur(4px)'
					},
					'100%': { 
						transform: 'scale(1) rotateY(0deg)',
						opacity: '1',
						filter: 'blur(0px)'
					}
				},
				'matrix-rain': {
					'0%': { transform: 'translateY(-100vh)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				},
				'rotate-3d': {
					'0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
					'25%': { transform: 'rotateX(15deg) rotateY(15deg)' },
					'50%': { transform: 'rotateX(0deg) rotateY(30deg)' },
					'75%': { transform: 'rotateX(-15deg) rotateY(15deg)' },
					'100%': { transform: 'rotateX(0deg) rotateY(0deg)' }
				},
				'data-flow': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateX(100%)', opacity: '0' }
				},
				'hologram': {
					'0%, 100%': { 
						transform: 'rotateY(0deg)',
						boxShadow: '0 0 20px hsl(var(--primary) / 0.3)'
					},
					'50%': { 
						transform: 'rotateY(5deg)',
						boxShadow: '0 0 40px hsl(var(--accent) / 0.6)'
					}
				},
				'grid-pulse': {
					'0%, 100%': { opacity: '0.1' },
					'50%': { opacity: '0.3' }
				},
				'float-stable': {
					'0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
					'33%': { transform: 'translateY(-15px) translateX(10px)' },
					'66%': { transform: 'translateY(10px) translateX(-5px)' }
				},
				'spin-reverse': {
					'0%': { transform: 'rotate(360deg)' },
					'100%': { transform: 'rotate(0deg)' }
				},
				'orbit': {
					'0%': { transform: 'rotate(0deg) translateX(40px) rotate(0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(40px) rotate(-360deg)' }
				},
				'orbit-reverse': {
					'0%': { transform: 'rotate(360deg) translateX(30px) rotate(-360deg)' },
					'100%': { transform: 'rotate(0deg) translateX(30px) rotate(0deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'slide-up': 'slide-up 0.8s ease-out',
				'fade-in': 'fade-in 1s ease-out',
				'typewriter': 'typewriter 4s steps(30) 1s both',
				'blink': 'blink 1s step-end infinite',
				'grid-in': 'grid-in 0.6s ease-out forwards',
				'grid-pulse': 'grid-pulse 2s ease-in-out infinite',
				'matrix-rain': 'matrix-rain 3s linear infinite',
				'rotate-3d': 'rotate-3d 20s ease-in-out infinite',
				'data-flow': 'data-flow 2s ease-in-out infinite',
				'float-stable': 'float-stable 8s ease-in-out infinite',
				'spin-slow': 'spin 8s linear infinite',
				'spin-reverse': 'spin-reverse 6s linear infinite',
				'orbit': 'orbit 4s linear infinite',
				'orbit-reverse': 'orbit-reverse 3s linear infinite',
				'hologram': 'hologram 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
