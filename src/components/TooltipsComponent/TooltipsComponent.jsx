import '@/components/main.css';
import '@fortawesome/fontawesome-svg-core/styles.css'

export const TooltipsComponent = () => {
    return (
        <div className="w-screen h-screen content-center bg-black max-[700px]:w-full max-[700px]:h-full">
            <div className="grid grid-cols-gridWrap gap-32 my-40 lg:gap-10 lg:my-0 w-3/4 mx-auto justify-center">
                <div className="relative w-52 h-52 rounded-xl bg-cover bg-center cursor-pointer bg-wallpaperNeko
before:content-[attr(data-attribute)] before:absolute before:right-1/2 before:translate-x-2/4 before:bottom-full before:mb-[25px] before:w-[200px] before:min-h-[70px] before:bg-yellow-300 before:p-[10px] before:rounded-[10px] before:text-blue-600 before:text-center before:content-center before:text-xl before:opacity-0 before:duration-[.3s] before:transition-opacity before:hover:block before:hover:opacity-100
after:content-[''] after:absolute after:bottom-full after:mb-[5px] after:right-1/2 after:translate-x-2/4 after:border-[10px] after:border-solid after:border-[yellow_transparent_transparent_transparent] after:opacity-0 after:duration-[.3s] after:transition-opacity after:hover:block after:hover:opacity-100"
                     data-attribute="Ohayo Senpai! Zzz.."></div>
                <div className="rainbow relative w-52 h-52 rounded-xl bg-cover bg-center cursor-pointer bg-wallpaperNyan hover:bg-gifNyan
before:content-[attr(data-attribute)] before:absolute before:right-1/2 before:translate-x-2/4 before:bottom-full before:mb-[25px] before:w-[200px] before:min-h-[70px] before:p-[10px] before:rounded-[10px] before:text-white before:text-center before:content-center before:text-xl before:opacity-0 before:duration-[.3s] before:transition-opacity before:hover:block before:hover:opacity-100
after:content-[''] after:absolute after:bottom-full after:mb-[5px] after:right-1/2 after:translate-x-2/4 after:border-[10px] after:border-solid after:border-[green_transparent_transparent_transparent] after:opacity-0 after:duration-[.3s] after:transition-opacity after:hover:block after:hover:opacity-100"
                     data-attribute="Nyan Nyan Nyan..."></div>
                <div className="stripes relative w-52 h-52 rounded-xl bg-cover bg-center cursor-pointer bg-wallpaperBaka hover:bg-gifBaka
before:content-[attr(data-attribute)] before:absolute before:right-1/2 before:translate-x-2/4 before:bottom-full before:mb-[25px] before:w-[200px] before:min-h-[70px] before:p-[10px] before:rounded-[10px] before:text-red-600 before:text-center before:content-center before:text-xl before:opacity-0 before:duration-[.3s] before:transition-opacity before:hover:block before:hover:opacity-100
after:content-[''] after:absolute after:bottom-full after:mb-[5px] after:right-1/2 after:translate-x-2/4 after:border-[10px] after:border-solid after:border-[yellow_transparent_transparent_transparent] after:opacity-0 after:duration-[.3s] after:transition-opacity after:hover:block after:hover:opacity-100"
                     data-attribute="Senpai no baka!"></div>
            </div>
        </div>
    )
}
