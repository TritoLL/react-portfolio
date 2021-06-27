import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer>
                <a href="https://www.linkedin.com/in/afriesen95/">
                    <FaLinkedin size={50} />
                </a>

                <a href="https://github.com/tritoLL">
                    <FaGithub size={50} />
                </a>
            </footer>
        </>
    );
};

export default Footer;
