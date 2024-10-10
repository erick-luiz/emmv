import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {


   let iconSize = 30;

    return (
        <footer>
            <div className="footer-content">
                <div className="contact-info">
                    <div className="column">
                        <strong>Endereço:</strong>
                        <p>R. Carlos Gomes, 583 - Sala 15 - Centro, Rio Grande - RS, 96200-460</p>
                    </div>
                    <div className="column">
                        <strong>Email:</strong>
                        <p>escolademusicamarcelovaz@outlook.com</p>
                    </div>
                    <div className="column">
                        <strong>Telefone:</strong>
                        <a href="https://wa.me/53981268900" target="_blank" rel="noopener noreferrer">
                        <p>(53) 98126-8900</p>
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                        <div className="footer-socials">
                          <a href="https://www.instagram.com/emmv_escolademusicamarcelovaz/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={iconSize}/>
                          </a>
                          <a href="https://www.facebook.com/escolademusicamarcelovaz/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={iconSize}/>
                          </a>
                          <a href="https://wa.me/53981268900"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaWhatsapp size={iconSize}/>
                          </a>
                          <a href="https://www.youtube.com/@marcelomusicapiano"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaYoutube size={iconSize} />
                          </a>
                        </div>
                      </div>
            </div>
            <div className="footer-bottom">
                <p>
                    © 2024 EMMV – Elaborado por <a href="https://github.com/erick-luiz" target="_blank" rel="noopener noreferrer">Erick Lopes</a>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
