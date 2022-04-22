import React from 'react'
import {FiTwitter, FiInstagram} from 'react-icons/fi'
import {GrFacebook} from 'react-icons/gr'

const Footer = () => {
  return (
    <div>
        <footer className="footer colorNavFooter">
            <div className=""> 
                <div>
                    <a target="_blank" rel="noreferrer" className="colorLink" href="https://www.google.com/maps/place/Av.+Cabildo+3031,+C1429AAB+CABA/@-34.5540558,-58.4658628,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb6827b57959b:0xc15538d60589ff7f!8m2!3d-34.5540558!4d-58.4636741">
                    Av Cabildo 3031 - CABA</a> 
                </div>  
                <div>
                    <a target="_blank" rel="noreferrer" className="colorLink" href="https://wa.me/5491154568569">
                    +54.9.11.5456.8569</a>
                </div>
                <div>
                    <a target="_blank" rel="noreferrer" className="colorLink" href="mailto:adoptame@gmail.com">
                    pizza&co@gmail.com</a>
                </div>
                
            </div>
            <ul >
                <li className="social"><a target="_blank" rel="noreferrer" className="socialLink" href="https://www.facebook.com/adoptame.org"><GrFacebook/> </a> </li>
                <li className="social"><a target="_blank" rel="noreferrer" className="socialLink" href="https://www.twitter.com/adoptame.org"><FiTwitter/> </a> </li>
                <li className="social"><a target="_blank" rel="noreferrer" className="socialLink" href="https://www.instagram.com/adoptame.org"><FiInstagram/> </a> </li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer