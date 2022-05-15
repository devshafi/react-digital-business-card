import cardPhoto from '../images/card-photo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

export default function Profile() {
    return (
        <header className='card-header'>
            <img src={cardPhoto} alt="Shafi" className='card-img' />
            <h3>Fozle Rabbi Shafi</h3>
            <h5>Fullstack Developer</h5>
            <p>www.example.com</p>
            <div className='contact-btn-container'>
                <a href='frshafi49@gmai.com' className='btn btn-email' target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={solid('envelope')} />
                    <p>Email</p>
                </a>
                <a type='button' href='https://www.linkedin.com/in/fozle-rabbi-shafi-07841511a/' className='btn btn-linkedin' target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={brands('linkedin')} />
                    <p>LinkedIn</p>
                </a>

            </div>
        </header>
    )
}