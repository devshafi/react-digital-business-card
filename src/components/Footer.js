import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className='social-container'>
                    <a href='https://twitter.com/frshafi' target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={brands('twitter-square')} className="social-icon" />
                    </a>
                    <a href='https://www.facebook.com/frshafi' target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={brands('facebook-square')} className="social-icon" />
                    </a>
                    <a href='https://www.instagram.com/frshafi49/' target="_blank"
                        rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={brands('instagram-square')} className="social-icon" />
                    </a>
                    <a href='https://github.com/devshafi' target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={brands('github-square')} className="social-icon" />
                    </a>
                </div>
            </div>
        </footer >
    )
}