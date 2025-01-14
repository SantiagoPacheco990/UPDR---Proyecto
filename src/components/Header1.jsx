import logoInstagram from "../imagenes/logo insta.png";
import logoFace from "../imagenes/logo-Face.png"
import logoYoutube from '../imagenes/logo-youtube.png'
import logoTikTok from '../imagenes/logo-tiktok.png'
import logoX from '../imagenes/logo-X.png'
import logoSpotify from "../imagenes/logo spotify.png"

const Header1 = () =>{
    return(
        <div>
            <header className="header1">
                <div className="container_redes">
                    <a href="https://www.instagram.com/UnpocoderuidooK/"><img src={logoInstagram} className="redes instagram"/></a>
                    <a href="https://www.facebook.com/profile.php?id=61554645582986"><img src={logoFace} className="redes facebook"/></a>
                    <a href="https://www.youtube.com/@PinkySD"><img src={logoYoutube} className="redes youtube"/></a>
                    <a href="https://www.tiktok.com/@Unpocoderuidook"><img src={logoTikTok} className="redes tiktok"/></a>
                    <a href="https://x.com/UnPocoDeRuido"><img src={logoX} className="redes x" /></a>
                    <a href="https://open.spotify.com/intl-es/artist/2Mt2vBBEckrvXtg0JldwZ0"><img src={logoSpotify} className="redes spotify"/></a>
                </div>
            </header>
        </div>
    )
}

export default Header1;