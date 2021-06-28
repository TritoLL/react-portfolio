import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const PaddedLink = styled.a`
    padding: 0px 5px;
`;

const IconLinks = ({ iconSize = 50 }) => (
    <div className="icon-links">
        <PaddedLink href="https://github.com/TritoLL">
            <FaGithub size={iconSize} />
        </PaddedLink>

        <PaddedLink href="https://www.linkedin.com/in/afriesen95/">
            <FaLinkedin size={iconSize} />
        </PaddedLink>
    </div>
);

export default IconLinks;
