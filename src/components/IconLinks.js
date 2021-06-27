import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const PaddedLink = styled.a`
    padding: 0px 5px;
`;

const IconLinks = () => (
    <div>
        <PaddedLink href="https://www.linkedin.com/in/afriesen95/">
            <FaLinkedin size={50} />
        </PaddedLink>

        <PaddedLink href="https://github.com/tritoLL">
            <FaGithub size={50} />
        </PaddedLink>
    </div>
);

export default IconLinks;
