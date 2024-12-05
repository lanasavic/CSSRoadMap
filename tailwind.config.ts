import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";

const rotateXY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-45': {
      transform: 'rotateX(45deg)',
    },
    '.rotate-x-90': {
      transform: 'rotateX(90deg)',
    },
    '.-rotate-x-90': {
      transform: 'rotateX(-90deg)',
    },
    '.rotate-y-90': {
      transform: 'rotateY(90deg)',
    },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.-rotate-y-180': {
      transform: 'rotateY(-180deg)',
    },
    '.translate-z-32': {
      transform: 'translateZ(32px)',
    },
    '.translate-z-90': {
      transform: 'translateZ(90px)',
    }
  })
})

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'black50': 'hsl(0deg 0% 50%)',
        'black70': 'hsl(0deg 0% 0% / 80%)',
        'backgroundPink': 'rgb(117 55 122 / 40%)',
        'backgroundGreen': 'rgb(27 85 53 / 40%)',
        yellow: colors.yellow,
      },
      backgroundImage: {
        'wallpaper': "url('https://cdn.wallpapersafari.com/26/89/2t05m8.jpg')",
        'wallpaperNeko': "url('https://roopaish.github.io/CSS-RoadMap/CSS%20Only%20Tooltips/neko.jpg')",
        'wallpaperNyan': "url('https://roopaish.github.io/CSS-RoadMap/CSS%20Only%20Tooltips/nyan.jpg')",
        'gifNyan': "url('https://roopaish.github.io/CSS-RoadMap/CSS%20Only%20Tooltips/nyan.gif')",
        'wallpaperBaka': "url('https://roopaish.github.io/CSS-RoadMap/CSS%20Only%20Tooltips/baka.jpg')",
        'gifBaka': "url('https://roopaish.github.io/CSS-RoadMap/CSS%20Only%20Tooltips/baka.gif')",
        'loadingGradient': 'linear-gradient(90deg, transparent, #cccc82, transparent)',
        'animeIcon': 'url(https://i1.wp.com/i.pinimg.com/736x/97/1b/1c/971b1cd69404cc28d73b84b2f884df9c.jpg)',
        'godotOverlay': "linear-gradient(rgba(0,0,0,30%), rgba(0,0,0,90%)), url(https://raw.githubusercontent.com/Roopaish/CSS-RoadMap/refs/heads/master/Godot%20Landing%20Page%20-%20Redesign/img/background2.jpg)",
      },
      boxShadow: {
        'boxShadow': '0 0 16px black',
        'boxShadowVideo': '0 0 12px #581c87',
        'doubleShadow': '1px 1px 7px 4px, inset 1px 1px 7px 4px',
      },
      width: {
        'formWidth': 'min(90%, 25rem)',
      },
      borderWidth: {
        'tick': '0 3px 3px 0',
      },
      gridTemplateColumns: {
        'grid2': 'repeat(auto-fit, minmax(25rem, max-content))',
        'gridWrap': 'repeat(auto-fit, minmax(200px, max-content))',
        'gridWrap2': 'repeat(auto-fit, minmax(300px, max-content))',
        'gridWrap3': 'repeat(auto-fit, minmax(320px, max-content))',
        'gridWrap4': 'repeat(auto-fit, minmax(270px, max-content))',
        'grid3': 'repeat(3, 1fr)',
        'gridRow2': 'repeat(2, minmax(0, auto))',
      },
      animation: {
        counter: 'counter 10s linear infinite',
        grow: 'grow 10s linear infinite',
        growFast: 'grow .5s linear',
        rotation: 'rotation 5s linear infinite',
        slideIn: 'slideIn .5s ease-in-out 1 .5s forwards',
        fontGrow: 'fontGrow .5s ease-in-out 1s forwards',
        shake: 'shake .5s ease-in-out 1 1.5s forwards',
        loading: 'loading 2s infinite',
        wave: 'wave 1s linear infinite',
        rotateBox: 'rotateBox 3s linear infinite',
        fillBox: 'fillBox 3s linear infinite',
        rotateRubiks: 'rotateRubiks 3s linear infinite',
        translateInnerCube: 'translateInnerCube 1.5s ease-in-out infinite',
        circleBorder: 'circleBorder 3s ease-in-out infinite alternate',
        rotateCircle: 'rotateCircle 2s linear infinite',
        typing: 'typing 4s steps(10) infinite', /*alterate*/
        rotate90: 'rotate90 1s ease-in-out',
        rotate1: 'rotate1 1s ease-in-out',
        rotate2: 'rotate2 1s ease-in-out',
        tickRotate: 'tickRotate .5s ease-in-out',
        screenshot: 'screenshot 1s ease-in-out forwards',
        textAppear: 'textAppear .5s ease-in-out forwards',
        toBlack: 'toBlack 1s ease forwards',
        upDown: 'upDown 2s linear infinite'
      },
      keyframes: {
        grow: {
          '0%': {width: '0%'},
          '100%': {width: '100%'},
        },
        rotation: {
          '0%': {rotate: '0deg'},
          '100%': {rotate: '360deg'},
        },
        slideIn: {
          '0%': {transform: 'translateY(-100%)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'},
        },
        fontGrow: {
          '100%': {fontSize: '18px'},
        },
        shake: {
          '0%': {transform: 'translateX(50%)', opacity: '0'},
          '50%': {transform: 'translateX(-3%)'},
          '100%': {transform: 'translateX(0)', opacity: '1'},
        },
        loading: {
          '100%': {transform: 'translateX(100%)'},
        },
        wave: {
          '0%, 25%': {transform: 'scaleY(0.5)'},
          '50%': {transform: 'scale(1)'},
          '75%, 100%': {transform: 'scaleY(0.5)'},
        },
        rotateBox: {
          '0%': {transform: 'rotate(0deg)'},
          '25%, 50%': {transform: 'rotate(180deg)'},
          '75%, 100%': {transform: 'rotate(360deg)'},
        },
        fillBox: {
          '0%, 25%': {height: '0'},
          '50%, 75%': {height: '100%'},
          '100%': {height: '0'},
        },
        rotateRubiks: {
          '0%, 50%': {transform: 'rotateY(0deg)'},
          '15%': {transform: 'rotateY(180deg)'},
        },
        translateInnerCube: {
          '50%': {transform: 'translate(0)'},
        },
        circleBorder: {
          /*'0%': {borderStyle: 'solid'},
          '50%': {borderStyle: 'dotted'},
          '100%': {borderStyle: 'dashed', transform: 'rotate(360deg)'},*/
        },
        rotateCircle: {
          '100%': {transform: 'rotate(360deg)'},
        },
        typing: {
          '0%, 100%': {width: '0', color: 'red'},
          '46%, 58%': {width: '100%'},
          '0%, 46%, 50%, 54%, 58%, 100%': {borderColor: 'white'},
          '48%, 52%, 56%': {borderColor: 'transparent'},
          '15%, 85%': {color: 'blue'},
          '35%, 75%': {color: 'purple'},
          '50%': {color: 'yellow'},
        },
        rotate90: {
          '100%': {transform: 'translateZ(-25px) rotateX(-90deg)'}
        },
        rotate1:{
          '100%': {transform: 'rotateY(0deg) translateZ(25px)'}
        },
        rotate2:{
          '100%': {transform: 'rotateX(90deg) translateZ(25px)'}
        },
        tickRotate: {
          '0%': {transform: 'rotate(0deg) scale(0)'},
          '100%': {transform: 'rotate(395deg) scale(1)'},
        },
        screenshot: {
          '0%': {height: '320px'},
          '100%': {height: '180px', backdropBlur: '100%'},
        },
        textAppear: {
          '0%, 50%': {opacity: '0'},
          '100%': {opacity: '1'}
        },
        toBlack: {
          '0%': {backgroundColor: 'transparent'},
          '100%': {backgroundColor: 'black'},
        },
        upDown: {
          '0%, 100%': {transform: 'translateY(-1rem)'},
          '50%': {transform: 'translateY(.5rem)'},
        }
      }
    },
  },
  plugins: [
    plugin(function ({matchUtilities, theme}) {
      matchUtilities(
          {
            'animate-delay': (value) => ({
              animationDelay: value,
            }),
            'animate-duration': (value) => ({
              animationDuration: value,
            })
          },
          { values: theme('transitionDelay') }
      )
    }), rotateXY],
};

export default config;
