import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <footer
            className="grid grid-rows-2 w-full h-1/6 p-5 justify-center items-center bg-gray-600 text-white">
            <div className="flex flex-row gap-4 justify-center">
                <a href="https://github.com/lanasavic"><FontAwesomeIcon icon={faGithub} size="2x" className="hover:scale-110"/></a>
                <a href="https://www.linkedin.com/in/lsavic510/"><FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:scale-110"/></a>
            </div>
            <div>
                <p className="text-sm text-zinc-300">Made with <a href="https://nextjs.org/" className="text-blue-100 hover:text-blue-200">NextJS</a> and <a
                    href="https://tailwindcss.com/" className="text-blue-100 hover:text-blue-200">Tailwind</a> | 2024</p>
            </div>
        </footer>
    )
}
