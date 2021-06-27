import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Oops = styled.h1`
    font-size: 10em;
`;

const OopsParagraph = styled.p`
    padding: 10px;
    font-size: 5em;
    text-align: center;
`;

const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
`;

const PageNotFound = () => {
    return (
        <CenteredDiv>
            <div>
                <Oops>Oops!</Oops>
                <OopsParagraph>
                    There's nothing here.<br></br>
                    <Link to="/">Go home?</Link>
                </OopsParagraph>
            </div>
        </CenteredDiv>
    );
};

export default PageNotFound;
