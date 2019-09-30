import React from "react";
import "../css/footer.css";
import exia_logo from "../img/logo_carre_rouge_tp_white_optimized.png";
import Networks from "./networks";
import Pages from "./pages";

export default function footer() {
    return (
        <footer>
            <div className="top">
                <div className="footer-menu">
                    <h3>Adresse</h3>
                    <p>
                        Boulevard de l'université <br />
                        44600 Saint-Nazaire, France
                    </p>
                    <a href="https://www.google.com/maps/place/Exia.cesi/@47.2526646,-2.2585964,18.75z/data=!4m13!1m7!3m6!1s0x480568940c8bdc39:0xd7d9fb788944a2f9!2sBoulevard+de+l'Universit%C3%A9,+44600+Saint-Nazaire!3b1!8m2!3d47.253238!4d-2.264146!3m4!1s0x48056893813bcac7:0xa1e85733e72751a6!8m2!3d47.2525954!4d-2.2579265">
                        Direction
                    </a>
                </div>
                <div className="footer-menu">
                    <h3>Reservation</h3>
                    <p>
                        ??????????????????? <br />
                        reservation@viacesi.fr
                    </p>
                </div>
                <div className="footer-menu">
                    <h3>Navigation</h3>
                    <Pages />
                </div>
                <div className="footer-menu">
                    <h3>Tombola</h3>
                    <input type="text" placeholder="Votre nom" />
                    <button className='filled'>Participer</button>
                    <p>Les lots seront remis à la fin de la conférence</p>
                </div>
            </div>
            <div className="bottom">
                <img
                    src={exia_logo}
                    alt="logo exia conférence"
                    className="footer-logo"
                />
                <div className="footer-networks">
                    <Networks size="1x" />
                </div>
            </div>
        </footer>
    );
}
